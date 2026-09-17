export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-emerald-500 selection:text-black">
      {children}
    </div>
  );
}