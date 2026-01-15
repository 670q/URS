import { Hero } from "@/components/sections/Hero";
import { Integration } from "@/components/sections/Integration";
import { FeaturesDetail } from "@/components/sections/FeaturesDetail";
import { Inventory } from "@/components/sections/Inventory";
import { Growth } from "@/components/sections/Growth";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Navbar } from "@/components/sections/Navbar";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Integration />
      <FeaturesDetail />
      <Inventory />
      <Growth />
      <TargetAudience />

      {/* Footer & Contact */}
      <footer className="bg-urs-navy text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div className="text-center md:text-right">
              <h2 className="text-3xl font-bold mb-2">URS System</h2>
              <p className="text-blue-200">شريكك الرقمي لإدارة صيدلية ذكية.</p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="mailto:URS.SA66@GMAIL.COM" className="flex items-center gap-3 hover:text-urs-green transition-colors bg-white/5 py-2 px-4 rounded-full backdrop-blur-sm">
                <Mail className="w-5 h-5" />
                <span dir="ltr">URS.SA66@GMAIL.COM</span>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p dir="ltr">© 2026 URS System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
