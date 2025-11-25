const Footer = () => {
    return (
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold">L</div>
                <span className="font-bold text-xl">LaraReact</span>
              </div>
              <p className="text-sm text-slate-400">
                Nền tảng khởi tạo ứng dụng web hiện đại, nhanh chóng và bảo mật.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Showcase</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-4">Tài nguyên</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-400 transition">Laravel Docs</a></li>
                <li><a href="#" className="hover:text-red-400 transition">React Docs</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Tailwind CSS</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-4">Kết nối</h4>
              <p className="text-sm text-slate-400 mb-4">Đăng ký nhận tin mới nhất từ chúng tôi.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="bg-slate-800 border-none rounded-l-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-red-500 outline-none"
                />
                <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 font-medium text-sm">
                  Gửi
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2025 LaraReact Demo. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;