import Decor from "./Decor";
import ProjectStatsItem from "./ProjectStatsItem";

const ProjectDetailInfor = ({ data }) => {
    if (!data) return null;

    return (
        <section className="w-full py-15 bg-white">
            <div className="max-w-[1240px] mx-auto">
                {/* --- 1. Header & Description --- */}
                <div className="text-center mb-8">
                    <Decor className="justify-center" />
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-brand mt-3 mb-7.5">Thông Tin Khách Hàng</h2>

                    {/* Description */}
                    <p className="text-[#404040] text-base md:text-lg leading-relaxed text-justify md:text-center">
                        {data.description}
                    </p>
                </div>

                {/* --- 2. Info Cards Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {data.boxes &&
                        data.boxes.map((box, index) => (
                            <ProjectStatsItem key={index} label={box.label} value={box.value} />
                        ))}
                </div>

                {/* --- 3. Big Banner Image --- */}
                {data.bannerImage && (
                    <div className="w-full max-h-[464px] rounded-[20px] overflow-hidden shadow-lg">
                        <img src={data.bannerImage} alt="Client Banner" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectDetailInfor;
