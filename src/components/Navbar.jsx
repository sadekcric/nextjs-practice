"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {
      element: "Home",
      path: "/Home",
    },
    {
      element: "About",
      path: "/About",
    },
    {
      element: "Services",
      path: "/Services",
    },
  ];

  const handler = () => {
    router.push("/Login");
  };

  return (
    <div className="flex justify-between items-center px-10 mb-10">
      <h3 className="text-3xl">Practice Project</h3>
      <ul className="flex justify-between gap-5 items-center">
        {links.map((link) => (
          <li
            className={`${pathName === link.path ? "text-red-500 border-2 border-purple-500 py-2 px-4 rounded-lg" : "px-4 py-2 "}`}
            key={link.path}
          >
            <Link href={link.path}>{link.element}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handler}>login</button>
    </div>
  );
};

export default Navbar;
