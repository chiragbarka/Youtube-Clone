const VideosShimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, i) => (
          <div className="h-32 w-[245px] mr-5 rounded-md bg-[#272727]"></div>
        ))}
    </div>
  );
};

export default VideosShimmer;
