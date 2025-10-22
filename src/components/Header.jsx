import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

function Header() {
  const today = format(new Date(), "EEEE, MMMM do, yyyy");

  return (
    <div className="flex justify-center flex-col items-center gap-3 mt-7">
      <img className="md:w-[400px]" src={logo} alt="Logo" />
      <p className="text-accent">Journalism Without Fear Or Favour</p>
      <p className="font-semibold">{today}</p>
    </div>
  );
}

export default Header;
