import React from "react";

function Footer ({ user, type = 'desktop' }: FooterProps) {
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer-name"}>
        <p className=" text-xl font-bold text-gray-700">{user.name}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer-email"}>
        <h1 className="text-14 truncate font-normal text-gray-600">
          {user.name}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
