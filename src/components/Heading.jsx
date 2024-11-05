const Heading = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[56px] font-bold text-[#242742]">{title}</h1>
      <p className="my-6 leading-6 text-[#242742]">{paragraph}</p>
    </div>
  );
};

export default Heading;
