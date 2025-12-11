import { useState } from "react";
import { newsCategories, newsArticles } from "../data/news";
import { ArrowLeft, ArrowRight, ArrowRightIcon } from "../components/Icons";
import NavButton from "../components/NavButton";
import Decor from "./Decor";
import Button from "./Button";
import NewsCard from "./NewsCard";
import { usePagination } from "./usePagination";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const NewsSection = ({ itemsPerPage, isHomePage }) => {
    // State để quản lý tab đang chọn
    const [activeTab, setActiveTab] = useState("all");

    const { currentPage, totalPages, currentData, handlePageChange } = usePagination({
        data: newsArticles,
        itemsPerPage,
    });

    console.log(newsArticles);
    console.log(currentData);

    return (
        <section className="py-15 bg-white">
            <div className="max-w-[1240px] mx-auto">
                {/* Header News Home Page */}
                {isHomePage && (
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-500 relative inline-block mb-6 pb-3">
                            Tin Tức
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                <Decor />
                            </div>
                        </h2>
                        <p className="text-[#404040] font-medium text-lg mt-4 mx-auto">
                            Nắm bắt những kiến thức marketing mới nhất, xu hướng thương hiệu, mẹo tối ưu quảng cáo và
                            case study thực tế từ Outfiz Agency.
                        </p>
                    </div>
                )}
                {/* --- Filter Menu Bar --- */}
                <div className="bg-[#F5F5F5] py-3 px-6 rounded-[10px] flex items-center gap-5 mb-12 mx-auto">
                    {/* Pre Button */}
                    <div className="hidden md:block">
                        <NavButton className="bg-white border-none w-9 h-9">
                            <ArrowLeft className="w-3 h-3" />
                        </NavButton>
                    </div>

                    {/* List Categories */}
                    <div className="flex-1 flex gap-5 overflow-x-hidden items-center justify-start">
                        {newsCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`
                  whitespace-nowrap px-8 rounded-[10px] font-semibold text-lg transition-all border md:h-14
                  flex items-center justify-center  
                  ${
                      activeTab === cat.id
                          ? "bg-white text-brand border-brand shadow-sm" // Active Style
                          : "text-[#737373] border-[#E9E9E9] bg-white" // Inactive Style
                  }
                `}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Next Button */}
                    <div className="hidden md:block">
                        <NavButton className="bg-white border-none w-9 h-9">
                            <ArrowRight className="w-3 h-3" />
                        </NavButton>
                    </div>
                </div>
                {/* List News */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentData.map((article) => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
                {/* --- Button View All (Bottom) --- */}
                {isHomePage && (
                    <div className="flex justify-center mt-10">
                        <Link to="/tin-tuc">
                            <Button className="w-[211px]!">
                                Xem tất cả tin tức
                                <ArrowRightIcon />
                            </Button>
                        </Link>
                    </div>
                )}

                {/*  Pagination For Project Page */}
                {!isHomePage && (
                    <Pagination totalPages={totalPages} currentPage={currentPage} onChange={handlePageChange} />
                )}
            </div>
        </section>
    );
};

export default NewsSection;
