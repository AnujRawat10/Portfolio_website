"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  text,
  className = "",
  style,
  delay = 0,
  as: Tag = "h2",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Tag className={className} style={style}>
        {text}
      </Tag>
    </motion.div>
  );
}
