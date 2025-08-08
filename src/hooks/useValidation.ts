import { useState, useEffect } from 'react';

export function useValidation<T>(values: T, validate: (values: T) => { [key in keyof T]?: string }) {
  const [errors, setErrors] = useState<{ [key in keyof T]?: string }>({});

  useEffect(() => {
    setErrors(validate(values));
  }, [values, validate]);

  return errors;
}