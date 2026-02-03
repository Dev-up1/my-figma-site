import { useState } from "react";
import { DoctorCard } from "../components/DoctorCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

export function Doctors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const specialties = [
    "الكل",
    "الأشعة التشخيصية",
    "طب الأطفال",
    "قلب أطفال",
    "القلب والأوعية الدموية",
    "الباطنية",
    "أمراض الدم",
    "النساء والولادة",
    "الجراحة العامة",
    "المخ والأعصاب",
    "الأنف والأذن والحنجرة",
    "العظام والمفاصل",
    "الفم والأسنان",
    "الأمراض الصدرية",
    "الأورام",
    "المسالك البولية",
    "التغذية العلاجية",
    "الأمراض الجلدية",
    "علم الخلايا والأنسجة"
  ];

  const doctors = [
    // عيادة الأشعة التشخيصية
    {
      id: "aida-abdulhamid",
      name: "د. أمل أحمد الشامي",
      specialty: "الأشعة التشخيصية",
      specialtyEn: "أخصائية الأشعة التشخيصية",
      description: "أخصائية الأشعة التشخيصية والتصوير الطبي",
      location: "عدن - المنصورة",
      clinicId: "radiology",
      workDays: "السبت + الثلاثاء",
      workPeriod: "مساءً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.8,
      reviewCount: 156,
      experience: "12 سنة خبرة",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
      verified: true,
      price: "280 ريال"
    },
    {
      id: "al-as-abdulhamid",
      name: "د. طارق علي النهاري",
      specialty: "الأشعة التشخيصية",
      specialtyEn: "استشاري الأشعة التشخيصية",
      description: "استشاري الأشعة التشخيصية والتصوير الطبي - دكتوراه في الأشعة والتصوير",
      location: "عدن - المنصورة",
      clinicId: "radiology",
      workDays: "السبت + الثلاثاء",
      workPeriod: "مساءً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.9,
      reviewCount: 203,
      experience: "18 سنة خبرة",
      image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
      verified: true,
      price: "350 ريال"
    },

    // عيادة طب الأطفال وحديثي الولادة
    {
      id: "randa-alwail",
      name: "د. سلمى يحيى الحداد",
      specialty: "طب الأطفال",
      specialtyEn: "استشارية طب الأطفال",
      description: "استشارية أطفال وأمراض قلب الأطفال والمواليد - خبرة في متابعة الحالات القلبية لدى الأطفال",
      location: "عدن - المنصورة",
      clinicId: "pediatrics",
      workDays: "—",
      workPeriod: "—",
      workHours: "—",
      rating: 5.0,
      reviewCount: 287,
      experience: "15 سنة خبرة",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      verified: true,
      price: "400 ريال"
    },
    {
      id: "samia-aljabri",
      name: "د. منى سعيد البردوني",
      specialty: "طب الأطفال",
      specialtyEn: "أخصائية طب الأطفال",
      description: "أخصائية طب الأطفال",
      location: "عدن - المنصورة",
      clinicId: "pediatrics",
      workDays: "الأحد – الثلاثاء",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.7,
      reviewCount: 198,
      experience: "10 سنة خبرة",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
      verified: true,
      price: "280 ريال"
    },
    {
      id: "huda-saleh",
      name: "د. ريم خالد اليافعي",
      specialty: "طب الأطفال",
      specialtyEn: "أخصائية طب الأطفال",
      description: "أخصائية طب الأطفال",
      location: "عدن - المنصورة",
      clinicId: "pediatrics",
      workDays: "من السبت إلى الأربعاء",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.8,
      reviewCount: 234,
      experience: "13 سنة خبرة",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      verified: true,
      price: "300 ريال"
    },
    {
      id: "fadia-mohamed",
      name: "د. نادية أحمد الكبسي",
      specialty: "طب الأطفال",
      specialtyEn: "أخصائية طب الأطفال",
      description: "أخصائية طب الأطفال",
      location: "عدن - المنصورة",
      clinicId: "pediatrics",
      workDays: "الخميس",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.6,
      reviewCount: 145,
      experience: "9 سنة خبرة",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
      verified: true,
      price: "270 ريال"
    },

    // عيادة قلب أطفال
    {
      id: "mariam-ali",
      name: "د. إيمان محمد الحميري",
      specialty: "قلب أطفال",
      specialtyEn: "استشارية قلب أطفال",
      description: "استشارية أمراض قلب الأطفال",
      location: "عدن - المنصورة",
      clinicId: "pediatric-cardiology",
      workDays: "—",
      workPeriod: "—",
      workHours: "—",
      rating: 5.0,
      reviewCount: 176,
      experience: "16 سنة خبرة",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      verified: true,
      price: "450 ريال"
    },

    // عيادة القلب والأوعية الدموية
    {
      id: "adel-aldabaai",
      name: "د. عمر حسن الأهدل",
      specialty: "القلب والأوعية الدموية",
      specialtyEn: "أخصائي أمراض القلب والأوعية الدموية",
      description: "ماجستير أمراض القلب – تشخيص وعلاج أمراض القلب",
      location: "عدن - المنصورة",
      clinicId: "cardiology",
      workDays: "الأحد + الثلاثاء",
      workPeriod: "عصراً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.9,
      reviewCount: 267,
      experience: "14 سنة خبرة",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
      verified: true,
      price: "380 ريال"
    },
    {
      id: "ibtihal-baharon",
      name: "د. زينب فؤاد الربيعي",
      specialty: "القلب والأوعية الدموية",
      specialtyEn: "أخصائية أمراض القلب والأوعية الدموية",
      description: "ماجستير أمراض القلب",
      location: "عدن - المنصورة",
      clinicId: "cardiology",
      workDays: "الاثنين",
      workPeriod: "عصراً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.8,
      reviewCount: 198,
      experience: "12 سنة خبرة",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      verified: true,
      price: "350 ريال"
    },

    // عيادة الباطنية
    {
      id: "mohamed-alhayj",
      name: "د. ياسر علي المخلافي",
      specialty: "الباطنية",
      specialtyEn: "أخصائي الباطنية",
      description: "أخصائي الأمراض الباطنية",
      location: "عدن - المنصورة",
      clinicId: "internal",
      workDays: "من السبت إلى الأربعاء",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.7,
      reviewCount: 223,
      experience: "15 سنة خبرة",
      image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
      verified: true,
      price: "320 ريال"
    },
    {
      id: "wael-aljaradi",
      name: "د. أحمد صالح الشيباني",
      specialty: "الباطنية",
      specialtyEn: "أخصائي الباطنية",
      description: "أخصائي الأمراض الباطنية",
      location: "عدن - المنصورة",
      clinicId: "internal",
      workDays: "الثلاثاء",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.6,
      reviewCount: 156,
      experience: "11 سنة خبرة",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
      verified: true,
      price: "300 ريال"
    },

    // عيادة أمراض الدم
    {
      id: "loay-qaed",
      name: "د. سامي محمد القاضي",
      specialty: "أمراض الدم",
      specialtyEn: "أخصائي أمراض الدم",
      description: "أخصائي أمراض الدم",
      location: "عدن - المنصورة",
      clinicId: "hematology",
      workDays: "الاثنين",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.8,
      reviewCount: 134,
      experience: "13 سنة خبرة",
      image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
      verified: true,
      price: "350 ريال"
    },

    // عيادة النساء والولادة
    {
      id: "hanan-anwar",
      name: "د. هدى عبدالله الحمادي",
      specialty: "النساء والولادة",
      specialtyEn: "أخصائية نساء وولادة",
      description: "أخصائية جراحة نساء وولادة – البورد العربي",
      location: "عدن - المنصورة",
      clinicId: "maternity",
      workDays: "—",
      workPeriod: "مساءً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.9,
      reviewCount: 312,
      experience: "17 سنة خبرة",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      verified: true,
      price: "380 ريال"
    },
    {
      id: "sara-bahamish",
      name: "د. فاطمة حسين اليزيدي",
      specialty: "النساء والولادة",
      specialtyEn: "أخصائية نساء وولادة",
      description: "أخصائية نساء وولادة",
      location: "عدن - المنصورة",
      clinicId: "maternity",
      workDays: "السبت – الأربعاء",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.8,
      reviewCount: 245,
      experience: "14 سنة خبرة",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
      verified: true,
      price: "350 ريال"
    },
    {
      id: "najiba-bahamish",
      name: "د. عائشة ناصر الفقيه",
      specialty: "النساء والولادة",
      specialtyEn: "أخصائية نساء وولادة",
      description: "أخصائية نساء وولادة",
      location: "عدن - المنصورة",
      clinicId: "maternity",
      workDays: "الخميس",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.7,
      reviewCount: 189,
      experience: "12 سنة خبرة",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      verified: true,
      price: "330 ريال"
    },

    // عيادة الجراحة العامة
    {
      id: "mohamed-bawazir",
      name: "د. خالد يوسف النقيب",
      specialty: "الجراحة العامة",
      specialtyEn: "استشاري الجراحة العامة",
      description: "استشاري الجراحة العامة",
      location: "عدن - المنصورة",
      clinicId: "surgery",
      workDays: "الثلاثاء",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.9,
      reviewCount: 278,
      experience: "20 سنة خبرة",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
      verified: true,
      price: "400 ريال"
    },

    // عيادة المخ والأعصاب
    {
      id: "riyad-qaed",
      name: "د. فيصل أحمد الوصابي",
      specialty: "المخ والأعصاب",
      specialtyEn: "أخصائي المخ والأعصاب",
      description: "أخصائي المخ والأعصاب",
      location: "عدن - المنصورة",
      clinicId: "neurology",
      workDays: "السبت – الأربعاء",
      workPeriod: "مساءً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.8,
      reviewCount: 213,
      experience: "16 سنة خبرة",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
      verified: true,
      price: "380 ريال"
    },

    // عيادة الأنف والأذن والحنجرة
    {
      id: "khaldoun-abbas",
      name: "د. مهند سعد الذماري",
      specialty: "الأنف والأذن والحنجرة",
      specialtyEn: "أخصائي أنف وأذن وحنجرة",
      description: "أخصائي أنف وأذن وحنجرة",
      location: "عدن - المنصورة",
      clinicId: "ent",
      workDays: "السبت – الأربعاء",
      workPeriod: "مساءً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.7,
      reviewCount: 189,
      experience: "13 سنة خبرة",
      image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
      verified: true,
      price: "330 ريال"
    },

    // عيادة العظام والمفاصل
    {
      id: "adel-alhaj",
      name: "د. عبدالرحمن علي الضالعي",
      specialty: "العظام والمفاصل",
      specialtyEn: "استشاري أمراض وجراحة العظام والمفاصل",
      description: "استشاري أمراض وجراحة العظام والمفاصل",
      location: "عدن - المنصورة",
      clinicId: "orthopedics",
      workDays: "السبت + الأربعاء",
      workPeriod: "مساءً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.9,
      reviewCount: 298,
      experience: "22 سنة خبرة",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
      verified: true,
      price: "420 ريال"
    },

    // عيادة الفم والأسنان
    {
      id: "amjad-bawazir",
      name: "د. وليد محمد البيضاني",
      specialty: "الفم والأسنان",
      specialtyEn: "أخصائي طب الأسنان",
      description: "أخصائي طب الأسنان",
      location: "عدن - المنصورة",
      clinicId: "dentistry",
      workDays: "السبت – الأربعاء",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.7,
      reviewCount: 234,
      experience: "11 سنة خبرة",
      image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
      verified: true,
      price: "280 ريال"
    },
    {
      id: "mohamed-alsagaf",
      name: "د. ماهر صالح الحكيمي",
      specialty: "الفم والأسنان",
      specialtyEn: "أخصائي أسنان",
      description: "أخصائي أسنان",
      location: "عدن - المنصورة",
      clinicId: "dentistry",
      workDays: "الخميس",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.6,
      reviewCount: 176,
      experience: "9 سنة خبرة",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
      verified: true,
      price: "260 ريال"
    },

    // عيادة الأمراض الصدرية
    {
      id: "abdelqawi-saleh",
      name: "د. نبيل يحيى العولقي",
      specialty: "الأمراض الصدرية",
      specialtyEn: "أخصائي الأمراض الصدرية",
      description: "أخصائي الأمراض الصدرية",
      location: "عدن - المنصورة",
      clinicId: "pulmonology",
      workDays: "الاثنين",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.7,
      reviewCount: 167,
      experience: "14 سنة خبرة",
      image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
      verified: true,
      price: "330 ريال"
    },

    // عيادة الأورام والعلاج الكيماوي
    {
      id: "samira-mohamed",
      name: "د. رشا خالد اليامي",
      specialty: "الأورام",
      specialtyEn: "أخصائية أورام",
      description: "أخصائية أورام",
      location: "عدن - المنصورة",
      clinicId: "oncology",
      workDays: "الاثنين",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.9,
      reviewCount: 145,
      experience: "16 سنة خبرة",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      verified: true,
      price: "450 ريال"
    },

    // عيادة الكلى والمسالك البولية والعقم
    {
      id: "mohamed-basalama",
      name: "د. بلال أحمد الرداعي",
      specialty: "المسالك البولية",
      specialtyEn: "أخصائي مسالك بولية",
      description: "أخصائي مسالك بولية",
      location: "عدن - المنصورة",
      clinicId: "kidney",
      workDays: "السبت – الأربعاء",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.8,
      reviewCount: 201,
      experience: "15 سنة خبرة",
      image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
      verified: true,
      price: "350 ريال"
    },

    // عيادة التغذية العلاجية
    {
      id: "taima-bamahdef",
      name: "د. سهى حسن الوحيشي",
      specialty: "التغذية العلاجية",
      specialtyEn: "أخصائية تغذية علاجية",
      description: "أخصائية تغذية علاجية",
      location: "عدن - المنصورة",
      clinicId: "nutrition",
      workDays: "السبت – الاثنين",
      workPeriod: "عصراً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.7,
      reviewCount: 178,
      experience: "8 سنوات خبرة",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
      verified: true,
      price: "250 ريال"
    },
    {
      id: "nora-alkhanbari",
      name: "د. لينا فهد العمودي",
      specialty: "التغذية العلاجية",
      specialtyEn: "استشارية التغذية العلاجية",
      description: "استشارية التغذية العلاجية",
      location: "عدن - المنصورة",
      clinicId: "nutrition",
      workDays: "—",
      workPeriod: "صباحاً",
      workHours: "8:00am – 1:00pm",
      rating: 4.9,
      reviewCount: 234,
      experience: "12 سنة خبرة",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      verified: true,
      price: "320 ريال"
    },
    {
      id: "marwa-jamil",
      name: "د. شيماء سالم النعيمي",
      specialty: "التغذية العلاجية",
      specialtyEn: "أخصائية تغذية علاجية",
      description: "أخصائية تغذية علاجية",
      location: "عدن - المنصورة",
      clinicId: "nutrition",
      workDays: "السبت + الاثنين",
      workPeriod: "عصراً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.6,
      reviewCount: 145,
      experience: "7 سنوات خبرة",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
      verified: true,
      price: "240 ريال"
    },

    // عيادة الأمراض الجلدية
    {
      id: "samah-saleh",
      name: "د. دينا محمد الجرموزي",
      specialty: "الأمراض الجلدية",
      specialtyEn: "أخصائية جلدية",
      description: "أخصائية الأمراض الجلدية",
      location: "عدن - المنصورة",
      clinicId: "dermatology",
      workDays: "السبت – الأربعاء",
      workPeriod: "مساءً",
      workHours: "4:00pm – 9:00pm",
      rating: 4.8,
      reviewCount: 198,
      experience: "11 سنة خبرة",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      verified: true,
      price: "300 ريال"
    },

    // عيادة علم الخلايا والأنسجة
    {
      id: "jalal-almasri",
      name: "د. حسام علي الصلوي",
      specialty: "علم الخلايا والأنسجة",
      specialtyEn: "استشاري علم الأمراض والخلايا والأنسجة",
      description: "استشاري علم الأمراض والخلايا والأنسجة",
      location: "عدن - المنصورة",
      clinicId: "pathology",
      workDays: "السبت – الخميس",
      workPeriod: "صباحاً + عصراً",
      workHours: "8:00am – 1:00pm + 4:00pm – 9:00pm",
      rating: 5.0,
      reviewCount: 167,
      experience: "25 سنة خبرة",
      image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
      verified: true,
      price: "500 ريال"
    }
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty = selectedSpecialty === "الكل" || doctor.specialty === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B3F99] to-[#3DBEAE] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl">ابحث عن طبيب</h1>
          <p className="text-xl opacity-90 mb-8">
            اختر من بين أفضل الأطباء في مركز الحياة الطبي
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="ابحث عن طبيب أو تخصص..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 text-lg rounded-full border-0 shadow-lg text-right"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? "default" : "outline"}
                onClick={() => setSelectedSpecialty(specialty)}
                className={
                  selectedSpecialty === specialty
                    ? "bg-[#3DBEAE] hover:bg-[#3DBEAE]/90"
                    : "hover:bg-gray-100"
                }
              >
                {specialty}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl text-[#4B3F99]">
              {filteredDoctors.length} طبيب متاح
            </h2>
          </div>
          
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">لا توجد نتائج تطابق بحثك</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}