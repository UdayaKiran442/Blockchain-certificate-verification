import React from "react";

interface props {
  type: string;
  placeholder: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField = ({ onChange, type, placeholder, ...props }: props) => {
  return (
    <input
      className="w-[30%] placeholder:p-2 placeholder:text-slate-400 placeholder:font-light rounded-md  border-primaryBlue border-2"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
};

export default InputField;
