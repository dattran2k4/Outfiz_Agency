import { hiringJobs } from "../data/hire";
import HireNotiImg from "../images/hire/hire-noti.png";
import { ArrowRightIcon, ArrowUpIcon } from "../components/Icons";
import Button from "../components/Button";
import HireCard from "./HireCard";

const HireSection = () => {
    return (
        <section className="py-20 bg-white relative">
            <div className="max-w-[1240px] mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Col */}
                    <div className="flex flex-col items-start text-left">
                        {/* Header */}
                        <div className="mb-10">
                            {/* Decor */}
                            <div className="flex gap-1 mb-2">
                                <span className="w-5 h-1.5 bg-linear-to-r from-[#FF782E] to-brand rounded-full"></span>
                                <span className="w-10 h-1.5 bg-linear-to-r from-[#FF782E] to-brand rounded-full"></span>
                            </div>
                            {/* Title */}
                            <h2 className="text-4xl font-bold text-brand">Tuyển Dụng</h2>
                        </div>

                        {/* Description */}
                        <p className="text-[#404040] font-medium text-lg mb-10 leading-[4/3]">
                            Bạn muốn phát triển sự nghiệp trong môi trường trẻ trung, chuyên nghiệp và luôn cập nhật xu
                            hướng marketing mới – OUTFIZ chính là nơi dành cho bạn.
                        </p>

                        {/* Img */}
                        <div className="w-[235px] h-[336px] flex justify-center lg:justify-start mb-10 mx-auto">
                            <img
                                src={HireNotiImg}
                                alt="Tuyển dụng Outfiz"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Button View All */}
                        <Button variant="primary" className="inline-flex mx-auto w-[253px]">
                            Xem tất cả tuyển dụng
                            <ArrowRightIcon />
                        </Button>
                    </div>

                    {/* Right Col */}
                    <div className="flex flex-col gap-6">
                        {hiringJobs.map((job) => (
                            <HireCard job={job} />
                        ))}
                    </div>
                </div>

                {/* Scroll Button */}
                <div className="absolute -bottom-6 right-0 lg:right-0">
                    <button
                        className="w-12 h-12 rounded-full bg-transparent border border-amber-500 text-amber-500 
            flex items-center justify-center shadow-lg hover:bg-amber-500 hover:text-white transition transform hover:-translate-y-1"
                    >
                        <ArrowUpIcon />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HireSection;
