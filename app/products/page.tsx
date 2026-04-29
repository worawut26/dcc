"use client";
import Navbar from "../../components/Navbar";

const brands = [
  
  { name: "Acer", logo: "https://img2.pic.in.th/Acer.png" },
  { name: "ASUS", logo: "https://img2.pic.in.th/asusc25f1a7c2b1a5767.png" },
  { name: "DELL", logo: "https://img1.pic.in.th/images/Dell_Logo.png" },
  { name: "MSI", logo: "https://img1.pic.in.th/images/Msi_Logo.png" },
  { name: "Gigabyte", logo: "https://img2.pic.in.th/Gigabyte.png" },
  { name: "HP", logo: "https://img2.pic.in.th/HP-Logo.png" },
  { name: "Lenovo", logo: "https://img1.pic.in.th/images/Kodak.png" },
  { name: "Logitech", logo: "https://img1.pic.in.th/images/Logitech.png" },
  { name: "BenQ", logo: "https://img2.pic.in.th/BenQ-Logo.png" },
  { name: "LG", logo: "https://img2.pic.in.th/LG14b3e33c3ba7272a.png" },
  { name: "Supermicro", logo: "https://img1.pic.in.th/images/Supermicro.png" },
  { name: "Zowie", logo: "https://img1.pic.in.th/images/Zowie.png" },
  { name: "Dahua", logo: "https://img1.pic.in.th/images/Dahua.png" },
  { name: "hikvision", logo: "https://img1.pic.in.th/images/Hikvision.png" },
  { name: "Adobe", logo: "https://img2.pic.in.th/Adobe.png" },
  { name: "Autodesk", logo: "https://img1.pic.in.th/images/Autodesk.png" },
  { name: "Dell", logo: "https://img2.pic.in.th/Deli.png" },
  { name: "APC", logo: "https://img2.pic.in.th/apc.png" },
  { name: "Zircon", logo: "https://img2.pic.in.th/Zircon.png" },
  { name: "Nvidia", logo: "https://img2.pic.in.th/NVIDIA.png" },
  { name: "AMD", logo: "https://img1.pic.in.th/images/amd.png" },
  { name: "Microsoft", logo: "https://img1.pic.in.th/images/Microsoft.png" },
  { name: "epson", logo: "https://img2.pic.in.th/Epson.png" },
  { name: "Kingston", logo: "https://img2.pic.in.th/kingston.png" },
  { name: "Zebra", logo: "https://img2.pic.in.th/ZBRA.png" },
  { name: "Ricoh", logo: "https://img2.pic.in.th/Ricoh.png" },
  { name: "Fujitsu", logo: "https://img1.pic.in.th/images/Fujits.png" },
  { name: "Kodak", logo: "https://img1.pic.in.th/images/Kodak.png" },
  { name: "WD", logo: "https://img1.pic.in.th/images/WD.png" },
  { name: "QNAP", logo: "https://img1.pic.in.th/images/QNAP.png" },
  { name: "Synology", logo: "https://img2.pic.in.th/synology.png" },
  { name: "Wacom", logo: "https://img2.pic.in.th/Wacom.png" },
  { name: "Canon", logo: "https://img2.pic.in.th/Canon.png" },
  { name: "Manhattan", logo: "https://img2.pic.in.th/mana4a02a3cc700f9f4.png" },
  { name: "Cisco", logo: "https://img1.pic.in.th/images/Cisco.png" },
  { name: "bitdefender", logo: "https://img1.pic.in.th/images/Bitdefender.png" },
  { name: "eset", logo: "https://img2.pic.in.th/ESET.png" },
];

export default function ProductsPage() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const brandName = target.alt || "Brand";
    target.src = `https://via.placeholder.com/150?text=${encodeURIComponent(brandName)}`;
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-[#F0F4F8] to-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[48px] md:text-[64px] font-[800] text-[#003d7a] mb-6 leading-tight">
            สินค้าและแบรนด์ชั้นนำ
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#666] max-w-[1000px] mx-auto leading-[1.6]">
            เราเป็นตัวแทนจำหน่ายและพันธมิตรกับแบรนด์ไอทีชั้นนำระดับโลก เพื่อส่งมอบโซลูชั่นที่ดีที่สุดให้กับคุณ
          </p>
        </div>
      </section>

      {/* BRANDS GRID */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
            {brands.map((brand, i) => (
              <div 
                key={i} 
                className="group flex items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00a8e8]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[3/2] flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                    onError={handleImageError}
                  />
                </div>
              </div>
            ))}
          </div>
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
