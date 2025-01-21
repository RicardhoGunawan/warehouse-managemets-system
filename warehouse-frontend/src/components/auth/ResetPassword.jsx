import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import api from '../../services/api';

const schema = yup.object({
  password: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
}).required();

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await api.post('/auth/reset-password', {
        token,
        password: data.password
      });
      toast.success('Password has been reset successfully');
      navigate('/login');
    } catch (error) {
      console.error('Password reset failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Set new password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your new password below.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <Input
              label="New Password"
              type="password"
              {...register('password')}
              error={errors.password?.message}
              autoComplete="new-password"
            />

            <Input
              label="Confirm New Password"
              type="password"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
              autoComplete="new-password"
            />
          </div>

          <div>
            <Button
              type="submit"
              loading={isLoading}
              className="w-full"
            >
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;