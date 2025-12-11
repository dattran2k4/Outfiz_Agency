const ProjectHeader = ({ bgImg }) => {
    return (
        <>
            <div className="w-full h-[331px] relative flex justify-center">
                <div className="absolute -z-10 h-full w-full">
                    <img src={bgImg} className="w-full h-full object-cover object-center" alt="Outfiz" />
                </div>
                {/* 2. Nội dung chính */}
                {/* pt-20 để bù trừ cho Header đang nằm đè lên (nếu Header là absolute) */}
                <div className="z-10 mt-[185px] ">
                    {/* Tiêu đề */}
                    <h1 className="text-3xl text-center md:text-[40px] font-bold text-brand uppercase mb-3 drop-shadow-sm">
                        DỰ ÁN CỦA OUTFIZ AGENCY
                    </h1>

                    {/* Mô tả (Dùng logic để render HTML nếu cần bôi đậm) */}
                    <div className="text-center text-[#404040] text-base md:text-lg leading-[4/3]">
                        OUTFIZ đã đồng hành cùng hơn 30+ thương hiệu trong đa dạng lĩnh vực như F&B, thời trang, giáo
                        dục, du lịch và làm đẹp.
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectHeader;
