import MobileNavbar from "@/components/MobileNavbar";
import SideBar from "@/components/SideBar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstname: 'javad', lastname:'samadi'}

  return (
    <main className=" flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col"> 
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="Logo" />
          <div>
            <MobileNavbar user={loggedIn} /> 
          </div>
        </div>
      {children}
      </div>
    </main>
  );
}
