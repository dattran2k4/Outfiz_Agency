import Header from "../components/Header";
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

const HomePage = () => {
    return (
        <>
            <div className="relative w-full pt-8">
                <img
                    src={Background}
                    alt="Background Sky"
                    className="absolute inset-0 w-full max-h-[1391px] object-cover z-0"
                />
                <div className="relative z-10">
                    <Hero />
                    <AboutSection />
                </div>
            </div>

            <ServiceSection />
            <FeatureSection />
            <ProjectSection />
            <FeedbackSection />
            <RegisterSection />
            <NewsSection />
            <HireSection />
            <Footer />
        </>
    );
};

export default HomePage;
