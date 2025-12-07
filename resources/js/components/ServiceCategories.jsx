const ServiceCategories = ({ categories, activeFilter, onSelect }) => {
    return (
        <>
            <div className="max-w-[1240px] mx-auto mt-[72px]">
                <div className="flex flex-wrap items-center justify-center gap-x-[19px] gap-y-2">
                    {categories.map((cat) => {
                        return (
                            <button
                                onClick={() => onSelect(cat.slug)}
                                key={cat.slug}
                                className={`rounded-full font-medium  cursor-pointer py-2 px-6 
                                ${
                                    activeFilter === cat.slug
                                        ? "bg-brand text-#FFFFFF"
                                        : "text-#737373 outline outline-#A3A3A3 hover:bg-brand hover:text-#FFFFFF transition-all duration-300 hover:outline-none"
                                }`}
                            >
                                {cat.title}
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ServiceCategories;
