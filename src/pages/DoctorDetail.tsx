import { useState } from "react";
import { useRoute, Link } from "wouter";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";
import { Calendar, Clock, Award, GraduationCap, Stethoscope, ArrowRight, Star, MapPin, Phone } from "lucide-react";

// All doctors data - Real doctors from Al-Madina Medical Center
const doctorsData: Record<string, any> = {
  "aida-abdulhamid": {
    id: "aida-abdulhamid",
    name: "د. أمل أحمد الشامي",
    specialty: "الأشعة التشخيصية",
    specialtyEn: "أخصائية الأشعة التشخيصية",
    description: "أخصائية الأشعة التشخيصية والتصوير الطبي",
    workDays: "السبت + الثلاثاء",
    workPeriod: "مساءً",
    workHours: "4:00pm – 9:00pm",
    experience: "12 سنة خبرة",
    rating: 4.8,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    price: "280 ريال",
    bio: "أخصائية الأشعة التشخيصية والتصوير الطبي مع خبرة واسعة في استخدام أحدث تقنيات التصوير الطبي لتشخيص مختلف الحالات الطبية.",
    qualifications: [
      "بكالوريوس الطب والجراحة - جامعة عدن",
      "دبلوم في الأشعة التشخيصية",
      "دورات تدريبية في التصوير الطبي المتقدم"
    ],
    specializations: [
      "الأشعة السينية",
      "الموجات فوق الصوتية",
      "التصوير الطبي للأطفال",
      "التصوير النسائي"
    ]
  },
  "al-as-abdulhamid": {
    id: "al-as-abdulhamid",
    name: "د. طارق علي النهاري",
    specialty: "الأشعة التشخيصية",
    specialtyEn: "استشاري الأشعة التشخيصية",
    description: "استشاري الأشعة التشخيصية والتصوير الطبي - دكتوراه في الأشعة والتصوير",
    workDays: "السبت + الثلاثاء",
    workPeriod: "مساءً",
    workHours: "4:00pm – 9:00pm",
    experience: "18 سنة خبرة",
    rating: 4.9,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
    price: "350 ريال",
    bio: "استشاري الأشعة التشخيصية والتصوير الطبي حاصل على دكتوراه في الأشعة والتصوير، مع خبرة طويلة في تشخيص الحالات المعقدة باستخدام أحدث التقنيات.",
    qualifications: [
      "بكالوريوس الطب والجراحة - جامعة عدن",
      "دكتوراه في الأشعة والتصوير الطبي",
      "زمالة في التصوير المقطعي والرنين المغناطيسي"
    ],
    specializations: [
      "التصوير بالرنين المغناطيسي",
      "التصوير المقطعي المحوسب",
      "الأشعة التداخلية",
      "التصوير الوعائي"
    ]
  },
  "randa-alwail": {
    id: "randa-alwail",
    name: "د. سلمى يحيى الحداد",
    specialty: "طب الأطفال",
    specialtyEn: "استشارية طب الأطفال",
    description: "استشارية أطفال وأمراض قلب الأطفال والمواليد - خبرة في متابعة الحالات القلبية لدى الأطفال",
    workDays: "—",
    workPeriod: "—",
    workHours: "—",
    experience: "15 سنة خبرة",
    rating: 5.0,
    reviewCount: 287,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    price: "400 ريال",
    bio: "استشارية أطفال وأمراض قلب الأطفال والمواليد مع خبرة واسعة في متابعة الحالات القلبية لدى الأطفال ورعاية حديثي الولادة.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "ماجستير في طب الأطفال",
      "تخصص فرعي في قلب الأطفال"
    ],
    specializations: [
      "أمراض قلب الأطفال",
      "رعاية المواليد",
      "طب الأطفال العام",
      "متابعة نمو وتطور الأطفال"
    ]
  },
  "samia-aljabri": {
    id: "samia-aljabri",
    name: "د. منى سعيد البردوني",
    specialty: "طب الأطفال",
    specialtyEn: "أخصائية طب الأطفال",
    description: "أخصائية طب الأطفال",
    workDays: "الأحد – الثلاثاء",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "10 سنة خبرة",
    rating: 4.7,
    reviewCount: 198,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    price: "280 ريال",
    bio: "أخصائية طب الأطفال مع خبرة في رعاية الأطفال من مختلف الأعمار وعلاج الأمراض الشائعة.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في طب الأطفال",
      "دورات في التطعيمات والتحصينات"
    ],
    specializations: [
      "طب الأطفال العام",
      "التطعيمات",
      "أمراض الجهاز التنفسي",
      "التغذية السليمة للأطفال"
    ]
  },
  "huda-saleh": {
    id: "huda-saleh",
    name: "د. ريم خالد اليافعي",
    specialty: "طب الأطفال",
    specialtyEn: "أخصائية طب الأطفال",
    description: "أخصائية طب الأطفال",
    workDays: "من السبت إلى الأربعاء",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "13 سنة خبرة",
    rating: 4.8,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    price: "300 ريال",
    bio: "أخصائية طب الأطفال مع خبرة واسعة في علاج الأطفال والرضع ومتابعة نموهم الصحي.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في طب الأطفال",
      "تدريب في رعاية حديثي الولادة"
    ],
    specializations: [
      "رعاية الأطفال الرضع",
      "علاج الأمراض المعدية",
      "متابعة النمو والتطور",
      "الفحوصات الدورية"
    ]
  },
  "fadia-mohamed": {
    id: "fadia-mohamed",
    name: "د. نادية أحمد الكبسي",
    specialty: "طب الأطفال",
    specialtyEn: "أخصائية طب الأطفال",
    description: "أخصائية طب الأطفال",
    workDays: "الخميس",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "9 سنة خبرة",
    rating: 4.6,
    reviewCount: 145,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    price: "270 ريال",
    bio: "أخصائية طب الأطفال متخصصة في رعاية الأطفال وعلاج الأمراض الشائعة.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في طب الأطفال"
    ],
    specializations: [
      "طب الأطفال العام",
      "علاج الحساسية",
      "التطعيمات",
      "التغذية العلاجية"
    ]
  },
  "mariam-ali": {
    id: "mariam-ali",
    name: "د. إيمان محمد الحميري",
    specialty: "قلب أطفال",
    specialtyEn: "استشارية قلب أطفال",
    description: "استشارية أمراض قلب الأطفال",
    workDays: "—",
    workPeriod: "—",
    workHours: "—",
    experience: "16 سنة خبرة",
    rating: 5.0,
    reviewCount: 176,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    price: "450 ريال",
    bio: "استشارية أمراض قلب الأطفال متخصصة في تشخيص وعلاج عيوب القلب الخلقية والحالات القلبية المعقدة لدى الأطفال.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "ماجستير في طب الأطفال",
      "زمالة في قلب الأطفال"
    ],
    specializations: [
      "عيوب القلب الخلقية",
      "إيكو القلب للأطفال",
      "قسطرة القلب التشخيصية",
      "متابعة ما بعد جراحة القلب"
    ]
  },
  "adel-aldabaai": {
    id: "adel-aldabaai",
    name: "د. عمر حسن الأهدل",
    specialty: "القلب والأوعية الدموية",
    specialtyEn: "أخصائي أمراض القلب والأوعية الدموية",
    description: "ماجستير أمراض القلب – تشخيص وعلاج أمراض القلب",
    workDays: "الأحد + الثلاثاء",
    workPeriod: "عصراً",
    workHours: "4:00pm – 9:00pm",
    experience: "14 سنة خبرة",
    rating: 4.9,
    reviewCount: 267,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    price: "380 ريال",
    bio: "أخصائي أمراض القلب والأوعة الدموية حاصل على ماجستير في أمراض القلب مع خبرة واسعة في تشخيص وعلاج أمراض القلب.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "ماجستير في أمراض القلب",
      "دورات في تخطيط القلب والإيكو"
    ],
    specializations: [
      "تخطيط القلب الكهربائي",
      "إيكو القلب",
      "علاج ارتفاع ضغط الدم",
      "أمراض الشرايين التاجية"
    ]
  },
  "ibtihal-baharon": {
    id: "ibtihal-baharon",
    name: "د. زينب فؤاد الربيعي",
    specialty: "القلب والأوعية الدموية",
    specialtyEn: "أخصائية أمراض القلب والأوعية الدموية",
    description: "ماجستير أمراض القلب",
    workDays: "الاثنين",
    workPeriod: "عصراً",
    workHours: "4:00pm – 9:00pm",
    experience: "12 سنة خبرة",
    rating: 4.8,
    reviewCount: 198,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    price: "350 ريال",
    bio: "أخصائية أمراض القلب والأوعية الدموية حاصلة على ماجستير في أمراض القلب مع اهتمام خاص بصحة قلب المرأة.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "ماجستير في أمراض القلب",
      "دورات في صحة قلب المرأة"
    ],
    specializations: [
      "أمراض القلب للنساء",
      "ارتفاع ضغط الدم",
      "اضطرابات نظم القلب",
      "الوقاية من أمراض القلب"
    ]
  },
  "mohamed-alhayj": {
    id: "mohamed-alhayj",
    name: "د. ياسر علي المخلافي",
    specialty: "الباطنية",
    specialtyEn: "أخصائي الباطنية",
    description: "أخصائي الأمراض الباطنية",
    workDays: "من السبت إلى الأربعاء",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "15 سنة خبرة",
    rating: 4.7,
    reviewCount: 223,
    image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
    price: "320 ريال",
    bio: "أخصائي الأمراض الباطنية مع خبرة واسعة في تشخيص وعلاج الأمراض المزمنة والحادة.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في الأمراض الباطنية",
      "دورات في إدارة الأمراض المزمنة"
    ],
    specializations: [
      "أمراض السكري",
      "ارتفاع ضغط الدم",
      "أمراض الجهاز الهضمي",
      "الأمراض المزمنة"
    ]
  },
  "wael-aljaradi": {
    id: "wael-aljaradi",
    name: "د. أحمد صالح الشيباني",
    specialty: "الباطنية",
    specialtyEn: "أخصائي الباطنية",
    description: "أخصائي الأمراض الباطنية",
    workDays: "الثلاثاء",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "11 سنة خبرة",
    rating: 4.6,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    price: "300 ريال",
    bio: "أخصائي الأمراض الباطنية متخصص في علاج الأمراض الباطنية العامة والرعاية الصحية الشاملة.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في الأمراض الباطنية"
    ],
    specializations: [
      "الباطنية العامة",
      "علاج الأمراض المعدية",
      "أمراض الكبد",
      "الفحوصات الشاملة"
    ]
  },
  "loay-qaed": {
    id: "loay-qaed",
    name: "د. سامي محمد القاضي",
    specialty: "أمراض الدم",
    specialtyEn: "أخصائي أمراض الدم",
    description: "أخصائي أمراض الدم",
    workDays: "الاثنين",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "13 سنة خبرة",
    rating: 4.8,
    reviewCount: 134,
    image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
    price: "350 ريال",
    bio: "أخصائي أمراض الدم متخصص في تشخيص وعلاج جميع أمراض الدم والأورام الدموية.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "ماجستير في أمراض الدم",
      "دورات في علاج الأورام الدموية"
    ],
    specializations: [
      "الأنيميا وفقر الدم",
      "أمراض التخثر",
      "الثلاسيميا",
      "الأورام الدموية"
    ]
  },
  "hanan-anwar": {
    id: "hanan-anwar",
    name: "د. هدى عبدالله الحمادي",
    specialty: "النساء والولادة",
    specialtyEn: "أخصائية نساء وولادة",
    description: "أخصائية جراحة نساء وولادة – البورد العربي",
    workDays: "—",
    workPeriod: "مساءً",
    workHours: "4:00pm – 9:00pm",
    experience: "17 سنة خبرة",
    rating: 4.9,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    price: "380 ريال",
    bio: "أخصائية جراحة نساء وولادة حاصلة على البورد العربي مع خبرة واسعة في الولادة الطبيعية والقيصرية.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "البورد العربي في جراحة النساء والولادة",
      "دورات في جراحة المناظير النسائية"
    ],
    specializations: [
      "الولادة الطبيعية والقيصرية",
      "جراحة المناظير النسائية",
      "متابعة الحمل عالي الخطورة",
      "علاج العقم"
    ]
  },
  "sara-bahamish": {
    id: "sara-bahamish",
    name: "د. فاطمة حسين اليزيدي",
    specialty: "النساء والولادة",
    specialtyEn: "أخصائية نساء وولادة",
    description: "أخصائية نساء وولادة",
    workDays: "السبت – الأربعاء",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "14 سنة خبرة",
    rating: 4.8,
    reviewCount: 245,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    price: "350 ريال",
    bio: "أخصائية نساء وولادة مع خبرة واسعة في رعاية الحوامل ومتابعة الحمل والولادة.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في النساء والولادة",
      "دورات في متابعة الحمل"
    ],
    specializations: [
      "متابعة الحمل",
      "الولادة الطبيعية",
      "أمراض النساء",
      "تنظيم الأسرة"
    ]
  },
  "najiba-bahamish": {
    id: "najiba-bahamish",
    name: "د. عائشة ناصر الفقيه",
    specialty: "النساء والولادة",
    specialtyEn: "أخصائية نساء وولادة",
    description: "أخصائية نساء وولادة",
    workDays: "الخميس",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "12 سنة خبرة",
    rating: 4.7,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    price: "330 ريال",
    bio: "أخصائية نساء وولادة متخصصة في رعاية صحة المرأة ومتابعة الحمل.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في النساء والولادة"
    ],
    specializations: [
      "صحة المرأة",
      "متابعة الحمل",
      "أمراض النساء",
      "الفحوصات النسائية"
    ]
  },
  "mohamed-bawazir": {
    id: "mohamed-bawazir",
    name: "د. خالد يوسف النقيب",
    specialty: "الجراحة العامة",
    specialtyEn: "استشاري الجراحة العامة",
    description: "استشاري الجراحة العامة",
    workDays: "الثلاثاء",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "20 سنة خبرة",
    rating: 4.9,
    reviewCount: 278,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
    price: "400 ريال",
    bio: "استشاري الجراحة العامة مع خبرة طويلة في جراحات المناظير والجراحات العامة المعقدة.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "ماجستير في الجراحة العامة",
      "زمالة في جراحة المناظير"
    ],
    specializations: [
      "جراحة المناظير",
      "جراحة الغدة الدرقية",
      "جراحة الفتق",
      "جراحة الأورام"
    ]
  },
  "riyad-qaed": {
    id: "riyad-qaed",
    name: "د. فيصل أحمد الوصابي",
    specialty: "المخ والأعصاب",
    specialtyEn: "أخصائي المخ والأعصاب",
    description: "أخصائي المخ والأعصاب",
    workDays: "السبت – الأربعاء",
    workPeriod: "مساءً",
    workHours: "4:00pm – 9:00pm",
    experience: "16 سنة خبرة",
    rating: 4.8,
    reviewCount: 213,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    price: "380 ريال",
    bio: "أخصائي المخ والأعصاب متخصص في تشخيص وعلاج أمراض الجهاز العصبي والدماغ.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "ماجستير في أمراض المخ والأعصاب",
      "دورات في تخطيط الدماغ"
    ],
    specializations: [
      "الصداع والشقيقة",
      "الصرع",
      "الجلطات الدماغية",
      "أمراض الأعصاب الطرفية"
    ]
  },
  "khaldoun-abbas": {
    id: "khaldoun-abbas",
    name: "د. مهند سعد الذماري",
    specialty: "الأنف والأذن والحنجرة",
    specialtyEn: "أخصائي أنف وأذن وحنجرة",
    description: "أخصائي أنف وأذن وحنجرة",
    workDays: "السبت – الأربعاء",
    workPeriod: "مساءً",
    workHours: "4:00pm – 9:00pm",
    experience: "13 سنة خبرة",
    rating: 4.7,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
    price: "330 ريال",
    bio: "أخصائي أنف وأذن وحنجرة متخصص في علاج أمراض الأنف والأذن والحنجرة بالطرق الحديثة.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في الأنف والأذن والحنجرة",
      "دورات في جراحة الأنف والجيوب الأنفية"
    ],
    specializations: [
      "التهاب الجيوب الأنفية",
      "مشاكل السمع",
      "التهاب اللوزتين",
      "منظار الأنف والحنجرة"
    ]
  },
  "adel-alhaj": {
    id: "adel-alhaj",
    name: "د. عبدالرحمن علي الضالعي",
    specialty: "العظام والمفاصل",
    specialtyEn: "استشاري أمراض وجراحة العظام والمفاصل",
    description: "استشاري أمراض وجراحة العظام والمفاصل",
    workDays: "السبت + الأربعاء",
    workPeriod: "مساءً",
    workHours: "4:00pm – 9:00pm",
    experience: "22 سنة خبرة",
    rating: 4.9,
    reviewCount: 298,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
    price: "420 ريال",
    bio: "استشاري أمراض وجراحة العظام والمفاصل مع خبرة طويلة في علاج كسور العظام وأمراض المفاصل.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "ماجستير في جراحة العظام",
      "زمالة في جراحة المفاصل"
    ],
    specializations: [
      "جراحة العظام",
      "استبدال المفاصل",
      "علاج الكسور",
      "علاج خشونة الركبة"
    ]
  },
  "amjad-bawazir": {
    id: "amjad-bawazir",
    name: "د. وليد محمد البيضاني",
    specialty: "الفم والأسنان",
    specialtyEn: "أخصائي طب الأسنان",
    description: "أخصائي طب الأسنان",
    workDays: "السبت – الأربعاء",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "11 سنة خبرة",
    rating: 4.7,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
    price: "280 ريال",
    bio: "أخصائي طب الأسنان متخصص في علاج وتجميل الأسنان باستخدام أحدث التقنيات.",
    qualifications: [
      "بكالوريوس طب وجراحة الفم والأسنان",
      "دبلوم في التركيبات السنية",
      "دورات في تجميل الأسنان"
    ],
    specializations: [
      "علاج التسوس",
      "تنظيف وتبييض الأسنان",
      "التركيبات السنية",
      "زراعة الأسنان"
    ]
  },
  "mohamed-alsagaf": {
    id: "mohamed-alsagaf",
    name: "د. ماهر صالح الحكيمي",
    specialty: "الفم والأسنان",
    specialtyEn: "أخصائي أسنان",
    description: "أخصائي أسنان",
    workDays: "الخميس",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "9 سنة خبرة",
    rating: 4.6,
    reviewCount: 176,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    price: "260 ريال",
    bio: "أخصائي أسنان متخصص في علاج أمراض الفم والأسنان والعناية بصحة الفم.",
    qualifications: [
      "بكالوريوس طب وجراحة الفم والأسنان",
      "دورات في حشو وعلاج الجذور"
    ],
    specializations: [
      "حشو الأسنان",
      "علاج الجذور",
      "خلع الأسنان",
      "تنظيف الأسنان"
    ]
  },
  "abdelqawi-saleh": {
    id: "abdelqawi-saleh",
    name: "د. نبيل يحيى العولقي",
    specialty: "الأمراض الصدرية",
    specialtyEn: "أخصائي الأمراض الصدرية",
    description: "أخصائي الأمراض الصدرية",
    workDays: "الاثنين",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "14 سنة خبرة",
    rating: 4.7,
    reviewCount: 167,
    image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
    price: "330 ريال",
    bio: "أخصائي الأمراض الصدرية متخصص في تشخيص وعلاج أمراض الجهاز التنفسي والرئتين.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في الأمراض الصدرية",
      "دورات في وظائف الرئة"
    ],
    specializations: [
      "الربو والحساسية الصدرية",
      "الانسداد الرئوي المزمن",
      "التهابات الجهاز التنفسي",
      "فحص وظائف الرئة"
    ]
  },
  "samira-mohamed": {
    id: "samira-mohamed",
    name: "د. رشا خالد اليامي",
    specialty: "الأورام",
    specialtyEn: "أخصائية أورام",
    description: "أخصائية أورام",
    workDays: "الاثنين",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "16 سنة خبرة",
    rating: 4.9,
    reviewCount: 145,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    price: "450 ريال",
    bio: "أخصائية أورام متخصصة في تشخيص وعلاج الأورام السرطانية باستخدام أحدث البروتوكولات العلاجية.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "ماجستير في علاج الأورام",
      "زمالة في العلاج الكيماوي"
    ],
    specializations: [
      "تشخيص الأورام",
      "العلاج الكيماوي",
      "العلاج المناعي",
      "الرعاية التلطيفية"
    ]
  },
  "mohamed-basalama": {
    id: "mohamed-basalama",
    name: "د. بلال أحمد الرداعي",
    specialty: "المسالك البولية",
    specialtyEn: "أخصائي مسالك بولية",
    description: "أخصائي مسالك بولية",
    workDays: "السبت – الأربعاء",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "15 سنة خبرة",
    rating: 4.8,
    reviewCount: 201,
    image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
    price: "350 ريال",
    bio: "أخصائي مسالك بولية متخصص في علاج أمراض الكلى والمسالك البولية والعقم عند الرجال.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في المسالك البولية",
      "دورات في علاج العقم"
    ],
    specializations: [
      "حصوات الكلى والمسالك",
      "التهابات المسالك البولية",
      "علاج العقم عند الرجال",
      "المناظير البولية"
    ]
  },
  "taima-bamahdef": {
    id: "taima-bamahdef",
    name: "د. سهى حسن الوحيشي",
    specialty: "التغذية العلاجية",
    specialtyEn: "أخصائية تغذية علاجية",
    description: "أخصائية تغذية علاجية",
    workDays: "السبت – الاثنين",
    workPeriod: "عصراً",
    workHours: "4:00pm – 9:00pm",
    experience: "8 سنوات خبرة",
    rating: 4.7,
    reviewCount: 178,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    price: "250 ريال",
    bio: "أخصائية تغذية علاجية متخصصة في وضع برامج غذائية علاجية للأمراض المزمنة وإنقاص الوزن.",
    qualifications: [
      "بكالوريوس التغذية السريرية",
      "دبلوم في التغذية العلاجية",
      "دورات في إدارة السمنة"
    ],
    specializations: [
      "برامج إنقاص الوزن",
      "التغذية لمرضى السكري",
      "التغذية للأطفال",
      "التغذية الرياضية"
    ]
  },
  "nora-alkhanbari": {
    id: "nora-alkhanbari",
    name: "د. لينا فهد العمودي",
    specialty: "التغذية العلاجية",
    specialtyEn: "استشارية التغذية العلاجية",
    description: "استشارية التغذية العلاجية",
    workDays: "—",
    workPeriod: "صباحاً",
    workHours: "8:00am – 1:00pm",
    experience: "12 سنة خبرة",
    rating: 4.9,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    price: "320 ريال",
    bio: "استشارية التغذية العلاجية مع خبرة واسعة في علاج السمنة والأمراض المزمنة من خلال التغذية.",
    qualifications: [
      "بكالوريوس التغذية السريرية",
      "ماجستير في التغذية العلاجية",
      "زمالة في علاج السمنة"
    ],
    specializations: [
      "علاج السمنة المفرطة",
      "التغذية العلاجية للأمراض المزمنة",
      "برامج الحمية الغذائية",
      "التغذية الصحية"
    ]
  },
  "marwa-jamil": {
    id: "marwa-jamil",
    name: "د. شيماء سالم النعيمي",
    specialty: "التغذية العلاجية",
    specialtyEn: "أخصائية تغذية علاجية",
    description: "أخصائية تغذية علاجية",
    workDays: "السبت + الاثنين",
    workPeriod: "عصراً",
    workHours: "4:00pm – 9:00pm",
    experience: "7 سنوات خبرة",
    rating: 4.6,
    reviewCount: 145,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    price: "240 ريال",
    bio: "أخصائية تغذية علاجية متخصصة في برامج التغذية الصحية وإنقاص الوزن للكبار والأطفال.",
    qualifications: [
      "بكالوريوس التغذية السريرية",
      "دبلوم في التغذية العلاجية"
    ],
    specializations: [
      "برامج إنقاص الوزن",
      "تغذية الأطفال",
      "التغذية الصحية",
      "علاج النحافة"
    ]
  },
  "samah-saleh": {
    id: "samah-saleh",
    name: "د. ��ينا محمد الجرموزي",
    specialty: "الأمراض الجلدية",
    specialtyEn: "أخصائية جلدية",
    description: "أخصائية الأمراض الجلدية",
    workDays: "السبت – الأرعاء",
    workPeriod: "مساءً",
    workHours: "4:00pm – 9:00pm",
    experience: "11 سنة خبرة",
    rating: 4.8,
    reviewCount: 198,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    price: "300 ريال",
    bio: "أخصائية الأمراض الجلدية متخصصة في علاج وتجميل البشرة باستخدام أحدث التقنيات.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دبلوم في الأمراض الجلدية",
      "دورات في التجميل بالليزر"
    ],
    specializations: [
      "علاج حب الشباب",
      "علاج الأكزيما والصدفية",
      "تجميل البشرة بالليزر",
      "علاج التصبغات"
    ]
  },
  "jalal-almasri": {
    id: "jalal-almasri",
    name: "د. حسام علي الصلوي",
    specialty: "علم الخلايا والأنسجة",
    specialtyEn: "استشاري علم الأمراض والخلايا والأنسجة",
    description: "استشاري علم الأمراض والخلايا والأنسجة",
    workDays: "السبت – الخميس",
    workPeriod: "صباحاً + عصراً",
    workHours: "8:00am – 1:00pm + 4:00pm – 9:00pm",
    experience: "25 سنة خبرة",
    rating: 5.0,
    reviewCount: 167,
    image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=400",
    price: "500 ريال",
    bio: "استشاري علم الأمراض والخلايا والأنسجة مع خبرة طويلة في تشخيص الأمراض من خلال فحص الأنسجة والخلايا.",
    qualifications: [
      "بكالوريوس الطب والجراحة",
      "دكتوراه في علم الأمراض",
      "زمالة في علم الخلايا والأنسجة"
    ],
    specializations: [
      "فحص الخزعات النسيجية",
      "تشخيص الأورام",
      "علم الخلايا السرطانية",
      "التشريح المرضي"
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
  { value: "morning", label: "صباحاً (8:00 - 1:00)" },
  { value: "evening", label: "مساءً (4:00 - 9:00)" }
];

export function DoctorDetail() {
  const [, params] = useRoute("/doctor/:id");
  const doctorId = params?.id || "";
  const doctor = doctorsData[doctorId];

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
      `الطبيب: ${doctor.name}\n` +
      `التخصص: ${doctor.specialtyEn}\n` +
      `التاريخ: ${formattedDate}\n` +
      `الوقت: ${selectedTimeLabel}\n` +
      `سعر الكشف: ${doctor.price}\n\n` +
      `سيتم تأكيد حجزك خلال 24 ساعة عبر الهاتف 777552666`
    );

    setIsBooked(true);
    setSelectedDate("");
    setSelectedTime("");
  };

  if (!doctor) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center" dir="rtl">
          <h1 className="text-2xl text-gray-600 mb-4">لم يتم العثور على الطبيب</h1>
          <Link href="/doctors">
            <Button className="bg-[#3DBEAE] hover:bg-[#3DBEAE]/90">العودة إلى قائمة الأطباء</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#4B3F99] to-[#3DBEAE] text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Link href="/doctors">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowRight className="ml-2 h-4 w-4" />
              العودة إلى قائمة الأطباء
            </Button>
          </Link>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Doctor Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg">
                  <Award className="h-6 w-6 text-[#3DBEAE]" />
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="md:col-span-2 text-right" dir="rtl">
              <h1 className="mb-2 text-3xl md:text-4xl">{doctor.name}</h1>
              <p className="text-xl mb-4 opacity-90">{doctor.specialtyEn}</p>
              <div className="flex flex-wrap gap-4 mb-6 justify-end">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>{doctor.experience}</span>
                </div>
                {doctor.rating && (
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>{doctor.rating}</span>
                    {doctor.reviewCount && (
                      <span className="opacity-75">({doctor.reviewCount} تقييم)</span>
                    )}
                  </div>
                )}
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4 inline-block">
                <p className="text-sm mb-1">سعر الكشف</p>
                <p className="text-2xl">{doctor.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-2xl text-[#4B3F99]">نبذة عن الطبيب</h2>
                  <p className="text-gray-600 leading-relaxed">{doctor.bio || doctor.description}</p>
                </CardContent>
              </Card>

              {/* Work Schedule */}
              {doctor.workDays && doctor.workDays !== "—" && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-2xl text-[#4B3F99] flex items-center gap-2">
                      <Clock className="h-6 w-6 text-[#3DBEAE]" />
                      مواعيد العمل
                    </h2>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#3DBEAE]"></div>
                        <span className="text-gray-700">الأيام: {doctor.workDays}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#3DBEAE]"></div>
                        <span className="text-gray-700">الفترة: {doctor.workPeriod}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#3DBEAE]"></div>
                        <span className="text-gray-700">الأوقات: {doctor.workHours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Qualifications */}
              {doctor.qualifications && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-2xl text-[#4B3F99] flex items-center gap-2">
                      <GraduationCap className="h-6 w-6 text-[#3DBEAE]" />
                      المؤهلات العلمية
                    </h2>
                    <ul className="space-y-3">
                      {doctor.qualifications.map((qual: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#3DBEAE] mt-2"></div>
                          <span className="text-gray-600">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Specializations */}
              {doctor.specializations && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-2xl text-[#4B3F99] flex items-center gap-2">
                      <Stethoscope className="h-6 w-6 text-[#3DBEAE]" />
                      التخصصات الدقيقة
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3">
                      {doctor.specializations.map((spec: string, index: number) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-[#3DBEAE]/10 to-[#4B3F99]/10 rounded-lg p-4 text-center"
                        >
                          <p className="text-gray-700">{spec}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Location */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl text-[#4B3F99] mb-4 flex items-center justify-end gap-2" dir="rtl">
                    <MapPin className="h-5 w-5 text-[#3DBEAE]" />
                    الموقع
                  </h2>
                  <p className="text-gray-600">مركز الحياة الطبي</p>
                  <p className="text-gray-600 mt-2">عدن - المنصورة - ريمي</p>
                  <p className="text-gray-600">بجانب مستشفى 22 مايو</p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl text-[#4B3F99]">احجز موعدك</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-2">اختر التاريخ</p>
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

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl text-[#3DBEAE]">{doctor.price}</span>
                      <span className="text-gray-600">سعر الكشف</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-[#3DBEAE] hover:bg-[#3DBEAE]/90 text-white py-6"
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
                    <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                      <span>773344556</span>
                      <Phone className="h-4 w-4 text-[#3DBEAE]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}