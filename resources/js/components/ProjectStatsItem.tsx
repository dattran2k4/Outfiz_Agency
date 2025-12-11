const ProjectStatsItem = ({ label, value }) => {
    return (
        <div className="w-full bg-white border border-[#D4D4D4] rounded-[20px] py-4 px-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-[#404040] text-2xl font-semibold mb-3">{label}</h4>

            <span className="text-[#525252]">{value}</span>
        </div>
    );
};

export default ProjectStatsItem;
