import { BookingSearch } from "../components/BookingSearch";
import { ConnectedDots } from "../components/ConnectedDots";
import { Stethoscope, Activity, Heart, Brain, Eye, Bone, Users, Building2, Award, Clock } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { useBooking } from "../contexts/BookingContext";
import logoImg from "figma:asset/191b8b2a91fe6b8447c0f24455d1d726a9b152ab.png";
import doctorImg from "figma:asset/5ea25ec142ddc258448aec0e4ce2257884937b93.png";
import receptionImg from "figma:asset/24b8d70a981e14ca60d564e39dcf65faf5036dee.png";

export function Home() {
  const { openBooking } = useBooking();
  const specialties = [
    { icon: Heart, name: "القلب والأوعية الدموية", count: 250, id: "heart" },
    { icon: Brain, name: "الأعصاب والمخ", count: 180, id: "nerves" },
    { icon: Bone, name: "العظام", count: 320, id: "bones" },
    { icon: Eye, name: "العيون", count: 150, id: "eyes" },
    { icon: Stethoscope, name: "الباطنة", count: 400, id: "internal" },
    { icon: Activity, name: "الأطفال", count: 280, id: "pediatrics" }
  ];

  const doctors = [
    {
      id: "al-as-abdulhamid",
      name: "د. العاص عبدالحميد",
      specialty: "الاشعة التشخيصية",
      experience: "15 سنة خبرة",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      id: "randa-alwail",
      name: "د. رندا ناصر محمد الوعل",
      specialty: "طب أطفال",
      experience: "12 سنة خبرة",
      image: "https://images.unsplash.com/photo-1737792837727-fd46ff71acf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "adel-aldabai",
      name: "د. عادل جميل الدبعي",
      specialty: "القلب والاوعية الدموية",
      experience: "18 سنة خبرة",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      id: "ibtihal-baharon",
      name: "د. ابتهال عقيل باهارون",
      specialty: "القلب والاوعية الدموية",
      experience: "10 سنوات خبرة",
      image: "https://images.unsplash.com/photo-1741868159744-159b83484687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Doctor Image */}
      <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-[#3DBEAE]/20 via-white to-[#4B3F99]/10">
        <ConnectedDots />
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="text-right order-2 md:order-1" dir="rtl">
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-[#4B3F99]">
                أفضل مركز طبي
                <br />
                <span className="text-[#3DBEAE]">لعلاجك</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                مركز الحياة الطبي يقدم خدمات طبية متميزة في جميع التخصصات
                مع أحدث التقنيات وأفضل الأطباء المتخصصين في عدن - المنصورة
              </p>
              <Button 
                size="lg" 
                className="bg-[#3DBEAE] hover:bg-[#3DBEAE]/90 text-white px-8 py-6 text-lg"
                onClick={openBooking}
              >
                احجز موعدك الآن
              </Button>
            </div>

            {/* Doctor Image */}
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10">
                <img
                  src={doctorImg}
                  alt="Doctor"
                  className="w-full h-[400px] md:h-[600px] object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3DBEAE]/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
                <div className="text-center">
                  <div className="text-4xl text-[#3DBEAE] mb-2">600+</div>
                  <p className="text-sm text-gray-600">مريض راضٍ عن خدماتنا</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Search Section */}
      <section className="py-8 md:py-12 bg-white relative">
        <div className="container mx-auto px-4">
          <BookingSearch />
        </div>
      </section>

      {/* About Our Center Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <ConnectedDots />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={receptionImg}
                  alt="Medical Center"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-right order-1 md:order-2" dir="rtl">
              <h2 className="mb-6 text-3xl md:text-4xl text-[#4B3F99]">
                عن مركزنا الطبي
                <span className="text-[#3DBEAE]"> المتخصص</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                نحن في مركز الحياة الطبي نقدم رعاية صحية شاملة ومتميزة
                لجميع أفراد الأسرة. نمتلك فريقاً طبياً متخصصاً وأجهزة حديثة
                لتقديم أفضل الخدمات الطبية.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-[#3DBEAE] to-[#3DBEAE]/80 text-white rounded-2xl p-6 text-center">
                  <div className="text-4xl md:text-5xl mb-2">600</div>
                  <p className="text-sm md:text-base">مرضى راضون عن خدماتنا</p>
                </div>
                <div className="bg-white border-2 border-[#3DBEAE] rounded-2xl p-6 text-center">
                  <div className="text-4xl md:text-5xl text-[#4B3F99] mb-2">30</div>
                  <p className="text-sm md:text-base text-gray-600">عيادة خلال الشهر</p>
                </div>
                <div className="bg-white border-2 border-[#4B3F99] rounded-2xl p-6 text-center">
                  <div className="text-4xl md:text-5xl text-[#3DBEAE] mb-2">60</div>
                  <p className="text-sm md:text-base text-gray-600">طبيب مختص</p>
                </div>
                <div className="bg-gradient-to-br from-[#4B3F99] to-[#4B3F99]/80 text-white rounded-2xl p-6 text-center">
                  <div className="text-4xl md:text-5xl mb-2">24/7</div>
                  <p className="text-sm md:text-base">خدمة طوال اليوم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Specialists Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <ConnectedDots />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12" dir="rtl">
            <p className="text-[#3DBEAE] mb-2">تعرف على</p>
            <h2 className="text-3xl md:text-4xl text-[#4B3F99] mb-4">أخصائيونا المتميزون</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {doctors.map((doctor, index) => (
              <Link key={index} href={`/doctor/${doctor.id}`}>
                <Card className="hover:shadow-2xl transition-all duration-300 group overflow-hidden cursor-pointer">
                  <CardContent className="p-0">
                    {/* Doctor Image with Circular Overlay */}
                    <div className="relative h-64 bg-gradient-to-br from-[#3DBEAE]/20 to-[#4B3F99]/20 flex items-center justify-center overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-[#3DBEAE]/10 rounded-full scale-150"></div>
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="relative z-10 w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Doctor Info */}
                    <div className="p-6 text-center" dir="rtl">
                      <h3 className="mb-2 text-[#4B3F99]">{doctor.name}</h3>
                      <p className="text-[#3DBEAE] mb-2">{doctor.specialty}</p>
                      <p className="text-sm text-gray-500">{doctor.experience}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/doctors">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[#3DBEAE] text-[#3DBEAE] hover:bg-[#3DBEAE] hover:text-white px-12"
              >
                عرض جميع الأطباء
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Medical Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4B3F99] to-[#3DBEAE] text-white relative overflow-hidden">
        <ConnectedDots />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl">خدماتنا الطبية</h2>
            <p className="text-lg opacity-90">
              نقدم مجموعة شاملة من الخدمات الطبية المتخصصة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Link href="/clinics">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Building2 className="h-10 w-10" />
                  </div>
                  <h3 className="mb-3 text-2xl">العيادات التخصصية</h3>
                  <p className="opacity-90">
                    16 عيادة متخصصة لتلبية جميع احتياجاتك الصحية
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/doctors">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="mb-3 text-2xl">أطباء متخصصون</h3>
                  <p className="opacity-90">
                    نخبة من أفضل الأطباء في جميع التخصصات الطبية
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/scans">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Activity className="h-10 w-10" />
                  </div>
                  <h3 className="mb-3 text-2xl">المدينة سكان</h3>
                  <p className="opacity-90">
                    أحدث أجهزة التصوير والتشخيص الطبي المتقدم
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/laboratory">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Activity className="h-10 w-10" />
                  </div>
                  <h3 className="mb-3 text-2xl">الفحوصات المخبرية</h3>
                  <p className="opacity-90">
                    فحوصات دقيقة وشاملة باستخدام أحدث المعدات المخبرية
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">
              لماذا تختار <span className="text-[#3DBEAE]">مركزنا؟</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-12 w-12 text-[#3DBEAE]" />
              </div>
              <h3 className="mb-3 text-[#4B3F99]">جودة عالية</h3>
              <p className="text-gray-600">
                نلتزم بأعلى معايير الجودة في تقديم الخدمات الطبية
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-12 w-12 text-[#4B3F99]" />
              </div>
              <h3 className="mb-3 text-[#4B3F99]">فريق محترف</h3>
              <p className="text-gray-600">
                أطباء وممرضون ذوو خبرة وكفاءة عالية
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="h-12 w-12 text-[#3DBEAE]" />
              </div>
              <h3 className="mb-3 text-[#4B3F99]">مرافق حديثة</h3>
              <p className="text-gray-600">
                مركز طبي مجهز بأحدث التقنيات والمعدات
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-12 w-12 text-[#4B3F99]" />
              </div>
              <h3 className="mb-3 text-[#4B3F99]">خدمة 24/7</h3>
              <p className="text-gray-600">
                نحن في خدمتك على مدار الساعة طوال أيام الأسبوع
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#3DBEAE] to-[#4B3F99] text-white relative overflow-hidden">
        <ConnectedDots />
        <div className="container mx-auto px-4 text-center relative z-10" dir="rtl">
          <h2 className="mb-6 text-3xl md:text-4xl">ابدأ رحلتك الصحية الآن</h2>
          <p className="mb-10 text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            احجز موعدك مع أفضل الأطباء في مركز الحياة الطبي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-12 py-6 text-lg bg-white text-[#4B3F99] hover:bg-gray-100"
              onClick={openBooking}
            >
              احجز الآن
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-12 py-6 text-lg border-2 border-white text-white hover:bg-white/20"
            >
              اتصل بنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}