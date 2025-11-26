import { PhoneIcon, MailIcon, GPSIcon, FacebookIcon, InstagramIcon, TiktokIcon } from './Icons';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Footer Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">

          {/* Cột trái (Thông tin công ty) - Chiếm 5 phần */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-6">
              <Logo className="h-16 w-auto mb-4" /> {/* Logo to hơn chút */}
            </div>

            <h3 className="font-bold text-gray-800 uppercase mb-3 leading-tight">
              CÔNG TY TNHH THƯƠNG MẠI & DỊCH VỤ OUTFIZ
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Tự hào đồng hành cùng hơn 100 doanh nghiệp Việt Nam phát triển kinh doanh từ mạng xã hội
            </p>
          </div>

          {/* Cột phải (Links) - Chiếm 7 phần */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Introduction */}
            <div>
              <h4 className="font-bold text-gray-700 uppercase mb-4 tracking-wide">
                Giới thiệu
              </h4>
              <ul className="space-y-3">
                {['Về chúng tôi', 'Dự án', 'Tin tức', 'Tuyển dụng'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-amber-500 transition text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service */}
            <div>
              <h4 className="font-bold text-gray-700 uppercase mb-4 tracking-wide">
                Dịch vụ
              </h4>
              <ul className="space-y-3">
                {[
                  'Quản trị & Chăm sóc Social',
                  'Thiết kế bộ nhận diện thương hiệu',
                  'Quảng cáo đa nền tảng',
                  'Thiết kế Website/LandingPage',
                  'SEO tổng thể'
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-amber-500 transition text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Mid */}
        <div className="border-t border-gray-200 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Hotline & Email */}
          <div className="lg:col-span-5 space-y-4">
            {/* Hotline */}
            <div className="flex items-start gap-3">
              <span className="text-amber-500 mt-1">
                <PhoneIcon className="w-5 h-5" />
              </span>
              <div>
                <h5 className="font-bold text-gray-700 text-sm">Hotline dịch vụ</h5>
                <p className="text-gray-500 text-sm">(+84) 90 1900 626 - (+84) 905 751 601</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <span className="text-amber-500 mt-1">
                <MailIcon className="w-5 h-5" />
              </span>
              <div>
                <h5 className="font-bold text-gray-700 text-sm">Email</h5>
                <p className="text-gray-500 text-sm">agency.outfiz.vn@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="lg:col-span-7 flex items-start gap-3">
            <span className="text-amber-500 mt-1">
              <GPSIcon className="w-5 h-5" />
            </span>
            <div>
              <h5 className="font-bold text-gray-700 text-sm">Văn phòng</h5>
              <p className="text-gray-500 text-sm leading-relaxed">
                Số 28, đường Nguyễn Đức Trung, phường Thanh Khê Đông, quận Thanh Khê, Đà Nẵng
              </p>
            </div>
          </div>
        </div>


        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <div className="text-gray-400 text-center md:text-left">
            COPYRIGHT 2025 OUTFIZ CO. LTD. ALL RIGHTS RESERVED
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-500 hidden sm:block">Kết nối với Outfiz tại:</span>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center hover:bg-amber-500 transition">
                <FacebookIcon className="w-5 h-5" />
              </a>

              {/* Tiktok */}
              <a href="#" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
                <TiktokIcon className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center hover:bg-purple-600 transition bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;