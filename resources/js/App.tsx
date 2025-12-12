import HomePage from "./pages/HomePage.jsx";
import { serviceData } from "./data/service";
import MainLayout from "./layouts/MainLayout.jsx";
import "../css/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import bgImg from "./images/background.png";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import NewsDetailPage from "./pages/NewsDetailPage.jsx";
import HirePage from "./pages/HirePage.jsx";
import HireDetailPage from "./pages/HireDetailPage.jsx";
import ApplyPage from "./pages/ApplyPage.jsx";

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
            {
                //TO-DO replace chi-tiet -> slug
                path: "tuyen-dung",
                element: <HirePage bgImage={bgImg} />,
            },
            {
                //TO-DO replace chi-tiet -> slug
                path: "tuyen-dung/chi-tiet",
                element: <HireDetailPage bgImage={bgImg} />,
            },

            {
                //TO-DO replace chi-tiet -> slug
                path: "ung-tuyen",
                element: <ApplyPage bgImage={bgImg} />,
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
