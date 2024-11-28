import csilogo from "../assets/csilogo.webp"
import React from "react";
window.React = React;
import { socials } from "../constants/public_objects";

const Footer = () => {
  return (
    <footer className="w-full mt-20 px-6 sm:px-8 pb-10">
      <div className="container mx-auto py-12 border-t-2 border-gray-600">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Logo and Contact */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <img src={csilogo} width={120} height={120} alt="CSI Logo" className="mb-4"/>
            
            {/* Contact Details */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-xl font-semibold mb-4">Student Co-ordinators Contacts</h3>
              <div className="space-y-4">
                <p className="flex items-center text-lg ">
                  <img src="https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF" 
                       className="w-5 h-5 mr-4" alt="phone" />
                  Rasheed: +91 83280 05075
                </p>
                <p className="flex items-center text-lg">
                  <img src="https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF" 
                       className="w-5 h-5 mr-4" alt="phone" />
                  Taufeeq: +91 72078 80860
                </p>
                <p className="flex items-center text-lg">
                  <img src="https://img.icons8.com/?size=100&id=53435&format=png&color=FFFFFF" 
                       className="w-5 h-5 mr-4" alt="email" />
                  csi@mjcollege.ac.in
                </p>
              </div>
              
              {/* Address */}
              <p className="max-w-md mt-6 text-lg leading-relaxed">
                Mount Pleasant, 8-2-249, Rd Number 3, Venkateshwara Hills, 
                Banjara Hills, Hyderabad, Telangana 500034
              </p>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="w-full h-[300px] md:h-[400px] relative rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6562222444213!2d78.44033307489522!3d17.42827810162643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cd7708dfd7%3A0x77482b7aa8b696f3!2sMuffakham%20Jah%20College%20of%20Engineering%20%26%20Technology%20(MJCET)!5e0!3m2!1sen!2sin!4v1716881145691!5m2!1sen!2sin"
              className="w-full h-full rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <ul className="flex gap-6">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full transition-all hover:scale-110 hover:bg-zinc-700"
                >
                  <img src={item.iconUrl} width={20} height={20} alt={item.title} />
                </a>
              ))}
            </ul>

            {/* Copyright */}
            <p className="text-base font-mono">
              Made with ❤️ by Team CSI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;