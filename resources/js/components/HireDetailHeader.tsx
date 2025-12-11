const HireDetailHeader = ({ bgImage }) => {
    return (
        <>
            <div className="w-full h-[295px] relative flex justify-center">
                <div className="absolute -z-10 h-full w-full">
                    <img src={bgImage} className="w-full h-full object-cover object-center" alt="Outfiz" />
                </div>
                <div className="z-10 mt-[185px] ">
                    {/* Tiêu đề || Dyanmic Title */}
                    <h1 className="text-3xl text-center md:text-[40px] font-bold text-brand uppercase mb-3 drop-shadow-sm">
                        UI/UX DESIGNER
                    </h1>
                </div>
            </div>
        </>
    );
};

export default HireDetailHeader;
