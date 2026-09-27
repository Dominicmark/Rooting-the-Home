import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = '',
  id,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth natural cubic bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
