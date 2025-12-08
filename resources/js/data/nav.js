import { serviceData } from "./service";

export const navItems = [
        { label: "Về chúng tôi", path: "/", hasDropdown: false },
        { label: "Dịch vụ", path: "#", hasDropdown: true, subItems: serviceData },
        { label: "Dự án", path: "/du-an", hasDropdown: false },
        { label: "Tin tức", path: "/tin-tuc", hasDropdown: false },
        { label: "Tuyển dụng", path: "/hire", hasDropdown: false },
];

