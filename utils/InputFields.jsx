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
  variant = 0, // Default input style
  options = [],
  multiple = false,
}) => {
  const variants = [
    {
      labelClassName: "block text-sm text-gray-700",
      inputClassName: "w-full border border-gray-300 rounded-lg px-4 py-2",
    },
    {
      labelClassName: "block text-sm mb-2 font-semibold",
      inputClassName: "w-full p-4 border-b text-base bg-gray-800",
    },
  ];
  const { labelClassName, inputClassName } = variants[variant];

  if (type === "select") {
    return (
      <div className="h-full">
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={inputClassName}
          required={required}
          multiple={multiple}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={inputClassName}
        required={required}
      />
    </div>
  );
};

export default InputField;
