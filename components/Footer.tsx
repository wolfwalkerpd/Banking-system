import { logoutAccount } from "@/lib/actions/user.acations";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Footer({ user, type = "desktop" }: FooterProps) {
  const router = useRouter();
  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    if (loggedOut) router.push("/sign-in");
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer-name"}>
        <p className=" text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer-email"}>
        <h1 className="text-14 truncate text-gray-600">{user?.firstName}</h1>
        <p className="text-14 font-normal truncate  text-gray-600">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
}

export default Footer;
