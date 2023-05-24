import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ITextInputProps {
  id: string;
  name?: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  hasError?: boolean;
  onChange: (text: string, name: string, e: React.ChangeEvent) => void;
}

const TextInput = (props: ITextInputProps) => {
  const {
    onChange,
    id,
    name,
    type = 'text',
    placeholder = '',
    label,
    helperText,
    errorText,
    hasError = false,
  } = props;
  return (
    <div>
      {label && (
        <label
          htmlFor={id || name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          type={type}
          name={id || name}
          id={id}
          className={twMerge(
            'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            hasError &&
              'ring-red-300 placeholder:text-red-300 focus:ring-red-500',
          )}
          placeholder={placeholder}
          aria-describedby="email-description"
          onChange={(e) => onChange(e.target.value, name || id, e)}
        />
      </div>
      {helperText && hasError && (
        <p
          className="mt-2 text-sm text-gray-500"
          id={`${name || id}-description`}
        >
          {helperText}
        </p>
      )}
      {hasError && (
        <p className="mt-2 text-sm text-red-600" id={`${name || id}-error`}>
          {errorText || 'Error'}
        </p>
      )}
    </div>
  );
};

export default TextInput;
