import YoutubeIcon from "../assets/Images/youtube.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API_URL } from "../utils/constants";
import { addSearchCache } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const searchCacheResult = useSelector((store) => store.search);

  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      if (searchCacheResult[searchQuery]) {
        setSearchList(searchCacheResult[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API_URL + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSearchList(json[1]);
    dispatch(
      addSearchCache({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col pl-5 p-3 shadow-md bg-[#0f0f0f] sticky top-0 z-50">
      <div className="flex col-span-1">
        <span onClick={() => toggleMenuHandler()}>
          <i className="fa-solid fa-bars text-white mr-5 mt-1 text-xl cursor-pointer"></i>
        </span>
        <img className="w-7 h-7 mt-1 mr-1" src={YoutubeIcon} />
        <h1 className="tracking-tight text-white text-xl mt-1 font-semibold">
          YouTube
        </h1>
      </div>
      <div className="col-span-10 ml-48">
        <input
          placeholder="Search"
          className="text-white w-[480px] p-3 rounded-l-full border-[#575757] bg-[#161616]"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSearchBox(true)}
          onBlur={() => setShowSearchBox(false)}
        />
        {searchQuery && (
          <span
            className="ml-[-20px] cursor-pointer mr-2"
            onClick={() => setSearchQuery("")}
          >
            <i className="fa-solid fa-xmark text-base text-[#c0c0c0]"></i>
          </span>
        )}
        <button className="bg-[#272727] text-white border-[#575757] p-3 pr-4 text-md rounded-r-full">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        {showSearchBox && searchQuery && (
          <div className="bg-white mt-1 fixed absolute w-[520px] rounded-md py-3 shadow-sm">
            <ul>
              {searchList.map((item, i) => (
                <li
                  key={i}
                  className="py-2 cursor-pointer px-3 text-[15px] hover:bg-[#e4e4e4]"
                >
                  <i className="fa-solid fa-magnifying-glass ml-1 mr-3"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="w-7 mt-2 rounded-full"
          src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
        />
      </div>
    </div>
  );
};

export default Header;
