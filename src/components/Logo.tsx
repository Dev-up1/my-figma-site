import logo from "figma:asset/75c904e6667d02e355b94a9b0f4f3d328f646ef4.png";

export function Logo({ className = "h-12 md:h-16" }: { className?: string }) {
  return (
    <img 
      src={logo} 
      alt="مركز الحياة الطبي - AL-HAYAT MEDICAL CENTER" 
      className={className}
    />
  );
}
