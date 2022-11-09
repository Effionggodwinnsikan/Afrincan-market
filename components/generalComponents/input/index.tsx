import React from 'react'
interface InputProps {
  label?: string;
  type?: string;
  id?: string;
  htmlFor?: string;
}
export const TextInput = ({label,type, id, htmlFor}:InputProps) => {
  return (
    <div className="flex flex-col relative w-full search__container cursor-pointer ">
      <input
        type={type}
        className="bg-white textfield__input text-inputTxt font-normal text-medium w-full cursor-pointer"
        id={id}
      />
      <label
        htmlFor={htmlFor}
        className="text-medium font-normal textfield__label absolute text-placeholder"
      >
        {label}
      </label>
    </div>
  );
}
