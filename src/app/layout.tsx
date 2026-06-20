import './globals.css'
// FIXED: Steps up into src/ components/ layout/ Navbar
import Navbar from '../components/layout/Navbar' 

export const metadata = {
  title: 'Quasi Banking Classes',
  description: 'Crack Indian Banking Exams with Absolute Confidence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}