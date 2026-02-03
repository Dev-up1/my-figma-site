import { useState } from "react";
import { Link } from "wouter";
import { ConnectedDots } from "../components/ConnectedDots";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, Clock, MapPin, Phone, Mail, Users, Award, Stethoscope } from "lucide-react";

export function Scans() {
  const diagnosticServices = [
    {
      id: "ct",
      icon: "🔬",
      name: "الأشعة المقطعية",
      nameEn: "CT Scan",
      description: "فحص شامل باستخدام أحدث أجهزة الأشعة المقطعية لتشخيص دقيق وسريع",
      image: "https://images.unsplash.com/photo-1581595220921-eec2071e5159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      id: "mri",
      icon: "🧲",
      name: "التصوير بالرنين المغناطيسي",
      nameEn: "MRI",
      description: "تصوير متطور للأنسجة والأعضاء باستخدام المجال المغناطيسي",
      image: "https://images.unsplash.com/photo-1664902265139-934219cee42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      id: "ultrasound",
      icon: "📡",
      name: "الموجات فوق الصوتية",
      nameEn: "Ultrasound",
      description: "فحوصا آمنة ودقيقة باستخدام الموجات فوق الصوتية",
      image: "https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    }
  ];

  const equipment = [
    {
      id: "eeg-emg",
      name: "تخطيط الدماغ والأعصاب",
      nameEn: "EEG & EMG",
      model: "Nihon Kohden Neuropack",
      image: "https://images.unsplash.com/photo-1720722818189-edcb9da6664d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFRUclMjBtZWRpY2FsJTIwZGV2aWNlJTIwYnJhaW58ZW58MXx8fHwxNzYzMTk4MTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "echo",
      name: "ايكو قلب",
      nameEn: "ECHO",
      model: "Philips EPIQ CVx",
      image: "https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2hvY2FyZGlvZ3JhbSUyMHVsdHJhc291bmQlMjBtYWNoaW5lfGVufDF8fHx8MTc2MzE5ODE1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "xray",
      name: "الأشعة السينية",
      nameEn: "X-RAY",
      model: "Siemens Luminos dRF Max",
      image: "https://images.unsplash.com/photo-1726601057260-e8095dad345a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHh4cmF5JTIwbWFjaGluZSUyMG1lZGljYWx8ZW58MXx8fHwxNzYzMTk4MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "ct",
      name: "الأشعة المقطعية",
      nameEn: "CT-SCAN",
      model: "Siemens Somatom go.All 64 slices",
      image: "https://images.unsplash.com/photo-1630128283451-6a3c40ba26d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdCUyMHNjYW4lMjBtYWNoaW5lJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzYzMTk4MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "ultrasound",
      name: "جهاز الموجات فوق الصوتية",
      nameEn: "ULTRASOUND",
      model: "GE Voluson E10",
      image: "https://images.unsplash.com/photo-1630531210843-d6f343ad1f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWVkaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMxOTgxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      text: "خدمة ممتازة وفريق طبي محترف. الفحوصات دقيقة والنتائج سريعة. أنصح الجميع بالتعامل مع هذا المركز.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150"
    },
    {
      name: "فاطمة علي",
      text: "تجربة رائعة مع طاقم طبي محترف ومتعاون. الأجهزة حديثة ولخدمة سريعة.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150"
    },
    {
      name: "محمود حسن",
      text: "أفضل مركز تشخيصي في المنطقة. نظافة وتنظيم ودقة في المواعيد.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-[#3DBEAE]/5 to-[#4B3F99]/5 pb-20">
        <ConnectedDots />
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <div className="text-right" dir="rtl">
              <div className="inline-block px-4 py-2 bg-[#3DBEAE]/10 rounded-full mb-6">
                <span className="text-[#3DBEAE]">● مركز الحياة الطبي</span>
              </div>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-[#4B3F99] leading-tight">
                الجيل الجديد
                <br />
                <span className="text-[#3DBEAE]">للرعاية الصحية</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                نقدم أحدث تقنيات التصوير الطبي والتشخيص بأعلى معايير الجودة والدقة لضمان صحتك وراحتك
              </p>
              <div className="flex gap-4 justify-end" dir="rtl">
              </div>
            </div>

            {/* Medical Professional Image */}
            <div className="relative">
              {/* Abstract Connected Nodes Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg width="500" height="500" viewBox="0 0 500 500" className="text-[#3DBEAE]">
                  <defs>
                    <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3DBEAE" />
                      <stop offset="100%" stopColor="#4B3F99" />
                    </linearGradient>
                  </defs>
                  {/* Connection lines */}
                  <line x1="100" y1="100" x2="200" y2="150" stroke="url(#nodeGradient)" strokeWidth="2" opacity="0.3" />
                  <line x1="200" y1="150" x2="300" y2="120" stroke="url(#nodeGradient)" strokeWidth="2" opacity="0.3" />
                  <line x1="300" y1="120" x2="400" y2="180" stroke="url(#nodeGradient)" strokeWidth="2" opacity="0.3" />
                  <line x1="150" y1="250" x2="250" y2="280" stroke="url(#nodeGradient)" strokeWidth="2" opacity="0.3" />
                  <line x1="250" y1="280" x2="350" y2="260" stroke="url(#nodeGradient)" strokeWidth="2" opacity="0.3" />
                  <line x1="100" y1="350" x2="200" y2="400" stroke="url(#nodeGradient)" strokeWidth="2" opacity="0.3" />
                  <line x1="300" y1="380" x2="400" y2="350" stroke="url(#nodeGradient)" strokeWidth="2" opacity="0.3" />
                  {/* Nodes */}
                  <circle cx="100" cy="100" r="8" fill="url(#nodeGradient)" />
                  <circle cx="200" cy="150" r="10" fill="url(#nodeGradient)" />
                  <circle cx="300" cy="120" r="8" fill="url(#nodeGradient)" />
                  <circle cx="400" cy="180" r="10" fill="url(#nodeGradient)" />
                  <circle cx="150" cy="250" r="8" fill="url(#nodeGradient)" />
                  <circle cx="250" cy="280" r="12" fill="url(#nodeGradient)" />
                  <circle cx="350" cy="260" r="8" fill="url(#nodeGradient)" />
                  <circle cx="100" cy="350" r="10" fill="url(#nodeGradient)" />
                  <circle cx="200" cy="400" r="8" fill="url(#nodeGradient)" />
                  <circle cx="300" cy="380" r="10" fill="url(#nodeGradient)" />
                  <circle cx="400" cy="350" r="8" fill="url(#nodeGradient)" />
                </svg>
              </div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZyUyMHVsdHJhc291bmQlMjB0ZWNoJTIwZGV2aWNlJTIwYnJhaW58ZW58MXx8fHwxNzY0NzgyNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Medical Imaging"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B3F99]/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl md:text-3xl text-[#4B3F99] mb-1">20+</div>
                    <p className="text-xs md:text-sm text-gray-600">سنة خبرة</p>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl text-[#3DBEAE] mb-1">12K+</div>
                    <p className="text-xs md:text-sm text-gray-600">مريض راضٍ</p>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl text-[#4B3F99] mb-1">450+</div>
                    <p className="text-xs md:text-sm text-gray-600">خدمة طبية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scan Cards Section */}
          <div className="relative z-10">
            <div className="text-center mb-12" dir="rtl">
              <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">
                خدمات <span className="text-[#3DBEAE]">التشخيص المتقدمة</span>
              </h2>
              <p className="text-lg text-gray-600">
                نوفر مجموعة شاملة من خدمات التصوير الطبي والفحوصات التشخيصية
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {/* Tests Units (EEG & EMGS) */}
              <Link href="/scan/eeg-emgs">
                <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 text-[#5B8DEE] group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12h4l3 9 4-18 3 9h4" />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 text-center">تخطيط كهربائية الدماغ</p>
                </div>
              </Link>

              {/* Electrodes (ECHO) */}
              <Link href="/scan/echo">
                <div className="bg-[#5B8DEE] rounded-lg p-6 md:p-8 flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 text-white group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="4" width="12" height="16" rx="2" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-white text-center">تخطيط صدى القلب</p>
                </div>
              </Link>

              {/* Catheters (X-RAY) */}
              <Link href="/scan/xray">
                <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 text-[#5B8DEE] group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4v16h16" />
                      <path d="M8 8v8" />
                      <path d="M12 6v10" />
                      <path d="M16 10v4" />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 text-center">الأشعة السينية</p>
                </div>
              </Link>

              {/* Syringes (CT-SCAN) */}
              <Link href="/scan/ct">
                <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 text-[#5B8DEE] group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2l4 4-4 4" />
                      <path d="M22 6h-7a4 4 0 0 0-4 4v12" />
                      <path d="M11 18l-2 2-2-2" />
                      <path d="M7 22v-6" />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 text-center">الأشعة المقطعية</p>
                </div>
              </Link>

              {/* Pediatric (ULTRASOUND) */}
              <Link href="/scan/ultrasound">
                <div className="bg-[#E8F0FE] rounded-lg p-6 md:p-8 flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 text-[#5B8DEE] group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12h6" />
                      <path d="M12 9v6" />
                      <path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.3 1 .8 1h5.7" />
                      <path d="M16.5 4.2c.3-.5.9-.7 1.3-.4 2.3 1.7 3.9 4.3 4.2 7.2.1.5-.3 1-.8 1h-5.7" />
                      <path d="M12 21a9 9 0 0 0 9-9" />
                      <path d="M3 12a9 9 0 0 0 9 9" />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 text-center">الموجات فوق الصوتية</p>
                </div>
              </Link>

              {/* Bandages (MRI) */}
              <Link href="/scan/mri">
                <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 text-[#5B8DEE] group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 text-center">الرنين المغناطيسي</p>
                </div>
              </Link>

              {/* Insulin Syringes (DOPPLER) */}
              <Link href="/scan/doppler">
                <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 text-[#5B8DEE] group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20" />
                      <path d="M8 6l4-4 4 4" />
                      <path d="M8 18l4 4 4-4" />
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 text-center">دوبلر</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Equipment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">
              المعدات <span className="text-[#3DBEAE]">الطبية</span>
            </h2>
            <p className="text-lg text-gray-600">
              أحدث الأجهزة الطبية لتشخيص دقيق وآمن
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <Link key={index} href={`/equipment/${item.id}`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4B3F99]/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-[#3DBEAE] text-white px-3 py-1 rounded-full text-sm">
                      {item.nameEn}
                    </div>
                  </div>
                  <div className="p-6 text-right bg-gradient-to-br from-[#3DBEAE]/5 to-white" dir="rtl">
                    <h3 className="mb-2 text-xl text-[#4B3F99] group-hover:text-[#3DBEAE] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{item.model}</p>
                    <div className="flex justify-between items-center">
                      <Button 
                        className="bg-[#3DBEAE] hover:bg-[#3DBEAE]/90"
                        size="sm"
                      >
                        عرض التفاصيل →
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Precise Diagnosis Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4B3F99] to-[#3DBEAE] text-white relative overflow-hidden">
        <ConnectedDots />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" dir="rtl">
            <h2 className="mb-6 text-3xl md:text-4xl">تشخيص دقيق. نتائج موثوقة.</h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              نستخدم أحدث التقنيات في التصوير الطبي لضمان الحصول على تشخيص دقيق
              وشامل، مما يساعد الأطباء على اتخاذ القرارات الطبية الصحيحة.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-[#4B3F99] hover:bg-gray-100 px-12 py-6 text-lg"
            >
              تعرف أكثر
            </Button>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">
              ماذا يقول <span className="text-[#3DBEAE]">مرضانا</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all border-t-4 border-t-[#3DBEAE]">
                <div className="flex items-center gap-4 mb-6" dir="rtl">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-right">
                    <h4 className="text-[#4B3F99]">{testimonial.name}</h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#3DBEAE]">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-right leading-relaxed" dir="rtl">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">اتصل بنا</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#3DBEAE]" />
              </div>
              <h4 className="mb-2 text-[#4B3F99]">الهاتف</h4>
              <p className="text-gray-600" dir="rtl">773344556</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-[#3DBEAE]" />
              </div>
              <h4 className="mb-2 text-[#4B3F99]">البريد الإلكتروني</h4>
              <p className="text-gray-600">info@amedinahmc.com</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#3DBEAE]" />
              </div>
              <h4 className="mb-2 text-[#4B3F99]">العنوان</h4>
              <p className="text-gray-600" dir="rtl">عدن - المنصورة - ريمي - بجانب مستشفى 22 مايو</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}