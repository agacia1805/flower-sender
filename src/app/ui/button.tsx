import * as React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  name: string;
};

export default function Button({ name, onClick, children }: ButtonProps) {
  return (
    <button
      type='button'
      name={name}
      onClick={onClick}
      className='rounded-lg border border-gray-300 px-8 py-2 text-2xl font-semibold text-gray-300 shadow-lg transition duration-100 ease-in-out hover:-translate-y-1 hover:opacity-75 active:translate-y-0 active:shadow-sm'
    >
      {children}
    </button>
  );
}
