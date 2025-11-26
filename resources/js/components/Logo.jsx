import Logo from '../images/logo.svg';

const LogoIcon = ({ className }) => {
    return (
        <img 
          src={Logo} // Đường dẫn tính từ thư mục public
          alt="Outfiz Agency Logo" 
          className={className} 
        //   style={{ objectFit: 'contain' }}
        />
      );
}

export default LogoIcon;