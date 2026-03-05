import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from "wouter";

export function MyProfile() {
  const { user, logout } = useAuth();
  const [_, setLocation] = useLocation();
  const [extraData, setExtraData] = useState({ age: "", phone: "" });

  useEffect(() => {
    if (!user) {
      setLocation("/login");
      return;
    }
    const saved = localStorage.getItem("patient_data");
    if (saved) setExtraData(JSON.parse(saved));
  }, [user, setLocation]);

  if (!user) return null;

  return (
    <div className="p-10 text-center dir-rtl">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">أهلاً بك يا {user.name}</h1>
      <div className="text-xl mb-6">
        <p>العمر: {extraData.age}</p>
        <p>الجوال: {extraData.phone}</p>
      </div>
      <button onClick={logout} className="bg-red-500 text-white px-6 py-2 rounded">
        تسجيل خروج
      </button>
    </div>
  );
}
