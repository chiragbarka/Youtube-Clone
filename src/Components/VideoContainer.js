import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideosShimmer from "./VideosShimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState();

  const getVideos = async () => {
    await fetch(YOUTUBE_API_URL)
      .then((response) => response.json())
      .then((res) => setVideos(res.items));
  };

  // console.log(videos);

  useEffect(() => {
    getVideos();
  }, []);

  if (!videos)
    return (
      <div className="flex flex-wrap mt-2 hover:overflow-y-auto h-[560px]">
        <VideosShimmer />
      </div>
    );

  return (
    <div className="flex flex-wrap mt-5 hover:overflow-y-auto h-[560px]">
      {videos.map((item) => (
        <Link key={item.id} to={"/watch?v=" + item.id}>
          <VideoCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
