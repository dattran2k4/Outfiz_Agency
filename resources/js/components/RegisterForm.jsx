import { useEffect, useState } from "react";
import { FileIcon } from "./Icons";
import Button from "./Button";
import checkBoxImg from "../images/check-box.png";
const RegisterForm = ({ image }) => {
    // 1. State lưu trữ dữ liệu form
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // 2. Xử lý khi nhập liệu
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // 3. Xử lý khi bấm Gửi
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Giả lập gửi API (Sau này bạn thay code call API thật vào đây)
        setTimeout(() => {
            console.log("Dữ liệu đăng ký:", formData);
            alert("Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.");
            setIsSubmitting(false);
            // Reset form
            setFormData({ fullName: "", phone: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <section className="w-full py-10 ">
            <div className="max-w-[1240px] mx-auto">
                <div className="flex items-center gap-10">
                    {/* --- IMG --- */}
                    <div className="w-[257px] h-[265px] relative min-h-[300px] md:min-h-full">
                        <img
                            src={checkBoxImg}
                            alt="Register Banner"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* --- FORM --- */}
                    <div className="flex-1">
                        {/* Form Inputs */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="rounded-[15px] border border-[#D4D4D4] p-8">
                                {/* Row 1: Tên */}
                                <div className="mb-5">
                                    <label className="text-sm font-semibold text-[#404040]">
                                        Họ và Tên <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        placeholder="Nguyễn Văn A"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="mt-2.5 w-full px-3 py-2 rounded-xl border border-[#A3A3A3] focus:border-brand focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                                    />
                                </div>

                                {/* Row 2: Email + Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-[#404040]">
                                            Số điện thoại <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="Nhập số điện thoại..."
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="mt-2.5 w-full px-3 py-2 rounded-xl border border-[#A3A3A3] focus:border-brand focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-[#404040]">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Nhập email..."
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-2.5 w-full px-3 py-2 rounded-xl border border-[#A3A3A3] focus:border-brand focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Message */}
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-[#404040]">Thông tin khác</label>
                                    <input
                                        name="message"
                                        placeholder="Nhập nội dung..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-2.5 w-full px-3 py-2 rounded-xl border border-[#A3A3A3] focus:border-brand focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                                    />
                                </div>

                                <div className="space-y-1 mt-5">
                                    <label className="text-sm font-semibold text-[#404040]">
                                        Đính kèm CV <span className="text-red-500">*</span>
                                    </label>
                                    <Button variant="outline" className="w-[200px] mt-2.5">
                                        <FileIcon />
                                        Chọn tệp
                                    </Button>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <div className="pt-2">
                                <Button
                                    variant="primary"
                                    className={`w-[98px]! text-base font-bold mx-auto ${
                                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Đang gửi..." : "Gửi"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;
