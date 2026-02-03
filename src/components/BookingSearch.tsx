import { useState } from "react";
import { Stethoscope, Calendar, Clock, Phone, Building2, Scan, Microscope } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import { useBooking } from "../contexts/BookingContext";

// Sample data for clinics, doctors, and scans
const clinicsData = [
  { id: "kidney", name: "عيادة الكلى والمسالك البولية والذكورة" },
  { id: "surgery", name: "عيادة الجراحة العامة" },
  { id: "cardiology", name: "عيادة القلب والأوعية الدموية" },
  { id: "endocrine", name: "عيادة الغدد والسكري" },
  { id: "ophthalmology", name: "عيادة العيون" }
];

const doctorsData = [
  { id: "1", name: "د. أحمد محمد علي", specialty: "طب الأطفال" },
  { id: "2", name: "د. فاطمة علي حسن", specialty: "طب الأطفال والرضع" },
  { id: "3", name: "د. محمد رأفت", specialty: "الكلى والمسالك البولية" },
  { id: "4", name: "د. ياسر محمود", specialty: "الجراحة العامة" },
  { id: "5", name: "د. وليد حسين", specialty: "القلب والأوعية" },
  { id: "6", name: "د. نورا إبراهيم", specialty: "الغدد والسكري" },
  { id: "7", name: "د. عمر صالح", specialty: "طب وجراحة العيون" }
];

const scansData = [
  { id: "mri", name: "التصوير بالرنين المغناطيسي (MRI)" },
  { id: "ct", name: "التصوير المقطعي (CT Scan)" },
  { id: "xray", name: "الأشعة السينية (X-Ray)" },
  { id: "ultrasound", name: "الموجات فوق الصوتية (Ultrasound)" },
  { id: "mammography", name: "تصوير الثدي (Mammography)" },
  { id: "dexa", name: "قياس كثافة العظام (DEXA)" }
];

const laboratoryTestsData = [
  { id: "cbc", name: "تحليل الدم الشامل (CBC)" },
  { id: "blood-sugar", name: "فحص السكري" },
  { id: "kidney-function", name: "فحص وظائف الكلى" },
  { id: "liver-function", name: "فحص وظائف الكبد" },
  { id: "thyroid", name: "فحص الغدة الدرقية" },
  { id: "cholesterol", name: "فحص الكوليسترول" },
  { id: "vitamin-d", name: "فحص فيتامين د" },
  { id: "urine-analysis", name: "تحليل البول" },
  { id: "pcr", name: "فحص PCR" },
  { id: "blood-culture", name: "مزرعة الدم" }
];

const availableDates = [
  "2024-12-04",
  "2024-12-05",
  "2024-12-06",
  "2024-12-07",
  "2024-12-08",
  "2024-12-09",
  "2024-12-10"
];

const timeSlots = [
  { value: "morning", label: "صباحا (8:00 - 12:00)" },
  { value: "evening", label: "مساء (4:30 - 8:30)" }
];

