"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const socialLinks = [
  {
    Icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/southasianfest/",
  },
  {
    Icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com/southasianfest",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/southasianfest/",
  },
  {
    Icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/user/MirchMasalaOne",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Huns Club", href: "/huns-club" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide on scroll down
      setShow(!(currentScrollY > lastScrollY && currentScrollY > 80));

      // detect scroll for blur
      setScrolled(currentScrollY > 20);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "backdrop-blur-md bg-white/70 border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between container mx-auto lg:px-12 px-6 py-6">
          {/* LOGO */}
          <div className="w-16 h-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.33 123.65">
              <circle
                className="logo-svg-pattern"
                cx="65.32"
                cy="65.54"
                r="1.84"
              ></circle>
              <path
                className="logo-svg-pattern"
                d="M65.32,75.44a1.84,1.84,0,1,0-1.84-1.84A1.83,1.83,0,0,0,65.32,75.44Z"
              ></path>
              <circle
                className="logo-svg-pattern"
                cx="65.32"
                cy="81.66"
                r="1.84"
              ></circle>
              <path
                className="logo-svg-pattern"
                d="M65.37,87.88a1.84,1.84,0,1,0,1.84,1.84A1.84,1.84,0,0,0,65.37,87.88Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M73.35,67.38a1.84,1.84,0,1,0-1.84-1.84A1.84,1.84,0,0,0,73.35,67.38Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M73.35,75.44a1.84,1.84,0,1,0-1.84-1.84A1.84,1.84,0,0,0,73.35,75.44Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M73.35,83.5a1.84,1.84,0,1,0-1.84-1.84A1.84,1.84,0,0,0,73.35,83.5Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M73.41,87.88a1.84,1.84,0,1,0,1.84,1.84A1.84,1.84,0,0,0,73.41,87.88Z"
              ></path>
              <circle
                className="logo-svg-pattern"
                cx="81.39"
                cy="65.54"
                r="1.84"
              ></circle>
              <path
                className="logo-svg-pattern"
                d="M81.39,75.44a1.84,1.84,0,1,0-1.84-1.84A1.84,1.84,0,0,0,81.39,75.44Z"
              ></path>
              <circle
                className="logo-svg-pattern"
                cx="81.39"
                cy="81.66"
                r="1.84"
              ></circle>
              <path
                className="logo-svg-pattern"
                d="M81.45,87.88a1.84,1.84,0,1,0,1.84,1.84A1.84,1.84,0,0,0,81.45,87.88Z"
              ></path>
              <circle
                className="logo-svg-pattern"
                cx="89.43"
                cy="65.54"
                r="1.84"
              ></circle>
              <path
                className="logo-svg-pattern"
                d="M89.43,75.44a1.84,1.84,0,1,0-1.84-1.84A1.84,1.84,0,0,0,89.43,75.44Z"
              ></path>
              <circle
                className="logo-svg-pattern"
                cx="89.43"
                cy="81.66"
                r="1.84"
              ></circle>
              <path
                className="logo-svg-pattern"
                d="M89.49,87.88a1.84,1.84,0,1,0,1.84,1.84A1.84,1.84,0,0,0,89.49,87.88Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M82.92,14.35A13.66,13.66,0,0,0,91.16,1.83,1.09,1.09,0,0,0,90.07.73,13.68,13.68,0,0,0,77.51,9.05,13.67,13.67,0,0,0,65,.73a1.09,1.09,0,0,0-1.09,1.1A13.66,13.66,0,0,0,72.22,14.4,13.66,13.66,0,0,0,64,26.93,1.09,1.09,0,0,0,65.06,28a13.66,13.66,0,0,0,12.56-8.31A13.67,13.67,0,0,0,90.18,28a1.09,1.09,0,0,0,1.09-1.09A13.67,13.67,0,0,0,82.92,14.35ZM88.92,3A11.48,11.48,0,0,1,78.67,13.23,11.48,11.48,0,0,1,88.92,3ZM66.1,3A11.48,11.48,0,0,1,76.35,13.23,11.48,11.48,0,0,1,66.1,3Zm.11,22.81A11.48,11.48,0,0,1,76.47,15.53,11.48,11.48,0,0,1,66.21,25.78ZM78.78,15.53A11.48,11.48,0,0,1,89,25.78,11.48,11.48,0,0,1,78.78,15.53Z"
              ></path>
              <path
                fill="#01249E"
                className="logo-svg-text"
                d="M14.58.33A13.58,13.58,0,1,0,28.24,13.91,13.63,13.63,0,0,0,14.58.33Zm8.85,13.58a8.85,8.85,0,1,1-17.69,0,8.85,8.85,0,1,1,17.69,0Z"
              ></path>
              <path
                className="logo-svg-text"
                d="M46.39,68.06a8,8,0,0,1,8.21,6.36l.06.27h5.07l-.09-.43A13,13,0,0,0,46.39,63.43,13.88,13.88,0,0,0,32.18,77.59a14,14,0,0,0,14.21,14.2A13.05,13.05,0,0,0,59.64,80.88l.09-.43H54.66l-.06.27a8,8,0,0,1-8.21,6.4c-5.34,0-9.22-4-9.22-9.53S41.05,68.06,46.39,68.06Z"
              ></path>
              <path
                className="logo-svg-text"
                d="M39.53,53.15H52.06l2.74,6.38h5.28l-12-27.12L48,32.2H43.6L31.51,59.53h5.28Zm1.87-4.47,4.39-10.21,4.36,10.21Z"
              ></path>
              <path
                className="logo-svg-text"
                d="M16.51,95.84H12.1L0,123.17H5.28L8,116.79H20.55l2.74,6.38h5.28l-12-27.12Zm2.13,16.48H9.9l4.39-10.21Z"
              ></path>
              <path
                className="logo-svg-text"
                d="M46.53,23.61c-4,0-6.5-1.82-7-5l0-.31H34.65l0,.39c.52,5.78,5,9.37,11.62,9.37,6.25,0,10.45-3.4,10.45-8.47,0-4-2.56-6.41-8-7.49L45,11.35c-2.84-.55-4.1-1.59-4.1-3.38,0-2.28,2-3.65,5.23-3.65S51.54,5.74,52,8.53l.05.3h4.81l0-.39C56.29,3.15,52.19,0,45.87,0c-6.14,0-10.1,3.25-10.1,8.28,0,4.16,2.52,6.75,7.51,7.69l4.63.89c2.56.45,3.86,1.54,3.86,3.23C51.77,22.3,49.81,23.61,46.53,23.61Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M12.58,40a2.31,2.31,0,0,0,2,1.17,2.33,2.33,0,0,0,2-1.17l3.46-6a1,1,0,0,0,0-1.08,1.12,1.12,0,0,0-1.88,0l-3.61,6.26L11,33A1.09,1.09,0,0,0,9.11,34Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M1.7,45H8.62a2.36,2.36,0,0,0,2-3.53l-3.47-6a1.11,1.11,0,0,0-1.88,0,1.09,1.09,0,0,0,0,1.09l3.61,6.26H1.7a1.1,1.1,0,0,0-.94.54A1.1,1.1,0,0,0,1.7,45Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M10.66,48.6a2.35,2.35,0,0,0-2-1.17H1.7a1.09,1.09,0,0,0-.94,1.63,1.09,1.09,0,0,0,.94.54H8.93L5.31,55.87a1.09,1.09,0,0,0,0,1.09A1.13,1.13,0,0,0,7.2,57l3.46-6A2.35,2.35,0,0,0,10.66,48.6Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M16.65,52.6a2.4,2.4,0,0,0-3.22-.86,2.27,2.27,0,0,0-.85.86l-3.46,6a1.07,1.07,0,0,0,0,1.09,1.12,1.12,0,0,0,1.87,0l3.62-6.27,3.62,6.26a1.12,1.12,0,0,0,1.88,0,1,1,0,0,0,0-1.08Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M27.53,47.43H20.6a2.36,2.36,0,0,0-2,3.53l3.45,6h0a1.1,1.1,0,0,0,1.88,0,1.07,1.07,0,0,0,0-1.09L20.3,49.6h7.23a1.09,1.09,0,0,0,.94-.54,1.07,1.07,0,0,0,0-1.09A1.08,1.08,0,0,0,27.53,47.43Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M18.57,43.77a2.31,2.31,0,0,0,2,1.18h6.93a1.09,1.09,0,0,0,.94-1.63,1.09,1.09,0,0,0-.94-.54H20.3l3.61-6.27a1,1,0,0,0,0-1.08,1.12,1.12,0,0,0-1.86,0l0,0-3.46,6A2.35,2.35,0,0,0,18.57,43.77Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M33.31,111.08a1,1,0,0,0,.76-.34l12.4-13.51a1.12,1.12,0,0,0,0-1.54,1,1,0,0,0-1.49,0l-12.4,13.52a1.11,1.11,0,0,0,0,1.53A1,1,0,0,0,33.31,111.08Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M54.72,95.69a1,1,0,0,0-1.48,0L32.55,118.28a1.11,1.11,0,0,0,0,1.53,1,1,0,0,0,1.48,0L54.76,97.23A1.12,1.12,0,0,0,54.72,95.69Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M33.31,102.94a1,1,0,0,0,.76-.34L39,97.23a1.12,1.12,0,0,0,0-1.54,1,1,0,0,0-1.49,0l-4.93,5.38a1.11,1.11,0,0,0,0,1.53A1,1,0,0,0,33.31,102.94Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M58,116.2l-5.15,5.61a1.12,1.12,0,0,0,0,1.54,1,1,0,0,0,.72.3,1,1,0,0,0,.76-.34l5.15-5.61a1.12,1.12,0,0,0,0-1.54A1,1,0,0,0,58,116.2Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M59.44,99.61a1,1,0,0,0-1.48,0L37.62,121.81a1.12,1.12,0,0,0,0,1.54,1,1,0,0,0,.72.3,1,1,0,0,0,.76-.34l20.34-22.16A1.12,1.12,0,0,0,59.44,99.61Z"
              ></path>
              <path
                className="logo-svg-pattern"
                d="M58,107.93,45.22,121.81a1.12,1.12,0,0,0,0,1.54,1,1,0,0,0,.72.3,1,1,0,0,0,.76-.34l12.74-13.88a1.12,1.12,0,0,0,0-1.54A1,1,0,0,0,58,107.93Z"
              ></path>
            </svg>
          </div>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden md:flex gap-6 font-semibold transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    isActive ? "text-[#01249E]" : "hover:text-[#01249E]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden z-50 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <Menu size={30} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-black transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={160} height={40} />
          </Link>

          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X size={30} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-160px)] gap-8 text-xl text-white">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors ${
                  isActive ? "text-[#01249E]" : "hover:text-[#01249E]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 pb-10">
          {socialLinks.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
