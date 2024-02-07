import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jerome Blog",
  description:
    "Những câu chuyện về cuộc sống, công nghệ và những điều thú vị khác của Nguyễn Tố Bình",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <NavBar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
