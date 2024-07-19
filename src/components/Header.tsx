import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo  */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Tho <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href={"/contact"}>
            <Button> Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
