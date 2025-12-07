import ProjectStatsItem from "./ProjectStatsItem"; // Import component con
import Decor from "./Decor";

const ProjectDetailIntro = ({ data }) => {
    if (!data) return null;

    return (
        <section className="w-full py-15 bg-white">
            <div className="max-w-[1240px] mx-auto">
                {/* --- 1. Header & Description --- */}
                <div className="mb-12">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-brand mb-3 uppercase">
                        Giới Thiệu Tổng Quan Dự Án AZKDP
                    </h2>

                    <Decor />

                    {/* Nội dung đoạn văn */}
                    <div className="space-y-4">
                        {data.description &&
                            data.description.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-[#404040] text-base md:text-lg leading-relaxed text-justify"
                                >
                                    {paragraph}
                                </p>
                            ))}
                    </div>
                </div>

                {/* --- 2. Stats Grid (Danh sách 3 thẻ thông tin) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {data.stats &&
                        data.stats.map((item, index) => (
                            <ProjectStatsItem key={index} label={item.label} value={item.value} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailIntro;
