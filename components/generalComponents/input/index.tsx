import React from 'react'
interface InputProps {
  label?: string;
  type?: string;
  id?: string;
  htmlFor?: string;
  onChange?: (e:any) => void
}

export const TextInput = ({label,type, id, htmlFor, onChange}:InputProps) => {
  return (
    <div className="flex flex-col relative w-full search__container ">
      <input
        type={type}
        className="bg-white textfield__input text-inputTxt font-normal text-medium w-full"
        id={id}
        onChange={onChange}
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
