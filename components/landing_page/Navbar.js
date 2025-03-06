"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image src="/logo.png" alt="logo" width={100} height={50}  />

      <div className="links">
        <Link href="/">
          <button type="button">Login</button>
        </Link>
        <Link href="/">
          <button type="button"> Get Started</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
