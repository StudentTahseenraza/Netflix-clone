"use client";

import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "FAQ", href: "https://help.netflix.com/support/412" },
  { name: "Help Center", href: "https://help.netflix.com" },
  { name: "Account", href: "/account" },
  { name: "Media Center", href: "https://media.netflix.com/" },
  { name: "Investor Relations", href: "http://ir.netflix.com/" },
  { name: "Jobs", href: "https://jobs.netflix.com/jobs" },
  { name: "Netflix Shop", href: "/shop" },
  { name: "Redeem Gift Cards", href: "/redeem" },
  { name: "Buy Gift Cards", href: "/gift-cards" },
  { name: "Ways to Watch", href: "/watch" },
  { name: "Terms of Use", href: "https://help.netflix.com/legal/termsofuse" },
  { name: "Privacy", href: "https://help.netflix.com/legal/privacy" },
  { name: "Cookie Preferences", href: "#" },
  { name: "Corporate Information", href: "https://help.netflix.com/legal/corpinfo" },
  { name: "Contact Us", href: "https://help.netflix.com/contactus" },
  { name: "Speed Test", href: "https://fast.com" },
  { name: "Legal Notices", href: "https://help.netflix.com/legal/notices" },
  { name: "Only on Netflix", href: "https://www.netflix.com/browse/genre/839338" },
  { name: "Do Not Sell or Share My Personal Information", href: "https://www.netflix.com/dnsspi" },
  { name: "Ad Choices", href: "https://netflix.com/adchoices-us" },
];

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer
      className="py-12 border-t border-zinc-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="mb-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="mb-4">Questions? Call <Link href="tel:1-844-505-2993" className="underline hover:text-white/80 transition-colors">1-844-505-2993</Link></p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerLinks.map(link => (
            <motion.div
              key={link.name}
              variants={itemVariants}
            >
              <Link
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white hover:underline transition-colors duration-200"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mb-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
            <DropdownMenuContent align="start" className="bg-zinc-800 border-zinc-700">
              <DropdownMenuItem className="text-white hover:bg-zinc-700">English</DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-zinc-700">Hindi</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        <motion.p
          className="text-sm text-zinc-500"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Netflix India
        </motion.p>
      </div>
    </motion.footer>
  );
}
