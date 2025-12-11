import HireDetailHeader from "../components/HireDetailHeader";
import HireDetail from "../components/HireDetail";
import { hiringJobs } from "../data/hire";
import HireNewsSection from "../components/HireNewsSection";
import RegisterSection from "../components/RegisterSection";

const HireDetailPage = ({ bgImage }) => {
    return (
        <>
            <HireDetailHeader bgImage={bgImage} />
            {/* TO-DO Get job from param */}
            <HireDetail data={hiringJobs[0]} />
            <HireNewsSection isPaginate={false} itemsPerPage={4} />
            <RegisterSection />
        </>
    );
};

export default HireDetailPage;
