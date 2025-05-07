"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Play, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const trendingMovies = [
  {
    id: 1,
    title: "Beetlejuice Beetlejuice",
    image: "https://ext.same-assets.com/1127727871/263584324.webp",
    videoId: "xn3VmcfRpB8"  // YouTube video ID for the trailer
  },
  {
    id: 2,
    title: "YOU",
    image: "https://ext.same-assets.com/1127727871/3612947151.webp",
    videoId: "cKOegEuCcfw"
  },
  {
    id: 3,
    title: "Black Mirror",
    image: "https://ext.same-assets.com/1127727871/3552167716.webp",
    videoId: "5jY1ecibLYo"
  },
  {
    id: 4,
    title: "Havoc",
    image: "https://ext.same-assets.com/1127727871/4062920514.webp",
    videoId: "kk9O5wcfqZ4"
  },
  {
    id: 5,
    title: "One Piece",
    image: "https://ext.same-assets.com/1127727871/1992368894.webp",
    videoId: "Ades3pQbeh8"
  }
];

export function TrendingSection() {
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = (id: number) => {
    setHoveredMovie(id);
    // Start playing after a short delay to avoid unwanted play on quick mouseover
    setTimeout(() => {
      if (hoveredMovie === id) {
        setIsPlaying(true);
      }
    }, 800);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
    setIsPlaying(false);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trending Now
        </motion.h2>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trendingMovies.map((movie) => (
              <motion.div
                key={movie.id}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: movie.id * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 20,
                  transition: { duration: 0.2 }
                }}
                onMouseEnter={() => handleMouseEnter(movie.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="aspect-[2/3] relative rounded-md overflow-hidden">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {hoveredMovie === movie.id && isPlaying ? (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${movie.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${movie.videoId}`}
                        title={movie.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-sm font-bold">{movie.title}</h3>
                        <div className="flex gap-2 mt-2">
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-white hover:bg-white/90 text-black rounded-full"
                          >
                            <Play className="h-4 w-4 mr-1" fill="black" /> Play
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-zinc-700/60 hover:bg-zinc-700 border-none rounded-full"
                          >
                            <Info className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="absolute bottom-4 left-4">
                        <Button
                          variant="default"
                          size="sm"
                          className="bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white rounded-full"
                        >
                          <Play className="h-4 w-4 mr-1" /> Play
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-2 text-center">
                  <span className="text-4xl font-bold opacity-70">{movie.id}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="pointer-events-auto"
            >
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 hover:bg-black/70 text-white rounded-full h-10 w-10 hidden md:flex"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="pointer-events-auto"
            >
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 hover:bg-black/70 text-white rounded-full h-10 w-10 hidden md:flex"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
