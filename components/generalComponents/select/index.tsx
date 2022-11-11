import React from 'react'
import { OptionsProps } from '../../../types';




interface SelectProps {
  name?: string;
  id?: string;
  label?: string;
  onChange?: (e) => void;
  dataTestID?: string;
  options: OptionsProps[];
    disabled?: boolean;
    width?: string;
}



export const Select = ({ name, id, onChange, dataTestID,label, options, disabled, width }: SelectProps) => {
    return (
      <div className={`flex flex-col relative ${width}`}>
        <label
          className={`select_label text-sm font-normal  absolute text-placeholder left-[1rem] top-[5px]`}
        >
          {label}
        </label>
        <select
          name={name}
          id={id}
          data-testid={dataTestID}
          onChange={onChange}
          defaultValue=""
          className={`select text-inputTxt font-normal text-medium w-full select hover:border-2 hover:border-primaryBtn  transition-[border]  focus:boder focus:border-primaryBtn `}
        >
          {disabled && <option value="" disabled></option>}
          {options.map((item, index) => {

            // options display name if option includes key-name && title if option has key title
            // value is abr if option includes key abr && name or title is id does not exist
            
            return (
              <option
                value={!item.abr ? item.name || item.title : item.abr}
                key={index}
                className={`text-inputTxt font-normal text-medium w-full`}
              >
                {item.name && item.name} {item.title && item.title}
              </option>
            );
          })}
        </select>
      </div>
    );
};
