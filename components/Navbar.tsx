"use client";
import React from 'react';
import { FloatingNav } from './ui/floating-navbar';
import { Home, User, FolderOpen, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home size={16} />,
    },
    {
      name: "About",
      link: "#about",
      icon: <User size={16} />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <FolderOpen size={16} />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <Mail size={16} />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
