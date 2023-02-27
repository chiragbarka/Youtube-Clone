import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  //   console.log(info);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  if (!isMenuOpen)
    return (
      <div className="w-[280px] mr-5 mb-5">
        <img className="rounded-md" src={thumbnails.medium.url}></img>
        <h2 className="text-white line-clamp-2 font-bold pb-1 pt-1">{title}</h2>
        <h3 className="text-gray-400 text-sm font-normal pb-1">
          {channelTitle}
        </h3>
        <p className="text-gray-400 text-sm font-normal pb-1">
          {statistics.viewCount} Views
        </p>
      </div>
    );

  return (
    <div className="w-[245px] mr-5 mb-5 cursor-pointer">
      <img className="rounded-md" src={thumbnails.medium.url}></img>
      <h2 className="text-white line-clamp-2 text-sm mt-2 font-semibold pb-1 pt-1">{title}</h2>
      <h3 className="text-gray-400 text-xs font-normal pb-1">{channelTitle}</h3>
      <p className="text-gray-400 text-xs font-normal pb-1">
        {statistics.viewCount} Views
      </p>
    </div>
  );
};

export default VideoCard;
