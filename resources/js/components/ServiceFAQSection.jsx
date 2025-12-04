import { useState } from "react";
import { faqData } from "../data/faq";
import FAQImg from "../images/service/faq.png";
import FAQBg from "../images/service/service-faq-bg.png";
import Decor from "./Decor";
import questionIcon from "../images/icons/question.svg";
import arrowRightIcon from "../images/icons/arrow-right.svg";
import ContactButton from "./ContactButton";

const ServiceFAQSection = () => {
    // State để lưu chỉ số câu hỏi đang mở (Mặc định mở câu đầu tiên: 0)
    const [openIndex, setOpenIndex] = useState(0);

    // Hàm xử lý khi bấm vào câu hỏi
    const toggleFAQ = (index) => {
        // Nếu bấm vào câu đang mở thì đóng lại (-1), ngược lại thì mở câu đó
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="w-full py-20 relative overflow-hidden">
            {/* --- 1. Background Image --- */}
            <div className="absolute inset-0 -z-10">
                <img
                    src={FAQBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-70" // Chỉnh opacity tuỳ theo độ đậm nhạt của ảnh gốc
                />
            </div>

            <div className="max-w-[1240px] mx-auto">
                {/* Header Title */}
                <div className="mb-10 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand mb-3">Câu Hỏi Thường Gặp</h2>
                    {/* Decor line */}
                    <Decor />
                </div>
                <div className="flex flex-col md:flex-row gap-x-10 items-center justify-between">
                    {/* --- CỘT TRÁI: DANH SÁCH CÂU HỎI --- */}
                    {/* Accordion List */}
                    <div className="flex flex-col gap-4">
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    onClick={() => toggleFAQ(index)}
                                    className={` py-3 px-4
                                        bg-white rounded-[15px] border cursor-pointer transition-all duration-300
                                        ${
                                            isOpen
                                                ? "border-brand shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]"
                                                : "border-[#E5E5E5] hover:border-[brand]"
                                        }
                                    `}
                                >
                                    {/* Question Header */}
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-start gap-2">
                                            <div className="w-[18px] h-[22px]">
                                                <img src={questionIcon} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <h3
                                                className={`font-semibold text-lg ${
                                                    isOpen ? "text-[#404040]" : "text-gray-600"
                                                }`}
                                            >
                                                {item.question}
                                            </h3>
                                        </div>
                                        {/* Chevron Icon */}
                                        <img
                                            src={arrowRightIcon}
                                            className={`text-gray-400 transition-transform duration-300 ${
                                                isOpen ? "rotate-90" : ""
                                            }`}
                                        />
                                    </div>

                                    {/* Answer Body */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <div className="text-[#404040]text-[#404040] leading-snug">{item.answer}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* --- CỘT PHẢI: --- */}
                    <div className="">
                        <div className="bg-white flex flex-col items-center gap-y-[18px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] px-[15px] py-6 text-center border border-[#E5E5E5]">
                            {/* Img */}
                            <div className="w-[162px] h-[140px]">
                                <img
                                    src={FAQImg}
                                    alt="FAQ Illustration"
                                    className="w-full h-full object-cover drop-shadow-lg"
                                />
                            </div>

                            {/* Text */}
                            <h3 className="text-[30px] font-semibold text-[#404040]">
                                Bạn đang thắc mắc điều gì khác?
                            </h3>
                            <p className="text-[#525252] text-lg leading-[4/3]">
                                Outfiz giúp bạn hiểu rõ quy trình chăm sóc kênh, lý do cần chiến lược nội dung và sẵn
                                sàng giải thích mọi khúc mắc để bạn an tâm giao kênh cho đội ngũ chuyên nghiệp.
                            </p>

                            <ContactButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQSection;
