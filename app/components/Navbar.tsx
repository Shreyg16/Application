"use client"

import React, { useState, useEffect } from 'react';
import { ModeToggle } from './ModeToggle';
import { Menu, X, ChevronDown, ChevronUp, Search } from 'lucide-react';

type DropdownItem = {
  label: string;
  href: string;
};

type NavbarSection = {
  name: string;
  dropdownItems: DropdownItem[];
};

const navbarSections: NavbarSection[] = [
  {
    name: 'Solutions',
    dropdownItems: [
      { label: 'HR', href: '#' },
      { label: 'Payroll', href: '#' },
      { label: 'Onboarding', href: '#' },
      { label: 'Time', href: '#' },
      { label: 'Reporting', href: '#' },
      { label: 'Mobile App', href: '#' },
    ],
  },
  {
    name: 'Why Namely',
    dropdownItems: [
      { label: 'WHY SWITCH', href: '#' },
      { label: 'GET PRICING', href: '#' },
      { label: 'CLIENT SERVICES', href: '#' },
      { label: 'INDUSTRY SOLUTIONS', href: '#' },
      { label: 'CASE STUDIES', href: '#' },
      { label: 'PARTNERS', href: '#' },
    ],
  },
  {
    name: 'Resources',
    dropdownItems: [
      { label: 'BLOG', href: '#' },
      { label: 'LIBRARY', href: '#' },
      { label: 'EVENTS', href: '#' },
      { label: 'DEVELOPERS', href: '#' },
      { label: 'CLIENT CARE', href: '#' },
    ],
  },
  {
    name: 'About',
    dropdownItems: [
      { label: 'PRESS', href: '#' },
      { label: 'CAREERS', href: '#' },
    ],
  },
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`bg-background shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold uppercase">Namely</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navbarSections.map((section) => (
              <div key={section.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(section.name)}
                  className="uppercase text-[13px] flex items-center"
                >
                  {section.name}
                  {activeDropdown === section.name ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                </button>

                <div className="absolute left-0 mt-2 bg-background shadow-lg rounded-md w-48 py-2 hidden group-hover:block">
                  {section.dropdownItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <button className="text-[13px] uppercase">Login</button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-md text-center px-3 py-2 w-44 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            <button className="bg-transparent border border-primary uppercase px-4 py-2 w-52 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              Request a Call
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-background shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-4 py-2 space-y-4">
          {navbarSections.map((section) => (
            <div key={section.name} className="relative">
              <button
                onClick={() => toggleDropdown(section.name)}
                className="w-full text-left uppercase font-medium flex justify-between items-center"
              >
                {section.name}
                {activeDropdown === section.name ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <div className={`mt-2 bg-background rounded-md overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === section.name ? 'max-h-screen' : 'max-h-0'}`}>
                {section.dropdownItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <button className="uppercase font-medium w-full text-left py-2">
            Login
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border w-full rounded-md px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <button className="bg-transparent border border-primary uppercase w-full py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            Request a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

