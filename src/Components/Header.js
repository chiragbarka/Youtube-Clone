import YoutubeIcon from "../assets/Images/youtube.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col pl-5 p-3 shadow-md bg-[#0f0f0f] sticky top-0 z-50">
      <div className="flex col-span-1">
        <span onClick={() => toggleMenuHandler()}>
          <i
            className="fa-solid fa-bars text-white mr-5 mt-1 text-xl cursor-pointer"
          ></i>
        </span>
        <img className="w-7 h-7 mt-1 mr-1" src={YoutubeIcon} />
        <h1 className="tracking-tight text-white text-xl mt-1 font-semibold">
          YouTube
        </h1>
      </div>
      <div className="col-span-10 ml-48">
        <input
          placeholder="Search"
          className="text-white w-[480px] p-3 rounded-l-full border-[#575757] bg-[#272727]"
          type="text"
        />
        <button className="bg-[#272727] text-white border-[#575757] p-3 pr-4 text-md rounded-r-full">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
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
