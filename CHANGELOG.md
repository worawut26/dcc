# Changelog

## 2026-05-13

### เพิ่ม HTTPS สำหรับ Development
- เพิ่ม script `dev:https` ใน `package.json`
- รันด้วย `npm run dev:https` → เปิด `https://localhost:3000`
- ใช้ `--experimental-https` flag ของ Next.js (auto-generate self-signed cert)

### สร้าง SSL Certificate Signing Request (CSR)
- สร้างโฟลเดอร์ `certificates/` พร้อมไฟล์ต่อไปนี้:
  - `openssl.cnf` — config สำหรับ OpenSSL (CN, O, C, SAN)
  - `generate-csr.ps1` — script สำหรับสร้าง key + CSR ใหม่
  - `dynamiccomputer.co.th.key` — Private Key (RSA 2048-bit) **ห้ามแชร์**
  - `dynamiccomputer.co.th.csr` — ไฟล์ที่ยื่นให้ CA
- ข้อมูลใน CSR:
  - Domain: `dynamiccomputer.co.th`, `www.dynamiccomputer.co.th`
  - Organization: Dynamic Computer Co., Ltd.
  - Country/State/City: TH / Bangkok / Bangkok
- อัปเดต `.gitignore` เพิ่ม `*.key` และ `*.csr` ป้องกัน commit ข้อมูลลับ

### ขั้นตอนถัดไป (SSL Production)
1. นำ `certificates/dynamiccomputer.co.th.csr` ยื่นกับ CA (เช่น DigiCert, ZeroSSL)
2. CA จะส่ง certificate กลับมาเป็น `.crt` / `.pem`
3. นำ `.key` + `.crt` ไปตั้งค่าบน Web Server (Nginx, Apache, หรือ hosting)
