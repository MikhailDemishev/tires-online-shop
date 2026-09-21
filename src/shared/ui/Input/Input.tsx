import { forwardRef, type InputHTMLAttributes } from 'react';

import s from './Input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', isError = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`${s.input} ${isError ? s.error : ''} ${className}`}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
