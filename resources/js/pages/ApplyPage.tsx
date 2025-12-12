import ApplyHeader from "../components/ApplyHeader";
import RegisterForm from "../components/RegisterForm";
import HireNewsSection from "../components/HireNewsSection";
import RegisterSection from "../components/RegisterSection";
const ApplyPage = ({ bgImage = ""}) => {
    return (
        <>
            <ApplyHeader bgImage={bgImage} />
            <RegisterForm />
            <HireNewsSection isPaginate={false} itemsPerPage={4} />
            <RegisterSection />
        </>
    );
};

export default ApplyPage;
