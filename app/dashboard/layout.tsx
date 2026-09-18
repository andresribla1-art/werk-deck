import { HudNavigation } from "@/components/hud-navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-white pb-20" style={{
      background: "radial-gradient(ellipse at 20% 50%, rgba(0,255,136,0.03) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,200,255,0.02) 0%, transparent 40%), #030712"
    }}>
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.015) 2px, rgba(0,255,136,0.015) 4px)",
      }} />
      <div className="relative z-10">
        {children}
      </div>
      <HudNavigation />
    </div>
  );
}