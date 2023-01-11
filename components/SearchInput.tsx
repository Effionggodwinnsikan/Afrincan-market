import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


interface SearchProps{
  placeholder: string;
  store?: boolean;
}

const SearchInput = ({placeholder, store}:SearchProps) => {
  return (
    <div className="flex gap-4">
      <div
        className={
          store
            ? "relative w-full lg:max-w-[16.25rem]"
            : "relative w-full max-w-[16.25rem]"
        }
      >
        <input
          type="text"
          style={{ paddingInline: "2.5rem 1.2rem" }}
          className={
            store
              ? "flex rounded-lg text-sm font-medium relative bg-[#20212528] min-h-[3.125rem]  w-full outline-2 outline-primaryBtn"
              : "flex rounded-[1.125rem] text-sm font-medium relative bg-[#20212528] h-[2.5rem] max-w-full w-full outline-2 outline-primaryBtn"
          }
          placeholder={placeholder}
        />
        <SearchOutlinedIcon
          className="absolute top-[50%] translate-y-[-50%]  text-[rgb(32, 33, 37)]"
          style={{
            insetInlineStart: "0.8rem",
          }}
          fontSize="medium"
        />
      </div>
      
    </div>
  );
};

export default SearchInput;
