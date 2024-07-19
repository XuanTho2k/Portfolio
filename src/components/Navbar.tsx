"use client";
import { links } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => {
        return (
          <Link
            href={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
            key={idx}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
