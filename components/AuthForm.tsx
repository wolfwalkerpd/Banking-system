"use client";

import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
          <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="horizon logo"
              width={34}
              height={34}
              className="size-[24px] max-xl:size-14"
            />
            <h1 className=" text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-500">
              {user
                ? "Link Account"
                : type === "sign-in"
                ? "Sign In"
                : "Sign Up"}
              <p className=" text-16 font-normal text-gray-600">
                {user
                  ? "Link you account to get started"
                  : "please enter your details"}
              </p>
            </h1>
          </div>
        </header>
        {user ? (
          <div className=" flex flex-col gap-4">{/* plaid link */}</div>
        ) : (
          <>Form</>
        )}
      </section>
    </div>
  );
};

export default AuthForm;
