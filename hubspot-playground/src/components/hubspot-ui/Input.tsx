import React from 'react';
import './Input.css';

export interface InputProps {
  label?: string;
  name?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  value?: string | number;
  placeholder?: string;
  description?: string;
  error?: boolean;
  validationMessage?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  value,
  placeholder,
  description,
  error,
  validationMessage,
  onChange,
  disabled = false,
}) => {
  return (
    <div className={`hs-input-wrapper ${error ? 'hs-input--error' : ''}`}>
      {label && <label className="hs-input-label">{label}</label>}
      <input
        className="hs-input"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {validationMessage && <span className="hs-input-message">{validationMessage}</span>}
      {description && !validationMessage && <span className="hs-input-description">{description}</span>}
    </div>
  );
};
