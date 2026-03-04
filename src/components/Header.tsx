import { Link } from "wouter";
import { Search, User, Phone, Menu, X, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useBooking } from "../contexts/BookingContext";
import { Logo } from "./Logo";
import { useAuth } from "../contexts/AuthContext";

export function Header() {
  const { openBooking } = useBooking();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // استدعاء بيانات المستخدم
  const { user } = useAuth();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Simplified for mobile */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>773344556</span>
          </div>
          <span>English</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <Logo className="h-12 md:h-16" />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/">
                <span className="hover:text-primary transition-colors cursor-pointer">الرئيسية</span>
              </Link>
              <Link href="/about-us">
                <span className="hover:text-primary transition-colors cursor-pointer">عن المركز</span>
              </Link>
              <Link href="/doctors">
                <span className="hover:text-primary transition-colors cursor-pointer">ابحث عن طبيب</span>
              </Link>
              <Link href="/scans">
                <span className="hover:text-primary transition-colors cursor-pointer">المدينة سكان</span>
              </Link>
              <Link href="/clinics">
                <span className="hover:text-primary transition-colors cursor-pointer">العيادات</span>
              </Link>
              <Link href="/laboratory">
                <span className="hover:text-primary transition-colors cursor-pointer">الفحوصات</span>
              </Link>
            </nav>

            {/* Search and Login - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              {showSearch ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleSearchKeyPress}
                    placeholder="ابحث عن طبيب، عيادة، أو جهاز فحص..."
                    className="border border-border rounded-md px-3 py-2 w-64 text-right"
                    autoFocus
                  />
                  <Button variant="ghost" size="icon" onClick={handleSearch}>
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)}>
                    ×
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
                  <Search className="h-5 w-5" />
                </Button>
              )}
              
              <Button 
                className="bg-[#3DBEAE] hover:bg-[#3DBEAE]/90 text-white"
                onClick={openBooking}
              >
                <Calendar className="h-5 w-5 mr-2" />
                احجز الآن
              </Button>

              {/* ⬇️⬇️⬇️ التغيير هنا: زر تسجيل الدخول للشاشات الكبيرة ⬇️⬇️⬇️ */}
              {user ? (
                <Link href="/profile">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <User className="h-5 w-5 mr-2" />
                    {user.name}
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <User className="h-5 w-5 mr-2" />
                    تسجيل دخول
                  </Button>
                </Link>
              )}
              {/* ⬆️⬆️⬆️ نهاية التغيير ⬆️⬆️⬆️ */}

            </div>

            {/* Mobile Menu Button and Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)}>
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showSearch && (
            <div className="lg:hidden mt-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  placeholder="ابحث عن طبيب، عيادة، أو جهاز فحص..."
                  className="border border-border rounded-md px-3 py-2 w-full text-right"
                  autoFocus
                />
                <Button variant="ghost" size="icon" onClick={handleSearch}>
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" onClick={closeMobileMenu}>
                <span className="block py-2 hover:text-primary transition-colors cursor-pointer">
                  الرئيسية
                </span>
              </Link>
              <Link href="/about-us" onClick={closeMobileMenu}>
                <span className="block py-2 hover:text-primary transition-colors cursor-pointer">
                  عن المركز
                </span>
              </Link>
              <Link href="/doctors" onClick={closeMobileMenu}>
                <span className="block py-2 hover:text-primary transition-colors cursor-pointer">
                  ابحث عن طبيب
                </span>
              </Link>
              <Link href="/scans" onClick={closeMobileMenu}>
                <span className="block py-2 hover:text-primary transition-colors cursor-pointer">
                  المدينة سكان
                </span>
              </Link>
              <Link href="/clinics" onClick={closeMobileMenu}>
                <span className="block py-2 hover:text-primary transition-colors cursor-pointer">
                  العيادات
                </span>
              </Link>
              <Link href="/laboratory" onClick={closeMobileMenu}>
                <span className="block py-2 hover:text-primary transition-colors cursor-pointer">
                  الفحوصات
                </span>
              </Link>
              
              <Button 
                className="bg-[#3DBEAE] hover:bg-[#3DBEAE]/90 text-white w-full"
                onClick={() => {
                  closeMobileMenu();
                  openBooking();
                }}
              >
                <Calendar className="h-5 w-5 mr-2" />
                احجز الآن
              </Button>

              {/* ⬇️⬇️⬇️ التغيير هنا: زر تسجيل الدخول للموبايل ⬇️⬇️⬇️ */}
              {user ? (
                <Link href="/profile" onClick={closeMobileMenu}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full justify-center">
                    <User className="h-5 w-5 mr-2" />
                    ملفي ({user.name})
                  </Button>
                </Link>
              ) : (
                <Link href="/login" onClick={closeMobileMenu}>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full justify-center">
                    <User className="h-5 w-5 mr-2" />
                    تسجيل دخول
                  </Button>
                </Link>
              )}
               {/* ⬆️⬆️⬆️ نهاية التغيير ⬆️⬆️⬆️ */}
               
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
