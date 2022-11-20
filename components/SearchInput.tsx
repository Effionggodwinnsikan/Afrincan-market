import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchInput = () => {
  return (
    <div className="relative max-w[16.25rem]">
      <input
        type="text"
        style={{ paddingInline: "2.5rem 1rem" }}
        className="flex rounded-[1.125rem] text-sm font-medium relative bg-[#20212528] h-[2.5rem] max-w-full w-full outline-2 outline-primaryBtn"
      />
      <SearchOutlinedIcon
        className="absolute top-[50%] translate-y-[-50%]  text-[rgb(32, 33, 37)]"
        style={{
          insetInlineStart: "1rem",
        }}
      />
    </div>
  );
};

export default SearchInput;
