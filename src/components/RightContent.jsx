import rectangle from "../assets/Rectangle.png";
import group from "../assets/Group.png";


const RightContent = () => {
  return (
    <div className="relative">
      <img src={rectangle}  alt="rectangle" className="w-full h-full" />
      <img src={group} alt="group" className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"/>
    </div>
  );
};

export default RightContent;
