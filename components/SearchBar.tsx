import React, { useState, useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
import { allPlaces } from "../data/allPlaces";
import { SearchPlaceCard } from "./cards/SearchPlace";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import CancelIcon from "@mui/icons-material/Cancel";

const SearchBar = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]); // List of previously searched words
  const [openPrev, setOpenPrev] = useState(false); //Opens list of previously searched words
  const [search, setSearch] = useState("");
  const [openPlaces, setOpenPlaces] = useState(false);
  const [openClearIcon, setOpenClearIcon] = useState(false);
  const path = `/${"restaurants/restaurant" || "store/store"}`;

  const router = useRouter();
  const places = allPlaces.filter(
    (place) =>
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.desc.toLowerCase().includes(search.toLowerCase()) ||
      place.category.includes(search.toLowerCase()) ||
      place.type.includes(search.toLowerCase())
  );

  function closePrev() {
    setOpenPrev(false);
  }
  function closePlaces() {
    setOpenPlaces(false);
  }

  // console.log(openPrev)
  // Search

  function handleFocus() {
    if (searchHistory.length >= 1) {
      setOpenPrev(true);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (places.length >= 1) {
      setOpenPlaces(true);
      setOpenPrev(false);
      setOpenClearIcon(true);
    }
    if (value) setOpenClearIcon(true);
    if (!value) {
      setOpenPlaces(false);
      setOpenClearIcon(false);
    }
    if (!value && searchHistory.length >= 1) setOpenPrev(true);
    if (!value && searchHistory.length < 1) setOpenPrev(false);

    setSearch(value);
  }

  function handleClear() {
    setSearch(""); 
    setOpenClearIcon(false);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSearchHistory([...searchHistory, search]);

    setSearch("");
    localStorage.setItem(
      "recent-search-history",
      JSON.stringify(searchHistory)
    );
    setOpenPlaces(false);
    if (search) router.push(`/search/${search}`);
  }

  function handClearBtn() {
    setSearchHistory([]);
    setOpenPrev(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("recent-search-history");
    }
  }

  useEffect(() => {
    function getHistory() {
      if (typeof window !== "undefined") {
        const preSearch = localStorage.getItem("recent-search-history") || "";

         if (preSearch.length >= 1) {
        setSearchHistory(JSON.parse(preSearch));
         }
      }
      return;
    }
    getHistory();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="relative w-full max-w-[16.25rem]">
            <FormControl
              sx={{
                width: "100%",
                borderWidth: "2px",
              }}
              variant="outlined"
            >
              <OutlinedInput
                id="search"
                startAdornment={
                  <SearchOutlinedIcon
                    fontSize="medium"
                    sx={{
                      color: `${router.pathname === path ? "#fff" : ""}`,
                    }}
                  />
                }
                endAdornment={
                  openClearIcon && (
                    <CancelIcon onClick={handleClear} fontSize="small" sx={{
                      cursor:"pointer"
                    }} />
                  )
                }
                placeholder="Search...."
                sx={{
                  borderRadius: "0.375rem",
                  backgroundColor: ` ${
                    router.pathname === path
                      ? "rgba(242, 242, 242, 0.24)"
                      : "#DBDBDC"
                  } `,
                  color: `${router.pathname === path ? "#fff" : ""}`,
                  height: "3rem",
                  "& ::placeholder": {
                    color: `${router.pathname === path ? "#fff" : ""}`,
                  },
                }}
                autoComplete="off"
                value={search}
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </FormControl>
          </div>
          <div className="hidden md:flex">
            <Button type="submit">search</Button>
          </div>

          <div>
            {openPrev && (
              <div className="bg-white flex flex-col max-w-[500px] w-full rounded-lg border shadow absolute left-0 right-0 top-[4.25rem] m-auto z-10 py-3 max-h-[calc(95vh-70px)] overflow-y-auto transition">
                <div className="flex justify-between items-center p-4 border-b">
                  <h4 className="text-base font-semibold md:text-xl">
                    Recent searches
                  </h4>
                  <Button variant="text" onClick={handClearBtn}>
                    Clear
                  </Button>
                </div>
                <div className="flex flex-col">
                  {searchHistory.map((search, idx) => (
                    <Link
                      href={`/search/${search}`}
                      key={idx}
                      className="border-b p-4 text-sm md:text-base flex items-center gap-3 last:border-0"
                    >
                      <SearchOutlinedIcon
                        fontSize="small"
                        className="text-[#555555]"
                      />
                      {search}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <ClickAwayListener onClickAway={closePlaces}>
            <div>
              {openPlaces && (
                <div className="bg-white flex flex-col max-w-[600px] w-full rounded-lg border shadow absolute left-0 right-0 top-[4.25rem] m-auto z-100 py-3 max-h-[calc(95vh-70px)] overflow-y-auto transition">
                  {places.length >= 1 ? (
                    places.map((place, idx) => {
                      return <SearchPlaceCard {...place} key={idx} />;
                    })
                  ) : (
                    <div className="flex items-center justify-center">
                      <p className="text-base md:text-lg font-medium">
                        Nothing came up with that search 😕
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </ClickAwayListener>
        </div>
      </form>
      {openPrev && (
        <div
          className="fixed top-0 left-0 w-full h-screen "
          onClick={closePrev}
        ></div>
      )}
    </>
  );
};

export default SearchBar;
