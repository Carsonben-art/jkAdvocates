
import "./globals.css";


export const metadata = {
  title: "JKAdvocates",
  description: "J. K. Lampart & Co advocates website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
