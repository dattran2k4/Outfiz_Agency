import Decor from "./Decor";
import icon1 from "../images/icons/location.svg";
import icon2 from "../images/icons/location.svg";
import icon3 from "../images/icons/location.svg";

import Button from "./Button";
import { Link } from "react-router-dom";

const HireDetail = ({ data }) => {
    return (
        <>
            <div className="mx-auto max-w-[1240px] py-15">
                <div className="flex items-center gap-x-10">
                    {/* Left */}
                    <div className="w-[400px] h-[400px]">
                        <img src={data.image} className="w-full h-full object-cover" alt="" />
                    </div>
                    {/* Right */}
                    <div className="flex flex-col items-start">
                        <h2 className="text-[40px] font-bold leading-[5/4] mb-3 text-brand">{data.title}</h2>
                        <Decor />

                        <div className="flex flex-col gap-y-3">
                            <div className="flex items-center gap-[5px] mt-10">
                                <div className="w-6 h-6">
                                    <img src={icon1} alt="UI-UX Designer" className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-[120px]">
                                    <p className="text-[20px] text-[#404040] font-medium">Địa điểm</p>
                                </div>

                                <p className="text-[20px] text-[#404040] font-medium">
                                    : 28 Nguyễn Đức Trung, Thanh Khê, Đà Nẵng
                                </p>
                            </div>

                            <div className="flex items-center gap-[5px]">
                                <div className="w-6 h-6">
                                    <img src={icon2} alt="UI-UX Designer" className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-[120px]">
                                    <p className="text-[20px] text-[#404040] font-medium">Vị trí</p>
                                </div>
                                <p className="text-[20px] text-[#404040] font-medium">: Internship</p>
                            </div>

                            <div className="flex items-center gap-[5px]">
                                <div className="w-6 h-6 flex justify-center items-center">
                                    <img src={icon3} alt="UI-UX Designer" className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-[120px]">
                                    <p className="text-[20px] text-[#404040] font-medium">Lương</p>
                                </div>
                                <p className="text-[20px] text-[#404040] font-medium">: Ít nhất 200 triệu</p>
                            </div>
                        </div>
                    </div>
                </div>
                <DetailSection />
                <DetailSection />
                <DetailSection />
                <Link to="../ung-tuyen">
                    <Button className="w-[173px] mx-auto mt-5">Ứng tuyển ngay</Button>
                </Link>
            </div>
        </>
    );
};

const DetailSection = () => {
    return (
        <>
            <div className="w-full h-auto p-6 bg-white rounded-[15px] border border-[#E5E5E5] mt-5 shadow-[4px_4px_8px_0px_#0000000D]">
                <h3 className="text-brand font-bold text-20px">Mô tả công việc</h3>
                <p className="text-[#333333] font-medium">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, hic impedit, neque libero
                    doloremque eius sunt, id officiis rem tempora error sit unde. Itaque officia ea rem voluptate fugit
                    sequi! Nemo soluta, nulla ipsam facilis voluptates exercitationem atque assumenda totam quibusdam
                    veniam quaerat modi enim, quae labore doloribus perferendis illo? Ducimus blanditiis possimus
                    provident facere, ab magnam maxime unde totam! Dolore corporis alias dolorum illo saepe porro
                    possimus libero numquam nemo iste explicabo quas veritatis iure dolores commodi, laborum optio
                    fugiat quod consequuntur neque excepturi voluptate consequatur. Possimus, consectetur quibusdam!
                    Iste tenetur qui doloribus maxime itaque rem repellat exercitationem labore, voluptatibus atque eum
                    modi pariatur reprehenderit beatae. Corporis id totam vitae repellendus dolorum quisquam dolorem,
                    explicabo aliquid nihil, quae et?
                </p>
                <p className="text-[#333333] font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eligendi possimus quasi dolores
                    voluptatum qui a, at non explicabo modi culpa, accusantium, porro corporis hic dicta voluptatem enim
                    ullam quos.
                </p>
            </div>
        </>
    );
};

export default HireDetail;
