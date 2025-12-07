import StarRating from "./StarRating";
import BlackBgImg from "../images/feedback/black-bg.png";
import BgDetailImg from "../images/feedback/bg-detail.png";
import BgAvatarImg from "../images/feedback/background-avatar.png";
const QuoteIcon = () => (
    <svg
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="#FAAF3A"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 opacity-80"
    >
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
    </svg>
);

const ProjectDetailReview = ({ data }) => {
    // Kiểm tra dữ liệu
    if (!data) return null;

    return (
        <section className="w-full relative h-auto py-15">
            <div className="absolute w-full h-full opacity-80">
                <img src={BlackBgImg} alt="" className="w-full h-full object-cover object-center" />
            </div>

            <div className="mx-auto text-center relative">
                {/* 1. Header Section */}
                <h2 className="text-3xl md:text-4xl font-bold text-brand text-center mb-12 mt-12">
                    Đánh giá của khách hàng
                </h2>

                {/* 2. Review Card */}
                <div className="w-[709px] h-auto flex items-center justify-center relative mx-auto py-[25.5px] rounded-[15px] border-t-3 border-t-[#737373] shadow-[0px_4px_4px_0px_#0000001A]">
                    <div className="absolute top-0 bottom-0">
                        <img src={BgDetailImg} className="w-full h-full object-cover rounded-[15px]" alt="" />
                    </div>
                    <div className="flex flex-col relative w-full items-center">
                        {/* Info Client & Rating  */}
                        <div className="flex gap-x-3">
                            {/* Avatar */}
                            <div className="w-[83px] h-[85px] relative flex items-center justify-center">
                                <img src={BgAvatarImg} className="w-full h-full object-cover absolute" alt="" />
                                <div className="rounded-full w-15 h-15 relative">
                                    <img src={data.avatar} className="object-cover w-full h-full" alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <h5 className="text-[#404040] text-lg font-semibold">{data.name}</h5>
                                <p className="text-sm text-[#525252] mt-0.5 mb-2">{data.role}</p>
                                <StarRating rating={data.rating} />
                            </div>
                        </div>
                        {/* Comment */}
                        <div className="space-y-4 mt-6 max-w-[573px] h-full">
                            {data.content &&
                                data.content.map((text, index) => (
                                    <p key={index} className="text-[#404040] leading-[4/3] text-justify">
                                        {text} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                                        quisquam quae esse, ex facilis numquam reiciendis facere atque cumque repellat
                                        eos non quaerat consequuntur obcaecati nobis? Optio neque velit tempore!
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailReview;
