import { X } from "lucide-react";
import { BookingSearch } from "./BookingSearch";
import { useBooking } from "../contexts/BookingContext";

export function BookingModal() {
  const { isOpen, closeBooking } = useBooking();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeBooking}
          className="absolute left-4 top-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all"
          aria-label="إغلاق"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <div className="text-center mb-6" dir="rtl">
            <h2 className="text-3xl md:text-4xl text-[#4B3F99] mb-2">
              احجز <span className="text-[#3DBEAE]">موعدك</span>
            </h2>
            <p className="text-gray-600">اختر الخدمة المناسبة واحجز موعدك بسهولة</p>
          </div>
          
          <BookingSearch />
        </div>
      </div>

      {/* Overlay Click to Close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={closeBooking}
      />
    </div>
  );
}
