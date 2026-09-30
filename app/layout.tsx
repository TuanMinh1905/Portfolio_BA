import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phạm Tuấn Minh – Business Analyst Portfolio",
  description:
    "Portfolio của Phạm Tuấn Minh – Business Analyst với nền tảng IT, kinh nghiệm phân tích yêu cầu, thiết kế quy trình và làm việc với stakeholders trong các dự án thực tế.",
  keywords: [
    "Phạm Tuấn Minh",
    "Business Analyst",
    "BA Portfolio",
    "Requirements Analysis",
    "Process Design",
    "System Analysis",
    "Vietnam",
    "HCMUTE",
    "IT Business Analyst",
  ],
  authors: [{ name: "Phạm Tuấn Minh" }],
  openGraph: {
    title: "Phạm Tuấn Minh – Business Analyst",
    description:
      "Business Analyst với nền tảng IT vững chắc — kết nối nghiệp vụ và công nghệ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-[#080c14] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
