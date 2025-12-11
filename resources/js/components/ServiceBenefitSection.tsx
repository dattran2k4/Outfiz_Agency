import targetImg from "../images/feature/feature-target.png";
import socialImg from "../images/feature/feature-social.png";
import staffImg from "../images/feature/feature-staff.png";

import Decor from "../components/Decor";

const benefitsData = [
    {
        title: "Duy trì hình ảnh chuyên nghiệp - đồng nhất",
        description:
            "Đảm bảo mỗi bài đăng đều tuân theo guideline thương hiệu, giúp doanh nghiệp xây dựng niềm tin và sự uy tín trong mắt khách hàng.",
        icon: targetImg,
    },
    {
        title: "Tăng tương tác – nuôi dưỡng khách hàng",
        description:
            "Xây dựng chiến lược nội dung bài bản, đẩy mạnh tương tác và tạo sự kết nối cảm xúc với khách hàng.",
        icon: socialImg,
    },
    {
        title: "Tiết kiệm chi phí vận hành đội ngũ in-house",
        description:
            "Không cần tuyển nhân sự cố định, bạn vẫn có một đội ngũ chuyên nghiệp chăm sóc kênh social mỗi ngày.",
        icon: staffImg,
    },
];

const ServiceBenefitSection = () => {
    return (
        <section className="w-full py-20 relative">
            {/* Background mờ (Tuỳ chọn: nếu muốn nền hơi xám nhẹ để nổi bật card trắng) */}
            <div className="absolute inset-0 bg-[#F9FAFB] -z-10"></div>

            <div className="max-w-[1240px] mx-auto flex gap-10 items-center">
                {/* Left Col */}
                <div className="w-[491px]">
                    <h2 className="text-3xl md:text-[40px] font-bold text-brand mb-4 leading-tight">
                        Bạn Nhận Được Gì Từ <br /> Outfiz Agency
                    </h2>

                    <Decor />

                    <p className="text-[#404040] mt-5 text-lg leading-[4/3] text-justify">
                        Outfiz Agency không chỉ là một đơn vị thực thi marketing, mà là đối tác chiến lược giúp doanh
                        nghiệp bạn phát triển thương hiệu bài bản, tối ưu hiệu suất và tạo ra giá trị thực từ ngân sách
                        đầu tư.
                    </p>
                </div>

                {/* Right Col */}
                <div className="flex-1 flex flex-col gap-6">
                    {benefitsData.map((item, index) => {
                        // Logic kiểm tra: Nếu là thẻ thứ 2 (index == 1) thì đảo ngược vị trí ảnh
                        const isMiddleCard = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`
                                    bg-white rounded-2xl p-6 md:p-8 
                                    shadow-[0_8px_30px_rgba(0,0,0,0.06)] 
                                    border border-gray-100 
                                    flex items-center gap-6 
                                    transition-transform duration-300 hover:-translate-y-1
                                    ${isMiddleCard ? "md:flex-row-reverse" : "md:flex-row"}
                                    flex-col-reverse text-center md:text-left
                                `}
                            >
                                {/* TEXT */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-[#404040] mb-4">{item.title}</h3>
                                    <p className="text-[#525252] text-sm md:text-base leading-[22/16]">
                                        {item.description}
                                    </p>
                                </div>

                                {/* IMG ICON */}
                                <div className="w-[92.5px] h-[106px] shrink-0 flex items-center justify-center">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-full h-full object-cover drop-shadow-md"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceBenefitSection;
