import Decor from "./Decor";
import BackgroundImg from "../images/project/YellowBg.png";

const ProjectDetailTarget = ({ data }) => {
    // Kiểm tra dữ liệu đầu vào
    if (!data) return null;

    return (
        <section className="w-full py-16 relative">
            <div className="absolute -z-10 inset-0 opacity-30 max-h-[516px]">
                <img src={BackgroundImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="flex items-end justify-between gap-x-10">
                    {/* --- CỘT TRÁI: NỘI DUNG (TEXT) --- */}
                    <div className="">
                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">Mục Tiêu Mong Muốn</h2>

                        {/* Dấu gạch trang trí */}
                        <Decor />

                        {/* Nội dung các đoạn văn */}
                        <div className="space-y-5 bg-white p-4 rounded-[15px] shadow-[0px_4px_4px_0px_#0000001A] w-[683px] mt-14">
                            {data.content &&
                                data.content.map((text, index) => (
                                    <p
                                        key={index}
                                        className="text-[#525252] text-base md:text-lg leading-[4/3] text-justify"
                                    >
                                        {text}
                                    </p>
                                ))}
                        </div>
                    </div>

                    {/* --- CỘT PHẢI: HÌNH ẢNH (IMAGE) --- */}
                    <div className="w-full max-h-[376px] rounded-[20px] overflow-hidden shadow-lg border border-gray-100">
                        <img src={data.illustrationImage} alt="Target Img" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailTarget;
