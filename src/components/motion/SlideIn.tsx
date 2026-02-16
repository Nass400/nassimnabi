import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'left' | 'right' | 'up' | 'down';

interface SlideInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
  up: { x: 0, y: 60 },
  down: { x: 0, y: -60 },
};

export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.5,
  ...props
}: SlideInProps) {
  const offset = offsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
