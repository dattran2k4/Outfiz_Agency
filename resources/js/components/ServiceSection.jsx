import { serviceData } from "../data/service";
import Button from "../components/Button";
import { ArrowRightIcon } from "../components/Icons";
const ServiceSection = () => {
    return (
        <section className="py-20 bg-transparent">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
                    {/* LEFT TEXT CONTENT */}
                    <div className="flex flex-col justify-center pr-0 md:pr-8">
                        <h2 className="text-4xl font-bold text-brand mb-2">Dịch Vụ</h2>

                        <div className="flex gap-2 mb-6">
                            <span className="w-5 h-1.5 bg-linear-to-r from-[#FF782E] to-brand rounded-full"></span>
                            <span className="w-10 h-1.5 bg-linear-to-r from-[#FF782E] to-brand rounded-full"></span>
                        </div>

                        <div className="text-[#404040] leading-[4/3] space-y-4 text-justify md:text-left">
                            <p>
                                Tại OUTFIZ, chúng tôi cung cấp dịch vụ Digital Marketing toàn diện giúp doanh nghiệp xây
                                dựng thương hiệu bài bản, tiếp cận đúng khách hàng, tối ưu hiệu quả và chi phí.
                            </p>
                            <p>
                                Với đội ngũ sáng tạo, chuyên môn cao và quy trình triển khai rõ ràng, OUTFIZ cam kết
                                đồng hành cùng bạn từ chiến lược đến hành động cụ thể và mang lại giá trị thực, kết quả
                                thật.
                            </p>
                        </div>
                    </div>

                    {/* === ITEMS DYNAMIC: MAP TỪ DATA === */}
                    {serviceData.map((service) => (
                        <ServiceCard key={service.id} data={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ data }) => {
    return (
        <article
            className="bg-white rounded-[15px] p-6 shadow-lg hover:shadow-2xl transition-all 
        duration-300 hover:-translate-y-2 border border-[#D4D4D4] group flex flex-col items-center text-center h-full"
        >
            {/* Image */}
            <div className="w150 h100 flex items-center justify-center">
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
            </div>
            {/* Title */}
            <h3 className="text-3xl leading-5 text-[#404040] font-bold mt-8">{data.title}</h3>
            {/* Description */}
            <p className="text-lg text-[#404040] mt-5 leading-[4/3] line-clamp-1">{data.description}</p>
            {/* Button */}
            <div className="mt-7">
                <a href="#!" className="mx-auto inline-flex items-center justify-center">
                    <Button className="h-[42px]! w-[167px]!" variant="outline">
                        Xem thêm
                        <ArrowRightIcon />
                    </Button>
                </a>
            </div>
        </article>
    );
};

export default ServiceSection;
