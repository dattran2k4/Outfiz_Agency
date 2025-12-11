const ProjectDetailHeader = ({ bgImg, projectName, projectImg }) => {
    return (
        <>
            <div className="relative h-[669px]">
                <div className="absolute h-full w-full -z-999">
                    <img src={bgImg} className="w-full h-full object-cover" alt="Background" />
                </div>
                <div className="max-w-[1240px] mx-auto h-full">
                    <div className="flex items-center justify-between gap-x-[35px] h-full">
                        <div className="flex flex-col gap-y-3 w-[605px]">
                            <h1 className="text-brand text-[40px] font-bold">{projectName}</h1>
                            <p className="font-medium leading-[4/3] text-[#404040]">
                                OUTFIZ đã đồng hành cùng hơn 30+ thương hiệu trong đa dạng lĩnh vực như F&B, thời trang,
                                giáo dục, du lịch và làm.
                            </p>
                        </div>
                        <div className="w-[600px] h-[424px]">
                            <img src={projectImg} alt={projectName} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailHeader;
