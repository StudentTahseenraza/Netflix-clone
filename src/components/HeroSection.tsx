"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section className="netflix-hero min-h-[85vh] w-full flex items-center justify-center pt-28 pb-10">
      <motion.div
        className="netflix-hero-content container flex flex-col items-center text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          variants={itemVariants}
        >
          Unlimited movies, TV shows, and more
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-5"
          variants={itemVariants}
        >
          Starts at ₹7.99. Cancel anytime.
        </motion.p>
        <motion.div
          className="w-full max-w-3xl mx-auto mt-5"
          variants={itemVariants}
        >
          <p className="text-lg md:text-xl mb-4">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Email address"
                className="h-14 bg-black/60 border border-gray-600 rounded-md pl-4 text-white placeholder:text-gray-400 w-full"
                required
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="submit"
                className="h-14 bg-netflix-red hover:bg-netflix-red/90 text-white text-lg md:text-xl font-medium px-6 flex items-center justify-center gap-2 w-full md:w-auto"
              >
                Get Started <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
