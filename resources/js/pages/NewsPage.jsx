import NewsHeader from "../components/NewsHeader";
import NewsSection from "../components/NewsSection";
import HireSection from "../components/HireSection";
import RegisterSection from "../components/RegisterSection";
const NewsPage = ({ bgImage }) => {
    return (
        <>
            <NewsHeader bgImage={bgImage} />
            <NewsSection isHomePage={false} itemsPerPage={9} />
            <HireSection />
            <RegisterSection />
        </>
    );
};

export default NewsPage;
