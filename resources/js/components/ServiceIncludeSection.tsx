import Decor from "../components/Decor";
import type { ServiceInclude } from "../types";

interface ServiceIncludeSectionProps {
  includes: ServiceInclude[];
}

const ServiceIncludeSection = ({ includes } : ServiceIncludeSectionProps) => {
    if (!includes || includes.length === 0) return null;

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-10">
                {/* 1. Header Section (Tiêu đề) */}
                <div className="mb-10">
                    <Decor />

                    <h2 className="mt-[18px] text-[40px] md:text-4xl font-bold text-brand">
                        Dịch Vụ Của Outfiz Bao Gồm Những Gì
                    </h2>
                </div>

                {/* 2. Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {includes.map(({ title, icon, description }: ServiceInclude, index : number) => (
                        <div
                            key={index}
                            className="bg-white border-t-[5px] border-brand  rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] borderhover:shadow-xltransition-all duration-300 group flex flex-col items-center text-center h-full"
                        >
                            {/* Icon Container */}
                            <div className="w-20 h-20 mb-2.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img src={icon} alt={title} className="w-full h-full object-cover" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-brand mb-2.5">{title}</h3>

                            {/* Description */}
                            <p className="text-[#404040] leading-[22/16] text-sm text-center">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceIncludeSection;
