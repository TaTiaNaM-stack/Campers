"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({
  href,
  children,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = href === "/" 
    ? pathname === href 
    : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={isActive ? styles.active : styles.link}
    >
      {children}
    </Link>
  );
}