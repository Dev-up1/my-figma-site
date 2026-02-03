import { ConnectedDots } from "../components/ConnectedDots";
import { Card, CardContent } from "../components/ui/card";
import { Target, Send, Award, CheckCircle, Users, Lightbulb, Heart, Shield, TrendingUp, BookOpen } from "lucide-react";

export function AboutUs() {
  const values = [
    { icon: Award, title: "التميز", color: "from-[#3DBEAE] to-[#3DBEAE]/80" },
    { icon: Heart, title: "التحلّي بمكارم الأخلاق", color: "from-[#4B3F99] to-[#4B3F99]/80" },
    { icon: CheckCircle, title: "محاسبة النفس", color: "from-[#3DBEAE] to-[#4B3F99]" },
    { icon: Users, title: "العمل بروح الفريق الواحد", color: "from-[#4B3F99] to-[#3DBEAE]" },
    { icon: Shield, title: "السلامة", color: "from-[#3DBEAE] to-[#3DBEAE]/80" },
    { icon: TrendingUp, title: "المسؤولية", color: "from-[#4B3F99] to-[#4B3F99]/80" }
  ];

  const ethics = [
    "الصدق",
    "الأمانة",
    "النزاهة",
    "التواضع",
    "احترام الآخرين",
    "الصبر",
    "الحكم",
    "العدل"
  ];

  const goals = [
    {
      number: "01",
      title: "إنشاء وتطوير مركز متميز",
      description: "يشمل جميع الأقسام والعيادات لتقديم خدمات طبية متقدمة ذات جودة عالية في مختلف الظروف."
    },
    {
      number: "02",
      title: "التركيز على رضا المرضى",
      description: "تقديم خدمات صحية آمنة وفي بيئة مناسبة وبأسعار معقولة لكافة شرائح المجتمع، خاصة الفئات المحتاجة."
    },
    {
      number: "03",
      title: "تطوير وتدريب الكوادر الطبية",
      description: "تحسين مهارات الطواقم الطبية والتمريضية، وتشجيع البحث وتوفير بيئة مناسبة لذلك."
    },
    {
      number: "04",
      title: "تقديم الخدمات الطبية التشخيصية المتقدمة",
      description: "بالتعاون مع طاقم المختبر الطبي بمختلف تخصصاته."
    },
    {
      number: "05",
      title: "المساهمة في خلق فرص عمل",
      description: "للأطباء والمختصين والعاملين في المجال الصحي."
    },
    {
      number: "06",
      title: "توفير فرص تدريب للطلاب",
      description: "لرفع قدراتهم العملية، خاصة في الأقسام الطبية والتخصصات المخبرية."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gradient-to-br from-[#4B3F99] to-[#3DBEAE] text-white">
        <ConnectedDots />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="text-center" dir="rtl">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl">عن المركز</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              نعمل على إحداث فرق مدعومًا بالتطور التكنولوجي، والتحول إلى السجل الطبي الإلكتروني لتحسين الخدمات الطبية المقدمة على مستوى المنطقة
            </p>
          </div>
        </div>
      </section>

      {/* من نحن */}
      <section className="py-16 md:py-24 bg-white relative">
        <ConnectedDots />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto" dir="rtl">
            <div className="text-center mb-12">
              <h2 className="mb-6 text-3xl md:text-4xl text-[#4B3F99]">من نحن</h2>
              <p className="text-xl text-[#3DBEAE] mb-8">
                مرحباً بكم في مركز الحياة الطبي!
              </p>
            </div>

            <Card className="border-t-4 border-t-[#3DBEAE]">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl text-[#4B3F99] mb-6 text-right">معلومات عنا</h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-right">
                  <p>
                    <span className="text-[#3DBEAE] font-semibold">"المدينة"</span> هو مركز طبي رائد في مجال الخدمات الطبية بالمنطقة، كان له الأثر الأول في خلق نواة التنافس بين الأعوام في التطور ومواكبة التقنيات الطبية الحديثة.
                  </p>
                  <p>
                    تأسس مركز "المدينة" بدايةً من عيادة واحدة، ومع رحلته العلمية وما توصلت إليه التكنولوجيا والتقنيات الحديثة، ثبت نجاحه وملاءمته لتشخيص وعلاج مختلف الحالات المرضية بالكادر الطبي المؤهل.
                  </p>
                  <p>
                    انطلقت أولى خطوات التطور بإنشاء المعامل التشخيصية، وبعدها مركز الأشعة، ثم حدث تغييرًا إيجابيًا ملحوظًا شقّ الطريق نحو الازدهار. ومنذ البداية يزيد عدد الوافدين من المرضى والمتعاملين مع مؤسسات طبية أخرى، ليصبح المركز مرجعية لكثير من الخدمات الطبية والمختبرات التشخيصية.
                  </p>
                  <p>
                    بعد نجاحه في تأسيس وتشغيل قسم مختبرات تشخيصية، يسعى مركز "المدينة" اليوم إلى تشغيل وحدات المؤسسات كاملةً إلى العمل بنظام <span className="text-[#4B3F99] font-semibold">"السجل الطبي الإلكتروني"</span>، وتعزيز نظام الفحوصات والإجراءات الطبية من العيادات والعمليات والمختبرات والصيدليات، لضمان تقديم أفضل الخدمات الطبية.
                  </p>
                  <p>
                    يعتمد المركز على رؤية استراتيجية واضحة توفر الوقت والجهد على الطبيب والمريض، كما يمكنه إنشاء هيكل متكامل مع مؤسسات صحية أخرى خارج المنشأة، لتمكنه من تبادل وحصد البيانات الصحية محليًا وإقليميًا وحتى عالميًا.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* رؤيتنا ورسالتنا */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" dir="rtl">
            {/* رؤيتنا */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 md:p-10 text-right">
                <div className="flex items-center gap-4 mb-6 justify-end">
                  <h3 className="text-2xl md:text-3xl text-[#4B3F99]">رؤيتنا</h3>
                  <div className="bg-gradient-to-br from-[#3DBEAE] to-[#4B3F99] w-16 h-16 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نسعى لإحداث فرق في جودة الخدمات الطبية المقدمة، وفق المعايير والممارسات الدولية.
                </p>
              </CardContent>
            </Card>

            {/* رسالتنا */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 md:p-10 text-right">
                <div className="flex items-center gap-4 mb-6 justify-end">
                  <h3 className="text-2xl md:text-3xl text-[#4B3F99]">رسالتنا</h3>
                  <div className="bg-gradient-to-br from-[#4B3F99] to-[#3DBEAE] w-16 h-16 rounded-full flex items-center justify-center">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  صناعة نموذج فريد لخدمات طبية متميزة من خلال:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3 justify-end">
                    <span>استقطاب الكوادر الطبية المؤهلة</span>
                    <CheckCircle className="h-5 w-5 text-[#3DBEAE] flex-shrink-0 mt-1" />
                  </li>
                  <li className="flex items-start gap-3 justify-end">
                    <span>توظيف التقنيات الحديثة</span>
                    <CheckCircle className="h-5 w-5 text-[#3DBEAE] flex-shrink-0 mt-1" />
                  </li>
                  <li className="flex items-start gap-3 justify-end">
                    <span>الالتزام المستمر بمعايير الجودة</span>
                    <CheckCircle className="h-5 w-5 text-[#3DBEAE] flex-shrink-0 mt-1" />
                  </li>
                  <li className="flex items-start gap-3 justify-end">
                    <span>ضمان سلامة المرضى وعدم الإضرار بالبيئة</span>
                    <CheckCircle className="h-5 w-5 text-[#3DBEAE] flex-shrink-0 mt-1" />
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* قيمنا */}
      <section className="py-16 md:py-24 bg-white relative">
        <ConnectedDots />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">قيمنا</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              القيم التي نؤمن بها ونلتزم بها في تقديم خدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`bg-gradient-to-br ${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg text-[#4B3F99]">{value.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* شرح القيم */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" dir="rtl">
            <Card className="border-t-4 border-t-[#3DBEAE]">
              <CardContent className="p-6 text-right">
                <h4 className="text-xl text-[#4B3F99] mb-4">التحلي بمكارم الأخلاق:</h4>
                <div className="flex flex-wrap gap-2">
                  {ethics.map((ethic, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#3DBEAE]/10 text-[#3DBEAE]">
                      {ethic}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#4B3F99]">
              <CardContent className="p-6 text-right">
                <h4 className="text-xl text-[#4B3F99] mb-4">السلامة:</h4>
                <p className="text-gray-700">
                  الالتزام بالمحافظة على سلامة المرضى والبيئة.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#3DBEAE]">
              <CardContent className="p-6 text-right">
                <h4 className="text-xl text-[#4B3F99] mb-4">المسؤولية:</h4>
                <p className="text-gray-700">
                  العمل الفعّال وتحمل المسؤولية المالية.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* أهدافنا */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4B3F99]/5 to-[#3DBEAE]/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="mb-4 text-3xl md:text-4xl text-[#4B3F99]">أهدافنا</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نسعى لتحقيق أهداف طموحة لخدمة مجتمعنا الطبي
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto" dir="rtl">
            {goals.map((goal, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gradient-to-br from-[#3DBEAE] to-[#4B3F99] w-full md:w-24 h-24 md:h-auto flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-4xl md:text-5xl text-white/90">{goal.number}</span>
                    </div>
                    <div className="p-6 text-right flex-1">
                      <h3 className="text-xl text-[#4B3F99] mb-3">{goal.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}