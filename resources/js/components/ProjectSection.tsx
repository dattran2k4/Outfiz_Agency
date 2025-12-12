import { ArrowLeft, ArrowRight, ArrowRightIcon } from "../components/Icons";
import Button from "../components/Button";
import NavButton from "../components/NavButton";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";
import { usePagination } from "./usePagination";
import { Link } from "react-router-dom";

const ProjectSection = ({ itemsPerPage, isHomePage, data }) => {
    // const [currentPage, setCurrentPage] = useState(1);

    // const totalPages = Math.ceil(data.length / itemsPerPage);

    // const startIndex = (currentPage - 1) * itemsPerPage;

    // const currentProjects = data.slice(startIndex, startIndex + itemsPerPage);

    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };

    // useEffect(() => {
    //     setCurrentPage(1);
    // }, [data]);

    const { currentPage, totalPages, currentData, handlePageChange } = usePagination({
        data: data,
        itemsPerPage: itemsPerPage,
    });

    if (!data || data.length === 0) return null;

    return (
        <section className="py-15 bg-white">
            <div className="max-w-[1240px] mx-auto flex flex-col items-center">
                {/* --- Phần Tiêu đề --- */}
                {isHomePage && (
                    <div className="mb-12 w-full text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">Dự Án Nổi Bật</h2>
                        <p className="text-[#404040] font-medium text-lg leading-[4/3]">
                            OUTFIZ đã đồng hành cùng hơn <strong>30+ thương hiệu</strong> trong đa dạng lĩnh vực như
                            F&B, thời trang, giáo dục, du lịch, làm đẹp,...
                        </p>
                    </div>
                )}

                {/* --- Phần Tiêu đề --- */}
                {!isHomePage && (
                    <div className="flex flex-col items-center">
                        <div></div>
                        <div></div>
                    </div>
                )}

                {/* --- Phần Grid Cards & Navigation --- */}
                <div className={`${isHomePage ? "flex items-center justify-between gap-6" : "w-full"}`}>
                    {/* Previous Button */}
                    {isHomePage && (
                        <div className="hidden md:block">
                            <NavButton className="w-10 h-10">
                                <ArrowLeft />
                            </NavButton>
                        </div>
                    )}

                    {/* Cards List */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {currentData.map((project) => (
                            <ProjectCard key={project.id} data={project} />
                        ))}
                    </div>

                    {/* Next Button */}
                    {isHomePage && (
                        <div className="hidden md:block">
                            <NavButton className="w-10 h-10">
                                <ArrowRight />
                            </NavButton>
                        </div>
                    )}
                </div>

                {/*  Pagination For Home Page */}
                {isHomePage && (
                    <div className="flex justify-center mt-8 gap-2">
                        <span className="w-8 h-1.5 bg-amber-500 rounded-full cursor-pointer"></span>
                        <span className="w-8 h-1.5 bg-amber-100 rounded-full cursor-pointer hover:bg-amber-200"></span>
                        <span className="w-8 h-1.5 bg-amber-100 rounded-full cursor-pointer hover:bg-amber-200"></span>
                    </div>
                )}

                {/*  Pagination For Project Page */}
                {!isHomePage && (
                    <Pagination totalPages={totalPages} currentPage={currentPage} onChange={handlePageChange} />
                )}

                {/* Button All --- */}
                {isHomePage && (
                    <Link to="/du-an" className="mt-12 inline-flex w-full justify-center items-center">
                        <Button className="w-[205px]">
                            Xem tất cả dự án
                            <ArrowRightIcon />
                        </Button>
                    </Link>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;
