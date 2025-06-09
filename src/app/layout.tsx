import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dovepeak Institute of Technology",
  description: "Learn IT with DIT - Hybrid Web Development Courses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
