"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const brands = [
  "asus", "hp", "dell", "lenovo", "msi",
  "amd", "nvidia", "cisco", "tplink",
  "microsoft", "canon", "epson"
];

const businessLines = [
  {
    num: "01",
    title: "Quality IT Products",
    desc: "สินค้าไอทีคุณภาพสูง ครอบคลุม Server, Computer, Notebook, Tablet, Network และอื่นๆ",
    icon: "💻"
  },
  {
    num: "02",
    title: "Software & Security",
    desc: "ซอฟต์แวร์และระบบรักษาความปลอดภัย เช่น Operating Systems, Anti-Virus และอื่นๆ",
    icon: "🔒"
  },
  {
    num: "03",
    title: "IT Infrastructure",
    desc: "พัฒนาโครงสร้างพื้นฐานไอทีที่ยืดหยุ่น ครอบคลุมระบบอัตโนมัติและการรวมระบบ",
    icon: "🏗️"
  },
  {
    num: "04",
    title: "Turnkey Solution",
    desc: "บริการครบวงจร On-Site Service พร้อมให้คำปรึกษาสำหรับทุกความต้องการขององค์กร",
    icon: "🎯"
  },
  {
    num: "05",
    title: "Rental Service",
    desc: "บริการเช่า-เช่าซื้ออุปกรณ์ไอทีคุณภาพ ช่วยลดต้นทุนและเพิ่มความยืดหยุ่นทางธุรกิจ",
    icon: "📦"
  },
  {
    num: "06",
    title: "Set up & Implement",
    desc: "บริการติดตั้งอุปกรณ์ไอทีทุกชนิด พร้อมให้คำปรึกษาและดูแลอย่างครบถ้วน",
    icon: "⚙️"
  },
  {
    num: "07",
    title: "Service & Repair",
    desc: "บริการซ่อมแซมอุปกรณ์ไอทีเพื่อให้ได้คุณภาพที่ดีตลอดอายุการใช้งาน",
    icon: "🛠️"
  },
  {
    num: "08",
    title: "Preventive Maintenance",
    desc: "บริการตรวจเช็คอุปกรณ์ไอทีให้พร้อมใช้งานตลอดเวลา ลดความเสี่ยงจากการขัดข้อง",
    icon: "🛡️"
  },
  {
    num: "09",
    title: "McNet Computer Assembly",
    desc: "บริการประกอบเครื่องคอมพิวเตอร์ตาม Spec ที่ลูกค้าต้องการ ได้มาตรฐาน มอก.",
    icon: "🖥️"
  }
];

const services = [
  {
    title: "Fast Response",
    desc: "ทีมงานพร้อมตอบสนองต่อความต้องการของลูกค้าอย่างรวดเร็ว",
    icon: "⚡"
  },
  {
    title: "Efficient & Reliable",
    desc: "บริการที่มีประสิทธิภาพจากผู้เชี่ยวชาญเฉพาะทางหลังการขาย",
    icon: "✅"
  },
  {
    title: "Maintenance",
    desc: "นอกจากการรับประกันสินค้า เรายังมีสัญญาบำรุงรักษาเพื่อการใช้งานที่ราบรื่น",
    icon: "🔧"
  },
  {
    title: "Training",
    desc: "มีการสอนการใช้งาน ด้วยทีมช่างมืออาชีพ",
    icon: "🎓"
  }
];

const customers = [
  { icon: "🏭", title: "ภาคอุตสาหกรรม" },
  { icon: "🏢", title: "บริษัทเอกชน" },
  { icon: "🏦", title: "สถาบันการเงิน" },
  { icon: "🏥", title: "สถานพยาบาล" },
  { icon: "🎓", title: "สถาบันการศึกษา" },
  { icon: "🏛️", title: "หน่วยงานรัฐ" }
];

