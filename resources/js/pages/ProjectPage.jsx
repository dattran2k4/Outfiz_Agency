import ProjectHeader from "../components/ProjectHeader";
import ProjectSection from "../components/ProjectSection";
import { projectData } from "../data/project";
import { serviceData } from "../data/service";
import FeedBackSection from "../components/FeedbackSection";
import RegisterSection from "../components/RegisterSection";
import NewsSection from "../components/NewsSection";
import { useState } from "react";
import ServiceCategories from "../components/ServiceCategories";

const ProjectPage = ({ bgImage }) => {
    const [activeFilter, setActiveFilter] = useState("all");

    const serviceCategories = [
        {
            title: "Tất cả",
            slug: "all",
        },
        ...serviceData.map((service) => ({
            title: service.title,
            slug: service.link,
        })),
    ];

    const filteredProjects =
        activeFilter === "all" ? projectData : projectData.filter((p) => p.serviceLink === activeFilter);

    return (
        <>
            <ProjectHeader bgImg={bgImage} />
            <ServiceCategories categories={serviceCategories} activeFilter={activeFilter} onSelect={setActiveFilter} />
            <ProjectSection isHomePage={false} itemsPerPage={9} data={filteredProjects} />
            <FeedBackSection />
            <RegisterSection />
            <NewsSection />
        </>
    );
};

export default ProjectPage;
