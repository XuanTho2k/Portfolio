import { socials } from "@/constants/socials";
import Link from "next/link";
import React from "react";

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((icon, idx) => (
        <Link key={idx} href={icon.path} className={iconStyles}>
          {icon.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
