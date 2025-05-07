"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Plus } from "lucide-react";
import { motion } from "framer-motion";

const faqItems = [
  {
    id: "what-is-netflix",
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    id: "how-much-cost",
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $7.99 to $24.99 a month (pre-tax). No extra costs, no contracts.",
  },
  {
    id: "where-can-watch",
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    id: "how-cancel",
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: "what-can-watch",
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: "is-good-for-kids",
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 border-t border-zinc-700">
      <motion.div
        className="container max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={item.id}
                className="mb-2 bg-zinc-800 rounded-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-xl font-medium hover:no-underline group">
                  {item.question}
                  <Plus className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="px-6 py-5 text-zinc-300 border-t border-zinc-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          className="w-full max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg md:text-xl mb-4 text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
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
                className="h-14 bg-netflix-red hover:bg-netflix-red/90 text-white text-lg md:text-xl font-medium px-6 flex items-center justify-center gap-2 w-full"
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
