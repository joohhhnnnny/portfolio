"use client";
import React from 'react';
import { FloatingNav } from './ui/floating-navbar';
import { Home, User, FolderOpen, Code, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home size={18} />,
    },
    {
      name: "About",
      link: "#about",
      icon: <User size={18} />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <FolderOpen size={18} />,
    },
    {
      name: "Tech Stack",
      link: "#tech",
      icon: <Code size={18} />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Mail size={18} />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
