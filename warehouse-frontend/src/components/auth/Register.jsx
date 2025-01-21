import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import api from "../../services/api";

const schema = yup
  .object({
    name: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  })
  .required();

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await api.post("/auth/register", data);
      toast.success("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              sign in to your account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <Input
              label="Full Name"
              {...register("name")}
              error={errors.name?.message}
              autoComplete="name"
            />

            <Input
              label="Email Address"
              type="email"
              {...register("email")}
              error={errors.email?.message}
              autoComplete="email"
            />

            <Input
              label="Password"
              type="password"
              {...register("password")}
              error={errors.password?.message}
              autoComplete="new-password"
            />

            <Input
              label="Confirm Password"
              type="password"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
              autoComplete="new-password"
            />
          </div>

          <div>
            <Button type="submit" loading={isLoading} className="w-full">
              Create Account
            </Button>
          </div>

          <div className="text-sm text-center text-gray-600">
            By registering, you agree to our{" "}
            <Link
              to="/terms"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Privacy Policy
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
