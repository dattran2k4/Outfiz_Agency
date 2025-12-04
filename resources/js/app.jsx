import HomePage from "./pages/HomePage";
import { serviceData } from "./data/service";
import MainLayout from "./layouts/MainLayout";
import "../css/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServiceDetailPage from "./pages/ServiceDetailPage";

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
                element: <ServiceDetailPage />,
            })),
            // Thêm các trang khác tại đây
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
