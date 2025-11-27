import {projectData} from '../data/project';
import {ArrowLeft, ArrowRight, ArrowRightIcon} from '../components/Icons';
import Button from '../components/Button';
import NavButton from '../components/NavButton';

const ProjectSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">

                {/* --- Phần Tiêu đề --- */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
                        Dự Án Nổi Bật
                    </h2>
                    <p className="text-[#404040] text-lg leading-[4/3]">
                        OUTFIZ đã đồng hành cùng hơn <strong>30+ thương hiệu</strong> trong đa dạng lĩnh vực như F&B, thời trang, giáo dục, du lịch, làm đẹp,...
                    </p>
                </div>

                {/* --- Phần Grid Cards & Navigation --- */}
                <div className="flex items-center justify-between gap-6">

                    {/* Previous Button */}
                    <NavButton>
                        <ArrowLeft />
                    </NavButton>

                    {/* Cards List */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {projectData.map((project) => (
                            <article key={project.id} className="bg-white border border-[#E5E5E5] rounded-[20px] overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center py-6 px-4">

                                {/* Project Img */}
                                <div className="w-full h-[235px] rounded-2xl overflow-hidden mb-6 relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Tag */}
                                <div className="mb-4">
                                    <span className="px-4 py-2 rounded-full border border-[#D4D4D4] text-[#737373] text-sm bg-white">
                                        {project.tag}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-2">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#404040] text-center text-sm mb-3 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Detail Button */}
                                <a href={project.link} className="mt-auto px-6 py-2">
                                    <Button variant="outline" className="cursor-pointer">
                                        Xem chi tiết
                                        <ArrowRightIcon />
                                    </Button>
                                </a>

                            </article>
                        ))}
                    </div>

                    {/* Next Button */}
                    <NavButton >
                        <ArrowRight />
                    </NavButton>
                </div>

                {/*  Pagination */}
                <div className="flex justify-center mt-8 gap-2">
                    <span className="w-8 h-1.5 bg-amber-500 rounded-full cursor-pointer"></span>
                    <span className="w-8 h-1.5 bg-amber-100 rounded-full cursor-pointer hover:bg-amber-200"></span>
                    <span className="w-8 h-1.5 bg-amber-100 rounded-full cursor-pointer hover:bg-amber-200"></span>
                </div>

                {/* Button All --- */}
                <a className="mt-12 inline-flex w-full justify-center items-center">
                    <Button className="w-[205px]">
                        Xem tất cả dự án
                        <ArrowRightIcon />
                    </Button>
                </a>

            </div>
        </section>
    )
}

export default ProjectSection;