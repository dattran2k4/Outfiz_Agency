import ServiceHero from "../components/ServiceHero";
import ServiceIncludeSection from "../components/ServiceIncludeSection";
import ServiceBenefitSection from "../components/ServiceBenefitSection";
import ServiceProjectSection from "../components/ServiceProjectSection";
import RegisterSection from "../components/RegisterSection";
import ServiceFAQSection from "../components/ServiceFAQSection";
import NewsSection from "../components/NewsSection";
import { serviceData } from "../data/service";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ServiceDetailPage = ({ bgImage }) => {
    const location = useLocation();

    //Get URL
    const currentURL = location.pathname.replace("/", "");

    // 2. Tìm dữ liệu tương ứng trong serviceData
    const service = serviceData.find((item) => item.link === currentURL);

    // 3. Scroll lên đầu trang khi chuyển route
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentURL]);

    return (
        <>
            <ServiceHero data={service} bgImage={bgImage} />
            <ServiceIncludeSection includes={service.includes} />
            <ServiceBenefitSection />
            <ServiceProjectSection />
            <RegisterSection />
            <ServiceFAQSection />
            <NewsSection />
        </>
    );
};

export default ServiceDetailPage;
