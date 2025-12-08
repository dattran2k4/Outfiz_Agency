const NewsHeader = ({ bgImage }) => {
    return (
        <div className="w-full h-[403px] relative flex justify-center">
            <div className="absolute -z-10 h-full w-full">
                <img src={bgImage} className="w-full h-full object-cover object-center" alt="Outfiz" />
            </div>
            <div className="z-10 mt-[185px] max-w-[1240px] ">
                {/* Tiêu đề */}
                <h1 className="text-3xl text-center md:text-[40px] font-bold text-brand uppercase mb-3 drop-shadow-sm">
                    TIN TỨC
                </h1>

                <div className="text-center text-[#404040] text-base md:text-lg leading-[4/3]">
                    OUTFIZ đã đồng hành cùng hơn 30+ thương hiệu trong đa dạng lĩnh vực như F&B, thời trang, giáo dục,
                    du lịch và làm đẹp.
                </div>
            </div>
        </div>
    );
};

export default NewsHeader;
