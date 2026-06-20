export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-100">
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        {children}
      </div>
    </div>
  );
}