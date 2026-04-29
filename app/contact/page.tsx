"use client";

import { useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: "📍",
    title: "ที่อยู่สำนักงาน",
    content: "8 ซอยสังคมสงเคราะห์ 10 ถนนลาดพร้าว แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ 10230"
  },
  {
    icon: "📞",
    title: "โทรศัพท์",
    content: "โทร: 0-2933-1500\nFax: 0-2933-1500\nService: 0-2933-1900-107"
  },
  {
    icon: "✉️",
    title: "อีเมล",
    content: "lerson@dynamiccomputer.co.th"
  },
  {
    icon: "🕐",
    title: "เวลาทำการ",
    content: "จันทร์–ศุกร์: 08:30–17:30 น.\n เสาร์: 08.30-12.00 น."
  }
];

const departments = [
  {
    name: "Lerson Pueksaman",
    position: "Project Manager",
    email: "lerson@dynamiccomputer.co.th",
    phone: "089-986-9592"
  },
  {
    name: "Watchara Sarika",
    position: "Account  Manager",
    email: "watchara@dynamiccomputer.co.th",
    phone: "090-101-5581"
  },
  {
    name: "Thienthlawin Eakthienru",
    position: "Project Engineer",
    email: "ttw@dynamiccomputer.co.th",
    phone: "092-726-6886"
  },
  {
    name: "Worawut Nimmananukroh",
    position: "Technical Sales Support",
    email: "worawut.n@dynamiccomputer.co.th",
    phone: "092-453-4646"
  },
  {
    name: "Thongchai Suwannapong",
    position: "Service Manager",
    email: "thongchai@dynamiccomputer.co.th",
    phone: "02-933-1500"
  },
  {
    name: "Pattanawit Teson",
    position: "IT Support",
    email: "pattanawit.t@dynamiccomputer.co.th",
    phone: "02-933-1500"
  }
];

