"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
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
          <Link href="/login" className="float-right">
            <Button
              variant="default"
              size="sm"
              className="bg-netflix-red hover:bg-netflix-red/90 text-white font-medium"
            >
              Sign In
            </Button>
          </Link>
        </header>

        {/* Sign Up Content */}
        <motion.div
          className="max-w-3xl w-full mx-auto py-16 px-4 md:px-0 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {step === 1 ? (
            <>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Unlimited movies, TV shows, and more
              </h1>
              <p className="text-xl md:text-2xl mb-5">
                Watch anywhere. Cancel anytime.
              </p>
              <div className="max-w-xl mx-auto">
                <p className="text-lg mb-4">
                  Ready to watch? Enter your email to create or restart your membership.
                </p>
                <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit}>
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Email address"
                      className="h-14 bg-black/60 border border-gray-600 rounded-md pl-4 text-white placeholder:text-gray-400 w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      className="h-14 bg-netflix-red hover:bg-netflix-red/90 text-white text-lg md:text-xl font-medium px-6 flex items-center justify-center gap-2 w-full"
                    >
                      Get Started <ChevronRight className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </>
          ) : (
            <motion.div
              className="max-w-md mx-auto bg-black/80 p-8 rounded-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-left">
                <p className="text-sm text-gray-400 mb-2">STEP 1 OF 3</p>
                <h2 className="text-2xl font-bold mb-3">Create a password to start your membership</h2>
                <p className="text-lg mb-4">Just a few more steps and you're done!</p>
                <p className="text-lg mb-4">We hate paperwork, too.</p>

                <form className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="h-14 bg-zinc-800 border border-zinc-700 rounded-md pl-4 text-white placeholder:text-gray-400 w-full"
                    value={email}
                    readOnly
                  />

                  <Input
                    type="password"
                    placeholder="Add a password"
                    className="h-14 bg-zinc-800 border border-zinc-700 rounded-md pl-4 text-white placeholder:text-gray-400 w-full"
                    required
                  />

                  <Button
                    type="submit"
                    className="w-full h-14 bg-netflix-red hover:bg-netflix-red/90 text-white text-lg font-medium"
                  >
                    Next
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
