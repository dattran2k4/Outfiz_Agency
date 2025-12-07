import { partners, feedbacks } from "../data/feedback";
import NavButton from "../components/NavButton";
import { ArrowLeft, ArrowRight, StarIcon } from "../components/Icons";
import BackGroundFeedBack from "../images/feedback/background-feedback.png";
import Background from "../images/feedback/background.png";
import BackgroundAvatar from "../images/feedback/background-avatar.png";
const FeedbackSection = () => {
    return (
        <section className="relative">
            <div className="w-full absolute inset-0 -z-10">
                <img src={Background} alt="Background" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-[1240px] mx-auto relative z-10 pt-[104.5px] pb-[60px]">
                {/* --- Header & Title --- */}
                <div className="text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand flex items-center justify-center gap-3">
                        Đối Tác & Feedback
                    </h2>
                </div>

                {/* --- Phần 1: Partners Carousel --- */}
                <div className="bg-white rounded-[20px] shadow-sm border border-[#D4D4D4] mb-10 relative px-6 mt-[82.5px]">
                    <div className="flex items-center h-[169px]">
                        {/* Nút Prev */}
                        <NavButton className="w-10 h-10">
                            <ArrowLeft />
                        </NavButton>

                        <div className="flex-1 flex items-center overflow-hidden max-w-[1032px] gap-20 mx-[42.5px]">
                            {partners.map((p) => (
                                <img key={p.id} src={p.logo} alt={p.name} className="w-[205px] h-[73px] object-cover" />
                            ))}
                        </div>

                        {/* Nút Next */}
                        <NavButton className="w-10 h-10">
                            <ArrowRight />
                        </NavButton>
                    </div>
                </div>

                {/* --- Phần 2: Feedback Cards --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {feedbacks.map((item) => (
                        <div key={item.id} className="relative group max-h-60">
                            {/* 1. Background  */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={BackGroundFeedBack}
                                    alt="bg-card"
                                    className="w-full h-full object-cover drop-shadow-md"
                                />
                            </div>

                            {/* 2. Content */}
                            <div className="relative z-10 pt-[18px] pb-[45px] pl-6 pr-12 flex flex-col h-full">
                                {/* Header Card: Avatar + Info + Start */}
                                <div className="flex items-center gap-3 mb-3">
                                    {/* Khối Avatar với nền vàng */}
                                    <div className="relative ">
                                        <div className="relative w-[83px] h-[85px]">
                                            {/* Avatar - BG */}
                                            <img
                                                src={BackgroundAvatar}
                                                alt="background shape"
                                                className="absolute inset-0 w-full h-full object-contain z-0"
                                            />
                                            {/* Avatar */}
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full object-cover z-10 shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Info & Starts */}
                                    <div className="flex flex-col pt-1">
                                        <h4 className="font-semibold text-[#404040] text-lg leading-tight">
                                            {item.name}
                                        </h4>
                                        <span className="text-gray-500 text-sm mb-2">{item.role}</span>

                                        {/* Rating Stars */}
                                        <div className="flex gap-2">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon
                                                    key={i}
                                                    className={`w-5 h-5 ${
                                                        i < item.rating ? "text-brand" : "text-[#E5E5E5]"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Nội dung text */}
                                <p className="text-gray-600 text-sm leading-[1.425] line-clamp-4">{item.content}</p>

                                {/* Dấu quote đã có sẵn trong ảnh nền (góc phải dưới), 
                    nên ta chỉ cần padding bottom cho text để không đè lên nó */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
