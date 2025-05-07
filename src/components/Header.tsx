"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`w-full fixed top-0 left-0 z-10 py-4 transition-all duration-300 ${
        scrolled ? 'bg-black' : 'netflix-header'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/" className="relative h-8 w-32">
            <Image
              src="/netflix-logo.svg"
              alt="Netflix"
              fill
              priority
              className="object-contain"
            />
          </Link>
        </motion.div>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border border-gray-600 hover:bg-black/20 text-white flex items-center gap-1"
              >
                <Globe className="h-4 w-4" />
                <span>English</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-800 border-zinc-700">
              <DropdownMenuItem className="text-white hover:bg-zinc-700">English</DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-zinc-700">Hindi</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/login">
              <Button
                variant="default"
                size="sm"
                className="bg-netflix-red hover:bg-netflix-red/90 text-white font-medium"
              >
                Sign In
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
