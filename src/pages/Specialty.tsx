import { useRoute, Link } from "wouter";
import { ArrowRight, Star, MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useBooking } from "../contexts/BookingContext";

// Specialty data with doctors
const specialtyData = {
  pediatrics: {
    name: "الأطفال",
    nameEn: "pediatrics",
    doctorCount: "280 طبيب",
    description: "قسم الأطفال يقدم رعاية طبية شاملة للأطفال من حديثي الولادة حتى سن 18 عامًا. يضم القسم نخبة من أطباء الأطفال المتخصصين في جميع الحالات الصحية للأطفال.",
    icon: "🧒",
    doctors: [
      {
        id: 1,
        name: "د. أحمد محمد",
        specialty: "طب الأطفال",
        rating: 4.8,
        reviewCount: 245,
        location: "عدن - المنصورة",
        price: "200 ريال",
        experience: "15 سنة خبرة",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400"
      },
      {
        id: 2,
        name: "د. فاطمة علي",
        specialty: "طب الأطفال والرضع",
        rating: 4.9,
        reviewCount: 320,
        location: "عدن - المنصورة",
        price: "250 ريال",
        experience: "12 سنة خبرة",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
      },
      {
        id: 3,
        name: "د. خالد سالم",
        specialty: "طب أطفال عام",
        rating: 4.7,
        reviewCount: 189,
        location: "عدن - المنصورة",
        price: "180 ريال",
        experience: "10 سنوات خبرة",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
      }
    ]
  },
  internal: {
    name: "الباطنية",
    nameEn: "internal",
    doctorCount: "400 طبيب",
    description: "قسم الأمراض الباطنية يختص بتشخيص وعلاج أمراض الأعضاء الداخلية للبالغين، بما في ذلك أمراض الجهاز الهضمي والكبد والكلى.",
    icon: "🩺",
    doctors: [
      {
        id: 4,
        name: "د. محمود حسن",
        specialty: "الأمراض الباطنية",
        rating: 4.9,
        reviewCount: 412,
        location: "عدن - المنصورة",
        price: "300 ريال",
        experience: "20 سنة خبرة",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400"
      },
      {
        id: 5,
        name: "د. سارة يوسف",
        specialty: "باطنية عامة",
        rating: 4.8,
        reviewCount: 298,
        location: "عدن - المنصورة",
        price: "280 ريال",
        experience: "18 سنة خبرة",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
      }
    ]
  },
  eyes: {
    name: "العيون",
    nameEn: "eyes",
    doctorCount: "150 طبيب",
    description: "قسم العيون متخصص في تشخيص وعلاج جميع أمراض العيون والإبصار، بما في ذلك جراحات الليزك والمياه البيضاء والزرقاء.",
    icon: "👁️",
    doctors: [
      {
        id: 6,
        name: "د. عمر صالح",
        specialty: "طب وجراحة العيون",
        rating: 4.9,
        reviewCount: 356,
        location: "عدن - المنصورة",
        price: "350 ريال",
        experience: "22 سنة خبرة",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400"
      },
      {
        id: 7,
        name: "د. نادية أحمد",
        specialty: "أمراض العيون",
        rating: 4.8,
        reviewCount: 267,
        location: "عدن - المنصورة",
        price: "320 ريال",
        experience: "16 سنة خبرة",
        image: "https://images.unsplash.com/photo-1551601651-09e0c2e3f757?w=400"
      }
    ]
  },
  bones: {
    name: "العظام",
    nameEn: "bones",
    doctorCount: "320 طبيب",
    description: "قسم العظام يوفر رعاية شاملة لجميع مشاكل العظام والمفاصل والعمود الفقري، مع إمكانية إجراء العمليات الجراحية المتقدمة.",
    icon: "🦴",
    doctors: [
      {
        id: 8,
        name: "د. ياسر عبدالله",
        specialty: "جراحة العظام والمفاصل",
        rating: 4.9,
        reviewCount: 428,
        location: "عدن - المنصورة",
        price: "400 ريال",
        experience: "25 سنة خبرة",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
      },
      {
        id: 9,
        name: "د. ليلى محمد",
        specialty: "عظام وروماتيزم",
        rating: 4.7,
        reviewCount: 289,
        location: "عدن - المنصورة",
        price: "320 ريال",
        experience: "14 سنة خبرة",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
      }
    ]
  },
  nerves: {
    name: "الأعصاب والمخ",
    nameEn: "nerves",
    doctorCount: "180 طبيب",
    description: "قسم الأعصاب والمخ متخصص في تشخيص وعلاج أمراض الجهاز العصبي والدماغ والحبل الشوكي والأعصاب الطرفية.",
    icon: "🧠",
    doctors: [
      {
        id: 10,
        name: "د. طارق إبراهيم",
        specialty: "الأعصاب والمخ",
        rating: 4.9,
        reviewCount: 378,
        location: "عدن - المنصورة",
        price: "380 ريال",
        experience: "19 سنة خبرة",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400"
      }
    ]
  },
  heart: {
    name: "القلب والأوعية الدموية",
    nameEn: "heart",
    doctorCount: "250 طبيب",
    description: "قسم القلب والأوعية الدموية يقدم رعاية متكاملة لجميع أمراض القلب والشرايين والأوعية الدموية مع أحدث التقنيات.",
    icon: "❤️",
    doctors: [
      {
        id: 11,
        name: "د. وليد حسين",
        specialty: "القلب والأوعية الدموية",
        rating: 5.0,
        reviewCount: 489,
        location: "عدن - المنصورة",
        price: "450 ريال",
        experience: "28 سنة خبرة",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400"
      },
      {
        id: 12,
        name: "د. منى خالد",
        specialty: "أمراض القلب",
        rating: 4.8,
        reviewCount: 342,
        location: "عدن - المنصورة",
        price: "400 ريال",
        experience: "17 سنة خبرة",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
      }
    ]
  }
};

export function Specialty() {
  const { openBooking } = useBooking();
  const [, params] = useRoute("/specialty/:id");
  const specialtyId = params?.id || "";
  const specialty = specialtyData[specialtyId as keyof typeof specialtyData];

  if (!specialty) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2>التخصص غير موجود</h2>
        <Link href="/">
          <Button className="mt-4">العودة للرئيسية</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary via-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
              <ArrowRight className="ml-2 h-5 w-5" />
              العودة للرئيسية
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{specialty.icon}</span>
            <div>
              <h1 className="mb-2">{specialty.name}</h1>
              <p className="text-xl opacity-90">{specialty.doctorCount} متاح</p>
            </div>
          </div>
          <p className="text-lg opacity-90 max-w-3xl">
            {specialty.description}
          </p>
        </div>
      </section>

      {/* Doctors List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">الأطباء المتاحون</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {specialty.doctors.map((doctor) => (
              <Card key={doctor.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="mb-1">{doctor.name}</h3>
                    <p className="text-muted-foreground mb-2">{doctor.specialty}</p>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{doctor.rating}</span>
                        <span className="text-muted-foreground">({doctor.reviewCount})</span>
                      </div>
                      <span className="text-muted-foreground">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>متاح اليوم</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-primary">{doctor.price}</span>
                    <Button 
                      className="bg-accent hover:bg-accent/90"
                      onClick={openBooking}
                    >
                      <Calendar className="ml-2 h-4 w-4" />
                      احجز الآن
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
