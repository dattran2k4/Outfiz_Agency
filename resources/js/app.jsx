import HomePage from "./pages/HomePage";
import { serviceData } from "./data/service";
import MainLayout from "./layouts/MainLayout";
import "../css/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProjectPage from "./pages/ProjectPage";
import bgImg from "./images/bg.png";
import { projectData } from "./data/project";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // MainLayout bao bọc các route con
        children: [
            {
                index: true, // Route mặc định (Trang chủ)
                element: <HomePage />,
            },
            ...serviceData.map((service) => ({
                path: service.link,
                element: <ServiceDetailPage bgImage={bgImg} />,
            })),
            {
                path: "du-an",
                element: <ProjectPage bgImage={bgImg} />,
            },
            {
                path: "du-an/:slug",
                element: <ProjectDetailPage bgImage={bgImg} />,
            },
            {
                path: "tin-tuc",
                element: <NewsPage bgImage={bgImg} />,
            },
            {
                //TO-DO replace chi-tiet -> slug
                path: "tin-tuc/chi-tiet",
                element: <NewsDetailPage bgImage={bgImg} />,
            },
        ],
    },
    {
        path: "*",
        element: <div>404 Not Found</div>,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
