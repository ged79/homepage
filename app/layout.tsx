import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

const siteDescription =
  "충북 영동의 웹·앱·AI 개발 스튜디오 코넥서스. 홈페이지, 쇼핑몰, 모바일 앱, AI 솔루션을 기획부터 디자인·개발·운영까지 직접 만듭니다.";

export const metadata = {
  metadataBase: new URL("https://conexus.co.kr"),
  title: {
    default: "코넥서스 — 아이디어를 제품으로 만듭니다",
    template: "%s | 코넥서스",
  },
  description: siteDescription,
  keywords: [
    "코넥서스",
    "Connexus",
    "웹 개발",
    "앱 개발",
    "AI 솔루션",
    "외주 개발",
    "홈페이지 제작",
    "이커머스",
    "모바일 앱 개발",
  ],
  manifest: "/manifest.json",
  themeColor: "#070708",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "코넥서스",
  },
  openGraph: {
    title: "코넥서스 — 아이디어를 제품으로 만듭니다",
    description: siteDescription,
    url: "https://conexus.co.kr",
    siteName: "코넥서스",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "코넥서스 — 아이디어를 제품으로 만듭니다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "코넥서스 — 아이디어를 제품으로 만듭니다",
    description: siteDescription,
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#070708" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js');
              });
            }
          `
        }} />
      </head>
      <body
        className={`${inter.variable} ${nacelle.variable} bg-[#06060c] font-inter text-base text-slate-200 antialiased`}
        style={{
          fontFamily:
            "'Pretendard Variable', 'Pretendard', var(--font-inter), system-ui, sans-serif",
        }}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
