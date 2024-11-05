import EachCheck from "./EachCheck";


const CheckBox = ({textArray}) => {
    return (
        <div className='flex flex-col gap-[10px] mb-10'>
            <EachCheck textArray={textArray}/>
        </div>
    );
};

export default CheckBox;