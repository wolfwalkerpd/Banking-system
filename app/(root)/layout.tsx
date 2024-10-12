import SideBar from "@/components/SideBar";
import type { Metadata } from "next";
import localFont from "next/font/local";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstname: 'javad', lastname:'samadi'}

  return (
    <main className=" flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      {children}
    </main>
  );
}
