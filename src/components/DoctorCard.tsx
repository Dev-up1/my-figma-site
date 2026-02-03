import { CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Link } from "wouter";

interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    specialty: string;
    specialtyEn?: string;
    location?: string;
    rating?: number;
    reviewCount?: number;
    experience?: string;
    image: string;
    verified?: boolean;
    price?: string;
  };
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Link href={`/doctor/${doctor.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
        <CardContent className="p-0">
          <div className="relative">
            <img 
              src={doctor.image} 
              alt={doctor.name}
              className="w-full h-48 object-cover"
            />
            {doctor.verified && (
              <div className="absolute top-2 right-2 bg-[#3DBEAE] text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                <span>موثق</span>
              </div>
            )}
          </div>
          
          <div className="p-4" dir="rtl">
            <div className="mb-2">
              <h3 className="text-lg mb-1 text-[#4B3F99]">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-600">{doctor.specialtyEn || doctor.specialty}</p>
            </div>

            {doctor.rating && (
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                </div>
                {doctor.reviewCount && (
                  <span className="text-xs text-gray-500">({doctor.reviewCount} تقييم)</span>
                )}
              </div>
            )}

            {doctor.experience && (
              <p className="text-xs text-gray-500 mb-3">{doctor.experience}</p>
            )}

            {doctor.price && (
              <div className="pt-3 border-t flex items-center justify-between">
                <span className="text-sm text-gray-600">سعر الكشف:</span>
                <span className="font-medium text-[#3DBEAE]">{doctor.price}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}