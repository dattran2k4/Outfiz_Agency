const NewsDetailPage = ({ bgImage }) => {
    return (
        <div className="relative h-[403px]">
            <div className="absolute h-full w-full -z-999">
                <img src={bgImage} className="w-full h-full object-cover" alt="Background" />
            </div>
            <div className="max-w-[1240px] mx-auto h-full">
                <div className="flex items-center justify-between h-full w-full">
                    <div className="flex flex-col items-center gap-y-3 text-center mt-15">
                        <div className="px-6 py-2 rounded-full bg-[#FFF7EB] text-brand flex items-center justify-between">
                            <span>SEO tổng thể</span>
                        </div>
                        <h1 className="text-brand text-[40px] font-bold">
                            Tổng hợp các nền tảng tự động hoá Marketing phổ biến
                        </h1>
                        <p className="text-lg leading-[4/3] text-[#404040]">
                            Các phần mềm tự động hóa marketing (Marketing Automation Tools) đang trở thành trợ thủ đắc
                            lực cho marketer hiện đại. Với khối lượng công việc ngày càng tăng – từ email marketing,
                            nuôi dưỡng khách hàng (lead nurturing),
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailPage;
