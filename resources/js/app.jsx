import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import MainLayout from "./layouts/MainLayout";
import "../css/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // MainLayout bao bọc các route con
        children: [
            {
                index: true, // Route mặc định (Trang chủ)
                element: <HomePage />,
            },
            {
                path: "services",
                element: <ServicePage />,
            },
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
