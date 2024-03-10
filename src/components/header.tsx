import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="container m-auto bg-gray-500 w-full  py-6 px-6">
      <ul className="flex justify-between gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
