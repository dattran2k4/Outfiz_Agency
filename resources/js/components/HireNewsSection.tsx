import { hiringJobs } from "../data/hire";
import HireCard from "./HireCard";
import { usePagination } from "./usePagination";
import Pagination from "./Pagination";
import Decor from "./Decor";
import Button from "./Button";
import { ArrowRightIcon } from "./Icons";

const HireNewsSection = ({ itemsPerPage = 6, heading = null, isPaginate = true }) => {
    const { currentPage, totalPages, currentData, handlePageChange } = usePagination({
        data: hiringJobs,
        itemsPerPage: itemsPerPage,
    });
    return (
        <>
            <div className="max-w-[1240px] mx-auto">
                <h2 className="text-[40px] text-brand font-bold text-center">{heading || "Tin tuyển dụng"}</h2>
                <Decor className="justify-center mt-3" />
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-10`}>
                    {currentData.map((article) => (
                        <HireCard job={article} />
                    ))}
                </div>

                {isPaginate && (
                    <Pagination totalPages={totalPages} currentPage={currentPage} onChange={handlePageChange} />
                )}

                {!isPaginate && (
                    <Button className="w-[253px] mx-auto mt-10">
                        Xem tất cả tuyển dụng
                        <ArrowRightIcon />
                    </Button>
                )}
            </div>
        </>
    );
};

export default HireNewsSection;
