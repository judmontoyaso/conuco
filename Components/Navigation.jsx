import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex items-center flex-wrap bg-primary">
      <Link href="/">
        <section className="flex mt-3 ml-3">
          <section>
            <Image
              src="/Logotipotexto.png"
              alt="Picture of the author"
              width={350}
              height={80}
            />
          </section>
        </section>
      </Link>

      <button
        className=" inline-flex p-3 hover:bg-secondary rounded-2xl lg:hidden text-black ml-auto hover:text-black outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto">
          <Link href="/">
            <a className="lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold items-center justify-center hover:bg-secondary hover:text-black">
              <span className="ml-3">Recetas</span>
            </a>
          </Link>
          <Link href="/">
            <a className="lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold  items-center justify-center hover:bg-secondary hover:text-black">
              <span className="ml-3">Blog</span>
            </a>
          </Link>
          <Link href="/">
            <a className="lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold  items-center justify-center hover:bg-secondary hover:text-black">
              <span className="ml-3">Contactenos</span>
            </a>
          </Link>
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold   lg:mr-20 hover:bg-secondary hover:text-black ">
              <span className="ml-3">Acerca de nosotros</span>
            </a>
          </Link>
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold  items-center justify-center hover:bg-secondary hover:text-black">
              <span className="ml-3">Login</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
