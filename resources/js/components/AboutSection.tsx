import AboutUsImg from "../images/about-us-img.png";
import Button from "./Button";
import BeautifulGirlImg from "../images/beautiful-girl.png";
import { ArrowRightIcon } from "../components/Icons";

const AboutSection = () => {
    return (
        <section className="mt-15">
            <div className="relative max-w-[1240px] mx-auto group flex">
                {/* Background */}
                <div className="w-full h-[565px] absolute -z-99">
                    <img src={AboutUsImg} alt="Background Outfiz" className="w-full h-full object-contain " />
                </div>

                {/* IMG */}
                <div className="w-[509px] h-[562px] z-99 relative ml-15">
                    <img src={BeautifulGirlImg} className="w-full h-full object-cover" alt="" />
                </div>

                {/* Content */}
                <div className="z-99 relative max-w-[550px] mt-[76px] ml-15 mr-15">
                    <div className="flex flex-col">
                        <h2 className="text-center text-[40px] text-brand font-bold ">Về chúng tôi</h2>
                        <h3 className="text-linear font-bold text-3xl uppercase tracking-wide mt-[83.5px]">
                            Outfiz Agency
                        </h3>

                        <p className="text-[#404040] leading-[4/3] text-justify text-lg mt-4">
                            Là agency tại Đà Nẵng chuyên sâu về Digital Marketing, quy tụ đội ngũ giàu kinh nghiệm, trẻ
                            trung và đầy nhiệt huyết. Chúng tôi mang đến giải pháp marketing tổng thể – từ tư vấn chiến
                            lược đến triển khai thực tế, tối ưu đa kênh và bám sát mục tiêu kinh doanh. Với mỗi ngân
                            sách, OUTFIZ cam kết tạo ra hiệu quả tương xứng, giúp doanh nghiệp tăng trưởng bền vững và
                            nổi bật trên thị trường.
                        </p>

                        <div className="mt-8">
                            <a href="#">
                                <Button variant="outline" className="w-[186px]">
                                    Tìm hiểu thêm
                                    <ArrowRightIcon />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
