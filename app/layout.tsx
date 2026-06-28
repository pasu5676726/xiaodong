import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "刘小东 | 艺术作品展",
  description:
    "刘小东艺术作品单页展示：现实现场、人物肖像、迁徙经验与绘画项目。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
