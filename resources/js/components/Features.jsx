import {Zap, Shield, Globe} from 'lucide-react';

const Features = () => {
    const features = [
      {
        icon: <Zap size={24} />,
        title: 'Tốc độ cực nhanh',
        desc: 'Sử dụng Vite để đóng gói giúp quá trình phát triển nhanh gấp 10 lần so với Webpack truyền thống.',
        color: 'bg-yellow-100 text-yellow-600',
      },
      {
        icon: <Shield size={24} />,
        title: 'Bảo mật tuyệt đối',
        desc: 'Thừa hưởng mọi tính năng bảo mật của Laravel: CSRF protection, Authentication, Authorization.',
        color: 'bg-green-100 text-green-600',
      },
      {
        icon: <Globe size={24} />,
        title: 'Chuẩn SEO',
        desc: 'Dễ dàng tối ưu hóa SEO server-side rendering hoặc cấu hình meta tags linh hoạt.',
        color: 'bg-blue-100 text-blue-600',
      },
    ];
  
    return (
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Tại sao chọn Laravel + React?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Công cụ mạnh mẽ giúp bạn triển khai ý tưởng từ bản vẽ đến sản phẩm thực tế trong thời gian ngắn nhất.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Features;