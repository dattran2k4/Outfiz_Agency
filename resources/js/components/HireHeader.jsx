import BeautifulGirlImg from "../images/hire/hire-noti.png";

const HireHeader = ({ bgImage }) => {
    return (
        <>
            <div className="relative h-[851px] w-full">
                <div className="absolute w-full h-full -z-999 opacity-100">
                    <img src={bgImage} className="w-full h-full object-cover" alt="Outfiz" />
                </div>
                <div className="max-w-[1240px] mx-auto h-full">
                    <div className="flex items-center justify-between h-full w-full">
                        <div className="flex flex-col items-center gap-y-3 text-center mt-15">
                            <h1 className="text-brand text-[40px] font-bold">THAM GIA CÙNG OUTFIZ AGENCY</h1>
                            <p className="text-lg leading-[4/3] text-[#404040]">
                                Bạn muốn phát triển sự nghiệp trong môi trường trẻ trung, chuyên nghiệp và luôn cập nhật
                                xu hướng marketing mới – OUTFIZ chính là nơi dành cho bạn.
                            </p>
                            <div className="w-[400px] h-[436px] mt-10">
                                <img src={BeautifulGirlImg} className="w-full h-full object-contain" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HireHeader;
