import HireHeader from "../components/HireHeader";
import HireNewsSection from "../components/HireNewsSection";
import RegisterSection from "../components/RegisterSection";

const HirePage = ({ bgImage }) => {
    return (
        <>
            <HireHeader bgImage={bgImage} />
            <HireNewsSection />
            <RegisterSection />
        </>
    );
};

export default HirePage;
