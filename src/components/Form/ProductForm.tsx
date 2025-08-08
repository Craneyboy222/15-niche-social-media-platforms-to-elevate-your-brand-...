import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProductForm {
  productName: string;
  description: string;
  price: number;
  quantity: number;
}

const ProductFormSchema = z.object({
  productName: z.string().min(3, 'Product name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().positive('Price must be positive'),
  quantity: z.number().int().positive('Quantity must be a positive integer')
});

const ProductForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IProductForm>({
    resolver: zodResolver(ProductFormSchema)
  });

  const onSubmit: SubmitHandler<IProductForm> = async (data) => {
    try {
      console.log('Product submitted:', data);
      toast.success('Product added successfully!');
    } catch (error) {
      toast.error('Failed to add product. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=\