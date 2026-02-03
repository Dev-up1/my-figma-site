import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ConnectedDots } from "../components/ConnectedDots";
import { Calendar, Clock, MapPin, Phone, Award, Users, Building2, Heart } from "lucide-react";
import { Link } from "wouter";
import { useBooking } from "../contexts/BookingContext";

export function Clinics() {
  const { openBooking } = useBooking();
  const clinics = [
    {
      id: "kidney",
      number: "01",
      name: "عيادة الكلى والمسالك البولية والعقم",
      icon: "🏥",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: "surgery",
      number: "02",
      name: "عيادة الجراحة العامة",
      icon: "⚕️",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "cardiology",
      number: "03",
      name: "عيادة القلب والأوعية الدموية",
      icon: "❤️",
      color: "from-red-500 to-red-600"
    },
    {
      id: "dentistry",
      number: "04",
      name: "عيادة الفم والأسنان",
      icon: "🦷",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: "maternity",
      number: "05",
      name: "عيادة النساء والولادة",
      icon: "👶",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: "radiology",
      number: "06",
      name: "عيادة استشاري الأشعة التشخيصية",
      icon: "📷",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "pediatrics",
      number: "07",
      name: "عيادة طب الأطفال وحديثي الولادة",
      icon: "👼",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: "internal",
      number: "08",
      name: "عيادة الباطنية",
      icon: "🩺",
      color: "from-red-600 to-red-700"
    },
    {
      id: "neurology",
      number: "09",
      name: "عيادة المخ والأعصاب",
      icon: "🧠",
      color: "from-purple-600 to-purple-700"
    },
    {
      id: "ent",
      number: "10",
      name: "عيادة الأنف والأذن والحنجرة",
      icon: "👂",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: "hematology",
      number: "11",
      name: "عيادة أمراض الدم",
      icon: "💉",
      color: "from-rose-500 to-rose-600"
    },
    {
      id: "orthopedics",
      number: "12",
      name: "عيادة العظام والمفاصل",
      icon: "🦴",
      color: "from-slate-500 to-slate-600"
    },
    {
      id: "oncology",
      number: "13",
      name: "عيادة الأورام والعلاج الكيماوي",
      icon: "🎗️",
      color: "from-violet-500 to-violet-600"
    },
    {
      id: "pulmonology",
      number: "14",
      name: "عيادة الأمراض الصدرية",
      icon: "🫁",
      color: "from-sky-500 to-sky-600"
    },
    {
      id: "pediatric-cardiology",
      number: "15",
      name: "عيادة قلب أطفال",
      icon: "💗",
      color: "from-pink-600 to-pink-700"
    },
    {
      id: "nutrition",
      number: "16",
      name: "عيادة التغذية العلاجية",
      icon: "🥗",
      color: "from-green-500 to-green-600"
    },
    {
      id: "dermatology",
      number: "17",
      name: "عيادة الأمراض الجلدية",
      icon: "✨",
      color: "from-amber-500 to-amber-600"
    },
    {
      id: "pathology",
      number: "18",
      name: "عيادة علم الخلايا والأنسجة",
      icon: "🔬",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-[#3DBEAE]/10 via-white to-[#4B3F99]/10">
        <ConnectedDots />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center" dir="rtl">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-[#4B3F99]">
              العيادات <span className="text-[#3DBEAE]">التخصصية</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              وحدة المنظير والجهاز الهضمي
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نقدم خدمات طبية متكاملة في جميع التخصصات بأعلى معايير الجودة
              وبأحدث التقنيات الطبية العالمية
            </p>
          </div>
        </div>
      </section>

      {/* Intro Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#4B3F99] to-[#3DBEAE] text-white relative overflow-hidden">
        <ConnectedDots />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="h-10 w-10" />
              </div>
              <div className="text-4xl md:text-5xl mb-2">18</div>
              <p className="text-sm md:text-base opacity-90">عيادة تخصصية</p>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10" />
              </div>
              <div className="text-4xl md:text-5xl mb-2">50+</div>
              <p className="text-sm md:text-base opacity-90">طبيب متخصص</p>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-10 w-10" />
              </div>
              <div className="text-4xl md:text-5xl mb-2">1000+</div>
              <p className="text-sm md:text-base opacity-90">مريض شهرياً</p>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-10 w-10" />
              </div>
              <div className="text-4xl md:text-5xl mb-2">4.9/5</div>
              <p className="text-sm md:text-base opacity-90">تقييم المرضى</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics Grid */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">
              جميع العيادات <span className="text-[#3DBEAE]">المتاحة</span>
            </h2>
            <p className="text-lg text-gray-600">
              18 عيادة تخصصية لخدمتك بأعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clinics.map((clinic) => (
              <Link key={clinic.number} href={`/clinic/${clinic.id}`}>
                <Card
                  className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-0"
                >
                  {/* Colored Header */}
                  <div className={`bg-gradient-to-br ${clinic.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-5xl group-hover:scale-110 transition-transform">
                          {clinic.icon}
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
                          <span className="font-bold text-lg">{clinic.number}</span>
                        </div>
                      </div>
                      <h3 className="leading-tight min-h-[60px]">
                        {clinic.name}
                      </h3>
                    </div>
                  </div>

                  {/* White Content */}
                  <div className="p-6 bg-white">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="bg-[#4B3F99]/10 p-2 rounded-lg">
                          <Clock className="h-4 w-4 text-[#4B3F99]" />
                        </div>
                        <span>متاح يومياً 8 ص - 8 م</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="bg-[#3DBEAE]/10 p-2 rounded-lg">
                          <Phone className="h-4 w-4 text-[#3DBEAE]" />
                        </div>
                        <span>777552666</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <ConnectedDots />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">
              مميزات <span className="text-[#3DBEAE]">العيادات</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-12 w-12 text-[#3DBEAE]" />
              </div>
              <h3 className="mb-3 text-[#4B3F99]">أطباء متخصصون</h3>
              <p className="text-gray-600">
                نخبة من أفضل الأطباء في جميع التخصصات
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="h-12 w-12 text-[#4B3F99]" />
              </div>
              <h3 className="mb-3 text-[#4B3F99]">أحدث المعدات</h3>
              <p className="text-gray-600">
                تجهيزات طبية متطورة وفق المعايير العالمية
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-12 w-12 text-[#3DBEAE]" />
              </div>
              <h3 className="mb-3 text-[#4B3F99]">مواعيد مرنة</h3>
              <p className="text-gray-600">
                حجز سهل وسريع بمواعيد تناسب جدولك
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-12 w-12 text-[#4B3F99]" />
              </div>
              <h3 className="mb-3 text-[#4B3F99]">رعاية شاملة</h3>
              <p className="text-gray-600">
                متابعة كاملة من الفحص حتى العلاج
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1720180246349-584d40758674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Medical Center Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-right order-1 md:order-2" dir="rtl">
              <h2 className="mb-6 text-3xl md:text-4xl text-[#4B3F99]">
                مركز طبي على
                <br />
                <span className="text-[#3DBEAE]">أعلى مستوى</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                نوفر بيئة طبية متكاملة مع أحدث التجهيزات والمعدات الطبية
                العالمية. تم تصميم عياداتنا لتوفير أقصى درجات الراحة والخصوصية
                لمرضانا.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-[#3DBEAE] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">عيادات مجهزة بأحدث التقنيات</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-[#3DBEAE] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">فريق طبي متخصص ومؤهل</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-[#3DBEAE] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">خدمات متكاملة تحت سقف واحد</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-[#3DBEAE] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">نظام حجز إلكتروني سهل وسريع</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4B3F99] to-[#3DBEAE] text-white relative overflow-hidden">
        <ConnectedDots />
        <div className="container mx-auto px-4 text-center relative z-10" dir="rtl">
          <h2 className="mb-6 text-3xl md:text-4xl">احجز موعدك الآن</h2>
          <p className="mb-10 text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            اختر العيادة المناسبة واحجز موعدك في دقائق
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-12 py-6 text-lg bg-white text-[#4B3F99] hover:bg-gray-100"
              onClick={openBooking}
            >
              <Calendar className="ml-2 h-5 w-5" />
              احجز الآن
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-12 py-6 text-lg border-2 border-white text-white hover:bg-white/20"
            >
              <Phone className="ml-2 h-5 w-5" />
              اتصل بنا - 777552666
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}