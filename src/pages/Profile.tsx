import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useLocation } from "wouter";
import { 
  Activity, 
  Calendar, 
  Clock, 
  LogOut, 
  User, 
  Phone 
} from "lucide-react";

export function Profile() {
  const { user, logout } = useAuth();
  const [_, setLocation] = useLocation();
  
  // حالة لتخزين البيانات الإضافية (العمر ورقم الجوال)
  const [patientData, setPatientData] = useState({
    age: "--",
    phone: "--"
  });

  // عند تحميل الصفحة، نسحب البيانات التي حفظناها في صفحة الدخول
  useEffect(() => {
    // 1. إذا لم يكن هناك مستخدم مسجل، نرجع لصفحة الدخول
    if (!user) {
      setLocation("/login");
      return;
    }

    // 2. سحب البيانات من الذاكرة
    const savedData = localStorage.getItem("patient_data");
    if (savedData) {
      setPatientData(JSON.parse(savedData));
    }
  }, [user, setLocation]);

  // حماية إضافية لعدم عرض الصفحة إذا لم يكن هناك مستخدم
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 dir-rtl font-sans pb-12">
      {/* القسم العلوي: معلومات المريض */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* كارت المعلومات الشخصية */}
            <div className="flex items-center gap-5 w-full md:w-auto">
              {/* الدائرة التي فيها الحرف الأول */}
              <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                <span className="text-4xl font-bold text-blue-600">
                  {user.name.charAt(0)}
                </span>
              </div>
              
              <div className="text-right flex-1">
                {/* هنا يظهر الاسم المتغير بدلاً من الثابت */}
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                    <User size={16} className="text-blue-500" />
                    <span>العمر: {patientData.age} سنة</span>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                    <Phone size={16} className="text-blue-500" />
                    <span>{patientData.phone}</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    عضوية نشطة
                  </span>
                </div>
              </div>
            </div>
            
            {/* زر تسجيل الخروج */}
            <button 
              onClick={logout}
              className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-6 py-3 rounded-xl transition-all border border-red-100 hover:border-red-200 w-full md:w-auto justify-center"
            >
              <LogOut size={20} />
              تسجيل خروج
            </button>
          </div>

          {/* المؤشرات الحيوية (ثابتة كنموذج) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-center">
              <div className="text-gray-500 text-sm mb-1">ضغط الدم</div>
              <div className="text-xl font-bold text-gray-900">120/80</div>
            </div>
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-center">
              <div className="text-gray-500 text-sm mb-1">النبض</div>
              <div className="text-xl font-bold text-gray-900">72 bpm</div>
            </div>
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-center">
              <div className="text-gray-500 text-sm mb-1">الوزن</div>
              <div className="text-xl font-bold text-gray-900">75 kg</div>
            </div>
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-center">
              <div className="text-gray-500 text-sm mb-1">الكتلة BMI</div>
              <div className="text-xl font-bold text-gray-900">23.4</div>
            </div>
          </div>
        </div>
      </div>

      {/* المواعيد القادمة */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              المواعيد القادمة
            </h2>
            <Link href="/doctors">
              <button className="text-blue-600 text-sm font-medium hover:underline">
                + حجز موعد جديد
              </button>
            </Link>
          </div>
          
          <div className="divide-y divide-gray-50">
            {/* موعد 1 */}
            <div className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <Activity className="h-7 w-7" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-lg text-gray-900">د. محمد السالمي</h3>
                    <p className="text-blue-600 mb-2">استشاري أمراض القلب</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar size={14} /> 2026/03/20</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> 10:30 صباحاً</span>
                      <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-gray-400"></div> عيادة القلب - الطابق الثاني</span>
                    </div>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-bold">
                  مؤكد
                </span>
              </div>
            </div>

            {/* موعد 2 */}
            <div className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="h-14 w-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                    <Activity className="h-7 w-7" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-lg text-gray-900">د. مريم سالم</h3>
                    <p className="text-purple-600 mb-2">أخصائية طب العيون</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar size={14} /> 2026/03/25</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> 02:15 مساءً</span>
                    </div>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-bold">
                  مؤكد
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
