"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    
    // ถ้าเป็น anchor link ให้ทำการ scroll
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // ถ้าเป็น page link ให้ทำการเปลี่ยนหน้า
      window.location.href = href;
    }
  };

  const navLinks = [
    { label: "หน้าแรก", href: "/" },
    { label: "สินค้า", href: "/products" },
    { label: "เกี่ยวกับเรา", href: "/#about" },
    { label: "โซลูชั่น", href: "/#business" },
    { label: "บริการ", href: "/#services" },
    { label: "ลูกค้าของเรา", href: "/#customers" },
    { label: "สมัครงาน", href: "/careers" },
    
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* TOP BAR - Contact Info */}
      <div className="hidden md:block bg-[#003d7a] text-white text-[12px] py-[8px]">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-[30px]">
            <span className="opacity-90">
              Quality First — Service And Support Spirit
            </span>
          </div>
          <div className="flex gap-[30px]">
            <a href="tel:0293315004" className="hover:text-[#00a8e8] transition flex items-center gap-1">
              <span>📞</span> 0-2933-1500
            </a>
            <a href="mailto:lerson@dynamiccomputer.co.th" className="hover:text-[#00a8e8] transition flex items-center gap-1">
              <span>✉️</span> dcc@dynamiccomputer.co.th
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#e5e7eb] shadow-sm"
            : "bg-white md:bg-white/80 md:backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
            <div className="bg-[#003d7a] text-white p-1 rounded text-[12px] font-bold w-10 h-10 flex items-center justify-center">
              DCC
            </div>
            <div className="flex flex-col">
              <div className="text-[16px] font-[700] text-[#003d7a] leading-tight">
                DYNAMIC COMPUTER
              </div>
              <div className="text-[10px] font-[600] text-[#666] tracking-wider">
                ไดนามิค คอมพิวเตอร์
              </div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-[24px] text-[13px] font-[600]">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition ${
                  (link.href === "/careers" && pathname === "/careers") || (link.href === "/contact" && pathname === "/contact")
                    ? "text-[#003d7a]"
                    : "text-[#333] hover:text-[#003d7a]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact"
              className="hidden md:block text-[13px] px-[20px] py-[10px] bg-[#003d7a] text-white rounded-full font-[600] hover:bg-[#0052cc] transition shadow-md"
            >
              ติดต่อเรา
            </Link>

            {/* HAMBURGER */}
            <button
              className="md:hidden text-2xl text-[#003d7a]"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-[70] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="font-bold text-[#003d7a]">เมนู</span>
            <button onClick={() => setOpen(false)} className="text-2xl">✕</button>
          </div>
          <nav className="flex flex-col gap-6 text-[16px] font-[500]">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition ${
                  (link.href === "/careers" && pathname === "/careers") || (link.href === "/contact" && pathname === "/contact")
                    ? "text-[#003d7a] font-bold"
                    : "text-[#333] hover:text-[#003d7a]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Link 
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-auto block text-center bg-[#003d7a] text-white py-4 rounded-xl font-bold hover:bg-[#0052cc] transition"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </div>
  );
}
