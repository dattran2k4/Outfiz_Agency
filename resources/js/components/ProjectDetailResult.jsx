import Decor from "./Decor";
const ProjectDetailResult = ({ data }) => {
    if (!data) return null;

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">
                {/* --- 1. Header & Description --- */}
                <div className="mb-10">
                    <div className="text-center mb-10">
                        {/* Title */}
                        <h2 className="text-3xl md:text-[40px] font-bold text-brand mb-[18px]">Kết quả dự án</h2>

                        {/* Decor Line */}
                        <Decor className="justify-center" />
                    </div>

                    {/* Description Paragraphs */}
                    <div className="space-y-6">
                        {data.description &&
                            data.description.map((text, index) => (
                                <p
                                    key={index}
                                    className="text-[#404040] text-base md:text-lg leading-[4/3] text-justify"
                                >
                                    {text}
                                </p>
                            ))}
                    </div>
                </div>

                {/* --- 2. Gallery Grid (Lưới ảnh kết quả) --- */}
                {/* Thiết kế cho thấy grid 2 cột lớn */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[25px]">
                    {data.gallery &&
                        data.gallery.map((imgSrc, index) => (
                            <div
                                key={index}
                                className="w-[398px] h-[289px] group rounded-[20px] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                            >
                                <img
                                    src={imgSrc}
                                    alt={`Result ${index + 1}`}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailResult;
