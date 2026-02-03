import { useState } from "react";
import { useRoute, Link } from "wouter";
import { ArrowRight, Star, MapPin, Clock, Calendar, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";

// Sample clinic data with doctors
const clinicsData: Record<string, any> = {
  "kidney": {
    id: "kidney",
    number: "01",
    name: "عيادة الكلى والمسالك البولية والعقم",
    icon: "🏥",
    color: "bg-emerald-500",
    description: "عيادة متخصصة في تشخيص وعلاج أمراض الكلى والمسالك البولية والجهاز التناسلي الذكري. نقدم خدمات متكاملة من الفحص والتشخيص إلى العلاج والمتابعة.",
    services: [
      "علاج حصوات الكلى والمسالك",
      "علاج التهابات المسالك البولية",
      "علاج المثانة النشطة",
      "الفحص بالموجات فوق الصوتية",
      "المناظير البولية",
      "علاج العقم عند الرجال"
    ],
    doctors: [
      {
        id: "1",
        name: "د. محمد رأفت",
        specialty: "أخصائي الكلى والمسالك البولية",
        rating: 4.8,
        reviewCount: 234,
        experience: "18 سنة خبرة",
        price: "280 ريال",
        image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400"
      },
      {
        id: "2",
        name: "د. أحمد سالم",
        specialty: "استشاري الكلى",
        rating: 4.9,
        reviewCount: 312,
        experience: "22 سنة خبرة",
        price: "320 ريال",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400"
      }
    ]
  },
  "surgery": {
    id: "surgery",
    number: "02",
    name: "عيادة الجراحة العامة",
    icon: "⚕️",
    color: "bg-blue-500",
    description: "عيادة الجراحة العامة توفر خدمات جراحية شاملة باستخدام أحدث التقنيات الجراحية والمناظير الطبية.",
    services: [
      "الجراحة بالمنظار",
      "جراحة الغدة الدرقية",
      "جراحة الفتق",
      "جراحة المرارة",
      "جراحة الأورام",
      "جراحة البواسير"
    ],
    doctors: [
      {
        id: "1",
        name: "د. ياسر محمود",
        specialty: "استشاري الجراحة العامة",
        rating: 4.9,
        reviewCount: 428,
        experience: "25 سنة خبرة",
        price: "350 ريال",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400"
      },
      {
        id: "2",
        name: "د. سارة عبدالله",
        specialty: "أخصائية الجراحة",
        rating: 4.7,
        reviewCount: 289,
        experience: "15 سنة خبرة",
        price: "300 ريال",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
      }
    ]
  },
  "cardiology": {
    id: "cardiology",
    number: "03",
    name: "عيادة القلب والأوعية الدموية",
    icon: "❤️",
    color: "bg-red-500",
    description: "عيادة متخصصة في تشخيص وعلاج أمراض القلب والأوعية الدموية مع توفير أحدث أجهزة التشخيص والمتابعة.",
    services: [
      "تخطيط القلب الكهربائي",
      "إيكو القلب",
      "قسطرة القلب التشخيصية",
      "علاج ارتفاع ضغط الدم",
      "علاج تصلب الشرايين",
      "متابعة أمراض القلب المزمنة"
    ],
    doctors: [
      {
        id: "1",
        name: "د. وليد حسين",
        specialty: "استشاري القلب والأوعية",
        rating: 5.0,
        reviewCount: 489,
        experience: "28 سنة خبرة",
        price: "450 ريال",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400"
      },
      {
        id: "2",
        name: "د. منى خالد",
        specialty: "أخصائية أمراض القلب",
        rating: 4.8,
        reviewCount: 342,
        experience: "17 سنة خبرة",
        price: "400 ريال",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
      }
    ]
  },
  "dentistry": {
    id: "dentistry",
    number: "04",
    name: "عيادة الفم والأسنان",
    icon: "🦷",
    color: "bg-cyan-500",
    description: "عيادة متخصصة في طب وجراحة الفم والأسنان مع توفير أحدث التقنيات في التجميل والعلاج.",
    services: [
      "تنظيف الأسنان",
      "حشو وعلاج التسوس",
      "تبييض الأسنان",
      "التقويم",
      "زراعة الأسنان",
      "جراحة الفم"
    ],
    doctors: [
      {
        id: "1",
        name: "د. لينا صالح",
        specialty: "أخصائية طب الأسنان",
        rating: 4.9,
        reviewCount: 367,
        experience: "14 سنة خبرة",
        price: "250 ريال",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
      }
    ]
  },
  "maternity": {
    id: "maternity",
    number: "05",
    name: "عيادة النساء والولادة",
    icon: "👶",
    color: "bg-pink-500",
    description: "عيادة متخصصة في صحة المرأة والولادة مع رعاية شاملة للأم والطفل.",
    services: [
      "متابعة الحمل",
      "الولادة الطبيعية",
      "الولادة القيصرية",
      "علاج العقم",
      "تنظيم الأسرة",
      "أمراض النساء"
    ],
    doctors: [
      {
        id: "1",
        name: "د. فاطمة أحمد",
        specialty: "استشارية النساء والولادة",
        rating: 5.0,
        reviewCount: 445,
        experience: "20 سنة خبرة",
        price: "400 ريال",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
      }
    ]
  },
  "radiology": {
    id: "radiology",
    number: "06",
    name: "عيادة استشاري الأشعة التشخيصية",
    icon: "📷",
    color: "bg-purple-500",
    description: "عيادة متخصصة في التصوير الطبي والتشخيص بالأشعة بأحدث التقنيات.",
    services: [
      "الأشعة السينية",
      "الأشعة المقطعية",
      "أشعة الرنين المغناطيسي",
      "الموجات فوق الصوتية",
      "الأشعة التداخلية",
      "التصوير النووي"
    ],
    doctors: [
      {
        id: "1",
        name: "د. خالد عمر",
        specialty: "استشاري الأشعة التشخيصية",
        rating: 4.9,
        reviewCount: 298,
        experience: "19 سنة خبرة",
        price: "350 ريال",
        image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400"
      }
    ]
  },
  "pediatrics": {
    id: "pediatrics",
    number: "07",
    name: "عيادة طب الأطفال وحديثي الولادة",
    icon: "👼",
    color: "bg-yellow-500",
    description: "عيادة متخصصة في رعاية صحة الأطفال منذ الولادة وحتى سن المراهقة.",
    services: [
      "فحص الأطفال الشامل",
      "التطعيمات",
      "رعاية حديثي الولادة",
      "علاج أمراض الأطفال",
      "متابعة النمو والتطور",
      "التغذية السليمة"
    ],
    doctors: [
      {
        id: "1",
        name: "د. سمير حسن",
        specialty: "استشاري طب الأطفال",
        rating: 4.9,
        reviewCount: 512,
        experience: "23 سنة خبرة",
        price: "300 ريال",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400"
      }
    ]
  },
  "internal": {
    id: "internal",
    number: "08",
    name: "عيادة الباطنية",
    icon: "🩺",
    color: "bg-red-600",
    description: "عيادة متخصصة في تشخيص وعلاج الأمراض الباطنية المختلفة.",
    services: [
      "علاج الأمراض المزمنة",
      "الفحص الشامل",
      "علاج الجهاز الهضمي",
      "علاج أمراض الكبد",
      "علاج الكلى",
      "الرعاية الصحية العامة"
    ],
    doctors: [
      {
        id: "1",
        name: "د. ريم محمود",
        specialty: "استشارية الباطنية",
        rating: 4.8,
        reviewCount: 378,
        experience: "18 سنة خبرة",
        price: "320 ريال",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
      }
    ]
  },
  "neurology": {
    id: "neurology",
    number: "09",
    name: "عيادة المخ والأعصاب",
    icon: "🧠",
    color: "bg-purple-600",
    description: "عيادة متخصصة في تشخيص وعلاج أمراض الجهاز العصبي والدماغ.",
    services: [
      "علاج الصداع والشقيقة",
      "علاج الصرع",
      "علاج التصلب المتعدد",
      "علاج الشلل الرعاش",
      "علاج الجلطات الدماغية",
      "تخطيط الدماغ"
    ],
    doctors: [
      {
        id: "1",
        name: "د. طارق عبدالله",
        specialty: "استشاري المخ والأعصاب",
        rating: 4.9,
        reviewCount: 401,
        experience: "21 سنة خبرة",
        price: "450 ريال",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400"
      }
    ]
  },
  "ent": {
    id: "ent",
    number: "10",
    name: "عيادة الأنف والأذن والحنجرة",
    icon: "👂",
    color: "bg-indigo-500",
    description: "عيادة متخصصة في علاج أمراض الأنف والأذن والحنجرة.",
    services: [
      "علاج التهاب الجيوب الأنفية",
      "علاج مشاكل السمع",
      "علاج التهاب اللوزتين",
      "جراحة الأنف والأذن",
      "علاج الشخير",
      "منظار الأنف والحنجرة"
    ],
    doctors: [
      {
        id: "1",
        name: "د. هاني إبراهيم",
        specialty: "استشاري الأنف والأذن والحنجرة",
        rating: 4.8,
        reviewCount: 334,
        experience: "17 سنة خبرة",
        price: "330 ريال",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400"
      }
    ]
  },
  "hematology": {
    id: "hematology",
    number: "11",
    name: "عيادة أمراض الدم",
    icon: "💉",
    color: "bg-rose-500",
    description: "عيادة متخصصة في تشخيص وعلاج أمراض الدم والأورام الدموية.",
    services: [
      "علاج الأنيميا",
      "علاج أمراض التخثر",
      "علاج سرطان الدم",
      "علاج الثلاسيميا",
      "نقل الدم",
      "فحوصات الدم الشاملة"
    ],
    doctors: [
      {
        id: "1",
        name: "د. مروان سالم",
        specialty: "استشاري أمراض الدم",
        rating: 4.9,
        reviewCount: 267,
        experience: "16 سنة خبرة",
        price: "380 ريال",
        image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400"
      }
    ]
  },
  "orthopedics": {
    id: "orthopedics",
    number: "12",
    name: "عيادة العظام والمفاصل",
    icon: "🦴",
    color: "bg-slate-500",
    description: "عيادة متخصصة في علاج أمراض العظام والمفاصل والإصابات الرياضية.",
    services: [
      "علاج الكسور",
      "علاج آلام المفاصل",
      "علاج خشونة الركبة",
      "علاج الانزلاق الغضروفي",
      "جراحة العظام",
      "العلاج الطبيعي"
    ],
    doctors: [
      {
        id: "1",
        name: "د. عمار حسين",
        specialty: "استشاري العظام والمفاصل",
        rating: 4.9,
        reviewCount: 423,
        experience: "24 سنة خبرة",
        price: "400 ريال",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400"
      }
    ]
  },
  "oncology": {
    id: "oncology",
    number: "13",
    name: "عيادة الأورام والعلاج الكيماوي",
    icon: "🎗️",
    color: "bg-violet-500",
    description: "عيادة متخصصة في علاج الأورام السرطانية بأحدث الطرق العلاجية.",
    services: [
      "تشخيص الأورام",
      "العلاج الكيماوي",
      "العلاج الإشعاعي",
      "العلاج المناعي",
      "المتابعة بعد العلاج",
      "الرعاية التلطيفية"
    ],
    doctors: [
      {
        id: "1",
        name: "د. ياسمين عادل",
        specialty: "استشارية الأورام",
        rating: 5.0,
        reviewCount: 298,
        experience: "19 سنة خبرة",
        price: "500 ريال",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
      }
    ]
  },
  "pulmonology": {
    id: "pulmonology",
    number: "14",
    name: "عيادة الأمراض الصدرية",
    icon: "🫁",
    color: "bg-sky-500",
    description: "عيادة متخصصة في علاج أمراض الجهاز التنفسي والرئتين.",
    services: [
      "علاج الربو",
      "علاج الحساسية الصدرية",
      "علاج الانسداد الرئوي",
      "علاج السل",
      "فحص وظائف الرئة",
      "منظار الشعب الهوائية"
    ],
    doctors: [
      {
        id: "1",
        name: "د. ماجد علي",
        specialty: "استشاري الأمراض الصدرية",
        rating: 4.8,
        reviewCount: 356,
        experience: "20 سنة خبرة",
        price: "350 ريال",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400"
      }
    ]
  },
  "pediatric-cardiology": {
    id: "pediatric-cardiology",
    number: "15",
    name: "عيادة قلب أطفال",
    icon: "💗",
    color: "bg-pink-600",
    description: "عيادة متخصصة في تشخيص وعلاج أمراض القلب عند الأطفال.",
    services: [
      "تشخيص عيوب القلب الخلقية",
      "إيكو القلب للأطفال",
      "قسطرة القلب للأطفال",
      "متابعة أمراض القلب المزمنة",
      "تخطيط القلب",
      "الرعاية بعد جراحة القلب"
    ],
    doctors: [
      {
        id: "1",
        name: "د. رانيا محمد",
        specialty: "استشارية قلب الأطفال",
        rating: 5.0,
        reviewCount: 412,
        experience: "22 سنة خبرة",
        price: "450 ريال",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
      }
    ]
  }
};

// Available dates for booking
const generateAvailableDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

const timeSlots = [
  { value: "morning", label: "صباحا (8:00 - 12:00)" },
  { value: "evening", label: "مساء (4:30 - 8:30)" }
];

export function ClinicDetail() {
  const [, params] = useRoute("/clinic/:id");
  const clinicId = params?.id || "";
  const clinic = clinicsData[clinicId];

  // Booking form state
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const availableDates = generateAvailableDates();

  const handleBooking = () => {
    if (!selectedDoctor || !selectedDate || !selectedTime) {
      alert("الرجاء اختيار الطبيب والتاريخ والوقت");
      return;
    }

    const doctor = clinic.doctors.find((d: any) => d.id === selectedDoctor);
    const selectedDateObj = new Date(selectedDate);
    const formattedDate = selectedDateObj.toLocaleDateString('ar-SA', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const selectedTimeLabel = timeSlots.find(t => t.value === selectedTime)?.label;

    alert(
      `تم الحجز بنجاح! ✅\n\n` +
      `العيادة: ${clinic.name}\n` +
      `الطبيب: ${doctor.name}\n` +
      `التخصص: ${doctor.specialty}\n` +
      `التاريخ: ${formattedDate}\n` +
      `الوقت: ${selectedTimeLabel}\n` +
      `سعر الكشف: ${doctor.price}\n\n` +
      `سيتم تأكيد حجزك خلال 24 ساعة عبر الهاتف`
    );

    setIsBooked(true);
    setSelectedDoctor("");
    setSelectedDate("");
    setSelectedTime("");
  };

  if (!clinic) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2>العيادة غير موجودة</h2>
        <Link href="/clinics">
          <Button className="mt-4">العودة للعيادات</Button>
        </Link>
      </div>
    );
  }

  return (
    <div dir="rtl">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#4B3F99] via-purple-600 to-[#3DBEAE] text-white py-12">
        <div className="container mx-auto px-4 text-right">
          <Link href="/clinics">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
              <ArrowRight className="ml-2 h-5 w-5" />
              العودة لقائمة العيادات
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className={`${clinic.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-xl`}>
              {clinic.number}
            </div>
            <div>
              <h1 className="mb-2 text-3xl md:text-4xl">{clinic.name}</h1>
              <div className="text-4xl">{clinic.icon}</div>
            </div>
          </div>
          <p className="text-lg opacity-90 max-w-3xl">
            {clinic.description}
          </p>
        </div>
      </section>

      {/* Clinic Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-[#4B3F99]">
                    <Clock className="h-5 w-5 text-[#3DBEAE]" />
                    مواعيد العمل
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">السبت - الخميس: 8 ص - 8 م</p>
                    <p className="text-gray-600">الجمعة: مغلق</p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-[#4B3F99]">
                    <MapPin className="h-5 w-5 text-[#3DBEAE]" />
                    الموقع
                  </h3>
                  <p className="text-gray-600">عدن - المنصورة - ريمي</p>
                  <p className="text-gray-600 mt-1">بجانب مستشفى 22 مايو</p>
                </Card>
              </div>

              {/* Services */}
              <Card className="p-8">
                <h2 className="mb-6 text-2xl text-[#4B3F99]">الخدمات المقدمة</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clinic.services.map((service: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#3DBEAE] flex-shrink-0"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Doctors */}
              <div>
                <h2 className="mb-6 text-2xl text-[#4B3F99]">الأطباء المتاحون</h2>
                <div className="grid grid-cols-1 gap-6">
                  {clinic.doctors.map((doctor: any) => (
                    <Card key={doctor.id} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex gap-4 mb-4">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="mb-1 text-xl text-[#4B3F99]">{doctor.name}</h3>
                          <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{doctor.rating}</span>
                            <span className="text-gray-500">({doctor.reviewCount})</span>
                          </div>
                          <p className="text-sm text-gray-500">{doctor.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-[#3DBEAE] text-xl">سعر الكشف: {doctor.price}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="mb-6 text-xl text-[#4B3F99]">احجز موعدك</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-2">اختر الطبيب</p>
                    <Select
                      value={selectedDoctor}
                      onValueChange={setSelectedDoctor}
                      disabled={isBooked}
                    >
                      <SelectTrigger className="w-full text-right">
                        <SelectValue placeholder="اختر الطبيب المناسب" />
                      </SelectTrigger>
                      <SelectContent className="text-right">
                        {clinic.doctors.map((doctor: any) => (
                          <SelectItem key={doctor.id} value={doctor.id} className="text-right">
                            {doctor.name} - {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-2">اختر التاريخ</p>
                    <Select
                      value={selectedDate}
                      onValueChange={setSelectedDate}
                      disabled={isBooked || !selectedDoctor}
                    >
                      <SelectTrigger className="w-full text-right">
                        <SelectValue placeholder="اختر التاريخ المناسب" />
                      </SelectTrigger>
                      <SelectContent className="text-right">
                        {availableDates.map(date => (
                          <SelectItem key={date} value={date} className="text-right">
                            {new Date(date).toLocaleDateString('ar-SA', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-2">اختر الوقت</p>
                    <Select
                      value={selectedTime}
                      onValueChange={setSelectedTime}
                      disabled={isBooked || !selectedDate}
                    >
                      <SelectTrigger className="w-full text-right">
                        <SelectValue placeholder="اختر الوقت المناسب" />
                      </SelectTrigger>
                      <SelectContent className="text-right">
                        {timeSlots.map(slot => (
                          <SelectItem key={slot.value} value={slot.value} className="text-right">
                            {slot.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {selectedDoctor && (
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl text-[#3DBEAE]">
                        {clinic.doctors.find((d: any) => d.id === selectedDoctor)?.price}
                      </span>
                      <span className="text-gray-600">سعر الكشف</span>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full bg-[#3DBEAE] hover:bg-[#3DBEAE]/90 text-white py-6 mb-4" 
                  size="lg"
                  onClick={handleBooking}
                  disabled={isBooked}
                >
                  <Calendar className="ml-2 h-5 w-5" />
                  احجز الآن
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  سيتم تأكيد حجزك خلال 24 ساعة
                </p>

                <div className="border-t mt-6 pt-4">
                  <h4 className="mb-3 text-right text-[#4B3F99]">للاستفسار</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                      <span>777552666</span>
                      <Phone className="h-4 w-4 text-[#3DBEAE]" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                      <span>خدمة العملاء متاحة 24/7</span>
                      <Clock className="h-4 w-4 text-[#3DBEAE]" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}