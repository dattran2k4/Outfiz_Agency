import React from 'react';
import RegisterImg from '../images/register.png';
import RegisterBg from '../images/register-bg.png';
import Button from '../components/Button';

const RegisterSection = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto">
                <div className="flex gap-10 items-center">

                    {/* Left Col */}
                    <div className="relative p-8 md:p-8 rounded-[20px] h-[580px] w-[52.4%]">


                        <img src={RegisterBg} alt="Background" className="absolute rounded-[20px] w-full h-full inset-0 object-cover z-0" />

                        {/* Content */}
                        <div className="relative">

                            <div className="mb-[30px]">
                                <h2 className="text-[40px] font-bold text-brand mb-3">Đăng Ký Tư Vấn</h2>

                                <div className="flex gap-1">
                                    <span className="w-5 h-1.5 bg-linear-to-r from-[#FF782E] to-brand rounded-full"></span>
                                    <span className="w-10 h-1.5 bg-linear-to-r from-[#FF782E] to-brand rounded-full"></span>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="bg-white rounded-2xl border border-brand px-4 py-6 shadow-lg">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Fullname */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-1">
                                                Họ và tên <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Nhập họ và tên..."
                                                className="w-full md:h-9 px-4 py-2 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-sm"
                                            />
                                        </div>

                                        {/* Company */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-1">
                                                Công ty
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Nhập tên công ty..."
                                                className="w-full md:h-9 px-4 py-2 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Phone */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-1">
                                                Số điện thoại <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Nhập số điện thoại..."
                                                className="w-full md:h-9 px-4 py-2 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-sm"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-1">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Nhập email..."
                                                className="w-full md:h-9 px-4 py-2 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* (Textarea) */}
                                    <div className="flex flex-col relative">
                                        <label className="text-sm font-semibold text-gray-700 mb-1">
                                            Nội dung
                                        </label>
                                        <textarea
                                            rows="4"
                                            placeholder="Nhập nội dung..."
                                            className="w-full md:h-[136px] px-4 py-2 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition text-sm resize-none"
                                        ></textarea>
                                        {/* Characters Count */}
                                        <span className="absolute bottom-2 right-2 text-xs text-gray-400">0/250</span>
                                    </div>

                                    {/* Send Button */}
                                    <div className="mt-2 flex justify-end">
                                        <Button variant="primary" className="max-w-[100px]">
                                            Gửi
                                        </Button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>


                    {/* Right Col */}
                    <div className="flex flex-1 flex-col items-center text-center">

                        {/* Avatar */}
                        <div className="w-[238px] h-[237px] mb-[26px]">
                            <img
                                src={RegisterImg}
                                alt="Tư vấn Outfiz"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#404040] mb-4 flex items-center justify-center gap-2 px-5">
                            🚀 Sẵn sàng tăng trưởng cùng <br/> OUTFIZ?
                        </h2>

                        {/* Description */}
                        <p className="text-[#404040] font-medium text-lg mb-7 leading-snug max-w-md">
                            Đừng để thương hiệu của bạn bị mờ nhạt giữa thị trường cạnh tranh khốc liệt! <br />
                            Đăng ký tư vấn ngay hôm nay để được đội ngũ chuyên gia của Outfiz Agency đồng hành xây dựng chiến lược marketing online tổng thể, tối ưu chi phí - tối đa hiệu quả.
                        </p>

                        {/* Hotline */}
                        <a
                            href="tel:0989899898"
                            className="font-semibold"
                        >
                            <Button variant="outline">
                                {/* Phone */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            0989.89.9898
                            </Button>
                            
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default RegisterSection;