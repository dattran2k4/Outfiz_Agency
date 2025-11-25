import React, { useState } from 'react';
import Button from './Button';
import { VietnamFlagIcon, PhoneIcon, ChevronDownIcon } from './Icons';
import LogoIcon from './Logo'
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
      <div className="w-full bg-gray-50 p-6 flex justify-center">
        
        {/* Header chính */}
        <header className="w-full max-w-[1200px] bg-white rounded-[15px] shadow-lg px-10 py-3 flex items-center justify-between">
          
            <a href="/" className="cursor-pointer flex items-center">
                {/* Component Logo của bạn */}
                <LogoIcon className="h-10 w-auto" /> 
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
                <ChevronDownIcon className="w-[14px] h-[14px]" color="currentColor" />
              )}
            </a>
          ))}
        </nav>
  
          {/* 3. Right Actions (Language & CTA) */}
          <div className="flex items-center gap-4">
          
          {/* Button Tiếng Việt */}
          <Button variant="outline">
            <VietnamFlagIcon className="w-5 h-5" />
            Tiếng Việt
            {/* Arrow Icon cho nút ngôn ngữ: Màu cam (brand) */}
            <ChevronDownIcon className="w-[14px] h-[14px]" color="#FAAF3A"/>
          </Button>

          {/* Button Liên hệ */}
          <Button 
            variant="primary" 
            // Truyền Icon Phone vào, set màu trắng
            icon={<PhoneIcon className="w-[20px] h-[20px]" color="white" />}
          >
            Liên hệ ngay
          </Button>
          
        </div>
  
        </header>
      </div>
    );
  };
  
  export default Header;