import Button from "./Button";

const buttonArray = [
  "All",
  "Music",
  "Comedy Clubs",
  "Mixes",
  "Trailers",
  "Comedy",
  "Coding",
  "Vlogs",
  "Music",
  "Comedy Clubs",
  "Mixes",
  "Trailers",
];

const ButtonList = () => {
  return (
    <div className="sticky top-16 z-50">
      {buttonArray.map((item, k) => (
        <Button key={k} items={item} />
      ))}
    </div>
  );
};

export default ButtonList;
