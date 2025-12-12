import type { Service } from "../types";
import Button from "./Button";
interface ServiceHeroProps {
  data: Service;
  bgImage?: string;   
}
const ServiceHero = ({ data, bgImage} : ServiceHeroProps) => {
    return (
        <section className="relative w-full">
            <div className="z-10 w-full flex max-w-[1240px] mx-auto items-center pt-28 justify-between gap-x-15">
                {/* --- Left Col: Content --- */}
                <div className="flex flex-col items-start gap-6 flex-1">
                    {/* Title */}
                    <h1 className="text-[40px] md:text-5xl font-bold bg-linear-to-r from-[#FFAD2C] to-[#FF742E] text-transparent bg-clip-text leading-tight uppercase">
                        {data.title || "QUẢN TRỊ & CHĂM SÓC SOCIAL"}
                    </h1>

                    {/* Detail */}
                    <p className="text-gray-600 text-lg leading-relaxed text-justify">
                        {data.detail ||
                            "Phát triển các kênh social toàn diện, tăng tương tác, tạo chuyển đổi. Giúp doanh nghiệp luôn duy trì hình ảnh chuyên nghiệp - chìa khoá kết nối khách hàng hiệu quả."}
                    </p>

                    {/* Register */}
                    <Button
                        variant="primary"
                        className="font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        Đăng ký tư vấn
                    </Button>
                </div>

                {/* --- Right Col: IMG --- */}
                <div className="flex justify-end relative flex-1">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-[395px] object-cover animate-fade-in-up drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
