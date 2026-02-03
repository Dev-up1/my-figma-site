import { useState } from "react";
import { useRoute, Link } from "wouter";
import { ArrowRight, Calendar, Clock, MapPin, Award, CheckCircle, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";

// Sample scan data
const scansData: Record<string, any> = {
  "echo": {
    id: "echo",
    name: "ايكو دوبلر",
    nameEn: "ECHO DOPPLER",
    icon: "🫀",
    description: "فحص القلب بالموجات فوق الصوتية (إيكو دوبلر) هو فحص طبي غير جراحي يستخدم الموجات فوق الصوتية لتصوير القلب والأوعية الدموية. يساعد هذا الفحص في تقييم وظائف القلب، الصمامات، وتدفق الدم عبر الأوعية الدموية.",
    price: "300 ريال",
    duration: "30-45 دقيقة",
    image: "https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWFjaGluZSUyMG1lZGljYWx8ZW58MXx8fHwxNzYzMTMzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    uses: [
      "تشخيص أمراض صمامات القلب",
      "تقييم وظيفة ضخ القلب",
      "الكشف عن جلطات الدم",
      "فحص عيوب القلب الخلقية",
      "تقييم تدفق الدم في الأوعية الدموية",
      "متابعة الحالات القلبية المزمنة"
    ],
    preparation: [
      "لا يتطلب صيام في معظم الحالات",
      "ارتداء ملابس مريحة وسهلة الخلع",
      "إحضار الأدوية التي تتناولها",
      "إحضار فحوصات سابقة إن وجدت"
    ],
    benefits: [
      "فحص آمن وغير مؤلم",
      "لا يستخدم إشعاعات ضارة",
      "نتائج فورية ودقيقة",
      "يمكن إجراؤه للحوامل"
    ]
  },
  "xray": {
    id: "xray",
    name: "الأشعة السينية",
    nameEn: "X-RAY",
    icon: "📷",
    description: "الأشعة السينية هي تقنية تصوير طبي تستخدم الإشعاع الكهرومغناطيسي لإنتاج صور للتراكيب الداخلية للجسم، وخاصة العظام والصدر.",
    price: "150 ريال",
    duration: "15-20 دقيقة",
    image: "https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4cmF5JTIwbWFjaGluZSUyMGhvc3BpdGFsfGVufDF8fHx8MTc2MzEzMzI1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    uses: [
      "فحص الكسور والشروخ في العظام",
      "تشخيص أمراض الصدر والرئتين",
      "الكشف عن التهاب المفاصل",
      "تقييم مشاكل الأسنان",
      "فحص البطن",
      "اكتشاف الأجسام الغريبة"
    ],
    preparation: [
      "إزالة المجوهرات والأشياء المعدنية",
      "إبلاغ الطبيب في حالة الحمل",
      "ارتداء ملابس مريحة",
      "اتباع تعليمات الفني المختص"
    ],
    benefits: [
      "سريع وغير مؤلم",
      "غير جراحي",
      "أسعار معقولة",
      "متوفر على نطاق واسع"
    ]
  },
  "ultrasound": {
    id: "ultrasound",
    name: "الموجات فوق الصوتية",
    nameEn: "ULTRASOUND",
    icon: "📡",
    description: "التصوير بالموجات فوق الصوتية هو تقنية تصوير طبي تستخدم الموجات الصوتية عالية التردد لإنشاء صور للأعضاء والأنسجة الداخلية.",
    price: "250 ريال",
    duration: "25-35 دقيقة",
    image: "https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWFjaGluZSUyMG1lZGljYWx8ZW58MXx8fHwxNzYzMTMzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    uses: [
      "متابعة الحمل والجنين",
      "فحص البطن والأعضاء الداخلية",
      "تقييم الغدة الدرقية",
      "فحص الثدي",
      "تشخيص مشاكل الكلى والمسالك البولية",
      "فحص الأوعية الدموية"
    ],
    preparation: [
      "قد يتطلب الصيام لبعض الفحوصات",
      "شرب الماء قبل فحص الحوض",
      "إحضار تقارير طبية سابقة",
      "ارتداء ملابس فضفاضة"
    ],
    benefits: [
      "آمن تماماً للحوامل",
      "لا يستخدم إشعاعات",
      "نتائج فورية",
      "يمكن تكراره بأمان"
    ]
  },
  "ct": {
    id: "ct",
    name: "الأشعة المقطعية",
    nameEn: "CT SCAN",
    icon: "🔬",
    description: "الأشعة المقطعية (CT Scan) هي تقنية تصوير طبي متقدمة تستخدم الأشعة السينية لإنشاء صور مفصلة ومقطعية للجسم من زوايا متعددة.",
    price: "500 ريال",
    duration: "45-60 دقيقة",
    image: "https://images.unsplash.com/photo-1620423855978-e5d74a7bef30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdCUyMHNjYW4lMjBtYWNoaW5lfGVufDF8fHx8MTc2MzEyNDg3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    uses: [
      "تشخيص الأورام والسرطانات",
      "فحص الإصابات الداخلية",
      "تقييم أمراض القلب والأوعية",
      "الكشف عن النزيف الداخلي",
      "فحص العمود الفقري",
      "تخطيط العمليات الجراحية"
    ],
    preparation: [
      "الصيام لمدة 4-6 ساعات",
      "إزالة الأشياء المعدنية",
      "إبلاغ الطبيب عن الحساسية",
      "شرب سائل التباين إذا لزم الأمر"
    ],
    benefits: [
      "صور عالية الدقة والتفصيل",
      "سريع وفعال",
      "يكشف تفاصيل دقيقة",
      "متعدد الاستخدامات"
    ]
  },
  "mri": {
    id: "mri",
    name: "الرنين المغناطيسي",
    nameEn: "MRI",
    icon: "🧲",
    description: "التصوير بالرنين المغناطيسي هو تقنية تصوير طبي متقدمة تستخدم المجال المغناطيسي وموجات الراديو لإنتاج صور تفصيلية للأعضاء والأنسجة الداخلية.",
    price: "800 ريال",
    duration: "60-90 دقيقة",
    image: "https://images.unsplash.com/photo-1664902265139-934219cee42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    uses: [
      "تشخيص أورام الدماغ والحبل الشوكي",
      "فحص إصابات المفاصل والعضلات",
      "تقييم أمراض القلب",
      "فحص الأعضاء الداخلية",
      "تشخيص السكتات الدماغية",
      "فحص الأوعية الدموية"
    ],
    preparation: [
      "إزالة جميع الأشياء المعدنية",
      "إبلاغ الطبيب عن أي غرسات معدنية",
      "الصيام لبعض أنواع الفحوصات",
      "ارتداء ملابس مريحة بدون معادن"
    ],
    benefits: [
      "صور عالية الوضوح",
      "لا يستخدم إشعاعات ضارة",
      "دقة عالية في التشخيص",
      "آمن للاستخدام المتكرر"
    ]
  },
  "eeg-emgs": {
    id: "eeg-emgs",
    name: "تخطيط الدماغ والأعصاب",
    nameEn: "EEG & EMG",
    icon: "🧠",
    description: "تخطيط كهربية الدماغ (EEG) وتخطيط كهربية العضل (EMG) هي فحوصات تشخيصية تقيس النشاط الكهربائي للدماغ والأعصاب والعضلات.",
    price: "350 ريال",
    duration: "40-60 دقيقة",
    image: "https://images.unsplash.com/photo-1720722818189-edcb9da6664d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    uses: [
      "تشخيص الصرع",
      "تقييم اضطرابات النوم",
      "فحص أمراض الأعصاب الطرفية",
      "تشخيص التهاب الأعصاب",
      "تقييم الإصابات العصبية",
      "متابعة أمراض العضلات"
    ],
    preparation: [
      "غسل الشعر قبل الفحص",
      "تجنب الكافيين قبل الفحص",
      "ارتداء ملابس مريحة",
      "إحضار قائمة بالأدوية"
    ],
    benefits: [
      "غير مؤلم وآمن",
      "دقيق في التشخيص",
      "لا يستخدم إشعاعات",
      "نتائج فورية"
    ]
  },
  "doppler": {
    id: "doppler",
    name: "دوبلر",
    nameEn: "DOPPLER",
    icon: "💓",
    description: "فحص الدوبلر هو نوع من الموجات فوق الصوتية يستخدم لتقييم تدفق الدم عبر الأوعية الدموية الرئيسية في الذراعين والساقين والرقبة.",
    price: "280 ریال",
    duration: "30-45 دقيقة",
    image: "https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    uses: [
      "فحص جريان الدم في الأوعية",
      "تشخيص جلطات الأوردة",
      "تقييم تضيق الشرايين",
      "فحص دوالي الساقين",
      "متابعة أمراض الأوعية الدموية",
      "فحص أوعية الرقبة"
    ],
    preparation: [
      "لا يتطلب صيام",
      "ارتداء ملابس فضفاضة",
      "إحضار فحوصات سابقة",
      "إبلاغ الطبيب عن الأدوية"
    ],
    benefits: [
      "آمن وغير مؤلم",
      "لا يستخدم إشعاعات",
      "نتائج دقيقة",
      "فحص سريع"
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

export function ScanDetail() {
  const [, params] = useRoute("/scan/:id");
  const scanId = params?.id || "";
  const scan = scansData[scanId];

  // Booking form state
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const availableDates = generateAvailableDates();

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("الرجاء اختيار التاريخ والوقت");
      return;
    }

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
      `الفحص: ${scan.name}\n` +
      `التاريخ: ${formattedDate}\n` +
      `الوقت: ${selectedTimeLabel}\n` +
      `سعر الفحص: ${scan.price}\n\n` +
      `سيتم تأكيد حجزك خلال 24 ساعة عبر الهاتف`
    );

    setIsBooked(true);
    setSelectedDate("");
    setSelectedTime("");
  };

  if (!scan) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2>الفحص غير موجود</h2>
        <Link href="/scans">
          <Button className="mt-4">العودة للفحوصات</Button>
        </Link>
      </div>
    );
  }

  return (
    <div dir="rtl">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#3DBEAE] via-teal-500 to-[#4B3F99] text-white py-12">
        <div className="container mx-auto px-4 text-right">
          <Link href="/scans">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
              <ArrowRight className="ml-2 h-5 w-5" />
              العودة لقائمة الفحوصات
            </Button>
          </Link>
        </div>
      </section>

      {/* Scan Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Scan Info Card */}
              <Card className="p-8">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="w-full md:w-1/3">
                    <img
                      src={scan.image}
                      alt={scan.name}
                      className="w-full h-64 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-6xl mb-4">{scan.icon}</div>
                    <h1 className="mb-2 text-3xl text-[#4B3F99]">{scan.name}</h1>
                    <p className="text-xl text-[#3DBEAE] mb-4">{scan.nameEn}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 justify-end">
                      <Badge variant="secondary" className="px-3 py-1">
                        <Clock className="h-4 w-4 ml-1" />
                        {scan.duration}
                      </Badge>
                      <Badge variant="secondary" className="px-3 py-1">
                        <MapPin className="h-4 w-4 ml-1" />
                        عدن - المنصورة
                      </Badge>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {scan.description}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Uses */}
              <Card className="p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl text-[#4B3F99] justify-end" dir="rtl">
                  <Award className="h-5 w-5 text-[#3DBEAE]" />
                  استخدامات الفحص
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3" dir="rtl">
                  {scan.uses.map((use: string, index: number) => (
                    <div key={index} className="flex items-start gap-2 justify-end text-right">
                      <span className="text-gray-600">{use}</span>
                      <CheckCircle className="h-5 w-5 text-[#3DBEAE] flex-shrink-0 mt-0.5" />
                    </div>
                  ))}
                </div>
              </Card>

              {/* Preparation */}
              <Card className="p-6">
                <h3 className="mb-4 text-xl text-[#4B3F99] text-right" dir="rtl">التحضير للفحص</h3>
                <ul className="space-y-3" dir="rtl">
                  {scan.preparation.map((prep: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 justify-end text-right">
                      <span className="text-gray-600">{prep}</span>
                      <div className="w-2 h-2 rounded-full bg-[#3DBEAE] mt-2 flex-shrink-0"></div>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Benefits */}
              <Card className="p-6">
                <h3 className="mb-4 text-xl text-[#4B3F99] text-right">مميزات الفحص</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {scan.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-[#3DBEAE]/5 rounded-lg">
                      <span className="text-gray-700">{benefit}</span>
                      <div className="w-10 h-10 bg-[#3DBEAE]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-[#3DBEAE]" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4">
                <h3 className="mb-6 text-xl text-[#4B3F99] text-right">احجز موعدك</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-2">التاريخ</p>
                    <Select
                      value={selectedDate}
                      onValueChange={setSelectedDate}
                      disabled={isBooked}
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
                    <p className="text-sm text-gray-500 mb-2">الوقت</p>
                    <Select
                      value={selectedTime}
                      onValueChange={setSelectedTime}
                      disabled={isBooked}
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

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl text-[#3DBEAE]">{scan.price}</span>
                    <span className="text-gray-600">سعر الفحص</span>
                  </div>
                  <p className="text-sm text-gray-500 text-right">شامل التقرير الطبي</p>
                </div>

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
                  <h4 className="mb-3 text-right text-[#4B3F99]">معلومات الاتصال</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                      <span>عدن - المنصورة - ريمي - بجانب مستشفى 22 مايو</span>
                      <MapPin className="h-4 w-4 text-[#3DBEAE]" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                      <span>777552666</span>
                      <Phone className="h-4 w-4 text-[#3DBEAE]" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                      <span>متاح يومياً: صباحاً (8:00 - 12:00) | مساءً (4:30 - 8:30)</span>
                      <Clock className="h-4 w-4 text-[#3DBEAE]" />
                    </div>
                  </div>
                </div>

                <div className="border-t mt-6 pt-4">
                  <h4 className="mb-3 text-right text-[#4B3F99]">ضمانات الحجز</h4>
                  <ul className="space-y-2 text-sm text-gray-600 text-right">
                    <li className="flex items-center gap-2 justify-end">
                      تأكيد فوري للحجز ✓
                    </li>
                    <li className="flex items-center gap-2 justify-end">
                      أجهزة حديثة ومعتمدة ✓
                    </li>
                    <li className="flex items-center gap-2 justify-end">
                      فنيون متخصصون ✓
                    </li>
                    <li className="flex items-center gap-2 justify-end">
                      نتائج سريعة ودقيقة ✓
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}