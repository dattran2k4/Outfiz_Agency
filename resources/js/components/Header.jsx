import React, { useState } from 'react';
import Button from './Button';
import { VietnamFlagIcon, PhoneIcon, ChevronDownIcon } from './Icons';
import LogoIcon from './Logo';
const Header = () => {
    // Dữ liệu menu để dễ quản lý
    const navItems = [
      { label: "Về chúng tôi", hasDropdown: false },
      { label: "Dịch vụ", hasDropdown: true },
      { label: "Dự án", hasDropdown: false },
      { label: "Tin tức", hasDropdown: false },
      { label: "Tuyển dụng", hasDropdown: false },
    ];
  
    return (
      // Container ngoài cùng giả lập nền mờ của trang web (để thấy rõ header nổi)
        <>
        {/* Header chính */}
        <header className="w-full mx-auto max-w-[1240px] bg-white rounded-2xl shadow-lg px-10 py-5 flex items-center justify-between">
          
            <a href="/" className="cursor-pointer flex items-center">
                {/* Component Logo của bạn */}
                <LogoIcon className="h-11 w-auto" /> 
            </a>

          {/* 2. Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              // Class "group" ở đây để xử lý hover icon
              className="group text-gray-600 hover:text-brand font-medium text-sm transition-colors flex items-center gap-1"
            >
              {item.label}
              
              {/* Nếu có Dropdown thì hiện Arrow Down Icon */}
              {/* Dùng currentColor để khi hover text đổi màu cam, icon cũng đổi theo */}
              {item.hasDropdown && (
                <ChevronDownIcon className="w-3.5 h-3.5" color="currentColor" />
              )}
            </a>
          ))}
        </nav>
  
          {/* 3. Right Actions (Language & CTA) */}
          <div className="flex items-center gap-4">
          
          {/* Button Tiếng Việt */}
          <Button variant="outline">
            <VietnamFlagIcon />
            Tiếng Việt
            {/* Arrow Icon cho nút ngôn ngữ: Màu cam (brand) */}
            <ChevronDownIcon  color="#FAAF3A"/>
          </Button>

          {/* Button Liên hệ */}
          <Button 
            variant="primary" 
            // Truyền Icon Phone vào, set màu trắng
            icon={<PhoneIcon color="white" />}
          >
            Liên hệ ngay
          </Button>
          
        </div>
  
        </header>
        </>
    );
  };
  
  export default Header;