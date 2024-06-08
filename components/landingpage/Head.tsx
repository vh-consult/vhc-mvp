'use client'
import { landing } from "@/constants";
import { SignIn, SignInButton, SignUp, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";


interface NavLink {
    label: string;
    link: string;
  }
  
  const Navigation = () => {
    const [activeLink, setActiveLink] = useState<string>('/#home');
  
    const handleClick = (link: string) => {
      setActiveLink(link);
      const targetElement = document.querySelector(link) as HTMLElement;
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const handleScroll = () => {
      const sections = landing.header.navLinks.map((link: NavLink) =>
        document.querySelector(link.link) as HTMLElement
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
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className='hidden md:block'>
        <nav>
          <ul className='list-none flex flex-row justify-around'>
            {landing.header.navLinks.map((link: NavLink, index: number) => (
              <li key={index} className='mr-5'>
                <a
                  className={`font-normal ${activeLink === link.link ? 'text-green font-medium' : ''}`}
                  href={link.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.link);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  };

const Head = () => {
    useEffect(() => {
      const handleScroll = () => {
        const header:Element|null = document.querySelector('.header');
        if (window.scrollY > 0) {
          header && header.classList.add('scrolled');
        } else {
          header && header.classList.remove('scrolled');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <div className='header sticky z-50 top-0 left-0  h-16 bg-white w-full flex flex-row justify-between items-center p-6'>
          <div className='w-2/6 md:w-1/6 '>
            <img src={landing.header.logo} alt="app-logo" />
          </div>
          <Navigation/>
          <div className='hidden md:flex items-center justify-center button w-1/6'>
              {/* <Link 
                href={landing.header.login.link}
                className='text-green hover:underline hover:font-md'
              >
                {landing.header.login.text}
              </Link>
              <Link href={landing.header.button.link}>
                {
                      <button className='
                        hidden md:block h-10 
                        bg-green w-20 rounded-lg 
                        hover:transition-all
                        hover:shadow-lg
                        text-white m-2'
                      >
                        {landing.header.button.text}
                      </button>
                }
              </Link> */}
            <SignIn />
            <SignUp />
          </div>
          <div className='block md:hidden'>
              <landing.header.menuIcon/>
          </div>
        </div>
    )
  }
  
  export default Head
  