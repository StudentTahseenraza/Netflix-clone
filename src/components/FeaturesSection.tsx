"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    image: "/images/tv.png",
    imageAlt: "TV"
  },
  {
    id: 2,
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
    image: "/images/mobile.jpg",
    imageAlt: "Mobile"
  },
  {
    id: 3,
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    image: "/images/device-pile.png",
    imageAlt: "Devices"
  },
  {
    id: 4,
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    image: "/images/kids.png",
    imageAlt: "Kids profile"
  }
];

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          More Reasons to Join
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-zinc-800 rounded-lg p-6 flex flex-col items-center text-center h-full hover:bg-zinc-700 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-300 mb-6">{feature.description}</p>
              <motion.div
                className="mt-auto relative w-24 h-24"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
