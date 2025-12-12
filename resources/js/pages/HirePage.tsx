import HireHeader from "../components/HireHeader";
import HireNewsSection from "../components/HireNewsSection";
import RegisterSection from "../components/RegisterSection";

const HirePage = ({ bgImage = ""}) => {
    return (
        <>
            <HireHeader bgImage={bgImage} />
            <HireNewsSection isPaginate={false} heading={null} itemsPerPage={4} />
            <RegisterSection />
        </>
    );
};

export default HirePage;
