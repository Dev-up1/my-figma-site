import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { useBooking } from "../contexts/BookingContext";

export function Footer() {
  const { openBooking } = useBooking();
  return (
    <footer className="bg-slate-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <Logo className="h-16 mb-4" />
            <p className="text-slate-300">
              مركز الحياة الطبي - نقدم أفضل الخدمات الطبية بأحدث التقنيات
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="/" className="hover:text-accent transition-colors">الرئيسية</a></li>
              <li><a href="/about-us" className="hover:text-accent transition-colors">عن المركز</a></li>
              <li><a href="/doctors" className="hover:text-accent transition-colors">ابحث عن طبيب</a></li>
              <li><a href="/scans" className="hover:text-accent transition-colors">المدينة سكان</a></li>
              <li><a href="/clinics" className="hover:text-accent transition-colors">العيادات</a></li>
              <li><a href="/laboratory" className="hover:text-accent transition-colors">الفحوصات</a></li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    openBooking();
                  }}
                  className="hover:text-accent transition-colors text-slate-300 cursor-pointer"
                >
                  احجز الآن
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                <span>773344556</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                <span>info@alhayat-medical.ye</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span>عدن - المنصورة - ريمي - بجانب مستشفى 22 مايو</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>© 2025 مركز الحياة الطبي - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}