import arrrowRightIcon from "../images/icons/arrow-right.svg";

const Pagination = ({ totalPages, currentPage, onChange }) => {
    const getPages = () => {
        const pages = [];

        if (totalPages <= 5) {
            // Hiển thị hết nếu ít trang
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 3) {
            return [1, 2, 3, "...", totalPages];
        }

        if (currentPage >= totalPages - 2) {
            return [1, "...", totalPages - 2, totalPages - 1, totalPages];
        }

        return [1, "...", currentPage, currentPage + 1, "...", totalPages];
    };

    const pages = getPages();

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-2 mt-8">
            {/* Pages */}
            {pages.map((page, index) => {
                if (page === "...") {
                    return (
                        <span key={index} className="px-3 py-2">
                            ...
                        </span>
                    );
                }

                return (
                    <button
                        key={index}
                        onClick={() => onChange(page)}
                        className={`w-10 h-10 rounded-full font-semibold transition text-[#404040]
                            ${currentPage === page ? "bg-brand text-white" : " hover:bg-orange-200 cursor-pointer"}
                        `}
                    >
                        {page}
                    </button>
                );
            })}

            {/* Next */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onChange(currentPage + 1)}
                className="cursor-pointer"
            >
                <img src={arrrowRightIcon} alt="" />
            </button>
        </div>
    );
};

export default Pagination;
