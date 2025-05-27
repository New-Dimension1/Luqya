import { Changa } from 'next/font/google'; // ✅ Fixed import
import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "@/redux/provider";

const changa = Changa({
  weight: ['400', '500', '700'],
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: "لُقيّا",
  description: "مع لُقيّا، أرسل دعواتك بكل سهولة واحتراف، وتابع تأكيد الحضور مباشرة بدون روابط — تفاعل سريع ومباشر عبر واتساب.",
  keywords: [
    "لُقيّا",
    "دعوات واتساب",
    "تأكيد حضور",
    "إرسال دعوات",
    "تنظيم مناسبات",
    "دعوة رقمية",
    "بدون روابط",
    "QR للضيوف",
    "متابعة الحضور",
    "دعوات تلقائية",
    "الرد على الضيوف",
    "لقيا سكانر",
    "دعوات الأعراس",
    "تطبيق مناسبات",
    "مناسبات خاصة"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={changa.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