export default function ContactPage() {
  // ประกาศ useRef สำหรับ form
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ตรวจสอบว่า formRef ถูกเชื่อมต่อแล้ว
    if (!formRef.current) {
      console.error("Form reference not found");
      return;
    }

    setStatus("sending");

    // --- การตั้งค่า EmailJS ---
    // คุณต้องสมัครสมาชิกที่ emailjs.com และนำค่าเหล่านี้มาใส่
    const SERVICE_ID = "service_gwi8gqk" ; // เช่น service_xxxx
    const TEMPLATE_ID = "template_lcrmfmq" ; // เช่น template_xxxx
    const PUBLIC_KEY = "ekzBf1Ynen_DXq9AV" ; // เช่น user_xxxx หรือ Public Key จาก Account
    
    // ส่งข้อมูลผ่าน EmailJS
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log("Email successfully sent!", result.text);
          setStatus("success");
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
          setTimeout(() => setStatus("idle"), 5000);
      }, (error) => {
          console.error("Failed to send email.", error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <main className="bg-[#FAFBFC] text-[#333]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #1B3A6B 50%, #0D2545 100%)",
        }}>
        
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663589777581/LzXtMoBurqWYCKUeAdRL3f/hero-bg-YrCrmGebbYzbBfjU3XbMfL.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#1B3A6B]/70 to-transparent" />

        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6 py-20">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-[#00a8e8] rounded-full animate-pulse"></span>
              <span className="text-white text-[13px] font-[500]">
                ติดต่อเรา — เราพร้อมให้บริการ 24/7
              </span>
            </div>
            
            <h1 className="text-[48px] md:text-[64px] font-[800] text-white leading-[1.1] mb-6 tracking-tight">
              CONTACT US<br />
            </h1>

            <p className="text-[18px] text-white/80 mb-8 leading-[1.8] max-w-[800px]">
              ติดต่อเราเพื่อปรึกษาเรื่องบริการ IT Solutions ที่เหมาะสมกับความต้องการของบริษัทคุณ
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="py-24 md:py-32 px-6 bg-[#FAFBFC]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-white p-10 rounded-[24px] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-[40px] mb-6">{info.icon}</div>
                <h3 className="text-[18px] font-[800] text-[#003d7a] mb-4">{info.title}</h3>
                <p className="text-[15px] text-[#666] leading-[1.8] whitespace-pre-line">
                  {info.content}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[24px] overflow-hidden shadow-2xl h-[400px] bg-gray-200 mb-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.7203168749234!2d100.60960449999999!3d13.795726400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29dead332e067%3A0xd81a2f47c54884ba!2z4Lia4LiI4LiBLiDguYTguJTguJnguLLguKHguLTguIQg4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmM!5e0!3m2!1sth!2sth!4v1776935279947!5m2!1sth!2sth" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

            {/* DEPARTMENT CONTACTS SECTION */}
      <section className="py-24 md:py-32 px-6 bg-[#F0F4F8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[36px] md:text-[48px] font-[800] text-[#003d7a] mb-6">
              ติดต่อ
            </h2>
            <p className="text-[18px] text-[#666] max-w-[700px] mx-auto">
              สามารถติดต่อเจ้าหน้าที่ของแต่ละแผนกได้โดยตรง
            </p>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, i) => (
              <div key={i} className="bg-white p-10 rounded-[24px] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-[20px] font-[800] text-[#003d7a] mb-2">{dept.name}</h3>
                <p className="text-[14px] font-[600] text-[#00a8e8] mb-6">{dept.position}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[16px]">✉️</span>
                    <a href={`mailto:${dept.email}`} className="text-[14px] text-[#666] hover:text-[#00a8e8] transition-colors">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[16px]">📞</span>
                    <a href={`tel:${dept.phone}`} className="text-[14px] text-[#666] hover:text-[#00a8e8] transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[36px] md:text-[48px] font-[800] text-[#003d7a] mb-6">
              ส่งข้อความถึงเรา
            </h2>
            <p className="text-[18px] text-[#666] max-w-[700px] mx-auto">
              กรุณากรอกแบบฟอร์มด้านล่าง เราจะติดต่อกลับไปหาคุณโดยเร็วที่สุด
            </p>
          </div>

          {/* เชื่อมต่อ ref กับ formRef */}
          <form ref={formRef} onSubmit={handleSubmit} className="bg-[#F8FAFC] p-10 md:p-16 rounded-[24px] border border-gray-200">
            {status === "success" && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-[16px]">
                <p className="text-green-700 font-[600] text-center">✓ ขอบคุณที่ติดต่อเรา ข้อความของคุณถูกส่งไปยังเจ้าหน้าที่เรียบร้อยแล้ว</p>
              </div>
            )}
            {status === "error" && (
              <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-[16px]">
                <p className="text-red-700 font-[600] text-center">✕ เกิดข้อผิดพลาดในการส่งข้อความ กรุณาตรวจสอบการตั้งค่า API Key หรือติดต่อเราผ่านช่องทางอื่น</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-[14px] font-[700] text-[#003d7a] mb-3">
                  ชื่อ-นามสกุล *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20 transition-all"
                  placeholder="กรุณากรอกชื่อของคุณ"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[700] text-[#003d7a] mb-3">
                  อีเมล *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20 transition-all"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-[14px] font-[700] text-[#003d7a] mb-3">
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20 transition-all"
                  placeholder="0-XXXX-XXXXX"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[700] text-[#003d7a] mb-3">
                  หัวเรื่อง *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20 transition-all"
                  placeholder="เรื่องที่ต้องการปรึกษา"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-[14px] font-[700] text-[#003d7a] mb-3">
                ข้อความ *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20 transition-all resize-none"
                placeholder="กรุณากรอกข้อความของคุณ..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full px-8 py-4 bg-[#00a8e8] text-white rounded-full font-[700] transition-all shadow-lg shadow-blue-500/20 ${status === "sending" ? "opacity-70 cursor-not-allowed" : "hover:bg-[#0088cc] hover:-translate-y-1"}`}
            >
              {status === "sending" ? "กำลังส่งข้อความ..." : "ส่งข้อความ"}
            </button>
          </form>
        </div>
      </section>



         

      {/* FOOTER */}
      <footer className="py-20 px-6 bg-[#0A1628] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center">
            <p className="text-white/50 text-[14px]">
              © 2026 DYNAMIC COMPUTER CO.,LTD. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
