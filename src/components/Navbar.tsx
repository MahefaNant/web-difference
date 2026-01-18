"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPhoneAlt, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const numberPhone = "06 38 72 30 38";

export function NavBar() {
  const [activePage, setActivePage] = useState("Accueil");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#6FE3B1] py-3 px-4 sm:py-4 md:px-8 lg:px-20 xl:px-32 2xl:px-100 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Image
          src="/logo-bulle.png"
          alt="Web Difference"
          width={32}
          height={32}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <span className="font-extrabold text-xs sm:text-sm leading-tight tracking-tight text-black">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            WEB{" "}
          </span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          DIFFERENCE
        </span>
      </div>

      {/* Desktop Navigation (lg and above) */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="flex gap-4 xl:gap-8 font-semibold text-black">
          {["Accueil", "Offres", "Projets", "Guides"].map((page) => (
            <NavigationMenuItem key={page}>
              <NavigationMenuLink
                className={`px-4 py-2 rounded-lg font-extrabold text-sm xl:text-base xl:px-5 ${
                  activePage === page
                    ? "bg-black text-white"
                    : "hover:bg-black/10 transition-colors"
                }`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Desktop Actions (md and above) */}
      <div className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6">
        {/* Bouton Prendre RDV */}
        <Button
          size="lg"
          className="bg-black text-white rounded-xl h-11 lg:h-12 hover:scale-105 transition-transform flex items-center text-sm lg:text-base px-4 lg:px-6"
        >
          <FaCalendarAlt className="mr-2 w-4 h-4 lg:w-5 lg:h-5" />
          <span className="hidden lg:inline">Prendre RDV</span>
          <span className="lg:hidden">RDV</span>
        </Button>

        {/* Bouton Appeler */}
        <div className="inline-block">
          <button className="bg-black text-white flex items-center rounded-xl w-12 h-12 overflow-hidden group transition-all duration-300 ease-in-out hover:w-44">
            {/* Icône centrée */}
            <div className="flex items-center justify-center w-12 h-12 shrink-0">
              <FaPhoneAlt className="w-6 h-6" />
            </div>

            {/* Numéro caché au départ */}
            <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {numberPhone}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Actions (sm only) */}
      <div className="flex md:hidden items-center gap-3">
        {/* Mobile Phone Button */}
        <div className="inline-block">
          <button className="bg-black text-white flex items-center justify-center rounded-xl w-10 h-10">
            <FaPhoneAlt className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Burger Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <FaBars className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#6FE3B1] flex flex-col justify-between h-full w-full max-w-xs sm:max-w-sm p-0">
            <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
            <SheetHeader className="px-6 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo-bulle.png"
                    alt="Web Difference"
                    width={40}
                    height={40}
                  />
                  <span className="font-extrabold text-sm leading-tight tracking-tight text-black">
                    <span className="text-3xl font-serif">WEB </span>
                    <br />
                    DIFFERENCE
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10"
                >
                  <FaTimes className="w-6 h-6" />
                </Button>
              </div>
            </SheetHeader>

            <nav className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
              {["Accueil", "Offres", "Projets", "Guides"].map((page) => (
                <button
                  key={page}
                  className={`w-full text-center px-6 py-4 rounded-xl text-lg font-semibold transition-all ${
                    activePage === page
                      ? "bg-black text-white"
                      : "text-black hover:bg-black/10"
                  }`}
                  onClick={() => {
                    setActivePage(page);
                    setIsOpen(false);
                  }}
                >
                  {page}
                </button>
              ))}
            </nav>

            <div className="p-6 flex flex-col gap-3 border-t border-black/10">
              <Button
                className="w-full bg-black text-white rounded-xl h-12 hover:scale-105 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                <FaCalendarAlt className="mr-2" /> Prendre RDV
              </Button>
              <Button
                className="w-full bg-black text-white rounded-xl h-12"
                onClick={() => setIsOpen(false)}
              >
                <FaPhoneAlt className="mr-2" /> Appeler
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
