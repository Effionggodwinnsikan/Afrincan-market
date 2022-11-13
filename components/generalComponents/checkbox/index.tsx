import React, { ReactNode, useState } from "react";

interface CheckboxProps {
  htmlFor?: string;
  id?: string;
  children?: ReactNode;
  name?: string;
}

export const CheckBox = ({ htmlFor, id, children, name }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex gap-4">
      <label htmlFor={name} className="flex gap-4">
        <div>
          <input
            type="checkbox"
            id={id}
            className="checkbox__input w-[13px] h-[13px] z[-1]"
            name={name}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-[0.125rem] cursor-pointer border-2 border-primaryBtn bg-white text-transparent transition-[background] checkbox__overlay ${
              isChecked && "checkbox--active" 
            }}`}
            aria-hidden="true"
          ></div>
        </div>

        {children}
      </label>
    </div>
  );
};
-2