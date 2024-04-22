'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

const links = [
    { name: 'Home', href: '#home'},
    { name: 'About', href: '#about'},
    { name: 'Skills', href: '#skills'},
    { name: 'Projects', href: '#projects'},
    { name: 'Experience', href: '#experience'},
    { name: 'Contact', href: '#contact'},
];

export default function NavLinks({
  id,
  className,
  style,
}: {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
    const [pathname, setPathname] = useState('');
    const [visibleDropdown, setVisibleDropdown] = useState(false);
    const params = useParams();
    
    useEffect(() => {
      const hashsection = window.location.hash;
        const convertHrefToText = (href: string): string => {
          const text = href.replace('#', '');
          return text.charAt(0).toUpperCase() + text.slice(1);
        };
        setPathname(convertHrefToText(hashsection));
    }, [params]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
 
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
      setVisibleDropdown(false);
    };

    return (
      <nav id={id} className={className} style={style}>
        <div className="relative sm:hidden flex w-full mx-auto h-full items-center justify-center">
          <button className="inline-flex mx-auto justify-center items-center text-lg font-medium text-white hover:text-gray-300" onClick={() => setVisibleDropdown(prevState => !prevState)} >
            {pathname}
            <svg className={clsx("transition-all w-4 h-4 ml-2 -mr-1", {'rotate-180': visibleDropdown, 'rotate-0': !visibleDropdown})} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
          </button>

          <ul className={clsx('absolute flex-col justify-center items-start w-full mt-[59px] bg-gray-900 translate-y-1/2 transition-all duration-300', {'visible opacity-100': visibleDropdown, 'invisible opacity-0': !visibleDropdown})}>
            {links.map(link => (
              <li key={link.name} className={clsx('flex bg-gray-800 my-[1px] w-full items-center text-dark-300 font-light hover:text-dark-50 hover:bg-gray-700', {'text-dark-50 font-medium':pathname === link.name})} >
                <Link href={link.href} className='flex items-center px-8 py-4 w-full' onClick={handleScroll}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="hidden sm:flex justify-center items-center w-full h-full">
          {links.slice(0, Math.ceil(links.length / 2)).map(link => (
            <li key={link.name}>
              <Link className={clsx('flex mx-3 items-center h-8 text-dark-300 font-light hover:text-dark-50', {'text-dark-50 font-medium':pathname === link.name})} href={link.href} onClick={handleScroll}>
                {link.name}
              </Link>
            </li>
          ))}
          {/*
            <li key="moon" className='group relative flex'>
              <button data-tooltip-target="tooltip-theme" type="button" onClick={() => document.body.classList.toggle('dark')}>
                <Image src="moon.svg" width={30} height={30} alt='dark theme to the moon.'/>
              </button>

              <div className="absolute hidden group-hover:flex justify-center w-[86px] -translate-x-[28px] translate-y-[50px] bg-gray-700 text-gray-300 text-xs rounded py-1">   
                <span>Light theme</span>
                <svg className="absolute text-gray-700 h-2 w-full left-0 -top-2 rotate-[180deg]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
              </div>

              <div className='absolute h-[100px] w-[100px] left-[-100%] top-[-100%] bg-dark-600 blur-[100px] rounded-full pointer-events-none'/>
            </li>
          */}
          
          {links.slice(Math.ceil(links.length / 2)).map(link => (
            <li key={link.name}>
              <Link className={clsx('flex mx-3 items-center h-8 text-dark-300 font-light hover:text-dark-50', {'text-dark-50 font-medium':pathname === link.name})} href={link.href} onClick={handleScroll}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
}