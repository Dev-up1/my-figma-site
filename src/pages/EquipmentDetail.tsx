import { useRoute, Link } from "wouter";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CheckCircle2, ArrowRight, Award, Shield, Zap, Info } from "lucide-react";

interface EquipmentData {
  id: string;
  name: string;
  nameEn: string;
  model: string;
  manufacturer: string;
  image: string;
  overview: string;
  specifications: string[];
  features: string[];
  benefits: string[];
  applications: string[];
}

const equipmentDatabase: Record<string, EquipmentData> = {
  "eeg-emg": {
    id: "eeg-emg",
    name: "جهاز تخطيط الدماغ والأعصاب",
    nameEn: "EEG & EMG Machine",
    model: "Nihon Kohden Neuropack",
    manufacturer: "Nihon Kohden Corporation",
    image: "https://images.unsplash.com/photo-1720722818189-edcb9da6664d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFRUclMjBtZWRpY2FsJTIwZGV2aWNlJTIwYnJhaW58ZW58MXx8fHwxNzYzMTk4MTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "جهاز تخطيط كهربائية الدماغ والعضلات من أحدث الأجهزة الطبية المستخدمة لتشخيص الاضطرابات العصبية والعضلية. يوفر قياسات دقيقة للنشاط الكهربائي في الدماغ والجهاز العصبي المحيطي، مما يساعد الأطباء على تشخيص الصرع، واضطرابات النوم، والأمراض العصبية العضلية بدقة عالية.",
    specifications: [
      "نظام تسجيل رقمي متعدد القنوات",
      "معايرة تلقائية للإشارات",
      "دقة عالية في قياس النشاط الكهربائي",
      "شاشة عرض عالية الوضوح"
    ],
    features: [
      "تسجيل دقيق للنشاط الكهربائي للدماغ والعضلات",
      "تحليل متقدم للإشارات العصبية",
      "واجهة استخدام سهلة وبديهية",
      "نتائج فورية وتقارير مفصلة",
      "تقنية تصفية متقدمة للضوضاء",
      "إمكانية تسجيل لفترات طويلة",
      "أقطاب عالية الجودة ومريحة للمريض",
      "تخزين رقمي للبيانات والتقارير"
    ],
    benefits: [
      "تشخيص دقيق للأمراض العصبية",
      "فحص غير مؤلم وآمن تماماً",
      "نتائج سريعة وموثوقة",
      "يساعد في تحديد خطة العلاج المناسبة"
    ],
    applications: [
      "تشخيص الصرع واضطراباته",
      "تقييم اضطرابات النوم",
      "فحص أمراض الأعصاب الطرفية",
      "تشخيص اضطرابات العضلات"
    ]
  },
  "echo": {
    id: "echo",
    name: "جهاز تخطيط صدى القلب",
    nameEn: "Echocardiography Machine",
    model: "Philips EPIQ CVx",
    manufacturer: "Philips Healthcare",
    image: "https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2hvY2FyZGlvZ3JhbSUyMHVsdHJhc291bmQlMjBtYWNoaW5lfGVufDF8fHx8MTc2MzE5ODE1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "جهاز تخطيط صدى القلب (ايكو) يوفر تصويراً دقيقاً وواضحاً لبنية القلب ووظائفه. يستخدم الموجات فوق الصوتية المتطورة لتقييم صحة القلب، الصمامات، والدورة الدموية، مما يساعد في الكشف المبكر عن أمراض القلب وتقييم فعالية العلاج.",
    specifications: [
      "تقنية الموجات فوق الصوتية ثلاثية ورباعية الأبعاد",
      "نظام Doppler متقدم",
      "معالج صور عالي السرعة",
      "شاشة عرض عالية الدقة"
    ],
    features: [
      "تصوير ثلاثي ورباعي الأبعاد للقلب",
      "تقنية Doppler المتقدمة لقياس تدفق الدم",
      "جودة صورة استثنائية وواضحة",
      "فحص شامل لصمامات القلب",
      "قياس دقيق لوظائف القلب",
      "تقارير تلقائية وشاملة",
      "فحص غير مؤلم وآمن تماماً",
      "نتائج فورية أثناء الفحص"
    ],
    benefits: [
      "تشخيص دقيق لأمراض القلب والأوعية",
      "فحص آمن بدون إشعاع",
      "يساعد في تقييم صحة القلب بشكل شامل",
      "مناسب لجميع الأعمار"
    ],
    applications: [
      "تقييم وظائف القلب والصمامات",
      "الكشف عن أمراض القلب الخلقية",
      "تشخيص أمراض عضلة القلب",
      "متابعة فعالية العلاج القلبي"
    ]
  },
  "xray": {
    id: "xray",
    name: "جهاز الأشعة السينية الرقمي",
    nameEn: "Digital X-Ray Machine",
    model: "Siemens Luminos dRF Max",
    manufacturer: "Siemens Healthineers",
    image: "https://images.unsplash.com/photo-1726601057260-e8095dad345a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHh4cmF5JTIwbWFjaGluZSUyMG1lZGljYWx8ZW58MXx8fHwxNzYzMTk4MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "جهاز الأشعة السينية الرقمي يوفر صوراً عالية الجودة للعظام والأنسجة الداخلية بأقل جرعة إشعاعية ممكنة. التقنية الرقمية المتقدمة تضمن نتائج سريعة ودقيقة، مما يساعد في تشخيص الكسور، الالتهابات، والأمراض المختلفة بكفاءة عالية.",
    specifications: [
      "نظام تصوير رقمي مباشر",
      "كاشف لوحي مسطح عالي الدقة",
      "تحكم تلقائي في التعرض الإشعاعي",
      "معالجة فورية للصور"
    ],
    features: [
      "تصوير رقمي عالي الدقة",
      "جرعة إشعاعية منخفضة وآمنة",
      "نتائج فورية وسريعة",
      "صور واضحة وعالية التفاصيل",
      "تصوير لجميع أجزاء الجسم",
      "سهولة في الحفظ والمشاركة الرقمية",
      "تقنية تقليل الضوضاء",
      "راحة أكبر للمريض"
    ],
    benefits: [
      "تشخيص سريع ودقيق للكسور",
      "فحص شامل للصدر والعظام",
      "جرعة إشعاعية آمنة ومنخفضة",
      "نتائج فورية خلال دقائق"
    ],
    applications: [
      "تشخيص كسور العظام",
      "فحص الصدر والرئتين",
      "تقييم التهابات المفاصل",
      "فحص الأسنان والفكين"
    ]
  },
  "ct": {
    id: "ct",
    name: "جهاز الأشعة المقطعية",
    nameEn: "CT Scanner",
    model: "Siemens Somatom go.All",
    manufacturer: "Siemens Healthineers",
    image: "https://images.unsplash.com/photo-1630128283451-6a3c40ba26d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdCUyMHNjYW4lMjBtYWNoaW5lJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzYzMTk4MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "جهاز الأشعة المقطعية المحوسبة يوفر تصويراً مقطعياً ثلاثي الأبعاد بدقة استثنائية لجميع أعضاء الجسم. يستخدم في تشخيص مجموعة واسعة من الحالات الطبية من الإصابات إلى الأورام والأمراض المزمنة، مع سرعة فائقة وجودة صورة عالية.",
    specifications: [
      "نظام مسح بـ 64 شريحة",
      "وقت دوران سريع",
      "نظام تقليل الجرعة الإشعاعية",
      "برنامج إعادة بناء الصور المتقدم"
    ],
    features: [
      "تصوير بـ 64 شريحة لدقة فائقة",
      "فحص سريع وشامل",
      "تصوير ثلاثي الأبعاد متقدم",
      "جرعة إشعاعية محسّنة ومنخفضة",
      "تشخيص دقيق للأورام والإصابات",
      "تصوير للأوعية الدموية بوضوح",
      "إعادة بناء الصور بجودة عالية",
      "فحص كامل للجسم في دقائق"
    ],
    benefits: [
      "تشخيص شامل ودقيق",
      "كشف مبكر للأورام والأمراض",
      "تخطيط دقيق للعمليات الجراحية",
      "متابعة فعالة للعلاج"
    ],
    applications: [
      "تشخيص الأورام والسرطانات",
      "فحص الإصابات الداخلية",
      "تصوير الأوعية الدموية",
      "تقييم أمراض العمود الفقري"
    ]
  },
  "ultrasound": {
    id: "ultrasound",
    name: "جهاز الموجات فوق الصوتية",
    nameEn: "Ultrasound Machine",
    model: "GE Voluson E10",
    manufacturer: "GE Healthcare",
    image: "https://images.unsplash.com/photo-1630531210843-d6f343ad1f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWVkaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMxOTgxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "جهاز الموجات فوق الصوتية يوفر تصويراً رباعي الأبعاد عالي الدقة للأعضاء الداخلية والأجنة. آمن تماماً وغير مؤلم، يستخدم على نطاق واسع في فحوصات الحمل، البطن، القلب، والأوعية الدموية، مع جودة صورة استثنائية.",
    specifications: [
      "تقنية التصوير رباعي الأبعاد (4D)",
      "مجسات متعددة التردد",
      "نظام Doppler الملون المتقدم",
      "معالج صور عالي السرعة"
    ],
    features: [
      "تصوير رباعي الأبعاد (4D) للأجنة",
      "جودة صورة عالية الوضوح",
      "فحص آمن بدون إشعاع",
      "تصوير Doppler ملون متقدم",
      "فحوصات شاملة للبطن والحوض",
      "تقييم دقيق للحمل والأجنة",
      "تصوير للأوعية الدموية",
      "نتائج فورية أثناء الفحص"
    ],
    benefits: [
      "فحص آمن للحوامل والأجنة",
      "تشخيص دقيق بدون إشعاع",
      "مناسب لجميع الأعمار",
      "متابعة شاملة للحمل"
    ],
    applications: [
      "متابعة الحمل والأجنة",
      "فحص البطن والأعضاء الداخلية",
      "تقييم الغدة الدرقية",
      "فحص الأوعية الدموية"
    ]
  }
};

