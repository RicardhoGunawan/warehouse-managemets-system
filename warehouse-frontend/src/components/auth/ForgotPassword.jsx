import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import api from '../../services/api';

const schema = yup.object({
  email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
}).required();

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await api.post('/auth/forgot-password', data);
      setIsSubmitted(true);
      toast.success('Password reset instructions have been sent to your email');
    } catch (error) {
      console.error('Password reset request failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Check your email
          </h2>
          <p className="text-gray-600 mb-8">
            We have sent password reset instructions to your email address.
          </p>
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Return to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <Input
              label="Email Address"
              type="email"
              {...register('email')}
              error={errors.email?.message}
              autoComplete="email"
            />
          </div>

          <div>
            <Button
              type="submit"
              loading={isLoading}
              className="w-full"
            >
              Send Reset Instructions
            </Button>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;