"useClient"

import { Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100","200","300","400","500",
    "600","700","800","900"
  ],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});




import NavBar from "@/components/NavBar/NavBar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${poppins.variable} font-sans`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
