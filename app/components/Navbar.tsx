"use client"
import React, { useState } from 'react';
import { ModeToggle } from './ModeToggle';

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
      { label: 'INDRUSTRY SOLUTIONS', href: '#' },
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold uppercase">Namely</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navbarSections.map((section) => (
              <div key={section.name} className="relative">
                <button
                  onClick={() => toggleDropdown(section.name)}
                  className=" uppercase  text-sm "
                >
                  {section.name}
                </button>

                {activeDropdown === section.name && (
                  <div className="absolute mt-2 bg-background shadow-lg rounded-md w-40 py-2">
                    {section.dropdownItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm  hover:text-gray-400"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="text-sm uppercase">Login</button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-md text-center  px-3 py-2 w-44 ml-20 bg-transparent focus:outline-none focus:ring-2 "
              />
            </div>

            <button className="bg-transparent border border-slate-400 uppercase  px-4 py-2 w-52 rounded-md">
              Request a Call
            </button>
          </div>
            <ModeToggle/>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none -ml-12"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background shadow-lg py-2">
          {navbarSections.map((section) => (
            <div key={section.name} className="relative px-4 py-2">
              <button
                onClick={() => toggleDropdown(section.name)}
                className="w-full text-left  uppercase  font-medium"
              >
                {section.name}
              </button>

              {activeDropdown === section.name && (
                <div className="mt-2 bg-background  rounded-md">
                  {section.dropdownItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-4 py-2">
            <button className=" uppercase  font-medium w-full text-left">
              Login
            </button>
          </div>

            <input
              type="text"
              placeholder="Search..."
              className="border w-full rounded-md px-3 py-2 bg-transparent focus:outline-none focus:ring-2 "
            />
          
            <button className="bg-transparent  border border-slate-400 uppercase  w-full py-2 rounded-md ">
              Request a Call
            </button>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
