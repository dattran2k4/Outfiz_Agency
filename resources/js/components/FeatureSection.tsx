import { featureData } from "../data/feature";
import FeatureBgImage from "../images/feature/feature-background.png";
import Decor from "./Decor";

const FeatureSection = () => {
    return (
        <section>
            <div className="relative">
                {/*  BACKGROUND IMAGE */}
                <div className="absolute w-full -z-10 h-[907px]">
                    <img src={FeatureBgImage} alt="Feature Background" className="w-full h-full object-cover" />
                </div>

                <div className="max-w-[1240px] mx-auto pt-44 pb-15">
                    <div className="flex flex-col lg:flex-row items-center gap-x-10">
                        {/* Left Col */}
                        <div className="w-[60.32%]">
                            <div className="grid grid-cols-1 md:grid-cols-2 h-fit">
                                {/* Col 1: Card 1, 3 */}
                                <div className="flex flex-col gap-[180px] ml-5">
                                    {/* Card 1 */}
                                    <FeatureCard item={featureData[0]} />

                                    {/* Card 3 */}
                                    <FeatureCard item={featureData[2]} />
                                </div>

                                {/* Col 2: Card 2 + Stats*/}
                                <div className="flex flex-col justify-end gap-y-16 ml-15 w-fit">
                                    <FeatureCard item={featureData[1]} />
                                    {/* Khối thống kê: 30+ Dự án */}
                                    <div className="inline-flex gap-3 items-center bg-brand text-white rounded-[20px] px-6 py-[39px] shadow-xl hover:shadow-orange-200/50 hover:-translate-y-1 transition-all duration-300">
                                        <span className="text-4xl md:text-6xl font-bold">30+</span>
                                        <div className="flex flex-col leading-tight font-bold text-2xl">
                                            <span>dự án</span>
                                            <span>đã thực hiện</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Col */}
                        <div className="flex-1 ml-10">
                            {/* Trang trí gạch đầu dòng */}
                            <Decor />

                            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-2 mt-3 leading-tight">
                                Vì Sao Bạn Nên Chọn <br />
                                Outfiz Agency?
                            </h2>

                            <p className="text-[#404040] font-medium leading-[4/3] mt-10 text-justify md:text-left">
                                Không chỉ là một đơn vị thực thi marketing, Outfiz Agency là đối tác chiến lược giúp
                                doanh nghiệp bạn phát triển thương hiệu bài bản, tối ưu hiệu suất và tạo ra giá trị thực
                                từ ngân sách đầu tư.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ item }) => {
    return (
        <div className="relative group w-[338px]">
            <div className="absolute top-0 left-0 w-[95%] h-[95%] bg-[#FFAD2C] rounded-[20px] transform rotate-15 transition-all duration-300 -z-10 opacity-80"></div>
            <article
                className="h-full w-full bg-white rounded-[20px] p-6 pt-15 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#D4D4D4] hover:shadow-xl 
                            transition-all duration-300 hover:-translate-y-1  flex flex-col items-center justify-center text-center group relative"
            >
                {/* Image Icon */}
                <div className="absolute w-[120px] h-[175px] -top-[45%] bg-transparent flex items-center justify-center mx-auto">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>

                <h3 className="text-2xl font-bold text[#404040] mb-3 px-2 group-hover:text-brand transition-colors">
                    {item.title}
                </h3>

                <p className="text-[#404040] leading-snug">{item.description}</p>
            </article>
        </div>
    );
};

export default FeatureSection;