// รายชื่อโลโก้ลูกค้า (แถว1)
const customerLogos = [
  { name: "Customer 1", logo: "https://img1.pic.in.th/images/808f2960-1e2e-4737-9cdf-a957b99b9010.png" },
  { name: "Customer 2", logo: "https://img1.pic.in.th/images/ramcec2d986a03bc909.png" },
  { name: "Customer 3", logo: "https://img2.pic.in.th/TH1.png" },
  { name: "Customer 4", logo: "https://img2.pic.in.th/vpr.png" },
  { name: "Customer 5", logo: "https://img2.pic.in.th/7b7252cb-4d82-4552-9bef-0ac3a35d9c60.png" },
  { name: "Customer 6", logo: "https://img2.pic.in.th/kt-Photoroom.png" },
  { name: "Customer 7", logo: "https://img1.pic.in.th/images/spd238dbb9f51bba61.png" },
  { name: "Customer 8", logo: "https://img2.pic.in.th/yh.png" },
  { name: "Customer 9", logo: "https://img1.pic.in.th/images/KRNKR.png" },
  { name: "Customer 10", logo: "https://img2.pic.in.th/nvm9.png" },
  { name: "Customer 11", logo: "https://img1.pic.in.th/images/pcv.png" },
  { name: "Customer 12", logo: "https://img1.pic.in.th/images/KRNKR.png" },
  { name: "Customer 13", logo: "https://img2.pic.in.th/skv.png" },
  { name: "Customer 14", logo: "https://img2.pic.in.th/pcr.png" },
  { name: "Customer 15", logo: "https://img1.pic.in.th/images/siam.png" },
  { name: "Customer 16", logo: "https://img1.pic.in.th/images/pmt-Photoroom.png" },
  { name: "Customer 17", logo: "https://img1.pic.in.th/images/tms87d26f18df725c7e.png" },
];

// รายชื่อโลโก้ลูกค้า (แถว2)
const customerLogos2 = [
  { name: "Customer 1", logo: "https://img1.pic.in.th/images/808f2960-1e2e-4737-9cdf-a957b99b9010.png" },
  { name: "Customer 2", logo: "https://img1.pic.in.th/images/ramcec2d986a03bc909.png" },
  { name: "Customer 3", logo: "https://img2.pic.in.th/TH1.png" },
  { name: "Customer 4", logo: "https://img2.pic.in.th/vpr.png" },
  { name: "Customer 5", logo: "https://img2.pic.in.th/7b7252cb-4d82-4552-9bef-0ac3a35d9c60.png" },
  { name: "Customer 6", logo: "https://img2.pic.in.th/kt-Photoroom.png" },
  { name: "Customer 7", logo: "https://img1.pic.in.th/images/spd238dbb9f51bba61.png" },
  { name: "Customer 8", logo: "https://img2.pic.in.th/yh.png" },
  { name: "Customer 9", logo: "https://img1.pic.in.th/images/KRNKR.png" },
  { name: "Customer 10", logo: "https://img2.pic.in.th/nvm9.png" },
  { name: "Customer 11", logo: "https://img1.pic.in.th/images/pcv.png" },
  { name: "Customer 12", logo: "https://img1.pic.in.th/images/KRNKR.pngg" },
  { name: "Customer 13", logo: "https://img2.pic.in.th/skv.png" },
  { name: "Customer 14", logo: "https://img2.pic.in.th/pcr.png" },
  { name: "Customer 15", logo: "https://img1.pic.in.th/images/siam.png" },
  { name: "Customer 16", logo: "https://img1.pic.in.th/images/pmt-Photoroom.png" },
  { name: "Customer 17", logo: "https://img1.pic.in.th/images/tms87d26f18df725c7e.png" },
];

