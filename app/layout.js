
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "JKAdvocates",
  description: "J. K. Lampart & Co advocates website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
