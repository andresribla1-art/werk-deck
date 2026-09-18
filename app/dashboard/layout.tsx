import { HudNavigation } from "@/components/hud-navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-display pb-16">
      {children}
      <HudNavigation />
    </div>
  );
}