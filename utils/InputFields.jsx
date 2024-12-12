import React from "react";

const InputField = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="w-full border border-gray-300 rounded-lg px-4 py-2"
        required={required}
      />
    </div>
  );
};

export default InputField;
