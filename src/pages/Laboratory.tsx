import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ConnectedDots } from "../components/ConnectedDots";
import { Microscope, Shield, Dna, Droplet, Calendar, Phone, MapPin, Award, Users, Activity, Zap, Building, Stethoscope } from "lucide-react";
import { Link } from "wouter";
import { useBooking } from "../contexts/BookingContext";

export function Laboratory() {
  const { openBooking } = useBooking();
  const services = [
    {
      id: "parasitology",
      icon: Microscope,
      title: "قسم الطفيليات",
      titleEn: "Parasitology",
      description: "يهتم القسم بكشف ومراقبة الطفيليات التي قد تؤثر على صحة المرضى، ويوجد بالقسم تحليل شامل ومفصل للحالات المختلفة.",
      equipment: "MIRALAB SPERMOLYZZER",
      equipmentDesc: "لتحليل السائل المنوي وتحديد مشاكل الإنجاب",
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "autoimmune",
      icon: Shield,
      title: "قسم المناعة الذاتية",
      titleEn: "Autoimmune Department",
      description: "يعنى قسم المناعة الذاتية بتشخيص الاضطرابات المناعية باستخدام تقنيات متقدمة. يشمل القسم تحليل مجموعة واسعة من الأجسام المضادة لتحديد المشكلات المناعية بدقة.",
      equipment: "Snibe MAGLUMI 800, YILO iFlash 1800, OLYMPUS - BX43",
      equipmentDesc: "أجهزة متقدمة لتحليل الاضطرابات المناعية",
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "immunology",
      icon: Droplet,
      title: "قسم المناعة",
      titleEn: "Immunology Department",
      description: "يعنى قسم المناعة بتقديم تشخيص دقيق وشامل للأمراض المعدية والفيروسية باستخدام أحدث الأجهزة والتقنيات. يركز القسم على تحليل مؤشرات حيوية أساسية لفهم الحالة الصحية للمريض بشكل أفضل وتحديد العلاج الأنسب.",
      equipment: "Roche Cobas e411, Abbott ARCHITECT i1000SR, BECKMAN Access2",
      equipmentDesc: "أجهزة حديثة لتحليل الأمراض المعدية والمناعية",
      color: "from-teal-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "molecular",
      icon: Dna,
      title: "قسم علم الأحياء الجزيئية",
      titleEn: "Molecular Biology Department",
      description: "يعنى القسم بإجراء فحوصات متقدمة تعتمد على تقنيات PCR للأمراض الفيروسية والبكتيرية. يحتوي المختبر أيضاً على غرف PCR بأحدث التقنيات، مما يضمن أعلى مستويات الدقة والأمان في عمليات التحليل.",
      equipment: "Analytik Jena - qTOWER 3, Cepheid GeneXpert 4-2L",
      equipmentDesc: "أجهزة PCR المتقدمة للتشخيص الدقيق",
      color: "from-green-500 to-green-600",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "microbiology",
      icon: Microscope,
      title: "قسم الميكروبيولوجي",
      titleEn: "Microbiology Department",
      description: "يعنى القسم بتشخيص الأمراض البكتيرية من خلال فحص مزرعة الأنواع البكتيرية واختبار حساسيتها للأدوية.",
      equipment: "BIOMEDIEUX BACT/ALERT 30 GO, BIOMEDIEUX VITEK 2, BSC-1100IA2-X",
      equipmentDesc: "نظام متطور لمزرعة الدم والسوائل مع تحليل البكتيريا وحاوية أمان بيولوجي",
      color: "from-cyan-500 to-cyan-600",
      image: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "hematology",
      icon: Activity,
      title: "قسم أمراض الدم",
      titleEn: "Hematology Department",
      description: "يعنى قسم أمراض الدم في مركز الحياة الطبي بتقديم تشخيص شامل ودقيق لحالات الدم عبر استخدام تقنيات وأجهزة متطورة. يركز القسم على تحليل مؤشرات الدم المختلفة، بما في ذلك عدد خلايا الدم وتحليل وظائف الخلوية، لضمان تشخيص دقيق وتقديم العلاج المناسب.",
      equipment: "Beckman DxH 520, Mindray BC-5600, Lifetronic H8, Helena SAS 2, Nihon Kohden Celltac G, DYMEX CN-901",
      equipmentDesc: "أجهزة متطورة لتحليل شامل لخلايا الدم والهيموغلوبين",
      color: "from-red-500 to-red-600",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "chemistry",
      icon: Zap,
      title: "قسم الكيمياء السريرية",
      titleEn: "Chemistry Department",
      description: "يعنى القسم بتقديم تحليل شامل ودقيق لمجموعة من الفحوصات الكيميائية باستخدام أحدث التقنيات. يركز القسم على تقييم الحالة الصحة العامة وتقديم نتائج دقيقة لدعم التشخيص والعلاج.",
      equipment: "Biosystem BA200, ROCHE COBAS INTEGRA 400 PLUS, ROCHE COBAS INTEGRA 400, Roche 9180, Erba ec-90",
      equipmentDesc: "أجهزة متقدمة لتحليل الفحوصات الكيميائية الحيوية والأنزيمات",
      color: "from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-[#3DBEAE]/20 via-white to-[#4B3F99]/10">
        <ConnectedDots />
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="text-right order-2 md:order-1" dir="rtl">
              <div className="inline-block px-4 py-2 bg-[#3DBEAE]/10 rounded-full mb-6">
                <span className="text-[#3DBEAE]">● مركز المدينة الطبي التخصصي</span>
              </div>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-[#4B3F99]">
                نهتم بصحتك
                <br />
                <span className="text-[#3DBEAE]">ونرعاها</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                نقدم فحوصات مخبرية شاملة ودقيقة باستخدام أحدث التقنيات وأجهزة التحليل المتطورة لضمان نتائج موثوقة
              </p>
              <Button 
                size="lg" 
                className="bg-[#3DBEAE] hover:bg-[#3DBEAE]/90 text-white px-10 py-6 text-lg"
              >
                احجز فحصك الآن
              </Button>
            </div>

            {/* Medical Staff Image */}
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Laboratory Staff"
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3DBEAE]/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="text-center">
                  <div className="text-4xl text-[#3DBEAE] mb-2">1000+</div>
                  <p className="text-sm text-gray-600">فحص يومي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Laboratory Equipment"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-right" dir="rtl">
              <h2 className="mb-6 text-3xl md:text-4xl text-[#4B3F99]">
                عن <span className="text-[#3DBEAE]">مختبرنا</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                مختبرنا كامل قسم فى المختبر على تقنيات متقدمة وإمكانيات فريدة تساهم فى رفع مستوى دقة التشخيص، وجودة الرعاية
                فيما يلي نقدم لكم بعض من الخدمات والتقنيات الرئيسية التي نميز كل وحدة وكيف تسهم في تقديم أفضل مستوى
                من الخدمة الصحية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <ConnectedDots />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">
              خدماتنا <span className="text-[#3DBEAE]">المخبرية</span>
            </h2>
            <p className="text-lg text-gray-600">
              أقسام متخصصة لفحوصات دقيقة وموثوقة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all group border-0">
                {/* Service Icon Header */}
                <div className={`bg-gradient-to-br ${service.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div className="text-right" dir="rtl">
                      <h3 className="text-2xl mb-1">{service.title}</h3>
                      <p className="text-sm opacity-90">{service.titleEn}</p>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 bg-white">
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <p className="text-gray-600 text-right leading-relaxed mb-4" dir="rtl">
                    {service.description}
                  </p>

                  <div className="bg-gradient-to-br from-[#3DBEAE]/5 to-[#4B3F99]/5 rounded-lg p-4 mb-4" dir="rtl">
                    <h4 className="text-[#4B3F99] mb-2 text-right">الأجهزة المستخدمة:</h4>
                    <p className="text-sm text-gray-700 mb-1 text-right">{service.equipment}</p>
                    <p className="text-xs text-gray-500 text-right">{service.equipmentDesc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4B3F99] to-[#3DBEAE] text-white relative overflow-hidden">
        <ConnectedDots />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Microscope className="h-10 w-10" />
              </div>
              <div className="text-4xl md:text-5xl mb-2">7</div>
              <p className="text-sm md:text-base opacity-90">أقسام متخصصة</p>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Activity className="h-10 w-10" />
              </div>
              <div className="text-4xl md:text-5xl mb-2">1000+</div>
              <p className="text-sm md:text-base opacity-90">فحص يومياً</p>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10" />
              </div>
              <div className="text-4xl md:text-5xl mb-2">50+</div>
              <p className="text-sm md:text-base opacity-90">فني مختبرات</p>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-10 w-10" />
              </div>
              <div className="text-4xl md:text-5xl mb-2">99%</div>
              <p className="text-sm md:text-base opacity-90">دقة النتائج</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Access Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">
              وصف <span className="text-[#3DBEAE]">الوصول والسهولة</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              يقع مركز المدينة الطبي في موقع استراتيجي يسهل الوصول إليه في مدينة عدن. يتألف المركز من ثلاثة طوابق حديثة، 
              مجهزة بأحدث التقنيات الطبية. ويوفر مساحات انتظار واسعة ومريحة في كل طابق، بما في ذلك مساحات انتظار 
              خاصة بالنساء. هذا يضمن تجربة سلسة ومرتاحة للمرضى والزوار.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ground Floor */}
            <Card className="p-8 hover:shadow-2xl transition-all border-t-4 border-[#3DBEAE]">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-[#3DBEAE]" />
              </div>
              <h3 className="mb-4 text-xl text-[#4B3F99] text-right" dir="rtl">الطابق الأرضي</h3>
              <p className="text-gray-600 leading-relaxed text-right" dir="rtl">
                يضم الأقسام الأساسية والأشعة المقطعية والتشخيص بالموجات فوق الصوتية، بالإضافة إلى قسم الطوارئ الذي يعمل 
                على تقديم الرعاية الصحية.
              </p>
            </Card>

            {/* Second Floor */}
            <Card className="p-8 hover:shadow-2xl transition-all border-t-4 border-[#4B3F99]">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Microscope className="h-8 w-8 text-[#4B3F99]" />
              </div>
              <h3 className="mb-4 text-xl text-[#4B3F99] text-right" dir="rtl">الطابق الثاني</h3>
              <p className="text-gray-600 leading-relaxed text-right" dir="rtl">
                يحتوي على مختبرات متقدمة لإجراء جميع أنواع الفحوصات الطبية. وغرف مخصصة لسحب العينات، إلى جانب العيادات 
                التخصصية التي تقدم استشارات طبية متخصصة وشاملة.
              </p>
            </Card>

            {/* Third Floor */}
            <Card className="p-8 hover:shadow-2xl transition-all border-t-4 border-[#3DBEAE]">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="h-8 w-8 text-[#3DBEAE]" />
              </div>
              <h3 className="mb-4 text-xl text-[#4B3F99] text-right" dir="rtl">الطابق الثالث</h3>
              <p className="text-gray-600 leading-relaxed text-right" dir="rtl">
                يحتوي على قسم المناظير وقسم إدارة الجودة، إلى جانب الأقسام الإدارية والمالية التي تضمن سير العمل بكفاءة 
                عالية.
              </p>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gradient-to-br from-[#3DBEAE]/5 to-[#4B3F99]/5 rounded-3xl p-8 md:p-12">
            <div className="text-right" dir="rtl">
              <h3 className="mb-6 text-2xl text-[#4B3F99]">خدمات إضافية لراحتكم</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600 leading-relaxed">
                <div>
                  <p className="mb-4">
                    • لضمان راحة المراجعين، يتواجد في كل طابق موظفون مؤهلون للإجابة عن الاستفسارات وتقديم المساعدة.
                  </p>
                  <p>
                    • مكان مخصص للصلاة وكافيتريا لتلبية احتياجات المرضى والزوار.
                  </p>
                </div>
                <div>
                  <p>
                    • قسم خدمة العملاء يسعى لتقديم دعم مستمر على مدار اليوم لضمان راحة المراجعين وتقديم المساعدة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">تواصل معنا</h2>
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
                <MapPin className="h-8 w-8 text-[#3DBEAE]" />
              </div>
              <h4 className="mb-2 text-[#4B3F99]">العنوان</h4>
              <p className="text-gray-600" dir="rtl">عدن - المنصورة - ريمي - بجانب مستشفى 22 مايو</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-[#3DBEAE]" />
              </div>
              <h4 className="mb-2 text-[#4B3F99]">ساعات العمل</h4>
              <p className="text-gray-600" dir="rtl">متاح 24/7</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#3DBEAE] to-[#4B3F99] text-white relative overflow-hidden">
        <ConnectedDots />
        <div className="container mx-auto px-4 text-center relative z-10" dir="rtl">
          <h2 className="mb-6 text-3xl md:text-4xl">احجز فحصك المخبري الآن</h2>
          <p className="mb-10 text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            نتائج دقيقة وسريعة مع أحدث التقنيات المخبرية
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="px-12 py-6 text-lg bg-white text-[#4B3F99] hover:bg-gray-100"
            onClick={openBooking}
          >
            <Calendar className="ml-2 h-5 w-5" />
            احجز الآن
          </Button>
        </div>
      </section>
    </div>
  );
}