import type { Metadata } from "next";
import { Inter, Poppins, Barlow } from "next/font/google";
import { SessionWrapper } from "./_providers/SessionProvider";
import { ToastContainer } from "react-toastify";
import 'swiper/css';
import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/rsuite.min.css";
import "./globals.css";
import Providers from "./_providers/Providers";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', 
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Specify weights you need
  variable: "--font-poppins",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600","700", "800", "900"],
  variable: "--font-barlow",
});


export const metadata: Metadata = {
  title: "Tracklution",
  description: "Tracklution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="lg:text-[1vw]">
      <head>
        <script async src="/js/index.js"></script>
        {/* <script async src="/js/script-dynamic.js"></script> */}
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${barlow.variable} font-inter antialiased bg-white text-black h-dvh overflow-hidden`}
      >
          <SessionWrapper>
            <Providers>
                {children}
                <ToastContainer/>
            </Providers>
          </SessionWrapper>
          {/* <script async src="/js/script-dynamic.js"></script> */}
      </body>
    </html>
  );
}
