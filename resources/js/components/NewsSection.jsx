import { useState } from 'react';
import {newsCategories, newsArticles} from '../data/news';
import Button from '../components/Button';
import {ArrowLeft, ArrowRight, ArrowRightIcon} from '../components/Icons';
import NavButton from '../components/NavButton';

const NewsSection = () => {
  // State để quản lý tab đang chọn
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* --- Header --- */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-3 relative inline-block pb-2">
            Tin Tức
             {/* Decoration */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              <span className="w-5 h-1.5 bg-gradient-to-r from-[#FF782E] to-[#FAAF3A] rounded-full"></span>
              <span className="w-10 h-1.5 bg-gradient-to-r from-[#FF782E] to-[#FAAF3A] rounded-full"></span>
            </div>
          </h2>
          <p className="text-[#404040] text-lg mt-4 mx-auto">
            Nắm bắt những kiến thức marketing mới nhất, xu hướng thương hiệu, mẹo tối ưu quảng cáo và case study thực tế từ Outfiz Agency.
          </p>
        </div>

        {/* --- Filter Menu Bar --- */}
        <div className="bg-gray-50 p-2 rounded-xl flex items-center gap-2 mb-12 max-w-4xl mx-auto">
          {/* Pre Button */}
          <div className="hidden md:block">
             <NavButton className="bg-white border-none shadow-sm w-8 h-8"><ArrowLeft className="w-4 h-4" /></NavButton>
          </div>

          {/* List Categories */}
          <div className="flex-1 flex gap-3 overflow-x-auto scrollbar-hide px-2 py-1 items-center justify-start md:justify-center">
            {newsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  whitespace-nowrap px-6 py-2 rounded-lg font-semibold text-sm transition-all border
                  ${activeTab === cat.id 
                    ? 'bg-white text-amber-500 border-amber-500 shadow-sm' // Active Style
                    : 'bg-transparent text-gray-500 border-transparent hover:bg-gray-200' // Inactive Style
                  }
                `}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <div className="hidden md:block">
            <NavButton className="bg-white border-none shadow-sm w-8 h-8"><ArrowRight className="w-4 h-4" /></NavButton>
          </div>
        </div>

        {/* List News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              
              {/* Image Card */}
              <div className="relative rounded-2xl overflow-hidden mb-5">
                {/* Img News */}
                <div className="aspect-4/3 overflow-hidden">
                    <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                </div>
                
                {/* Lớp phủ màu xanh nhẹ (gradient overlay) để giống ảnh mẫu */}
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition"></div>

                {/* Date Badge (Nằm đè lên ảnh ở giữa cạnh dưới) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-amber-400 text-white text-xs font-bold px-4 py-1.5 rounded-t-lg shadow-sm">
                  {article.date}
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                {/* Category Tag */}
                <div className="mb-3">
                   <span className="inline-block px-3 py-1 border border-gray-200 rounded-full text-gray-500 text-xs uppercase font-medium">
                      {article.category}
                   </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-amber-500 transition">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Link */}
                <a href={article.slug} className="text-amber-500 font-semibold text-sm hover:underline underline-offset-4 inline-flex items-center gap-1">
                  Xem chi tiết
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* --- Button View All (Bottom) --- */}
        <div className="text-center mt-16">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2 mx-auto">
            Xem tất cả tin tức
            <ArrowRightIcon />
          </button>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;