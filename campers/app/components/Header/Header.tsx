'use client';

import css from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../NavLink/NavLink";

export default function Header() {
    return (
        <header className={css.header}>
            <Link href="/" className={css.logoLink}>
                <Image
                    src="/logo.png"
                    alt="TravelTrucks"
                    width={136}
                    height={16}
                />
            </Link>
            <nav className={css.nav}>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/campers">View Now</NavLink>
            </nav>
        </header>
    );
}
