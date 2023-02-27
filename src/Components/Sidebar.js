import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen)
    return (
      <div className="w-15 bg-[#0f0f0f] pl-5 p-3 hover:overflow-y-auto h-[560px]">
        <ul>
          <li className="text-white text-md pb-4">
            <Link to="/">
              <i class="fa-solid fa-house mr-7 text-white"></i>
            </Link>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-sharp fa-solid fa-video mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-solid fa-square-check mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-sharp fa-solid fa-play mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-solid fa-clock mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-solid fa-square-check mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-regular fa-circle-play mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-solid fa-thumbs-up mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-solid fa-fire mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-solid fa-bag-shopping mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-solid fa-play mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-solid fa-music mr-7 text-white"></i>
          </li>
          <li className="text-white text-md pb-4 ">
            <i class="fa-solid fa-gamepad mr-7 text-white"></i>
          </li>
        </ul>
      </div>
    );

  return (
    <div className="w-64 bg-[#0f0f0f] pl-5 p-3 sticky hover:overflow-y-auto h-[560px]">
      <ul>
        <li className="text-white text-md pb-4">
          <Link to="/">
            <i class="fa-solid fa-house mr-7 text-white"></i>Home
          </Link>
        </li>
        <li className="text-white text-md pb-4 ">
          <i class="fa-sharp fa-solid fa-video mr-7 text-white"></i>Shorts
        </li>
        <li className="text-white text-md pb-4 ">
          <i class="fa-solid fa-square-check mr-7 text-white"></i>Subscription
        </li>
        <hr className="mt-1 mb-3 border-gray-500"></hr>
        <li className="text-white text-md pb-4 ">
          <i class="fa-sharp fa-solid fa-play mr-7 text-white"></i>Library
        </li>
        <li className="text-white text-md pb-4 ">
          <i class="fa-solid fa-clock mr-7 text-white"></i>History
        </li>
        <li className="text-white text-md pb-4 ">
          <i class="fa-solid fa-square-check mr-7 text-white"></i>Your Videos
        </li>
        <li className="text-white text-md pb-4 ">
          <i class="fa-regular fa-circle-play mr-7 text-white"></i>Watch later
        </li>
        <li className="text-white text-md pb-4 ">
          <i class="fa-solid fa-thumbs-up mr-7 text-white"></i>Liked Videos
        </li>
        <hr className="mt-1 mb-3 border-gray-500"></hr>
        <h3 className="text-white mb-3">Explore</h3>
        <li className="text-white text-md pb-4 ">
          <i class="fa-solid fa-fire mr-7 text-white"></i>Trending
        </li>
        <li className="text-white text-md pb-4 ">
          <i class="fa-solid fa-bag-shopping mr-7 text-white"></i>Shopping
        </li>
        <li className="text-white text-md pb-4 ">
          <i class="fa-solid fa-play mr-7 text-white"></i>Movies
        </li>
        <li className="text-white text-md pb-4 ">
          <i class="fa-solid fa-music mr-7 text-white"></i>Music
        </li>
        <li className="text-white text-md pb-4 ">
          <i class="fa-solid fa-gamepad mr-7 text-white"></i>Gaming
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
