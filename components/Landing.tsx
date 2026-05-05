"use client";

import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";
import React, { useRef, useMemo } from "react";

type HeroProps = {
  bgImage: string;
  subtitle?: string;
  title: React.ReactNode;
  textColor: string;
  highlightColor?: string; // ✅ NEW PROP
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "60%",
    rotateX: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function parseText(text: string) {
  return text.split(/(\*.*?\*)/g).map((part, index) => ({
    text: part.startsWith("*") && part.endsWith("*") ? part.slice(1, -1) : part,
    highlight: part.startsWith("*") && part.endsWith("*"),
    key: index,
  }));
}

function AnimatedLetters({
  text,
  delayChildren,
  highlight,
  highlightColor,
}: {
  text: string;
  delayChildren: number;
  highlight?: boolean;
  highlightColor?: string;
}) {
  return (
    <motion.span
      className="inline-block"
      style={{
        color: highlight ? highlightColor : undefined, // ✅ dynamic color
      }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.035,
            delayChildren,
          },
        },
      }}
      transition={{ delay: delayChildren }}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function animateNode(
  node: React.ReactNode,
  baseDelay: number,
  charCount: { value: number },
  highlightColor?: string,
): React.ReactNode {
  if (typeof node === "string") {
    const parts = parseText(node);

    return parts.map((part) => {
      const delay = baseDelay + charCount.value * 0.035;
      charCount.value += part.text.replace(/\s/g, "").length;

      return (
        <AnimatedLetters
          key={part.key}
          text={part.text}
          delayChildren={delay}
          highlight={part.highlight}
          highlightColor={highlightColor} // ✅ pass down
        />
      );
    });
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;

    return React.cloneElement(
      element,
      {},
      React.Children.map(element.props.children, (child) =>
        animateNode(child, baseDelay, charCount, highlightColor),
      ),
    );
  }

  if (Array.isArray(node)) {
    return node.map((child, i) => (
      <React.Fragment key={i}>
        {animateNode(child, baseDelay, charCount, highlightColor)}
      </React.Fragment>
    ));
  }

  return node;
}

export default function Landing({
  bgImage,
  subtitle,
  title,
  textColor,
  highlightColor = "#01249E",
}: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const animatedTitle = useMemo(() => {
    const charCount = { value: 0 };
    return animateNode(title, 0.5, charCount, highlightColor);
  }, [title, highlightColor]);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] sm:h-[80vh] md:h-screen w-full overflow-hidden"
    >
      <Image
        src={bgImage}
        alt="hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/0 via-black/40 to-black/70" />

      <div className="relative  z-30 flex h-full items-center">
        <div className="mx-auto container w-full max-w-8xl px-12 text-center md:text-left">
          {subtitle && (
            <motion.p
              className="mb-4 inline-flex items-center gap-3 text-sm font-bold sm:text-base md:text-lg lg:text-xl tracking-[0.2em] uppercase"
              style={{ color: textColor }}
              variants={subtitleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.15 }}
            >
              {subtitle}
            </motion.p>
          )}

          <h1
            className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light leading-[1.05] tracking-tight text-white space-y-1"
            style={{ perspective: 800 }}
          >
            {inView ? (
              animatedTitle
            ) : (
              <span className="invisible">{title}</span>
            )}
          </h1>
        </div>
      </div>
    </section>
  );
}
