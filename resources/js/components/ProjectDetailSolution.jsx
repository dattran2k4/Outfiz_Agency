import LightImg from "../images/light.png";
import Decor from "./Decor";
// Bạn thay đường dẫn ảnh bóng đèn 3D của bạn vào đây
// Nếu chưa có, mình để tạm link placeholder hoặc bạn import từ assets

const ProjectDetailSolution = ({ data }) => {
    if (!data) return null;

    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* --- 1. Header Section --- */}
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    {/* Icon Bóng đèn */}
                    <div className="w-41 h-[150px] mb-1 animate-bounce-slow">
                        <img src={LightImg} alt="Solution Icon" className="w-full h-full object-contain" />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-brand mb-3">Giải pháp đề xuất</h2>

                    {/* Decor Line */}
                    <Decor className="justify-center" />
                </div>

                {/* --- 2. Solutions List (4 Cards) --- */}
                <div className="flex flex-col gap-6 w-full">
                    {data.items &&
                        data.items.map((item, index) => (
                            <div
                                key={index}
                                className="w-full p-4 border border-brand bg-white rounded-[15px] shadow-[0px_4px_4px_0px_#0000001A]"
                            >
                                <p className="text-[#525252] text-base md:text-lg leading-[4/3] text-justify">{item}</p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailSolution;
