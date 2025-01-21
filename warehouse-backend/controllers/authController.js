const bcrypt = require('bcryptjs');    
const jwt = require('jsonwebtoken');    
const User = require('../models/userModel'); // Perbaiki impor model    
const { JWT_SECRET } = process.env;    
    
// Register a new user    
exports.register = async (req, res) => {    
    const { username, password, role } = req.body;    
    
    try {    
        // Validasi input    
        if (!username || !password || !role) {    
            return res.status(400).json({ message: "All fields are required" });    
        }    
    
        // Cek apakah pengguna sudah ada    
        const existingUser = await User.findOne({ where: { username } }); // Perbaiki pencarian    
        if (existingUser) {    
            return res.status(400).json({ message: "User already exists" });    
        }    
    
        // Hash password    
        const hashedPassword = await bcrypt.hash(password, 10);    
    
        // Buat pengguna baru    
        const newUser = await User.create({  // Gunakan create untuk menyimpan pengguna baru  
            username,    
            password: hashedPassword,    
            role    
        });    
    
        return res.status(201).json({ message: "User registered successfully" });    
    } catch (error) {    
        console.error(error); // Log kesalahan untuk debugging    
        return res.status(500).json({ message: "Error registering user", error });    
    }    
};      
    
// Login user    
exports.login = async (req, res) => {    
  try {    
    const { username, password } = req.body;    
    
    // Find user by username    
    const user = await User.findOne({ where: { username } });    
    if (!user) {    
      return res.status(404).json({ message: 'User not found' });    
    }    
    
    // Compare passwords    
    const isPasswordValid = await bcrypt.compare(password, user.password);    
    if (!isPasswordValid) {    
      return res.status(401).json({ message: 'Invalid password' });    
    }    
    
    // Generate JWT token    
    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {    
      expiresIn: '1h',    
    });    
    
    res.json({ message: 'Login successful', token });    
  } catch (error) {    
    res.status(500).json({ message: 'Error logging in', error });    
  }    
};    
