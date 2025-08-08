import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IOrderForm {
  customerName: string;
  address: string;
  productID: number;
  quantity: number;
}

const OrderFormSchema = z.object({
  customerName: z.string().min(3, 'Customer name must be at least 3 characters'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  productID: z.number().positive('Product ID must be a positive number'),
  quantity: z.number().int().positive('Quantity must be a positive integer')
});

const OrderForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IOrderForm>({
    resolver: zodResolver(OrderFormSchema)
  });

  const onSubmit: SubmitHandler<IOrderForm> = async (data) => {
    try {
      console.log('Order submitted:', data);
      toast.success('Order placed successfully!');
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=\