import {ReactNode} from "react";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"
const Layout = ({children}: {children:ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Analytics />
    </div>
  )
}

export default Layout