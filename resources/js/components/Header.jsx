import { serviceData } from "../data/service";
import Button from "./Button";
import { VietnamFlagIcon, PhoneIcon, ChevronDownIcon, ArrowRightIcon } from "./Icons";
import LogoIcon from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    // Dữ liệu menu để dễ quản lý
    const navItems = [
        { label: "Về chúng tôi", path: "/", hasDropdown: false },
        { label: "Dịch vụ", path: "/services", hasDropdown: true, subItems: serviceData },
        { label: "Dự án", path: "/projects", hasDropdown: false },
        { label: "Tin tức", path: "/news", hasDropdown: false },
        { label: "Tuyển dụng", path: "/hire", hasDropdown: false },
    ];

    return (
        <>
            {/* Header chính */}
            <header className="w-full mx-auto max-w-[1240px] bg-white rounded-2xl shadow-lg px-10 py-5 flex items-center justify-between">
                <a href="/" className="cursor-pointer flex items-center">
                    {/* Component Logo của bạn */}
                    <LogoIcon className="h-11 w-auto" />
                </a>

                {/* 2. Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative group flex items-center group">
                            <Link
                                to={item.path}
                                className="group text-[#404040] hover:text-brand font-medium text-sm transition-colors flex items-center gap-1"
                            >
                                {item.label}

                                {item.hasDropdown && <ChevronDownIcon className="w-3.5 h-3.5" color="currentColor" />}
                            </Link>
                            {item.hasDropdown && (
                                <div className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out w-[1240px] h-[385px] top-[30px] pt-[30px] z-99 -left-[388px]  rounded-bl-[15px] rounded-br-[15px]">
                                    <ServiceInfo subItems={item.subItems} />
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* 3. Right Actions (Language & CTA) */}
                <div className="flex items-center gap-4">
                    {/* Button Tiếng Việt */}
                    <Button variant="outline">
                        <VietnamFlagIcon />
                        Tiếng Việt
                        {/* Arrow Icon cho nút ngôn ngữ: Màu cam (brand) */}
                        <ChevronDownIcon color="#FAAF3A" />
                    </Button>

                    {/* Button Liên hệ */}
                    <Button
                        variant="primary"
                        // Truyền Icon Phone vào, set màu trắng
                        icon={<PhoneIcon color="white" />}
                    >
                        Liên hệ ngay
                    </Button>
                </div>
            </header>
        </>
    );
};

const ServiceInfo = ({ subItems }) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isVisibleItem, setIsVisibleItem] = useState(false);

    const handleHover = (item) => {
        setHoveredItem(item);
        setIsVisibleItem(true);
    };

    return (
        <div className="bg-white w-full flex items-center p-8 rounded-bl-[15px] rounded-br-[15px] h-full ">
            {/* Left */}
            <div className="w-[385px]">
                <h3 className="text-2xl font-bold text-[#404040] mb-6">Dịch Vụ</h3>
                <p className="text-lg text-[#404040] leading-[23/18]">
                    Tại OUTFIZ, chúng tôi cung cấp dịch vụ Digital Marketing toàn diện giúp doanh nghiệp xây dựng thương
                    hiệu bài bản, tiếp cận đúng khách hàng, tối ưu hiệu quả và chi phí.
                </p>
            </div>
            {/* Mid */}
            <div className="ml-[60px]">
                <ServiceList items={subItems} onItemHover={handleHover} />
            </div>
            {/* Right */}
            {isVisibleItem && (
                <div className="flex flex-col items-center justify-center text-center w-[385px] h-full">
                    {/* Chỉ hiển thị khi có hoveredItem */}
                    {hoveredItem && (
                        <div className="flex flex-col items-center ml-[60px]">
                            {/* Image */}
                            <img
                                src={hoveredItem.image}
                                alt={hoveredItem.title}
                                className="w-[250px] h-[167px] object-cover mb-6 drop-shadow-md transition-all duration-300"
                            />

                            {/* Description */}
                            <p className="text-[#404040] leading-[4/3] mb-6 text-lg h-[81px]">
                                {hoveredItem.description}
                            </p>

                            {/* More */}
                            <Link to={hoveredItem.link}>
                                <Button variant="primary" className="px-8">
                                    Xem thêm
                                    <ArrowRightIcon className="w-5 h-5 ml-1" color="white" />
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const ServiceList = ({ items, onItemHover }) => {
    if (!items) return null;
    return (
        <div className="flex flex-col gap-1">
            {items.map((sub, index) => (
                <Link
                    key={index}
                    to={sub.link}
                    onMouseEnter={() => onItemHover(sub, true)}
                    className="flex items-center justify-between p-2 hover:underline"
                >
                    <span className="text-[#404040] font-medium text-lg whitespace-nowrap">{sub.title}</span>
                    <span className="text-[#404040]">
                        <ArrowRightIcon />
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default Header;
