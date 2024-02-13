import * as React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  name: string;
  type?: string;
};

export default function Button({
  name,
  onClick,
  children,
  type,
  className,
}: ButtonProps) {
  return (
    <button
      type={type || 'button'}
      name={name}
      onClick={onClick}
      className={`${className} self-start rounded-lg border border-gray-300 px-8 py-2 font-semibold text-gray-300 shadow-lg transition duration-100 ease-in-out hover:opacity-75 active:translate-y-0 active:shadow-sm`}
    >
      {children}
    </button>
  );
}
