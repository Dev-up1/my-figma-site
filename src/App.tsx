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

export default function App() {
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