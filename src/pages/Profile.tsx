import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Redirect } from "wouter";
import { Activity, Heart, Weight, Thermometer, Calendar, Clock, MapPin, LogOut } from "lucide-react";

export function Profile() {
  const { user, logout } = useAuth();
  
  // استرجاع البيانات الإضافية (العمر ورقم الهاتف) التي حفظناها عند تسجيل الدخول
  const [patientDetails, setPatientDetails] = useState({ age: "--", phone: "" });

  useEffect(() => {
    const savedData = localStorage.getItem("patient_data");
    if (savedData) {
      setPatientDetails(JSON.parse(savedData));
    }
  }, []);

  // إذا لم يكن هناك مستخدم مسجل، ارجع لصفحة الدخول
  if (!user) return <Redirect to="/login" />;

  return (
    <div className="min-h-screen bg-gray-50 dir-rtl font-sans pb-12">
      {/* رأس الصفحة مع المعلومات الأساسية */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div className="text-right">
                {/* هنا التغيير: عرض اسم المستخدم المسجل بدلاً من الاسم الثابت */}
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <div className="flex items-center gap-2 text-gray-500 mt-1">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">عضو نشط</span>
                  <span className="text-sm">| العمر: {patientDetails.age} سنة</span>
                  <span className="text-sm">| الجوال: {patientDetails.phone}</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={logout}
              className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut size={18} />
              تسجيل خروج
            </button>
          </div>

          {/* المؤشرات الحيوية (شكل جمالي) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="text-gray-500 text-sm mb-1">ضغط الدم</div>
              <div className="text-xl font-bold text-gray-900">120/80</div>
              <div className="text-green-500 text-xs mt-1">طبيعي</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="text-gray-500 text-sm mb-1">نبضات القلب</div>
              <div className="text-xl font-bold text-gray-900">72 <span className="text-xs font-normal">bpm</span></div>
              <div className="text-green-500 text-xs mt-1">طبيعي</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="text-gray-500 text-sm mb-1">الوزن</div>
              <div className="text-xl font-bold text-gray-900">75 <span className="text-xs font-normal">kg</span></div>
              <div className="text-blue-500 text-xs mt-1">مثالي</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="text-gray-500 text-sm mb-1">مؤشر الكتلة</div>
              <div className="text-xl font-bold text-gray-900">23.4</div>
              <div className="text-green-500 text-xs mt-1">طبيعي</div>
            </div>
          </div>
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6 text-right flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            المواعيد القادمة
          </h2>
          
          <div className="space-y-4">
            {/* بطاقة موعد تجريبية */}
            <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-gray-900">د. محمد السالمي</h3>
                    <p className="text-sm text-blue-600 mb-1">أمراض القلب</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                      <span className="flex items-center gap-1"><Calendar size={14} /> 2026/03/20</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> 10:30 صباحاً</span>
                    </div>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">مؤكد</span>
              </div>
            </div>

            {/* بطاقة موعد أخرى */}
            <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-gray-900">د. مريم سالم</h3>
                    <p className="text-sm text-purple-600 mb-1">طب العيون</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                      <span className="flex items-center gap-1"><Calendar size={14} /> 2026/03/25</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> 02:15 مساءً</span>
                    </div>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">مؤكد</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
