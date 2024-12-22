"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../public/Logo.jpeg"
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Furniro Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        
        <ul className="hidden md:flex items-center space-x-6">
          <Link
            
              href="/" legacyBehavior>
                <a
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Home"
            >
              Home
            </a>
          </Link>
          <Link
            
              href="/shop" legacyBehavior>
                <a
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Shop"
            >
              Shop
            </a>
          </Link>
          <Link
            
              href="/blog" legacyBehavior>
                <a
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Blog"
            >
              Blog
            </a>
          </Link>
          <Link
            
              href="/contact" legacyBehavior>
                <a
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Contact"
            >
              Contact
            </a>
          </Link>
        </ul>

        
        <div className="hidden md:flex items-center space-x-6">
          <a href="/search" className="text-gray-700 hover:text-gray-500">
            <IoIosSearch size={24} />
          </a>
          <a href="/favorites" className="text-gray-700 hover:text-gray-500">
            <FaRegHeart size={24} />
          </a>
          <a href="/cart" className="text-gray-700 hover:text-gray-500">
            <IoCartOutline size={24} />
          </a>
          <a href="/profile" className="text-gray-700 hover:text-gray-500">
            <HiOutlineUser size={24} />
          </a>
        </div>

        
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 hover:text-gray-500 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="/"
                className="text-gray-700 hover:text-gray-500 transition duration-200"
                aria-label="Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#shop"
                className="text-gray-700 hover:text-gray-500 transition duration-200"
                aria-label="Shop"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-700 hover:text-gray-500 transition duration-200"
                aria-label="Blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-500 transition duration-200"
                aria-label="Contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex justify-around py-4 border-t">
            <a href="/search" className="text-gray-700 hover:text-gray-500">
              <IoIosSearch size={24} />
            </a>
            <a href="/favorites" className="text-gray-700 hover:text-gray-500">
              <FaRegHeart size={24} />
            </a>
            <a href="/cart" className="text-gray-700 hover:text-gray-500">
              <IoCartOutline size={24} />
            </a>
            <a href="/profile" className="text-gray-700 hover:text-gray-500">
              <HiOutlineUser size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
