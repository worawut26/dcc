"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

const jobOpenings = [
  {
    id: 1,
    title: "IT Support Technician",
    department: "Service Department",
    location: "Bangkok",
    type: "Full-time",
    description: "เจ้าหน้าที่ Outsource IT ประจำที่โรงพยาบาลรามคำแหง",
    requirements: [
      "เพศชาย อายุไม่เกิน 26 ปี",
      "จบ ปวช. ปวส. ปริญญาตรี ทางด้านคอมพิวเตอร์หรือสาขาที่เกี่ยวข้อง",
      "สามารถแก้ปัญหาด้านเครือข่ายและฮาร์ดแวร์เบื้องต้นได้",
      "สามารถทำงานนอกเหนือเวลาทำงานปกติได้",
      "มีทักษะการสื่อสารที่ดี"
    ],
    salary: "ค่าตอบแทนเพิ่มพิเศษและสวัสดิการต่างๆ ได้แก่ สวัสดิการด้านประกันสังคม กองทุนเงินทดแทนเลี้ยงชีพ เงินช่วยเหลือสมรส เงินสูญเสียบุคคลในครอบครัว เงินกู้ฉุกเฉิน อื่นๆ"
    
  },
  /* 
  {
    id: 2,
    title: "Sales Executive",
    department: "Business Solutions Department",
    location: "Bangkok",
    type: "Full-time",
    description: "ค้นหา Sales Executive ที่มีความสามารถในการขายและการสร้างสัมพันธ์กับลูกค้า",
    requirements: [
      "ประสบการณ์ในการขาย IT Solutions อย่างน้อย 3 ปี",
      "มีความรู้เกี่ยวกับผลิตภัณฑ์ IT",
      "มีทักษะการเจรจาต่อรองที่ดี",
      "สามารถทำงานเป็นทีมและเป็นอิสระได้"
    ],
    salary: "18,000 - 25,000 บาท"
  },
  {
    id: 3,
    title: "System Administrator",
    department: "IT Infrastructure",
    location: "Bangkok",
    type: "Full-time",
    description: "ค้นหา System Administrator ที่มีความเชี่ยวชาญในการจัดการระบบเซิร์ฟเวอร์และเครือข่าย",
    requirements: [
      "ประสบการณ์ในการจัดการระบบ Windows Server อย่างน้อย 3 ปี",
      "มีความรู้เกี่ยวกับการจัดการเครือข่าย (Network Management)",
      "มีความรู้เกี่ยวกับ Active Directory และ Group Policy",
      "มีใบรับรอง CompTIA A+ หรือ Microsoft Certified ถือเป็นข้อดี"
    ],
    salary: "20,000 - 28,000 บาท"
  },*/
 
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <main className="bg-white text-[#333]">
      <Navbar />

      {/* Spacing for navbar */}
      <div className="h-[72px] md:h-[104px]" />

      {/* HERO SECTION */}
      <section className="relative min-h-[500px] flex flex-col justify-center items-start px-6 py-20 overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, #003d7a 0%, #1a2a4a 100%)",
        }}>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a8e8] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0052cc] rounded-full blur-3xl"></div>
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-careers" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-careers)" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <div className="max-w-[600px]">
            <h1 className="text-[48px] md:text-[64px] font-[700] text-white leading-[1.1] mb-6">
              เข้าร่วมทีมของเรา
            </h1>

            <p className="text-[16px] md:text-[18px] text-white/80 mb-8 leading-[1.6]">
              ค้นหาโอกาสการทำงานที่ดีที่สุดกับ Dynamic Computer
            </p>

            <p className="text-[14px] text-white/70 leading-[1.6] max-w-[700px]">
              เรากำลังมองหาบุคคลที่มีความสามารถและมีความหลงใหลในการให้บริการลูกค้า เพื่อเข้าร่วมทีมของเรา
            </p>
          </div>
        </div>
      </section>

      {/* JOBS SECTION */}
      <section className="py-20 md:py-32 px-6 bg-[#f7f8fa]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[14px] font-[600] text-[#00a8e8] mb-4">
              ▸ ตำแหน่งงานว่าง
            </div>
            <h2 className="text-[32px] md:text-[40px] font-[700] text-[#003d7a] mb-4">
              Job Openings
            </h2>
            <div className="w-[60px] h-[4px] bg-[#00a8e8] mx-auto mb-6"></div>
            <p className="text-[16px] text-[#666] max-w-[600px] mx-auto">
              เราเสนอโอกาสการทำงานที่มีความท้าทายและการพัฒนาอาชีพที่ดี
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job List */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job.id)}
                    className={`w-full text-left p-6 rounded-xl transition-all ${
                      selectedJob === job.id
                        ? "bg-[#003d7a] text-white shadow-lg"
                        : "bg-white border border-[#e5e7eb] hover:border-[#003d7a] hover:shadow-md"
                    }`}
                  >
                    <h3 className={`font-[700] mb-2 ${selectedJob === job.id ? "text-white" : "text-[#003d7a]"}`}>
                      {job.title}
                    </h3>
                    <p className={`text-[13px] ${selectedJob === job.id ? "text-white/80" : "text-[#666]"}`}>
                      {job.department}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2">
              {selectedJob ? (
                (() => {
                  const job = jobOpenings.find(j => j.id === selectedJob);
                  return (
                    <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-lg">
                      <div className="mb-6">
                        <h2 className="text-[28px] font-[700] text-[#003d7a] mb-2">
                          {job?.title}
                        </h2>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-block bg-[#e8f0ff] text-[#003d7a] px-4 py-2 rounded-full text-[13px] font-[600]">
                            {job?.department}
                          </span>
                          <span className="inline-block bg-[#e8f0ff] text-[#003d7a] px-4 py-2 rounded-full text-[13px] font-[600]">
                            📍 {job?.location}
                          </span>
                          <span className="inline-block bg-[#e8f0ff] text-[#003d7a] px-4 py-2 rounded-full text-[13px] font-[600]">
                            {job?.type}
                          </span>
                        </div>
                      </div>

                      <div className="mb-8 pb-8 border-b border-[#e5e7eb]">
                        <p className="text-[15px] text-[#666] leading-[1.8]">
                          {job?.description}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-[18px] font-[700] text-[#003d7a] mb-4">
                          คุณสมบัติที่ต้องการ
                        </h3>
                        <ul className="space-y-3">
                          {job?.requirements.map((req, i) => (
                            <li key={i} className="flex gap-3 text-[14px] text-[#666]">
                              <span className="text-[#00a8e8] font-bold">✓</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8 pb-8 border-b border-[#e5e7eb]">
                        <h3 className="text-[18px] font-[700] text-[#003d7a] mb-4">
                          สวัสดิการ
                        </h3>
                        <p className="text-[16px] font-[600] text-[#00a8e8]">
                          {job?.salary}
                        </p>
                      </div>
                      {/*
                      <button className="w-full bg-[#003d7a] text-white py-4 rounded-xl font-[600] hover:bg-[#0052cc] transition">
                        สมัครตำแหน่งนี้
                      </button>
                      */}
                    </div>
                  );
                })()
              ) : (
                <div className="bg-white rounded-2xl p-12 border border-[#e5e7eb] text-center">
                  <p className="text-[16px] text-[#999]">
                    กรุณาเลือกตำแหน่งงานเพื่อดูรายละเอียด
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN US SECTION */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-[700] text-[#003d7a] mb-4">
              ทำไมต้องเข้าร่วมทีมของเรา?
            </h2>
            <div className="w-[60px] h-[4px] bg-[#00a8e8] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎯",
                title: "การพัฒนาอาชีพ",
                desc: "เรามอบโอกาสในการพัฒนาทักษะและความรู้อย่างต่อเนื่อง"
              },
              {
                icon: "👥",
                title: "ทีมมืออาชีพ",
                desc: "ทำงานกับผู้เชี่ยวชาญที่มีประสบการณ์ในอุตสาหกรรม IT"
              },
              {
                icon: "💰",
                title: "สวัสดิการที่ดี",
                desc: "เงินเดือนที่ยุติธรรมและสวัสดิการครอบครัวที่ครบถ้วน"
              },
              {
                icon: "🌟",
                title: "สภาพแวดล้อมที่ดี",
                desc: "สำนักงานที่สะอาดและมีอากาศที่ดีต่อการทำงาน"
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#f7f8fa] rounded-2xl p-8 text-center hover:shadow-lg transition">
                <div className="text-[48px] mb-4">{item.icon}</div>
                <h3 className="text-[18px] font-[700] text-[#003d7a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#666] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-32 px-6 bg-[#f7f8fa]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] font-[700] text-[#003d7a] mb-6">
            ไม่พบตำแหน่งที่เหมาะสม?
          </h2>
          <p className="text-[16px] text-[#666] mb-8 leading-[1.8]">
            เรายินดีรับ CV ของคุณเพื่อพิจารณาสำหรับตำแหน่งอื่นๆ ในอนาคต ติดต่อเราได้ที่อีเมลด้านล่าง
          </p>
          <a 
            href="mailto:dcc@dynamiccomputer.co.th"
            className="inline-block bg-[#003d7a] text-white px-8 py-4 rounded-full font-[600] hover:bg-[#0052cc] transition"
          >
            ส่ง CV ของคุณ
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{ background: "linear-gradient(135deg, #003d7a 0%, #1a2a4a 100%)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <div className="text-[16px] font-[700] text-white mb-2">DCC</div>
              <p className="text-[12px] text-white/70">
                ผู้ให้บริการ IT Solutions และ Service ครบวงจร 
              </p>
            </div>

            <div>
              <h4 className="text-[14px] font-[700] text-white mb-4">สายธุรกิจ</h4>
              <ul className="space-y-2">
                {["Quality IT Products", "Software & Security", "IT Infrastructure", "Turnkey Solution"].map((item, i) => (
                  <li key={i} className="text-[12px] text-white/70 hover:text-white transition">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-[700] text-white mb-4">บริการ</h4>
              <ul className="space-y-2">
                {["Rental Service", "Set up & Implement", "Service & Repair", "Preventive Maintenance"].map((item, i) => (
                  <li key={i} className="text-[12px] text-white/70 hover:text-white transition">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-[700] text-white mb-4">ติดต่อเรา</h4>
              <p className="text-[12px] text-white/70 mb-2">
                📍 8 ซอยสังคมสงเคราะห์ 10 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ
              </p>
              <p className="text-[12px] text-white/70 mb-2">
                📞 <a href="tel:029331500" className="text-[#00a8e8] hover:underline">0-2933-1500</a>
              </p>
              <p className="text-[12px] text-white/70">
                ✉️ <a href="mailto:hr@dynamiccomputer.co.th" className="text-[#00a8e8] hover:underline">dcc@dynamiccomputer.co.th</a>
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[12px] text-white/60">
              © 2026 DYNAMIC COMPUTER CO.,LTD. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
