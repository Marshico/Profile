import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reza Boostani | Product Manager & Full Stack Developer",
  description: "Product Manager and Full Stack Developer specializing in EV charging solutions and SaaS platforms. Experienced in product strategy, development, and innovation.",
  keywords: [
    "Reza Boostani",
    "Product Manager",
    "EV Charging",
    "SaaS",
    "Full Stack Developer",
    "Product Owner",
    "Watt Share",
    "Ivy Charging",
    "ThunderVolt",
    "McMaster University",
    "Product Strategy",
    "Agile",
    "Scrum",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Azure",
    "Toronto Product Manager"
  ],
  authors: [{ name: "Reza Boostani" }],
  creator: "Reza Boostani",
  publisher: "Reza Boostani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rezaboostani.com",
    title: "Reza Boostani | Product Manager & Full Stack Developer",
    description: "Product Manager specializing in EV charging solutions and SaaS platforms. Experienced in product strategy, full-stack development, and agile methodologies.",
    siteName: "Reza Boostani Portfolio",
    images: [
      {
        url: "https://wattshare-images.s3.us-east-1.amazonaws.com/IMG_20230428_220636_803.jpg",
        width: 800,
        height: 600,
        alt: "Reza Boostani - Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Boostani | Product Manager & Full Stack Developer",
    description: "Product Manager specializing in EV charging solutions and SaaS platforms. Experienced in product strategy, full-stack development, and agile methodologies.",
    images: ["https://wattshare-images.s3.us-east-1.amazonaws.com/IMG_20230428_220636_803.jpg"],
    creator: "@rezaboostani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://rezaboostani.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
