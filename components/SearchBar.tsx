import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
import { allPlaces } from "../data/allPlaces";
import { SearchPlaceCard } from "./cards/SearchPlace";
import ClickAwayListener from "@mui/base/ClickAwayListener";

const SearchBar = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]); // List of previously searched words
  const [openPrev, setOpenPrev] = useState(false); //Opens list of previously searched words
  const [search, setSearch] = useState("");
  const [openPlaces, setOpenPlaces] = useState(false);
  const router = useRouter();



  function closePrev() {
    setOpenPrev(false);
  }
  function closePlaces() {
    setOpenPlaces(false);
  }

  // Search
  const places = allPlaces.filter(
    (place) =>
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.desc.toLowerCase().includes(search.toLowerCase()) ||
      place.category.includes(search.toLowerCase()) ||
      place.type.includes(search.toLowerCase())
  );

  function handlePrevs() {
    if (searchHistory.length >= 1) {
      setOpenPrev(true);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (places.length >= 1) {
      setOpenPlaces(true);
      setOpenPrev(false);
    }

    if (!value) {
      setOpenPrev(true);
      setOpenPlaces(false);
    }

    setSearch(value);
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
    router.push(`/search/${search}`);
  }

  function handClearBtn() {
    setSearchHistory([]);
    setOpenPrev(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("recent-search-history");
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const preSearch = localStorage.getItem("recent-search-history") || "";

      if (preSearch.length >= 1) {
        setSearchHistory(JSON.parse(preSearch));
      }

      // console.log(searchHistory);
    }
  }, []);

  return (
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
                <InputAdornment position="start">
                  <SearchOutlinedIcon fontSize="medium" />
                </InputAdornment>
              }
              placeholder="Search...."
              sx={{
                borderRadius: "0.375rem",
                backgroundColor: "#DBDBDC",
                height: "3rem",
              }}
              onFocus={handlePrevs}
              autoComplete="off"
              value={search}
              onChange={handleChange}
            />
          </FormControl>
        </div>
        <Button type="submit">search</Button>

        <ClickAwayListener onClickAway={closePrev}>
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
        </ClickAwayListener>

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
  );
};

export default SearchBar;
