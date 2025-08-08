import React from 'react';
import { useForm } from 'react-hook-form';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';

interface ProfileFormInputs {
  username: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormInputs>();

  const onSubmit = async (data: ProfileFormInputs) => {
    // Simulate profile update API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Profile updated', data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input {...register('username', { required: true })} className="w-full p-2 border border-gray-300 rounded" />
          {errors.username && <span className="text-red-500">Username is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input {...register('email', { required: true })} className="w-full p-2 border border-gray-300 rounded" />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Update Profile</button>
      </form>
    </main>
  );
};

export default ProfilePage;