import NewsDetailHeader from "../components/NewsDetailHeader";
import NewsArticle from "../components/NewsArticle";
import NewsSection from "../components/NewsSection";
import HireSection from "../components/HireSection";
import RegisterSection from "../components/RegisterSection";

const NewsDetailPage = ({ bgImage }) => {
    //TO-DO useParam to get slug

    return (
        <>
            <NewsDetailHeader bgImage={bgImage} />
            <NewsArticle />
            <NewsSection isHomePage={true} />
            <HireSection />
            <RegisterSection />
        </>
    );
};

export default NewsDetailPage;
