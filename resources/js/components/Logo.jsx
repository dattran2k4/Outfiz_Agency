const LogoIcon = ({ className }) => {
    return (
        <img 
          src="/images/logo.svg" // Đường dẫn tính từ thư mục public
          alt="Outfiz Agency Logo" 
          className={className} 
        //   style={{ objectFit: 'contain' }}
        />
      );
}

export default LogoIcon;