import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
    return (
        <article key={article.id} className="group cursor-pointer p-6">
            {/* Image Card */}
            <div className="relative rounded-2xl overflow-hidden mb-6">
                {/* Img News */}
                <div className="aspect-4/3 overflow-hidden">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border border-[#FEEFD8] bg-brand text-[#404040] text-sm font-semibold px-4 py-2 rounded-t-[10px] shadow-sm">
                    {article.date}
                </div>
            </div>

            {/* Content */}
            <div className="px-2">
                {/* Category Tag */}
                <div className="mb-3">
                    <span className="inline-flex justify-center items-center px-6 py-1 border border-[#D4D4D4] bg-[#F9F9F9] rounded-full text-gray-500 text-xs uppercase font-medium h-9">
                        {article.category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-semibold text-[#404040] mb-3 line-clamp-1 group-hover:text-amber-500 transition">
                    {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#525252] text-lg leading-[4/3] mb-6 line-clamp-2">{article.excerpt}</p>

                {/* Link */}
                <Link
                    to="chi-tiet"
                    className="text-brand font-semibold underline hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                    Xem chi tiết
                </Link>
            </div>
        </article>
    );
};

export default NewsCard;
