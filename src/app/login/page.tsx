"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    // In a real app, you would handle login with a backend
  };

  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/netflix-background.jpg')",
          filter: "brightness(40%)"
        }}
      />

      <div className="relative z-10 w-full">
        {/* Header */}
        <header className="w-full py-6 px-4 md:px-12">
          <Link href="/" className="relative h-8 w-32 inline-block">
            <Image
              src="/netflix-logo.svg"
              alt="Netflix"
              fill
              priority
              className="object-contain"
            />
          </Link>
        </header>

        {/* Login Form */}
        <motion.div
          className="max-w-[450px] w-full mx-auto p-8 md:p-12 bg-black/80 rounded-md my-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Sign In</h1>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email or phone number"
                  className="h-12 bg-zinc-800 border border-zinc-700 rounded-md pl-4 text-white placeholder:text-gray-400 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  className="h-12 bg-zinc-800 border border-zinc-700 rounded-md pl-4 text-white placeholder:text-gray-400 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-netflix-red hover:bg-netflix-red/90 text-white text-lg font-medium"
              >
                Sign In
              </Button>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-zinc-600 data-[state=checked]:bg-netflix-red"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-zinc-400 cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>

                <Link href="#" className="text-sm text-zinc-400 hover:underline">
                  Need help?
                </Link>
              </div>
            </div>
          </form>

          <div className="mt-16">
            <p className="text-zinc-500">
              New to Netflix?{" "}
              <Link href="/signup" className="text-white hover:underline">
                Sign up now
              </Link>
            </p>

            <p className="text-xs text-zinc-500 mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <Link href="#" className="text-blue-500 hover:underline">
                Learn more.
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
