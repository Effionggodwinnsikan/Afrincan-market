import React, { useState } from "react";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
import { Categoryprops, RestaurantsProps } from "../../../types";
// import { styled } from "@mui/material/styles";
import ModalContainer from "../../ModalContainer";

// const CalcButton = styled(Button)({
//   backgroundColor: "#fff !important",
//   padding: "0",
//   color: "#F6B01E !important",
//   borderRadius: "999px",
//   width: "1.5rem!important",
//   minWidth: "1.5rem!important",
//   height: "1.5rem",
//   cursor: "pointer",

//   "&:disabled": {
//     backgroundColor: "transparent!important",
//   },

//   // "&.disabled": {
//   //  backgroundColor: "transaprent",
//   // }
// });

interface FilterModalProps {
  open: boolean;
  onClose?: () => void;
  // onClick?: () => void;
  categories: Categoryprops[];
  // resturants: RestaurantsProps[];
  // sort:string[]
}

export const FilterModal: React.FC<FilterModalProps> = ({
  open,
  onClose,
  // resturants,
  // onClick,
  categories,
}) => {
  const sortItems = [
    "Recommended",
    "Delivery price",
    "Rating",
    "Delivery time",
    "Distance",
  ];
  const [filterItems, setFilterItems] = useState<string[]>([])
  const [sort, setSort] = useState<string>("")
  // console.log(filterItems)
  
  function handleFilterBtnn() {
    
  }
  return (
    <>
      <ModalContainer open={open} onClose={onClose}>
        <div className=" flex flex-col border-0 overflow-scroll rounded-xl  gap-6 w-full  z-10  bg-white  modalContent modal__content  md:rounded-2xl shadow-md product-modal">
          <div className="relative h-full flex flex-col gap-8 w-full  ">
            <div className="absolute  right-4 top-2 z-10">
              {/* <div className="flex justify-end items-center w-full z-10 bg-white "> */}
              <button
                className="flex items-center justify-center bg-[#20212514] p-1 rounded-[50%] font-bold text-[32px] border-none outline-none cursor-pointer"
                onClick={onClose}
              >
                <ClearIcon fontSize="inherit" />
              </button>
            </div>
            <header className="h-[4.5rem] flex justify-center items-center shadow-sm w-full">
              <h2 className="text-lg font-semibold ">Filter</h2>
            </header>
            <section className="flex flex-col gap-4 px-3 border-b pb-4">
              <h2 className="font-semibold text-lg">Filter</h2>
              <div className="flex flex-wrap gap-2 w-full">
                {categories.map((category, idx) => {
                  const { name } = category;
                  // console.log(name)

                  const [btnClicked, setBtnClicked] = useState(false);

                  function updateFilters(
                    e: React.ChangeEvent<HTMLInputElement>
                  ) {
                    setBtnClicked(!btnClicked);
                    // if (btnClicked)
                    //   setFilterItems([...filterItems, e.target.value]);

                    if (filterItems.includes(e.target.value)) {
                      //  const test = filterItems.filter(
                      //    (item) => item !== e.target.value
                      // );
                      // console.log(test)

                      setFilterItems(
                        filterItems.filter((item) => item !== e.target.value)
                      );
                    } else {
                      setFilterItems([...filterItems, e.target.value]);
                    }
                  }

                  return (
                    <div key={idx}>
                      <input
                        type="checkbox"
                        value={name}
                        className="hidden"
                        id={name}
                        onChange={updateFilters}
                        name="filter_and_sort_modal"
                      />
                      <label
                        htmlFor={name}
                        className={`flex items-center justify-center w-[max-content] text-[0.875rem] py-[0.375rem] px-[0.75rem] rounded-2xl text-white ${
                          btnClicked
                            ? "bg-primary"
                            : "bg-[#f6b11e]  bg-opacity-40"
                        } font-semibold cursor-pointer capitalize transition-[background-color] border-2 border-primary`}
                        // onClick={() => setBtnClicked(!btnClicked)}
                      >
                        {name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="flex flex-col gap-4 px-3 w-full pb-20">
              <h2 className="font-semibold text-lg">Sort</h2>
              <div className="flex flex-wrap gap-2 w-full ">
                {sortItems.map((sort, idx) => {
                  const [btnClicked, setBtnClicked] = useState(false);

                  function updateSort(e: React.ChangeEvent<HTMLInputElement>) {
                    setBtnClicked(!btnClicked);
                    setSort(e.target.value);
                  }

                  return (
                    <div key={idx}>
                      <input
                        type="radio"
                        value={sort}
                        className="hidden"
                        id={sort}
                        onChange={updateSort}
                        name="sort_modal"
                        checked={btnClicked}
                      />
                      <label
                        htmlFor={sort}
                        className={`h-[2rem] flex items-center justify-center w-full max-w-[min-content] text-[0.875rem] px-[0.75rem] rounded-2xl  ${
                          btnClicked
                            ? "text-primary border-primary "
                            : " border-[#2021251e]  text-[#202125a3]"
                        } font-semibold cursor-pointer capitalize border-solid  border-2 transition-[border] whitespace-nowrap`}
                      >
                        {sort}
                      </label>
                    </div>
                  );
                })}
              </div>
            </section>
            <div className="px-3 flex absolute bottom-0 z-100 w-full">
              {filterItems.length >= 1 ? (
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    width: "100%!important",
                    height: "3.2rem",
                  }}
                >
                  Apply
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    width: "100%!important",
                    height: "3.2rem",
                    backgroundColor: "#FDEFD2!important",
                    color: "#F6B01E",
                  }}
                  onClick={onClose}
                >
                  Close
                </Button>
              )}
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};
