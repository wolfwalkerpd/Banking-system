import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavbar = ({ user }: MobileNavProps) => {
  return (
    <section className=" w-fill max-w-[240px]">
      <Sheet>
        <SheetTrigger>
            <Image src="/icons/hamburger.svg"
            width={30}
            height={30} 
            alt="menu"
            className="cursor-pointer"
            />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
