import ServiceHero from "../../components/ServiceHero";
import ServiceIncludeSection from "../../components/ServiceIncludeSection";
import ServiceBenefitSection from "../../components/ServiceBenefitSection";
import ServiceProjectSection from "../../components/ServiceProjectSection";
import RegisterSection from "../../components/RegisterSection";
import ServiceFAQSection from "../../components/ServiceFAQSection";
import NewsSection from "../../components/NewsSection";
import bgImage from "../../images/service/background.png";
import { serviceData } from "../../data/service";

const CareManagementServicePage = () => {
    return (
        <>
            <ServiceHero data={serviceData[0]} bgImage={bgImage} />
            <ServiceIncludeSection includes={serviceData[0].includes} />
            <ServiceBenefitSection />
            <ServiceProjectSection />
            <RegisterSection />
            <ServiceFAQSection />
            <NewsSection />
        </>
    );
};

export default CareManagementServicePage;
