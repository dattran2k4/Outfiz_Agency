import Button from "./Button";
import Decor from "./Decor";
import projectImg from "../images/service/service-project.png";
import { ArrowRightIcon } from "../components/Icons";
import defaultPartnerImg from "../images/feedback/default-partner.png";
import pinIcon from "../images/icons/pin.svg";
import bgImg from "../images/service/service-pj-bg.png";

const projectsData = [
    {
        id: 1,
        cardTitle: "Outfiz.vn",
        cardDesc: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",
        image: projectImg,
        clientName: "Owbag",
        description:
            "Wbag là nền tảng thời trang kết hợp mạng xã hội, nơi quy tụ các thương hiệu uy tín trong và ngoài nước. Tại đây, khách hàng ở mọi độ tuổi có thể dễ dàng tìm kiếm sản phẩm phù hợp với phong cách riêng. Đồng thời, mạng xã hội thời trang OUTFIZ khuyến khích người dùng tự do thể hiện gu thẩm mỹ, đề cao sáng tạo và lan tỏa xu hướng mới.",
        results: [
            "Tăng 150% traffic tự nhiên sau 3 tháng",
            "Tăng 150% doanh thu từ kênh Social",
            "Tối ưu chi phí quảng cáo xuống 30%",
        ],
    },
    {
        id: 2,
        cardTitle: "Ohtez.com",
        cardDesc: "Xây dựng bộ nhận diện thương hiệu độc quyền, giúp doanh nghiệp nổi bật giữa thị trường cạnh tranh.",
        image: projectImg,
        clientName: "Ohtez",
        description:
            "Wbag là nền tảng thời trang kết hợp mạng xã hội, nơi quy tụ các thương hiệu uy tín trong và ngoài nước. Tại đây, khách hàng ở mọi độ tuổi có thể dễ dàng tìm kiếm sản phẩm phù hợp với phong cách riêng. Đồng thời, mạng xã hội thời trang OUTFIZ khuyến khích người dùng tự do thể hiện gu thẩm mỹ, đề cao sáng tạo và lan tỏa xu hướng mới.",
        results: [
            "Hoàn thiện bộ nhận diện chỉ sau 2 tuần",
            "Đạt 10.000 followers trong tháng đầu tiên",
            "Tỷ lệ chuyển đổi đơn hàng đạt 5.5%",
        ],
    },
];

// --- Icon ghim (Pin Icon) màu đỏ cam ---
const PinIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0H22V22H0Z" fill="url(#pattern0_191_10563)" />
    </svg>
);

const ServiceProjectSection = () => {
    return (
        <section className="w-full py-20 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto">
                {/* --- Title --- */}
                <div className="text-center mb-10 flex flex-col items-center">
                    <h2 className="text-3xl md:text-[40px] font-bold text-brand mb-3">Dự Án Nổi Bật</h2>
                    <Decor />
                </div>

                {/* ---  Projects List --- */}
                <div className="flex flex-col gap-20">
                    {projectsData.map((project, index) => {
                        // Logic đảo chiều: Số chẵn (0, 2...) thì Card bên trái, Số lẻ (1, 3...) thì Card bên phải
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={project.id}
                                className={`flex flex-col md:flex-row items-start ${
                                    !isEven ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* --- CỘT A: CARD ẢNH DỰ ÁN --- */}
                                <div className="w-full md:w-[394px]">
                                    <div
                                        className={`border-2 border-brand ${
                                            isEven
                                                ? "rounded-br-[50px] rounded-tl-[50px] rounded-bl-[5px]"
                                                : "rounded-tr-[50px] rounded-bl-[50px] rounded-br-[5px]"
                                        } p-6 bg-white overflow-hidden text-center relative hover:shadow-[0_10px_40px_rgba(250,175,58,0.15)] transition-shadow duration-300`}
                                    >
                                        {/* Hình ảnh */}
                                        <div className="mb-6">
                                            <img
                                                src={project.image}
                                                alt={project.cardTitle}
                                                className={`w-full h-full object-cover`}
                                            />
                                        </div>

                                        {/* Tên & Mô tả ngắn */}
                                        <h3 className="text-2xl font-semibold text-[#404040] mb-3">
                                            {project.cardTitle}
                                        </h3>
                                        <p className="text-[#404040] text-sm mb-3 leading[10/7]">{project.cardDesc}</p>

                                        {/* Nút Xem chi tiết */}
                                        <Button variant="outline" className="mx-auto">
                                            Xem chi tiết
                                            <ArrowRightIcon />
                                        </Button>
                                    </div>
                                </div>

                                {/* --- CỘT B: TEXT MÔ TẢ --- */}
                                <div className="flex-1 relative">
                                    {/* Bg IMG */}
                                    <div className="w-full h-[301px] -z-10">
                                        <img
                                            src={bgImg} //
                                            alt="BackGround"
                                            className={`w-full h-full object-cover ${
                                                isEven ? "" : "transform scale-x-[-1]"
                                            }`} // Chỉnh opacity nếu cần nền mờ hơn
                                        />
                                    </div>
                                    <div className="absolute inset-20 flex flex-col justify-center items-center">
                                        {/* Logo Khách hàng */}
                                        <div className="w-[108px] h-[39px]">
                                            {/* Icon khung vuông nhỏ mô phỏng logo */}
                                            <img
                                                src={defaultPartnerImg}
                                                className="w-full h-full object-cover"
                                                alt=""
                                            />
                                        </div>

                                        {/* Mô tả */}
                                        <p className="text-[#404040] text-sm leading-[10/7] text-center mb-[15px]">
                                            {project.description}
                                        </p>

                                        {/* Kết quả đạt được */}
                                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-0 md:bg-transparent">
                                            <h5 className="text-brand font-semibold mb-4 text-center">
                                                Kết quả đạt được:
                                            </h5>
                                            <ul className="space-y-3">
                                                {project.results.map((res, idx) => (
                                                    <li key={idx} className="flex items-center gap-x-0.5 text-gray-600">
                                                        <img src={pinIcon} alt="" />
                                                        <span className="text-sm text-[#404040]">{res}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* --- 3. Bottom Button --- */}
                <div className="mt-20 text-center">
                    <Button variant="primary" className="mx-auto w-[205px] gap-2">
                        Xem tất cả dự án
                        <ArrowRightIcon />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServiceProjectSection;
