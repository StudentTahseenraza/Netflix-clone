"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function PromoBanner() {
  return (
    <motion.div
      className="bg-zinc-800 py-4 px-4 md:py-6 rounded-lg flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto my-5"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <motion.div
          className="relative flex-shrink-0"
          animate={{ rotate: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5
          }}
        >
          <span className="emoji text-4xl">🍿</span>
        </motion.div>
        <div>
          <h3 className="text-xl font-bold">The Netflix you love for just $7.99</h3>
          <p className="text-sm text-gray-300">Get our most affordable, ad-supported plan.</p>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          className="bg-transparent border border-white hover:bg-white/10 text-white"
        >
          Learn More
        </Button>
      </motion.div>
    </motion.div>
  );
}
