export default function AuthCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/30 bg-white/90 p-8 shadow-2xl backdrop-blur-xl">
      {children}
    </div>
  );
}