import { Route, Switch, Redirect } from "wouter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";
import { ScrollToTop } from "./components/ScrollToTop";
import { BookingModal } from "./components/BookingModal";
import { BookingProvider } from "./contexts/BookingContext";
import { Home } from "./pages/Home";
import { Doctors } from "./pages/Doctors";
import { Scans } from "./pages/Scans";
import { Clinics } from "./pages/Clinics";
import { Laboratory } from "./pages/Laboratory";
import { AboutUs } from "./pages/AboutUs";
import { Specialty } from "./pages/Specialty";
import { Search } from "./pages/Search";
import { DoctorDetail } from "./pages/DoctorDetail";
import { ScanDetail } from "./pages/ScanDetail";
import { ClinicDetail } from "./pages/ClinicDetail";
import { EquipmentDetail } from "./pages/EquipmentDetail";

// 1. تأكد أنك أنشأت صفحة البروفايل واستدعيها هنا
// (إذا لم يكن لديك ملف Profile.tsx في مجلد pages، أخبرني لننشئه)
import { Profile } from "./pages/Profile"; 

export default function App() {
  
  // 2. هذا المتغير يحدد ما إذا كان الشخص مسجل دخول أم لا
  // حالياً سأضعه يعتمد على "localStorage" كحل مؤقت وسريع
  // إذا كان لديك نظام Context لتسجيل الدخول سنقوم بتعديل هذا السطر لاحقاً
  const isLoggedIn = localStorage.getItem("user") !== null;

  return (
    <BookingProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/doctors" component={Doctors} />
            <Route path="/scans" component={Scans} />
            <Route path="/clinics" component={Clinics} />
            <Route path="/laboratory" component={Laboratory} />
            <Route path="/specialty/:id" component={Specialty} />
            <Route path="/search" component={Search} />
            <Route path="/doctor/:id" component={DoctorDetail} />
            <Route path="/scan/:id" component={ScanDetail} />
            <Route path="/clinic/:id" component={ClinicDetail} />
            <Route path="/equipment/:id" component={EquipmentDetail} />

            {/* 3. هنا أضفنا المسار المحمي لصفحة ملف المريض */}
            <Route path="/profile">
              {isLoggedIn ? <Profile /> : <Redirect to="/" />}
            </Route>

            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
        <Footer />
        <ChatWidget />
        <BookingModal />
      </div>
    </BookingProvider>
  );
}
