import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image src="/logo.png" alt="logo" width={100} height={50}  />

      <div className="links">
        <Link href="/login">
          <button type="button">Login</button>
        </Link>
        <Link href="/signup">
          <button type="button"> Get Started</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
