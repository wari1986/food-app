import { useState } from 'react';
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";


const Toggle = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      <div className="">
        {/* Toogle button */}
        <div
          onClick={handleClick}
          className=""
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* <div className="invisible space-y-0 md:my-12 lg:text-sm lg:space-y-4 lg:my-12 text-[#666666] md:visible lg:visible text-right">
          <p className="active:text-[#333333] text-bold">
            <Link href="/">Home</Link>
          </p>
          <p className="active:text-[#333333] text-bold">
            <Link href="/portfolio">Portfolio</Link>
          </p>
          <div className="flex justify-end">
            <p className="active:text-[#333333] text-bold">
              <Link href="/contactForm">Connect</Link>
            </p>
            <button className="pl-2">+</button>
          </div>
        </div> */}

      </div>

      {/* Mobile menu */}
      <div className="">
        <ul
          className={
            !nav
              ? "hidden"
              : "text-white left-0 w-full h-3/5  bg-black"
          }
        >
          <li className="py-1 text-xs">
            <Link onClick={handleClick} href="/">
              Home
            </Link>
          </li>
          <li className="py-1 text-xs">
            {" "}
            <Link
              onClick={handleClick}
              href="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="py-1 text-xs">
            {" "}
            <Link
              onClick={handleClick}
              href="/contactForm"
            >
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Toggle
