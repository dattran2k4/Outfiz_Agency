const ApplyHeader = ({ bgImage = ""}) => {
    return (
        <>
            <div className="w-full h-[355px] relative flex justify-center">
                <div className="absolute -z-10 h-full w-full">
                    <img src={bgImage} className="w-full h-full object-cover object-center" alt="Outfiz" />
                </div>
                <div className="z-10 mt-[185px] max-w-[1240px] ">
                    {/* Tiêu đề */}
                    <h1 className="text-3xl text-center md:text-[40px] font-bold text-brand uppercase mb-3 drop-shadow-sm">
                        FORM ĐĂNG KÝ
                    </h1>

                    <div className="text-center text-[#404040] text-base md:text-lg leading-[4/3]">
                        Bạn muốn phát triển sự nghiệp trong môi trường trẻ trung, chuyên nghiệp và luôn cập nhật xu
                        hướng marketing mới – OUTFIZ chính là nơi dành cho bạn.
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplyHeader;
