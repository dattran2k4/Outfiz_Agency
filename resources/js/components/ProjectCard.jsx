import ViewDetailButton from "../components/ViewDetailButton";

const ProjectCard = ({ data }) => {
    const { image, title, tag, description, slug } = data;
    return (
        <>
            <article className="bg-white border border-[#E5E5E5] rounded-[20px] overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center py-6 px-4">
                {/* Project Img */}
                <div className="w-full h-[235px] rounded-2xl overflow-hidden mb-6 relative">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>

                {/* Tag */}
                <div className="mb-4">
                    <span className="px-4 py-2 rounded-full border border-[#D4D4D4] text-[#737373] text-sm bg-white">
                        {tag}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{title}</h3>

                {/* Description */}
                <p className="text-[#404040] text-center text-sm mb-3 line-clamp-2">{description}</p>

                {/* Detail Button */}
                <ViewDetailButton href={slug} />
            </article>
        </>
    );
};

export default ProjectCard;
