import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img className="h-10 w-10" src={logo} alt="logo" />
              <h1 className="text-2xl font-bold text-white">HERO.IO</h1>
            </div>
            <p className="text-gray-300 max-w-xs text-sm">
              Discover amazing apps and enhance your digital experience with
              HERO.IO
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="/apps"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Apps
              </a>
              <a
                href="/installation"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Installation
              </a>
              <a
                href="/about"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="flex flex-col gap-2">
              <a
                href="/help"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Help Center
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white transition-colors text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-white transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white transition-colors text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/mdnaeemislam786"
                className="text-gray-300 hover:text-white transition-colors text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-gray-300 text-sm text-center md:text-left">
            Copyright © 2025 HERO.IO - All rights reserved
          </span>
          <div className="flex gap-6 text-sm">
            <a
              href="/privacy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="/cookies"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
