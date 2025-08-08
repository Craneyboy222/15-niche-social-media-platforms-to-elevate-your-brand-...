import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    // Simulate login API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input {...register('email', { required: true })} className="w-full p-2 border border-gray-300 rounded" />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" {...register('password', { required: true })} className="w-full p-2 border border-gray-300 rounded" />
          {errors.password && <span className="text-red-500">Password is required</span>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </main>
  );
};

export default LoginPage;