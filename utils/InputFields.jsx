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
  checked,
  multiple = false,
  rows = 4, // Default rows for textarea
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
    {
      labelClassName: "block text-sm ",
      inputClassName: "accent-zinc-900 border border-white",
    },
    {
      labelClassName: "block text-sm font-medium text-gray-500",
      inputClassName:
        "w-full p-2 text-sm border-[1.5px] rounded-lg placeholder:text-[#1F4B43] border-[#1F4B43]",
    },
    {
      labelClassName: "block text-sm",
      inputClassName: "block w-full mt-1 p-2 text-sm border rounded-md",
    },
  ];
  const { labelClassName, inputClassName } = variants[variant];

  if (type === "select") {
    return (
      <div className="h-full relative">
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          style={
            variant !== 4
              ? {
                  backgroundColor: "#1f2937", // Tailwind bg-gray-800
                  borderBottom: "1px solid white", // Tailwind border-white
                  borderRadius: "0px", // Tailwind border-radius
                  color: "white", // Tailwind text-white
                  appearance: "none", // Tailwind appearance-none
                  padding: "1rem", // Tailwind padding
                  width: "100%", // Tailwind width
                  paddingRight: "2rem", // Adding extra padding for arrow icon
                }
              : {}
          }
          className={`${inputClassName} appearance-none`}
          required={required}
          multiple={multiple}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Arrow Icon */}
        <span
          style={{
            transform: "rotate(180deg) translateY(50%)",
            position: "absolute",
            top: "60%",
            right: "10px", // or whatever position you need
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-white`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 8.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L10 6.414 6.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    );
  }
  if (type === "checkbox") {
    return (
      <div className="flex gap-2 justify-between items-center mb-2">
        <label htmlFor={name} className="max-w-44 text-sm">
          {label}
        </label>
        <div className="relative z-[2] w-4 h-4 mb-[2px]">
          <input
            type={type}
            name={name}
            className="appearance-none border-2 cursor-pointer  border-gray-300 bg-transparent w-full h-full rounded"
            checked={checked}
            onChange={onChange}
          />
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height=""
              viewBox="0 0 24 24"
              fill="white"
              className="absolute top-[40%] -z-[1] left-[75%] -translate-x-1/2 -translate-y-1/2 "
            >
              <path
                fillRule="evenodd"
                d="M 22.59375 3.5 L 8.0625 18.1875 L 1.40625 11.5625 L 0 13 L 8.0625 21 L 24 4.9375 Z"
              ></path>
            </svg>
          )}
        </div>
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div>
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`${inputClassName} resize-none`} // Prevent resize for consistent UI
          required={required}
        ></textarea>
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
