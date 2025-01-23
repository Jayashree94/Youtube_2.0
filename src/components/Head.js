import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHAndler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHAndler()}
          className="h-7 my-3 ml-6 cursor-pointer "
          alt="hamburger_icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        ></img>
        <img
          className="h-14"
          alt="youtube_logo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
        ></img>
      </div>

      <div className="col-span-10 text-center m-2">
        <div className="flex">
          <input
            className="w-1/2 rounded-l-full  border border-gray-600 p-2"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          ></input>

          <button className="border border-gray-600 px-2 rounded-r-full">
            <img
              className="h-6"
              alt="search"
              src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
            ></img>
          </button>
        </div>
        <div className="fixed bg-slate-100 px-5 py-2 w-[37rem] text-left border-gray-600">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="p-2 shadow-sm  hover:bg-gray-300">
                 {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1 m-2">
        <img
          className="h-8"
          alt="user_icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
        ></img>
      </div>
    </div>
  );
};

export default Head;
