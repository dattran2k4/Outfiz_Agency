import Logo from "../images/logo.svg";

const LogoIcon = ({ className }) => {
    return (
        <img
            src={Logo} // Đường dẫn tính từ thư mục public
            alt="Outfiz Agency Logo"
            className={`w-full h-full object-cover ${className}`}
        />
    );
};

export default LogoIcon;
