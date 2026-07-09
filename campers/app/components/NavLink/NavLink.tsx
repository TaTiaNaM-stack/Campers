"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import css from "./NavLink.module.css";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({
  href,
  children,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={isActive ? css.active : css.link}
    >
      {children}
    </Link>
  );
}