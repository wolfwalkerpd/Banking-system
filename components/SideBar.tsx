"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className=" sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="horizon logo"
            width={24}
            height={24}
            className="max-xl:w-14 max-xl:h-14 "
          />
          <h1 className=" sidebar-logo text-black-1">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link ", { "bg-bank-gradient": isActive })}>
              <div className="relative size-6">
                <Image src={item.imgURL} width={24} height={24} alt={item.label} className={cn({'brightness-[3] invert-0' : isActive})} />
              </div>
              <p className={cn('sidebar-label',{
                '!text-white':isActive
              })}>
                {item.label}
              </p>
            </Link>
          );
        })}
        <PlaidLink user={user} />
      </nav>
      <Footer user={user} type='mobile' />
    </section>
  );
};

export default SideBar;
