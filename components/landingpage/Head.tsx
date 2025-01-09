"use client";
import { landing } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import MobileNav from "../user/MobileNav";
import UserButton from "../user/UserButton";
import { useUser } from "@/hooks/useUser";
import Login from "@/app/(root)/login";
import Register from "@/app/(root)/register";

interface NavLink {
  label: string;
  route: string;
}

const Navigation = () => {
  const [activeLink, setActiveLink] = useState<string>("/#home");

  const handleClick = (link: string) => {
    setActiveLink(link);
    const targetElement = document.querySelector(link) as HTMLElement;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const sections = landing.header.navLinks.map(
      (link: NavLink) => document.querySelector(link.route) as HTMLElement
    );
    const scrollPos = window.scrollY + window.innerHeight / 2;

    const active = sections.find(
      (section) =>
        section &&
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
    );

    if (active) {
      setActiveLink(`#${active.id}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="hidden md:block">
      <ul className="list-none flex flex-row justify-around">
        {landing.header.navLinks.map((link: NavLink, index: number) => (
          <li key={index} className="mr-5">
            <Link
              className={`font-normal ${
                activeLink === link.route ? "text-accent font-medium" : ""
              }`}
              href={link.route}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.route);
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Head = () => {
  const { role, companyId } = useUser();
  const [register, setRegister] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const header: Element | null = document.querySelector(".header");
      if (window.scrollY > 0) {
        header && header.classList.add("scrolled");
      } else {
        header && header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header sticky z-50 top-0 left-0  h-16 bg-white w-full flex flex-row justify-between items-center p-6">
      <div className="w-2/6 md:w-1/6 ">
        <Image
          src={landing.header.logo}
          alt="app-logo"
          width={120}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>
      <Navigation />
      <div className="hidden md:flex items-center justify-center button w-1/6">
        {/* <Button className="bg-accent rounded-full text-secondary mr-4">
              <Link href={role==="PharmacyAdmin"? `/company/${companyId}/overview` :'landing'}>
                Go to Home
              </Link>
            </Button>
            <UserButton/> */}
          <Button
            className="text-accent bg-transparent hover:bg-transparent hover:underline hover:font-md"
            onClick={() => {
              setLogin(true);
            }}
          >
            {landing.header.login.text}
          </Button>
        {
          <Button
            className="
                  hidden md:block h-10 
                  bg-accent w-20 rounded-lg 
                  hover:transition-all
                  hover:shadow-lg
                  text-white m-2"
            onClick={() => {
              setRegister(true);
            }}
          >
            {landing.header.button.text}
          </Button>
        }
      </div>
      <div className="hidden">
        <MobileNav navigations={landing.header.navLinks} />
      </div>
      {login ? <Login onClose={() => setLogin(false)} show={login} /> : ""}
      {register ? (
        <Register onClose={() => setRegister(false)} show={register} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Head;
