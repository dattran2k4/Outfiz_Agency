module.exports = {
  content: [
    "./resources/js/**/*.{js,jsx,ts,tsx}",      // React/JS trong resources
    "./resources/views/**/*.blade.php",         // Blade templates
    "./public/index.html",                      // file HTML nếu có
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FAAF3A',       // Màu chính
        'brand-dark': '#E59A2A', // Hover đậm hơn
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #FF742E 0%, #FFAD2C 97.12%)',
      },
      boxShadow: {
        btn: '0px 4px 10px rgba(250, 175, 58, 0.25)',
      },
    },
  },
  plugins: [],
}
