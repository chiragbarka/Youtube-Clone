import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div className="w-full p-3 bg-[#0f0f0f]">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainComponent;
