import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search as SearchIcon, Star, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { useBooking } from "../contexts/BookingContext";

export function Search() {
  const { openBooking } = useBooking();
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");
    if (query) {
      setSearchQuery(query);
    }
  }, [location]);

  // Sample data for search results
  const doctors = [
    {
      id: 1,
      name: "د. أحمد محمد",
      specialty: "طب الأطفال",
      rating: 4.8,
      reviewCount: 245,
      location: "عدن - المنصورة",
      price: "200 ريال",
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
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
    },
    {
      id: 3,
      name: "د. محمود حسن",
      specialty: "الأمراض الباطنية",
      rating: 4.9,
      reviewCount: 412,
      location: "عدن - المنصورة",
      price: "300 ريال",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400"
    }
  ];

  const clinics = [
    { id: 1, name: "عيادة الكلى والمسالك البولية والتذكير", icon: "🏥" },
    { id: 2, name: "عيادة الجراحة العامة", icon: "⚕️" },
    { id: 3, name: "عيادة القلب والأوعية الدموية", icon: "❤️" },
    { id: 4, name: "عيادة الغدد والسكري", icon: "🩺" },
    { id: 5, name: "عيادة العيون", icon: "👁️" }
  ];

  const scans = [
    { id: 1, name: "ايكو دوبلر", nameEn: "ECHO", icon: "🫀", price: "300 ريال" },
    { id: 2, name: "الأشعة السينية", nameEn: "X-RAY", icon: "📷", price: "150 ريال" },
    { id: 3, name: "أشعة السونوجرام", nameEn: "SONOGRAM", icon: "📡", price: "250 ريال" },
    { id: 4, name: "الأشعة المقطعية", nameEn: "CT SCAN", icon: "🔬", price: "500 ريال" }
  ];

  // Filter results based on search query
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredClinics = clinics.filter((clinic) =>
    clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredScans = scans.filter(
    (scan) =>
      scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scan.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalResults = filteredDoctors.length + filteredClinics.length + filteredScans.length;

  const handleSearch = () => {
    // Trigger re-render with new search query
    window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div>
      {/* Search Header */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
              <ArrowRight className="ml-2 h-5 w-5" />
              العودة للرئيسية
            </Button>
          </Link>
          <h1 className="mb-6">نتائج البحث</h1>
          <div className="max-w-2xl">
            <div className="flex gap-2">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="ابحث عن طبيب، عيادة، أو جهاز فحص..."
                className="flex-1 bg-white text-foreground"
              />
              <Button onClick={handleSearch} size="lg" variant="secondary">
                <SearchIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {searchQuery ? (
            <>
              <div className="mb-8">
                <h2 className="mb-2">نتائج البحث عن: "{searchQuery}"</h2>
                <p className="text-muted-foreground">
                  تم العثور على {totalResults} نتيجة
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="all">
                    الكل ({totalResults})
                  </TabsTrigger>
                  <TabsTrigger value="doctors">
                    أطباء ({filteredDoctors.length})
                  </TabsTrigger>
                  <TabsTrigger value="clinics">
                    عيادات ({filteredClinics.length})
                  </TabsTrigger>
                  <TabsTrigger value="scans">
                    فحوصات ({filteredScans.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-8 mt-8">
                  {filteredDoctors.length > 0 && (
                    <div>
                      <h3 className="mb-4">الأطباء</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredDoctors.map((doctor) => (
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
                                <div className="flex items-center gap-2 mb-2">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span>{doctor.rating}</span>
                                  <span className="text-muted-foreground">({doctor.reviewCount})</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <MapPin className="h-4 w-4" />
                                  <span>{doctor.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t">
                              <span className="text-primary text-xl">{doctor.price}</span>
                              <Button 
                                className="bg-accent hover:bg-accent/90"
                                onClick={openBooking}
                              >
                                <Calendar className="ml-2 h-4 w-4" />
                                احجز الآن
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredClinics.length > 0 && (
                    <div>
                      <h3 className="mb-4">العيادات</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredClinics.map((clinic) => (
                          <Card key={clinic.id} className="p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-3">{clinic.icon}</div>
                            <h3 className="mb-2">{clinic.name}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-4">
                              <MapPin className="h-4 w-4" />
                              <span>عدن - المنصورة</span>
                            </div>
                            <Button 
                              className="w-full bg-accent hover:bg-accent/90"
                              onClick={openBooking}
                            >
                              <Calendar className="ml-2 h-4 w-4" />
                              احجز الآن
                            </Button>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredScans.length > 0 && (
                    <div>
                      <h3 className="mb-4">الفحوصات والأشعة</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredScans.map((scan) => (
                          <Card key={scan.id} className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-3 mb-4">
                              <div className="text-4xl">{scan.icon}</div>
                              <div>
                                <h3 className="mb-1">{scan.name}</h3>
                                <p className="text-accent">{scan.nameEn}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t">
                              <span className="text-primary text-xl">{scan.price}</span>
                              <Button 
                                className="bg-accent hover:bg-accent/90"
                                onClick={openBooking}
                              >
                                احجز الآن
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {totalResults === 0 && (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">🔍</div>
                      <h3 className="mb-2">لم يتم العثور ع��ى نتائج</h3>
                      <p className="text-muted-foreground">
                        جرب البحث بكلمات مختلفة
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="doctors" className="mt-8">
                  {filteredDoctors.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {filteredDoctors.map((doctor) => (
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
                              <div className="flex items-center gap-2 mb-2">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>{doctor.rating}</span>
                                <span className="text-muted-foreground">({doctor.reviewCount})</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{doctor.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4 pt-4 border-t">
                            <span className="text-primary text-xl">{doctor.price}</span>
                            <Button 
                              className="bg-accent hover:bg-accent/90"
                              onClick={openBooking}
                            >
                              <Calendar className="ml-2 h-4 w-4" />
                              احجز الآن
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">👨‍⚕️</div>
                      <h3 className="mb-2">لم يتم العثور على أطباء</h3>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="clinics" className="mt-8">
                  {filteredClinics.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredClinics.map((clinic) => (
                        <Card key={clinic.id} className="p-6 hover:shadow-lg transition-shadow">
                          <div className="text-4xl mb-3">{clinic.icon}</div>
                          <h3 className="mb-2">{clinic.name}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <MapPin className="h-4 w-4" />
                            <span>عدن - المنصورة</span>
                          </div>
                          <Button 
                            className="w-full bg-accent hover:bg-accent/90"
                            onClick={openBooking}
                          >
                            <Calendar className="ml-2 h-4 w-4" />
                            احجز الآن
                          </Button>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">🏥</div>
                      <h3 className="mb-2">لم يتم العثور على عيادات</h3>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="scans" className="mt-8">
                  {filteredScans.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredScans.map((scan) => (
                        <Card key={scan.id} className="p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="text-4xl">{scan.icon}</div>
                            <div>
                              <h3 className="mb-1">{scan.name}</h3>
                              <p className="text-accent">{scan.nameEn}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t">
                            <span className="text-primary text-xl">{scan.price}</span>
                            <Button 
                              className="bg-accent hover:bg-accent/90"
                              onClick={openBooking}
                            >
                              احجز الآن
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">🔬</div>
                      <h3 className="mb-2">لم يتم العثور على فحوصات</h3>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="mb-2">ابحث عن ما تحتاجه</h2>
              <p className="text-muted-foreground">
                ابحث عن أطباء، عيادات، أو فحوصات طبية
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
