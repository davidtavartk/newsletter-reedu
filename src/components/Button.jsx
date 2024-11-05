

const Button = ({children}) => {
    return (
        <div className="w-full">
            <button className="flex items-center justify-center py-4 font-bold bg-navy rounded-lg text-white w-full">{children}</button>
        </div>
    );
};

export default Button;