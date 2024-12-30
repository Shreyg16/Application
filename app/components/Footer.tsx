import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* HR FOR HUMANS */}
        <div className="flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-10 lg:gap-40">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">HR FOR HUMANS</h2>
          </div>
        </div>
  
        {/* Subcontent */}
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <div className="space-y-2 text-center md:text-left">
            <ul>
              <li><a href="/" className="hover:text-white">Log In</a></li>
              <li><a href="/" className="hover:text-white">See a Demo</a></li>
            </ul>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 w-full md:ml-10">
            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white">Solution Overview</a></li>
                <li><a href="/" className="hover:text-white">HR</a></li>
                <li><a href="/" className="hover:text-white">Talent</a></li>
                <li><a href="/" className="hover:text-white">Benefits Administration</a></li>
                <li><a href="/" className="hover:text-white">Payroll & Time</a></li>
                <li><a href="/" className="hover:text-white">Compliance</a></li>
                <li><a href="/" className="hover:text-white">HR Analytics</a></li>
                <li><a href="/" className="hover:text-white">Managed Payroll</a></li>
                <li><a href="/" className="hover:text-white">Managed Benefits</a></li>
              </ul>
            </div>
            {/* Why Namely */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Why Namely</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white">Why Switch</a></li>
                <li><a href="/" className="hover:text-white">Get Pricing</a></li>
                <li><a href="/" className="hover:text-white">Clients</a></li>
                <li><a href="/" className="hover:text-white">Partners</a></li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white">Blog</a></li>
                <li><a href="/" className="hover:text-white">Library</a></li>
                <li><a href="/" className="hover:text-white">Events</a></li>
                <li><a href="/" target="_blank" className="hover:text-white">Developers</a></li>
                <li><a href="/" target="_blank" className="hover:text-white">Client Care</a></li>
                <li><a href="/" className="hover:text-white">Trust</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white">General</a></li>
                <li><a href="/" className="hover:text-white">Sales</a></li>
                <li><a href="/" className="hover:text-white">Employee Support</a></li>
              </ul>
            </div>
            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Social</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white">Twitter</a></li>
                <li><a href="/" className="hover:text-white">Facebook</a></li>
                <li><a href="/" className="hover:text-white">Instagram</a></li>
                <li><a href="/" className="hover:text-white">LinkedIn</a></li>
                <li><a href="/" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-10 md:mt-20 pt-4 text-center text-sm">
          <p>© 2024 Namely, Inc. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-sm mt-5">
            <li><a href="/" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-white">CCPA</a></li>
            <li><a href="/" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/" className="hover:text-white">Legal</a></li>
            <li><a href="/" className="hover:text-white">Law Enforcement</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

