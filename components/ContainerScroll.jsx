'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Image: starts rotated/scaled down, ends flat/full size
  const rotate = useTransform(scrollYProgress, [0, 0.5], [isMobile ? 10 : 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [isMobile ? 0.95 : 0.85, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  // Title: moves up as user scrolls
  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);
  const titleOpacity = useTransform(scrollYProgress, [0.25, 0.5], [1, 0.7]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-start px-4 md:px-5 pt-10 pb-20"
      style={{ minHeight: '120vh' }}
    >
      {/* Title */}
      <motion.div
        className="mb-10 md:mb-14 text-center z-10"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        {titleComponent}
      </motion.div>

      {/* Animated card with perspective */}
      <div style={{ perspective: '1200px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <motion.div
          className="w-full max-w-[1100px]"
          style={{
            rotateX: rotate,
            scale,
            opacity: imgOpacity,
            transformOrigin: 'center top',
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
