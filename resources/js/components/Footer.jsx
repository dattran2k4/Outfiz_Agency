import { PhoneIcon, MailIcon, GPSIcon, FacebookIcon, InstagramIcon, TiktokIcon } from './Icons';
import Background from "../images/footer-bg.png";
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute inset-0 -z-10 w-full">
        <img src={Background} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="mx-auto px-4 max-w-[1240px] py-[60px]">

        {/* Footer Top */}
        <div className="flex justify-start gap-[60px] mb-12">

          <div className="flex flex-col items-start w-[520px]">
            <div className="mb-6 w-[115px] h-[45px]">
              <Logo className="h-full w-full" /> {/* Logo to hơn chút */}
            </div>

            <h3 className="font-semibold text-[#404040] uppercase mb-2 leading-tight">
              CÔNG TY TNHH THƯƠNG MẠI & DỊCH VỤ OUTFIZ
            </h3>

            <p className="text-[#525252]leading-snug">
              Tự hào đồng hành cùng hơn 100 doanh nghiệp Việt Nam phát triển kinh doanh từ mạng xã hội
            </p>
          </div>

          {/* Cột phải (Links) - Chiếm 7 phần */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">

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
        <div className="flex gap-3">

          {/* Hotline & Email */}
          <div className="space-y-4 flex">
            {/* Hotline */}
            <div className="flex items-start gap-3">
              <span className="text-brand">
                <PhoneIcon className="w-6 h-6" color="currentColor" />
              </span>
              <div>
                <h5 className="font-bold text-gray-700 text-sm mb-2">Hotline dịch vụ</h5>
                <p className="text-gray-500 text-sm">(+84) 90 1900 626 - (+84) 905 751 601</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 ml-3">
              <span className="text-brand">
                <MailIcon className="w-6 h-6" />
              </span>
              <div>
                <h5 className="font-bold text-gray-700 text-sm mb-2">Email</h5>
                <p className="text-gray-500 text-sm">agency.outfiz.vn@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="flex items-start gap-3">
            <span className="text-brand">
              <GPSIcon className="w-6 h-6" />
            </span>
            <div>
              <h5 className="font-bold text-gray-700 text-sm mb-2">Văn phòng</h5>
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
              <a href="#" className="w-8 h-8 rounded-full text-white flex items-center justify-center transition">
                <FacebookIcon className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center ">
                <InstagramIcon className="w-6 h-6" />
              </a>

              {/* Tiktok */}
              <a href="#" className="w-8 h-8 rounded-full  text-white flex items-center justify-center transition">
                <TiktokIcon className="w-6 h-6" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;