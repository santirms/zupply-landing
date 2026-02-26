'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.4], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.4], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [0.5, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [24, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-[80vh] flex flex-col items-center justify-start px-5 py-10"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="mb-10 text-center"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        {titleComponent}
      </motion.div>

      <motion.div
        className="w-full max-w-[1100px]"
        style={{
          rotateX: rotate,
          scale,
          translateY,
          opacity,
          transformOrigin: 'center top',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
