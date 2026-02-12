import React from 'react';
import './Input.css'; // Reusing some styles

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  name?: string;
  value?: string;
  options: SelectOption[];
  placeholder?: string;
  description?: string;
  error?: boolean;
  validationMessage?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  options,
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
      <select
        className="hs-input"
        name={name}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {validationMessage && <span className="hs-input-message">{validationMessage}</span>}
      {description && !validationMessage && <span className="hs-input-description">{description}</span>}
    </div>
  );
};