export function EquipmentDetail() {
  const [, params] = useRoute("/equipment/:id");
  const equipment = params?.id ? equipmentDatabase[params.id] : null;

  if (!equipment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 text-center">
          <h2 className="text-2xl text-[#4B3F99] mb-4">الجهاز غير موجود</h2>
          <Link href="/scans">
            <Button className="bg-[#3DBEAE] hover:bg-[#3DBEAE]/90">
              العودة إلى الأجهزة
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#3DBEAE] hover:underline">
              الرئيسية
            </Link>
            <span className="text-gray-400">←</span>
            <Link href="/scans" className="text-[#3DBEAE] hover:underline">
              الأجهزة الطبية
            </Link>
            <span className="text-gray-400">←</span>
            <span className="text-gray-600">{equipment.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge className="bg-[#3DBEAE]/10 text-[#3DBEAE] mb-4 text-lg px-4 py-2">
            {equipment.nameEn}
          </Badge>
          <h1 className="text-4xl md:text-5xl text-[#4B3F99] mb-4">
            {equipment.name}
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span>{equipment.model}</span>
            <span>•</span>
            <span>{equipment.manufacturer}</span>
          </div>
        </div>

        {/* Image and Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#3DBEAE] text-white px-4 py-2 rounded-full flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>معتمد من وزارة الصحة</span>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Shield className="h-8 w-8 text-[#3DBEAE] mx-auto mb-2" />
                <p className="text-sm text-gray-600">آمن</p>
                <p className="text-[#4B3F99]">معتمد</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Zap className="h-8 w-8 text-[#3DBEAE] mx-auto mb-2" />
                <p className="text-sm text-gray-600">دقة</p>
                <p className="text-[#4B3F99]">عالية</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Info className="h-8 w-8 text-[#3DBEAE] mx-auto mb-2" />
                <p className="text-sm text-gray-600">تقنية</p>
                <p className="text-[#4B3F99]">حديثة</p>
              </Card>
            </div>
          </div>

          {/* Overview Section */}
          <div>
            <Card className="p-8 h-full">
              <h2 className="text-3xl text-[#4B3F99] mb-6 flex items-center gap-2">
                <Info className="h-8 w-8 text-[#3DBEAE]" />
                نظرة عامة
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {equipment.overview}
              </p>
              
              <h3 className="text-xl text-[#4B3F99] mb-4">المواصفات التقنية</h3>
              <div className="space-y-3">
                {equipment.specifications.map((spec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#3DBEAE] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{spec}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Features and Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Features */}
          <Card className="p-8">
            <h2 className="text-3xl text-[#4B3F99] mb-6">
              المميزات التقنية
            </h2>
            <div className="space-y-4">
              {equipment.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#3DBEAE] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Benefits */}
          <Card className="p-8 bg-gradient-to-br from-[#3DBEAE]/5 to-[#4B3F99]/5">
            <h2 className="text-3xl text-[#4B3F99] mb-6">
              الفوائد الطبية
            </h2>
            <div className="space-y-4 mb-8">
              {equipment.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#3DBEAE] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl text-[#4B3F99] mb-4">الاستخدامات الطبية</h3>
            <div className="space-y-3">
              {equipment.applications.map((app, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3DBEAE] mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{app}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Navigation Section */}
        <section>
          <Card className="p-12 bg-gradient-to-br from-[#4B3F99] to-[#3DBEAE] text-white text-center">
            <h2 className="text-3xl md:text-4xl mb-4">
              تعرف على المزيد من الأجهزة
            </h2>
            <p className="text-xl mb-8 opacity-90">
              نوفر أحدث الأجهزة الطبية لتشخيص دقيق وآمن
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/scans">
                <Button 
                  size="lg" 
                  className="bg-white text-[#4B3F99] hover:bg-gray-100 px-12 py-6 text-xl"
                >
                  عرض جميع الأجهزة
                  <ArrowRight className="mr-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
