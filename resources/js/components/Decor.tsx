interface DecorProp {
    className?: string;
}

const Decor = ({ className = "" } : DecorProp) => {
    return (
        <div className={`flex gap-1 ${className}`}>
            <span className="w-5 h-1.5 bg-linear-to-r from-[#FF782E] to-brand rounded-full"></span>
            <span className="w-10 h-1.5 bg-linear-to-r from-[#FF782E] to-brand rounded-full"></span>
        </div>
    );
};

export default Decor;
