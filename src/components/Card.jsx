import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Card = () => {
  return (
    <div className="flex w-2/3 justify-between gap-16 rounded-[36px] border bg-white p-16">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Card;
