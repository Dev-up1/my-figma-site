import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from "wouter";
import { User, Calendar, Phone } from "lucide-react";

export function Login() {
  const { login } = useAuth();
  const [_, setLocation] = useLocation();

  // تعريف المتغيرات لتخزين البيانات
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // التحقق من أن الحقول ليست فارغة
    if (!name || !age || !phone) {
      alert("الرجاء تعبئة جميع البيانات");
      return;
    }

    // 1. حفظ البيانات كاملة في ذاكرة المتصفح (عشان نعرضها في صفحة الملف الشخصي)
    const patientData = {
      name: name,
      age: age,
      phone: phone
    };
    localStorage.setItem("patient_data", JSON.stringify(patientData));

    // 2. تسجيل الدخول في النظام
    login(name);

    // 3. الانتقال لصفحة الملف الطبي
    setLocation("/profile");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-12 px-4 dir-rtl">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">تسجيل الدخول</h2>
          <p className="mt-2 text-gray-600">أدخل بياناتك لفتح ملفك الطبي</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* حقل الاسم */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-right">الاسم الكامل</label>
            <div className="relative">
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-right pr-10"
                placeholder="اسم المريض"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* حقل العمر */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-right">العمر</label>
            <div className="relative">
              <input
                type="number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-right pr-10"
                placeholder="العمر بالسنوات"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <Calendar className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* حقل الهاتف */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-right">رقم الجوال</label>
            <div className="relative">
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-right pr-10"
                placeholder="05xxxxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Phone className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* زر الدخول */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 mt-6 shadow-md"
          >
            دخول للملف الطبي
          </button>

        </form>
      </div>
    </div>
  );
}
