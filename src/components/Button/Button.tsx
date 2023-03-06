import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'danger' | 'warning';
};

export const Button = (props: ButtonProps): ReactElement => {
  const { className, variant = 'primary', type = 'button', ...rest } = props;

  return (
    <button
      className={clsx(
        'rounded-md h-10 text-center text-sm leading-5',
        {
          'bg-sky-500 hover:bg-sky-700 text-white': variant === 'primary',
          'bg-yellow-500 hover:bg-yellow-700 text-white': variant === 'warning',
          'bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white':
            variant === 'danger'
        },
        'disabled:opacity-50 disabled:border-transparent disabled:bg-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed',
        className
      )}
      type={type}
      {...rest}
    />
  );
};
