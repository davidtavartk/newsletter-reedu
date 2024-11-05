import checkIcon from "../assets/check.svg"

const EachCheck = ({textArray}) => {
    return (
        <>
            {textArray.map((text, index) => (
                <div className="flex items-center gap-4" key={index}>
                    <img src={checkIcon} alt="check" />
                    <span className="text-[#242742]">{text}</span>
                </div>

            ))}
        </>
    );
};

export default EachCheck;