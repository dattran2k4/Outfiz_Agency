import { Link } from "react-router-dom";
import Button from "./Button";
import { ArrowRightIcon } from "./Icons";

const HireCard = ({ job }) => {
    return (
        <>
            <article
                key={job.id}
                className="bg-white rounded-[15px] shadow-[4px_4px_8px_0px_#0000000D] border border-[#D4D4D4] hover:shadow-md transition flex flex-col sm:flex-row gap-6 items-center"
            >
                {/* Banner */}
                <div className="w-[200px] h-[200px] ">
                    <img src={job.image} alt={job.title} className="w-full h-full object-cover rounded-[15px]" />
                </div>

                {/* Content */}
                <div className="flex-1 w-full flex flex-col items-start justify-center">
                    {/* Tag */}
                    <span className="px-4 h-9 justify-center items-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] font-medium mb-2.5 inline-flex">
                        {job.type}
                    </span>

                    {/* Job Title */}
                    <h3 className="text-2xl font-bold text-[#404040] mb-2">{job.title}</h3>

                    {/* Deadline */}
                    <p className="text-[#525252] font-medium mb-2.5">Hạn nộp CV: {job.deadline}</p>

                    {/* Job Description */}
                    <Link to="chi-tiet" className="inline-flex items-center justify-center">
                        <Button
                            variant="outline"
                            className="py-[7px]! px-[9.5px]! h-[30px]! w-[149px]! text-[12px] font-semibold"
                        >
                            Mô tả công việc
                            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                        </Button>
                    </Link>
                </div>
            </article>
        </>
    );
};

export default HireCard;