export default function Home() {
  return (
    <main className="bg-[#FAFBFC] text-[#333]">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #1B3A6B 50%, #0D2545 100%)",
        }}>
        
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663589777581/LzXtMoBurqWYCKUeAdRL3f/hero-bg-YrCrmGebbYzbBfjU3XbMfL.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#1B3A6B]/70 to-transparent" />

        {/* Decorative Circles */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6 pt-28 pb-20">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-[#00a8e8] rounded-full animate-pulse"></span>
              <span className="text-white text-[13px] font-[500]">
                ก่อตั้งปี 1990 — ประสบการณ์มากกว่า 35 ปี
              </span>
            </div>
            
            <h1 className="text-[56px] md:text-[60px] font-[3000] text-white leading-[1] mb-6 tracking-tight">
              DYNAMIC COMPUTER<br />
              <span className="text-[#00a8e8]">ไดนามิค คอมพิวเตอร์</span><br />
              <span className="text-[32px] md:text-[48px] font-[600] opacity-90"></span>
            </h1>

            <p className="text-[18px] md:text-[22px] text-white/90 mb-8 font-[500] italic">
              "Quality First — Service And Support Spirit"
            </p>

            <p className="text-[16px] text-white/70 mb-12 leading-[1.8] max-w-[600px]">
              ผู้ให้บริการ IT Solutions และ Service ครบวงจร สมาชิกของกลุ่มบริษัท Dynamic Supply Engineering Group ที่มีประสบการณ์ในธุรกิจเทคโนโลยีมาตั้งแต่ปี 1990
            </p>

             {/*<div className="flex gap-5 flex-wrap">
              <button className="px-10 py-4 bg-[#00a8e8] text-white rounded-full font-[700] hover:bg-[#0088cc] transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1">
                บริการของเรา
              </button>
              <button className="px-10 py-4 border-2 border-white/30 text-white rounded-full font-[700] hover:bg-white/10 transition-all hover:-translate-y-1">
                ติดต่อเรา
              </button>
            </div>*/}
          </div>
        </div>

        {/* Bottom Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg fill="none" preserveAspectRatio="none" viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] md:h-[80px]">
            <path d="M0,80 L1440,80 L1440,20 C1200,80 960,0 720,40 C480,80 240,20 0,60 Z" fill="#FAFBFC" />
          </svg>
        </div>
      </section>

      {/* COMPANY PROFILE SECTION */}
      <section id="about" className="py-24 md:py-32 px-6 bg-[#FAFBFC]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#003d7a] to-[#00a8e8] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663589777581/LzXtMoBurqWYCKUeAdRL3f/about-bg-JH2oG4ofn6YrZUnaGPAWnv.webp" 
                  alt="Dynamic Computer Team" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div>
              <div className="inline-block text-[14px] font-[700] text-[#00a8e8] mb-4 tracking-widest uppercase">
                ▸ เกี่ยวกับเรา
              </div>
              <h2 className="text-[36px] md:text-[48px] font-[800] text-[#003d7a] mb-6 leading-tight">
                Company Profile
              </h2>
              <div className="w-[80px] h-[5px] bg-[#00a8e8] mb-10 rounded-full"></div>
              <p className="text-[16px] text-[#444] leading-[1.8] mb-6">
                <strong>DYNAMIC COMPUTER established 1990 is a member of Dynamic Supply Engineering Group which has been at the forefront of high technology equipment and reliable professional service since 1970. The group is in the vanguard of process control, test and measurement, waste water treatment, computers and software. The expertise in various fields acquired through the group's long experience, coupled with its growing body of highly-specialized personnel, enables Dynamic Computer to cover the full range of customer services and meet the needs of its advanced computer products but also provide the most efficient after-sale services and comprehensive support facilities.</strong> 
              </p>
               {/*<p className="text-[16px] text-[#444] leading-[1.8]">
                กลุ่มบริษัทมีความเชี่ยวชาญในด้านการควบคุมกระบวนการผลิต การทดสอบและวัดผล การบำบัดน้ำเสีย คอมพิวเตอร์ และซอฟต์แวร์ ด้วยความเชี่ยวชาญในหลากหลายสาขา ทำให้ Dynamic Computer สามารถครอบคลุมการให้บริการลูกค้าได้อย่างครบถ้วน
              </p>*/}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-white rounded-[32px] p-10 md:p-16 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-[24px] font-[800] text-[#003d7a] mb-4 tracking-widest uppercase">
                PHILOSOPHY
              </h3>
              <div className="w-12 h-1 bg-[#00a8e8] mx-auto mb-8"></div>
              <p className="text-[22px] md:text-[28px] font-[700] text-[#003d7a] italic leading-relaxed max-w-[800px] mx-auto">
                "Must always be the valuable quality IT Solutions & Service Provider"
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "⚡", title: "Fast Response" },
                { icon: "🛡️", title: "Reliable Service" },
                { icon: "🔨", title: "Maintenance" },
                { icon: "👥", title: "Expert Team" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                  <span className="text-[40px] mb-4">{item.icon}</span>
                  <span className="text-[16px] font-[700] text-[#003d7a]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS LINE SECTION */}
      <section id="business" className="py-24 md:py-32 px-6 bg-[#F0F4F8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <div className="text-[14px] font-[700] text-[#00a8e8] mb-4 tracking-widest uppercase">
              ▸ สายธุรกิจ
            </div>
            <h2 className="text-[36px] md:text-[48px] font-[800] text-[#003d7a] mb-6">
              Solution Line DCC
            </h2>
            <p className="text-[18px] text-[#666] max-w-[700px] mx-auto">
              เราครอบคลุมทุกความต้องการด้าน IT ขององค์กรด้วย 9 สายธุรกิจหลัก
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessLines.map((line, i) => (
              <div key={i} className="group bg-white p-10 rounded-[24px] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-[48px] group-hover:scale-110 transition-transform duration-300">{line.icon}</div>
                  <div className="text-[24px] font-[800] text-gray-100 group-hover:text-[#00a8e8]/20 transition-colors">{line.num}</div>
                </div>
                <h3 className="text-[20px] font-[800] text-[#003d7a] mb-4 group-hover:text-[#00a8e8] transition-colors">
                  {line.title}
                </h3>
                <p className="text-[15px] text-[#666] leading-[1.7]">
                  {line.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 px-6" style={{ background: "linear-gradient(135deg, #003d7a 0%, #1a2a4a 100%)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <div className="text-[14px] font-[700] text-[#00a8e8] mb-4 tracking-widest uppercase">
              ▸ บริการ
            </div>
            <h2 className="text-[36px] md:text-[48px] font-[800] text-white mb-6">
              Our Services
            </h2>
            <p className="text-[18px] text-white/70 max-w-[700px] mx-auto">
              เราให้บริการที่ครอบคลุมทุกด้านของ IT เพื่อให้องค์กรของคุณทำงานได้อย่างมีประสิทธิภาพสูงสุด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                <div className="text-[32px] mb-6">{service.icon}</div>
                <h3 className="text-[18px] font-[700] text-white mb-4">{service.title}</h3>
                <p className="text-[14px] text-white/60 leading-[1.6]">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Featured Service */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-[#00a8e8] p-12 md:p-16 text-white flex flex-col justify-center">
              <h3 className="text-[28px] md:text-[36px] font-[800] mb-6 leading-tight">
                บริการดูแลคอมพิวเตอร์รายปี
              </h3>
              <p className="text-[16px] text-white/90 leading-[1.8] mb-8">
                บริการบำรุงรักษาเครื่องคอมพิวเตอร์ในรูปแบบสัญญาบริการรายปี เพื่อให้เครื่องคอมพิวเตอร์ในองค์กรของท่านทำงานได้อย่างเต็มประสิทธิภาพ และพร้อมใช้งานได้ตลอดเวลา
              </p>
              <Link href="/contact" className="w-fit px-8 py-3 bg-white text-[#00a8e8] rounded-full font-[700] hover:bg-gray-100 transition-colors inline-block">
                สอบถามข้อมูลเพิ่มเติม
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-px bg-gray-100">
              {[
                { title: "ตรวจเช็คประจำปี", icon: "📋" },
                { title: "ซ่อมแซมทันที", icon: "⚡" },
                { title: "รายงานสถานะ", icon: "📊" },
                { title: "ทีมผู้เชี่ยวชาญ", icon: "👨‍💻" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 flex flex-col items-center justify-center text-center">
                  <span className="text-[32px] mb-4">{item.icon}</span>
                  <span className="text-[15px] font-[700] text-[#003d7a]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMERS SECTION */}
      <section id="customers" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <div className="text-[14px] font-[700] text-[#00a8e8] mb-4 tracking-widest uppercase">
              ▸ ลูกค้าของเรา
            </div>
            <h2 className="text-[30px] md:text-[48px] font-[800] text-[#003d7a] mb-0">
              Our Customers
            </h2>
            {/* <p className="text-[18px] text-[#666] max-w-[800px] mx-auto">
              แนวทางเชิงสร้างสรรค์ในการประยุกต์ใช้เทคโนโลยีทำให้ Dynamic Computer สามารถส่งมอบระบบ IT Solutions ที่เหมาะสมให้กับธุรกิจหลากหลายประเภท
            </p>*/}
          </div>


        {/*  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {customers.map((c, i) => (
              <div key={i} className="bg-[#F8FAFC] p-8 rounded-2xl text-center hover:bg-[#003d7a] hover:text-white transition-all duration-300 group">
                <div className="text-[40px] mb-4 group-hover:scale-110 transition-transform">{c.icon}</div>
                <div className="text-[14px] font-[700]">{c.title}</div>
              </div>
            ))}
          </div>
          */}

       

          {/* Infinite Marquee Slider */}
        <div className="relative flex overflow-x-hidden pt-0 pb-10">
          <div className="animate-marquee whitespace-nowrap flex">
            {[...customerLogos, ...customerLogos].map((customer, index) => (
              <div 
                key={index} 
                className="mx-8 flex items-center justify-center bg-[#F8FAFC] p-8 rounded-2xl w-[250px] h-[120px] border border-gray-100 hover:border-[#00a8e8] transition-all duration-300"
              >
                <img 
                  src={customer.logo} 
                  alt={customer.name} 
                  className="max-w-full max-h-[120px] object-contain transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

          <div className="bg-[#003d7a] rounded-[32px] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <p className="text-[20px] md:text-[24px] font-[500] leading-[1.8] relative z-10">
              "ไม่ว่าจะเป็น PC, Notebook, Workstations, Server หรือซอฟต์แวร์ที่หลากหลาย Dynamic Computer มีโซลูชันที่เหมาะสมสำหรับทุกความต้องการของคุณ"
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      {/*
      <section id="contact" className="py-24 md:py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <div className="text-[14px] font-[700] text-[#00a8e8] mb-4 tracking-widest uppercase">
              ▸ ติดต่อเรา
            </div>
            <h2 className="text-[36px] md:text-[48px] font-[800] text-[#003d7a] mb-6">
              Contact Us
            </h2>
            <p className="text-[18px] text-[#666]">
              พร้อมให้คำปรึกษาและบริการด้าน IT Solutions ครบวงจร
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[24px] shadow-lg border border-gray-100">
              <div className="text-[24px] mb-6">📍</div>
              <h3 className="text-[18px] font-[800] text-[#003d7a] mb-4">ที่อยู่สำนักงาน</h3>
              <p className="text-[15px] text-[#666] leading-[1.8]">
                8 ซอยสังคมสงเคราะห์ 10 ถนนลาดพร้าว แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ 10230
              </p>
            </div>
            <div className="bg-white p-10 rounded-[24px] shadow-lg border border-gray-100">
              <div className="text-[24px] mb-6">📞</div>
              <h3 className="text-[18px] font-[800] text-[#003d7a] mb-4">โทรศัพท์</h3>
              <p className="text-[15px] text-[#666] leading-[1.8]">
                Call: 0-2933-1500<br />
                
                Service: 0-2933-1900
              </p>
            </div>
            <div className="bg-white p-10 rounded-[24px] shadow-lg border border-gray-100">
              <div className="text-[24px] mb-6">✉️</div>
              <h3 className="text-[18px] font-[800] text-[#003d7a] mb-4">อีเมล</h3>
              <p className="text-[15px] text-[#666] leading-[1.8]">
                lerson@dynamiccomputer.co.th
              </p>
            </div>
          </div>
        </div>
        
      </section>
      */}

      {/* FOOTER */}
      <footer className="py-20 px-6 bg-[#0A1628] text-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white text-[#003d7a] p-1 rounded text-[12px] font-bold w-10 h-10 flex items-center justify-center">DCC</div>
                <div className="font-[800] text-[18px] tracking-tight">DYNAMIC COMPUTER</div>
              </div>
              <p className="text-white/50 text-[14px] leading-[1.8]">
                ผู้ให้บริการ IT Solutions และ Service ครบวงจร
              </p>
            </div>

            <div>
              <h4 className="text-[16px] font-[700] mb-8">สายธุรกิจ</h4>
              <ul className="space-y-4 text-[14px] text-white/50">
                {["Quality IT Products", "Software & Security", "IT Infrastructure", "Turnkey Solution"].map((item, i) => (
                  <li key={i} className="hover:text-[#00a8e8] transition-colors cursor-pointer">• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] font-[700] mb-8">บริการ</h4>
              <ul className="space-y-4 text-[14px] text-white/50">
                {["Rental Service", "Set up & Implement", "Service & Repair", "Preventive Maintenance"].map((item, i) => (
                  <li key={i} className="hover:text-[#00a8e8] transition-colors cursor-pointer">• {item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[16px] font-[700] mb-8">ติดต่อเรา</h4>
              <div className="space-y-4 text-[14px] text-white/50">
                <p>📍 8 ซอยสังคมสงเคราะห์ 10 ลาดพร้าว กรุงเทพฯ</p>
                <p>📞 0-2933-1500-4</p>
                <p>✉️ dcc@dynamiccomputer.co.th</p>
              </div>
            </div>
             
          </div>
         

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[13px]">
            <p>© 2026 DYNAMIC COMPUTER CO.,LTD. All Rights Reserved.</p>
            {/*
            <div className="flex gap-8">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div>
            */}
          </div>
        </div>
      </footer>
    </main>
  );
}
