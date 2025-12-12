import { useEffect } from "react";
import ProjectDetailHeader from "../components/ProjectDetailHeader";
import ProjectDetailIntro from "../components/ProjectDetailIntro";
import { useParams } from "react-router-dom";
import { projectData } from "../data/project";
import ProjectDetailInfor from "../components/ProjectDetailInfor";
import ProjectDetailTarget from "../components/ProjectDetailTarget";
import ProjectDetailSolution from "../components/ProjectDetailSolution";
import ProjectDetailResult from "../components/ProjectDetailResult";
import ProjectDetailReview from "../components/ProjectDetailReview";
import RegisterSection from "../components/RegisterSection";
import ProjectSection from "../components/ProjectSection";

const ProjectDetailPage = ({ bgImage = "" }) => {
    const { slug } = useParams();

    const project = projectData.find((p) => p.slug === slug);

    if (!project) {
        return <div className="text-center py-20">Không tìm thấy dự án</div>;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <>
            <ProjectDetailHeader bgImg={bgImage} projectName={project.title} projectImg={project.image} />
            <ProjectDetailIntro data={project.overview} />
            <ProjectDetailInfor data={project.clientSection} />
            <ProjectDetailTarget data={project.aiming} />
            <ProjectDetailSolution data={project.solutions} />
            <ProjectDetailResult data={project.results} />
            <ProjectDetailReview data={project.reviews} />
            <RegisterSection />
            <ProjectSection itemsPerPage={3} isHomePage={true} data={projectData} />
        </>
    );
};

export default ProjectDetailPage;