export function BookingSearch() {
  const { closeBooking } = useBooking();
  const [activeTab, setActiveTab] = useState("clinics");
  
  // Clinics tab state
  const [selectedClinic, setSelectedClinic] = useState("");
  const [selectedClinicDoctor, setSelectedClinicDoctor] = useState("");
  const [selectedClinicDate, setSelectedClinicDate] = useState("");
  const [selectedClinicTime, setSelectedClinicTime] = useState("");

  // Doctors tab state
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDoctorDate, setSelectedDoctorDate] = useState("");
  const [selectedDoctorTime, setSelectedDoctorTime] = useState("");

  // Scans tab state
  const [selectedScan, setSelectedScan] = useState("");
  const [selectedScanDate, setSelectedScanDate] = useState("");
  const [selectedScanTime, setSelectedScanTime] = useState("");

  // Laboratory Tests tab state
  const [selectedLaboratoryTest, setSelectedLaboratoryTest] = useState("");
  const [selectedLaboratoryTestDate, setSelectedLaboratoryTestDate] = useState("");
  const [selectedLaboratoryTestTime, setSelectedLaboratoryTestTime] = useState("");

  const handleClinicBooking = () => {
    if (selectedClinic && selectedClinicDoctor && selectedClinicDate && selectedClinicTime) {
      alert(`تم الحجز بنجاح!\nالعيادة: ${clinicsData.find(c => c.id === selectedClinic)?.name}\nالطبيب: ${doctorsData.find(d => d.id === selectedClinicDoctor)?.name}\nالتاريخ: ${selectedClinicDate}\nالوقت: ${timeSlots.find(t => t.value === selectedClinicTime)?.label}`);
      closeBooking();
    } else {
      alert("الرجاء تعبئة جميع الحقول");
    }
  };

  const handleDoctorBooking = () => {
    if (selectedDoctor && selectedDoctorDate && selectedDoctorTime) {
      alert(`تم الحجز بنجاح!\nالطبيب: ${doctorsData.find(d => d.id === selectedDoctor)?.name}\nالتاريخ: ${selectedDoctorDate}\nالوقت: ${timeSlots.find(t => t.value === selectedDoctorTime)?.label}`);
      closeBooking();
    } else {
      alert("الرجاء تعبئة جميع الحقول");
    }
  };

  const handleScanBooking = () => {
    if (selectedScan && selectedScanDate && selectedScanTime) {
      alert(`تم الحجز بنجاح!\nالفحص: ${scansData.find(s => s.id === selectedScan)?.name}\nالتاريخ: ${selectedScanDate}\nالوقت: ${timeSlots.find(t => t.value === selectedScanTime)?.label}`);
      closeBooking();
    } else {
      alert("الرجاء تعبئة جميع الحقول");
    }
  };

  const handleLaboratoryTestBooking = () => {
    if (selectedLaboratoryTest && selectedLaboratoryTestDate && selectedLaboratoryTestTime) {
      alert(`تم الحجز بنجاح!\nالفحص: ${laboratoryTestsData.find(l => l.id === selectedLaboratoryTest)?.name}\nالتاريخ: ${selectedLaboratoryTestDate}\nالوقت: ${timeSlots.find(t => t.value === selectedLaboratoryTestTime)?.label}`);
      closeBooking();
    } else {
      alert("الرجاء تعبئة جميع الحقول");
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 mt-8 md:mt-16 relative z-10 max-w-5xl mx-auto" 
      dir="rtl"
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 mb-10 h-auto p-1.5 bg-gray-200 rounded-xl">
          <TabsTrigger 
            value="clinics" 
            className="gap-2 py-3.5 px-4 lg:px-6 text-sm lg:text-base data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-600 data-[state=active]:shadow-sm rounded-lg transition-all order-1"
          >
            <Building2 className="h-5 w-5" />
            <span>العيادات</span>
          </TabsTrigger>
          <TabsTrigger 
            value="doctors" 
            className="gap-2 py-3.5 px-4 lg:px-6 text-sm lg:text-base data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-600 data-[state=active]:shadow-sm rounded-lg transition-all order-2"
          >
            <Stethoscope className="h-5 w-5" />
            <span>الأطباء</span>
          </TabsTrigger>
          <TabsTrigger 
            value="scans" 
            className="gap-2 py-3.5 px-4 lg:px-6 text-sm lg:text-base data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-600 data-[state=active]:shadow-sm rounded-lg transition-all order-3"
          >
            <Scan className="h-5 w-5" />
            <span>المدينة سكان</span>
          </TabsTrigger>
          <TabsTrigger 
            value="laboratory-tests" 
            className="gap-2 py-3.5 px-4 lg:px-6 text-sm lg:text-base data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-600 data-[state=active]:shadow-sm rounded-lg transition-all order-4"
          >
            <Microscope className="h-5 w-5" />
            <span>الفحوصات</span>
          </TabsTrigger>
        </TabsList>

        {/* Clinics Tab */}
        <TabsContent value="clinics" className="space-y-0 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-8">
            <div className="text-right md:order-2">
              <label className="block text-sm mb-3 text-gray-900">اختار الطبيب</label>
              <Select 
                value={selectedClinicDoctor} 
                onValueChange={setSelectedClinicDoctor}
                disabled={!selectedClinic}
              >
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500 disabled:opacity-50">
                  <SelectValue placeholder="اختار الطبيب" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {doctorsData.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id} className="text-right">
                      {doctor.name} - {doctor.specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="text-right md:order-1">
              <label className="block text-sm mb-3 text-gray-900">اختار العيادة</label>
              <Select value={selectedClinic} onValueChange={setSelectedClinic}>
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500">
                  <SelectValue placeholder="اختار العيادة" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {clinicsData.map((clinic) => (
                    <SelectItem key={clinic.id} value={clinic.id} className="text-right">
                      {clinic.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="text-right md:order-4">
              <label className="block text-sm mb-3 text-gray-900">اختار الوقت</label>
              <Select 
                value={selectedClinicTime} 
                onValueChange={setSelectedClinicTime}
                disabled={!selectedClinicDate}
              >
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500 disabled:opacity-50">
                  <SelectValue placeholder="اختار الوقت" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot.value} value={slot.value} className="text-right">
                      {slot.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="text-right md:order-3">
              <label className="block text-sm mb-3 text-gray-900">اختار التاريخ</label>
              <Select 
                value={selectedClinicDate} 
                onValueChange={setSelectedClinicDate}
                disabled={!selectedClinicDoctor}
              >
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500 disabled:opacity-50">
                  <SelectValue placeholder="اختار التاريخ" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {availableDates.map((date) => (
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
          </div>
          
          <Button 
            className="w-full h-14 bg-[#3DBEAE] hover:bg-[#35a89a] text-white rounded-xl text-base mb-8"
            onClick={handleClinicBooking}
          >
            <Calendar className="ml-2 h-5 w-5" />
            احجز الان
          </Button>
        </TabsContent>

        {/* Doctors Tab */}
        <TabsContent value="doctors" className="space-y-0 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-8">
            <div className="text-right md:order-2">
              <label className="block text-sm mb-3 text-gray-900">اختار التاريخ</label>
              <Select 
                value={selectedDoctorDate} 
                onValueChange={setSelectedDoctorDate}
                disabled={!selectedDoctor}
              >
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500 disabled:opacity-50">
                  <SelectValue placeholder="اختار التاريخ" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {availableDates.map((date) => (
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

            <div className="text-right md:order-1">
              <label className="block text-sm mb-3 text-gray-900">اختار الطبيب</label>
              <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500">
                  <SelectValue placeholder="اختار الطبيب" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {doctorsData.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id} className="text-right">
                      {doctor.name} - {doctor.specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2 text-right">
              <label className="block text-sm mb-3 text-gray-900">اختار الوقت</label>
              <Select 
                value={selectedDoctorTime} 
                onValueChange={setSelectedDoctorTime}
                disabled={!selectedDoctorDate}
              >
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500 disabled:opacity-50">
                  <SelectValue placeholder="اختار الوقت" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot.value} value={slot.value} className="text-right">
                      {slot.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            className="w-full h-14 bg-[#3DBEAE] hover:bg-[#35a89a] text-white rounded-xl text-base mb-8"
            onClick={handleDoctorBooking}
          >
            <Calendar className="ml-2 h-5 w-5" />
            احجز الان
          </Button>
        </TabsContent>

        {/* Scans Tab */}
        <TabsContent value="scans" className="space-y-0 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-8">
            <div className="text-right md:order-2">
              <label className="block text-sm mb-3 text-gray-900">اختار التاريخ</label>
              <Select 
                value={selectedScanDate} 
                onValueChange={setSelectedScanDate}
                disabled={!selectedScan}
              >
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500 disabled:opacity-50">
                  <SelectValue placeholder="اختار التاريخ" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {availableDates.map((date) => (
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

            <div className="text-right md:order-1">
              <label className="block text-sm mb-3 text-gray-900">اختار نوع الفحص</label>
              <Select value={selectedScan} onValueChange={setSelectedScan}>
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500">
                  <SelectValue placeholder="اختار نوع الفحص" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {scansData.map((scan) => (
                    <SelectItem key={scan.id} value={scan.id} className="text-right">
                      {scan.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2 text-right">
              <label className="block text-sm mb-3 text-gray-900">اختار الوقت</label>
              <Select 
                value={selectedScanTime} 
                onValueChange={setSelectedScanTime}
                disabled={!selectedScanDate}
              >
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500 disabled:opacity-50">
                  <SelectValue placeholder="اختار الوقت" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot.value} value={slot.value} className="text-right">
                      {slot.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            className="w-full h-14 bg-[#3DBEAE] hover:bg-[#35a89a] text-white rounded-xl text-base mb-8"
            onClick={handleScanBooking}
          >
            <Calendar className="ml-2 h-5 w-5" />
            احجز الان
          </Button>
        </TabsContent>

        {/* Laboratory Tests Tab */}
        <TabsContent value="laboratory-tests" className="space-y-0 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-8">
            <div className="text-right md:order-2">
              <label className="block text-sm mb-3 text-gray-900">اختار التاريخ</label>
              <Select 
                value={selectedLaboratoryTestDate} 
                onValueChange={setSelectedLaboratoryTestDate}
                disabled={!selectedLaboratoryTest}
              >
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500 disabled:opacity-50">
                  <SelectValue placeholder="اختار التاريخ" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {availableDates.map((date) => (
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

            <div className="text-right md:order-1">
              <label className="block text-sm mb-3 text-gray-900">اختار نوع الفحص</label>
              <Select value={selectedLaboratoryTest} onValueChange={setSelectedLaboratoryTest}>
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500">
                  <SelectValue placeholder="اختار نوع الفحص" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {laboratoryTestsData.map((test) => (
                    <SelectItem key={test.id} value={test.id} className="text-right">
                      {test.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2 text-right">
              <label className="block text-sm mb-3 text-gray-900">اختار الوقت</label>
              <Select 
                value={selectedLaboratoryTestTime} 
                onValueChange={setSelectedLaboratoryTestTime}
                disabled={!selectedLaboratoryTestDate}
              >
                <SelectTrigger className="h-14 text-right bg-gray-100 border-0 rounded-xl text-gray-500 disabled:opacity-50">
                  <SelectValue placeholder="اختار الوقت" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot.value} value={slot.value} className="text-right">
                      {slot.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            className="w-full h-14 bg-[#3DBEAE] hover:bg-[#35a89a] text-white rounded-xl text-base mb-8"
            onClick={handleLaboratoryTestBooking}
          >
            <Calendar className="ml-2 h-5 w-5" />
            احجز الان
          </Button>
        </TabsContent>
      </Tabs>

      {/* Quick Info */}
      <div className="pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 order-3 sm:order-1">
            <span>777552666</span>
            <Phone className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 order-2">
            <span>متاح 24/7</span>
            <Clock className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 order-1 sm:order-3">
            <span>فريق الدعم متاح الان</span>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}