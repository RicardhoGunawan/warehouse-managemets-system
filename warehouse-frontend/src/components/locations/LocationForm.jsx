import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const LocationForm = ({ onSubmit, initialData = {} }) => {
  const [form, setForm] = useState({ name: '', address: '', ...initialData });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="location-form">
      <Input
        type="text"
        name="name"
        placeholder="Location Name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />
      <Button type="submit">Save</Button>
    </form>
  );
};

export default LocationForm;
