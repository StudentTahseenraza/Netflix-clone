"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bell, Search, ChevronDown, Play, Info, ThumbsUp, Plus } from "lucide-react";

// Sample movie categories and data
const categories = [
  {
    id: 1,
    name: "Popular on Netflix",
    movies: [
      { id: 1, title: "Stranger Things", image: "https://ext.same-assets.com/1127727871/263584324.webp" },
      { id: 2, title: "YOU", image: "https://ext.same-assets.com/1127727871/3612947151.webp" },
      { id: 3, title: "Black Mirror", image: "https://ext.same-assets.com/1127727871/3552167716.webp" },
      { id: 4, title: "Havoc", image: "https://ext.same-assets.com/1127727871/4062920514.webp" },
      { id: 5, title: "One Piece", image: "https://ext.same-assets.com/1127727871/1992368894.webp" },
    ]
  },
  {
    id: 2,
    name: "Trending Now",
    movies: [
      { id: 6, title: "Squid Game", image: "https://ext.same-assets.com/1127727871/3552167716.webp" },
      { id: 7, title: "Money Heist", image: "https://ext.same-assets.com/1127727871/4062920514.webp" },
      { id: 8, title: "Dark", image: "https://ext.same-assets.com/1127727871/1992368894.webp" },
      { id: 9, title: "The Witcher", image: "https://ext.same-assets.com/1127727871/263584324.webp" },
      { id: 10, title: "Breaking Bad", image: "https://ext.same-assets.com/1127727871/3612947151.webp" },
    ]
  },
  {
    id: 3,
    name: "New Releases",
    movies: [
      { id: 11, title: "The Queen's Gambit", image: "https://ext.same-assets.com/1127727871/1992368894.webp" },
      { id: 12, title: "Narcos", image: "https://ext.same-assets.com/1127727871/3612947151.webp" },
      { id: 13, title: "Ozark", image: "https://ext.same-assets.com/1127727871/263584324.webp" },
      { id: 14, title: "The Crown", image: "https://ext.same-assets.com/1127727871/4062920514.webp" },
      { id: 15, title: "Peaky Blinders", image: "https://ext.same-assets.com/1127727871/3552167716.webp" },
    ]
  }
];

const featuredContent = {
  title: "Stranger Things",
  description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  image: "/images/shows/stranger-things-hero.jpg",
  logoImage: "/images/shows/stranger-things-logo.png",
  year: 2022,
  ageRating: "16+",
  seasons: 4,
  genre: "Sci-Fi"
};

export default function BrowsePage() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);

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
    <div className="min-h-screen bg-zinc-900">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-8">
            <Link href="/" className="relative h-7 w-28">
              <Image
                src="/netflix-logo.svg"
                alt="Netflix"
                fill
                priority
                className="object-contain"
              />
            </Link>
            <nav className="hidden md:flex gap-4">
              <Link href="/browse" className="text-sm text-white font-medium">Home</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">TV Shows</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Movies</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">New & Popular</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">My List</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-bold">
                N
              </div>
              <ChevronDown className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[90vh]">
        <div className="absolute inset-0">
          <Image
            src={featuredContent.image}
            alt={featuredContent.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative pt-40 px-4 md:px-12 z-10 h-full flex flex-col justify-center">
          <div className="max-w-xl">
            <div className="relative w-72 h-24 mb-6">
              <Image
                src={featuredContent.logoImage}
                alt={featuredContent.title}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white text-lg mb-4 max-w-md">
              {featuredContent.description}
            </p>
            <div className="flex items-center gap-3 text-white text-sm mb-6">
              <span>{featuredContent.year}</span>
              <span className="px-1 py-0.5 bg-red-600 text-white text-xs rounded">{featuredContent.ageRating}</span>
              <span>{featuredContent.seasons} Seasons</span>
              <span>{featuredContent.genre}</span>
            </div>
            <div className="flex gap-3">
              <Button className="px-6 py-2 bg-white hover:bg-white/90 text-black rounded-md flex items-center gap-2">
                <Play className="h-5 w-5" fill="black" />
                Play
              </Button>
              <Button variant="secondary" className="px-6 py-2 bg-gray-500/70 hover:bg-gray-500/60 text-white rounded-md flex items-center gap-2">
                <Info className="h-5 w-5" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Rows */}
      <section className="mt-[-150px] relative z-20 pb-16">
        {categories.map((category, categoryIndex) => (
          <div key={category.id} className="mb-10">
            <h2 className="text-xl font-bold text-white mb-4 px-4 md:px-12">
              {category.name}
            </h2>
            <div className="relative">
              <div className="flex overflow-x-auto px-4 md:px-12 space-x-2 pb-4 no-scrollbar">
                {category.movies.map((movie, movieIndex) => (
                  <motion.div
                    key={movie.id}
                    className="relative flex-shrink-0 w-[200px] rounded-md overflow-hidden group"
                    whileHover={{
                      scale: 1.1,
                      zIndex: 20,
                      transition: { duration: 0.2 }
                    }}
                    onMouseEnter={() => setHoveredMovie(movie.id)}
                    onMouseLeave={() => setHoveredMovie(null)}
                  >
                    <div className="relative aspect-video bg-zinc-800">
                      <Image
                        src={movie.image}
                        alt={movie.title}
                        fill
                        className="object-cover"
                      />
                      {hoveredMovie === movie.id && (
                        <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex gap-1 mb-1">
                            <Button size="icon" variant="ghost" className="w-7 h-7 rounded-full bg-white hover:bg-white/90 text-black">
                              <Play className="h-3 w-3" fill="black" />
                            </Button>
                            <Button size="icon" variant="ghost" className="w-7 h-7 rounded-full bg-zinc-700/80 hover:bg-zinc-700 text-white border border-zinc-600">
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button size="icon" variant="ghost" className="w-7 h-7 rounded-full bg-zinc-700/80 hover:bg-zinc-700 text-white border border-zinc-600">
                              <ThumbsUp className="h-3 w-3" />
                            </Button>
                          </div>
                          <h4 className="text-white text-sm font-medium">{movie.title}</h4>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
