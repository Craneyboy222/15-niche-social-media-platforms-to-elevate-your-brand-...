import { useState } from 'react';

interface FormState<T> {
  values: T;
  errors: { [key in keyof T]?: string };
  touched: { [key in keyof T]?: boolean };
}

export function useForm<T>(initialValues: T) {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {}
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [name]: value },
      touched: { ...prevState.touched, [name]: true }
    }));
  };

  const handleSubmit = (callback: (values: T) => void) => (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(state.errors).length === 0) {
      callback(state.values);
    }
  };

  return { ...state, handleChange, handleSubmit };
}