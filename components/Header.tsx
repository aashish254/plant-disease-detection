import { Leaf, BarChart3, Brain } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PlantCare AI</h1>
              <p className="text-xs text-gray-500">Disease Detection System</p>
            </div>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition font-medium text-sm">
              Home
            </Link>
            <Link 
              href="/quiz" 
              className="flex items-center gap-1 text-gray-600 hover:text-primary transition font-medium text-sm"
            >
              <Brain className="w-4 h-4" />
              <span className="hidden md:inline">Quiz</span>
            </Link>
            <Link href="/gallery" className="text-gray-600 hover:text-primary transition font-medium text-sm hidden md:inline">
              Gallery
            </Link>
            <Link href="/history" className="text-gray-600 hover:text-primary transition font-medium text-sm hidden lg:inline">
              History
            </Link>
            <Link 
              href="/statistics" 
              className="flex items-center gap-1 text-gray-600 hover:text-primary transition font-medium text-sm"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden lg:inline">Stats</span>
            </Link>
            <Link href="/performance" className="text-gray-600 hover:text-primary transition font-medium text-sm hidden lg:inline">
              Performance
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
