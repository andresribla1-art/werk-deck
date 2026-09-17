export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-oasis-dark text-white font-display">
      {children}
    </div>
  );
}