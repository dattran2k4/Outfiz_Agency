import Hero from "../components/Hero";
import Background from "../images/background.png";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import FeatureSection from "../components/FeatureSection";
import ProjectSection from "../components/ProjectSection";
import FeedbackSection from "../components/FeedbackSection";
import RegisterSection from "../components/RegisterSection";
import NewsSection from "../components/NewsSection";
import HireSection from "../components/HireSection";
import Footer from "../components/Footer";
import { projectData } from "../data/project";

const HomePage = () => {
    return (
        <>
            <div className="relative w-full min-h-[1391px]">
                <img src={Background} alt="Background Sky" className="absolute w-full h-full object-cover z-0" />
                <div className="relative z-10">
                    <Hero />
                    <AboutSection />
                </div>
            </div>

            <ServiceSection />
            <FeatureSection />
            <ProjectSection isHomePage={true} itemsPerPage={3} data={projectData} />
            <FeedbackSection />
            <RegisterSection />
            <NewsSection isHomePage={true} itemsPerPage={3} />
            <HireSection />
            <Footer />
        </>
    );
};

export default HomePage;
