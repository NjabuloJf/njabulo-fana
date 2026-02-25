/* eslint-disable @next/next/no-img-element */
"use client"; // Important: This must be a client component for state

import { useState, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2.5 second load time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <WhatsAppLoader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <main className="min-h-dvh flex flex-col gap-14 relative px-6 py-12 md:px-0">
          <section id="hero">
             {/* ... (rest of your hero code) */}
             <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
                  <div className="gap-2 flex flex-col order-2 md:order-1">
                    <BlurFadeText
                      delay={BLUR_FADE_DELAY}
                      className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                      yOffset={8}
                      text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                    />
                    <BlurFadeText
                      className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                      delay={BLUR_FADE_DELAY}
                      text={DATA.description}
                    />
                  </div>
                  <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
                    <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                      <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                      <AvatarFallback>{DATA.initials}</AvatarFallback>
                    </Avatar>
                  </BlurFade>
                </div>
              </div>
          </section>

          {/* ... Add all your other sections here (About, Work, Education, etc.) ... */}
          <section id="about">
            <div className="flex min-h-0 flex-col gap-y-4">
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-xl font-bold">About</h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                  <Markdown>{DATA.summary}</Markdown>
                </div>
              </BlurFade>
            </div>
          </section>

          <section id="work">
            <div className="flex min-h-0 flex-col gap-y-6">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-xl font-bold">Work Experience</h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <WorkSection />
              </BlurFade>
            </div>
          </section>
          
          {/* Add Education, Skills, Projects sections here just like in your original code */}

          <section id="contact">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <ContactSection />
            </BlurFade>
          </section>
        </main>
      )}
    </>
  );
}

// Keep the WhatsAppLoader component at the bottom of the same file or in a different one
const WhatsAppLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
            <path
              fill="#25D366"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.553 4.189 1.606 6.006L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.632 0 12.028-5.396 12.033-12.03a11.85 11.85 0 00-3.527-8.508z"
            />
          </svg>
        </div>
        <div className="mt-8 w-40 h-[2px] bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-[#25D366]"
          />
        </div>
        <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-[0.2em] mt-2">
          from your name
        </p>
      </div>
    </div>
  );
};
