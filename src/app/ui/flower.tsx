import { motion } from 'framer-motion';
import { Flower } from './types';

interface FlowerIconProps {
  flower: Flower;
  animate: boolean;
}

export default function Flower({ flower, animate }: FlowerIconProps) {
  const variants = {
    hidden: {
      opacity: 0,
      x: flower.startPosition.x,
      y: flower.startPosition.y,
    },
    visible: {
      opacity: 1,
      x: flower.endPosition.x,
      y: flower.endPosition.y,
      transition: { duration: 4, scale: 1.3 },
    },
    circle: {
      rotate: 120,
      transition: { loop: Infinity, ease: 'linear', duration: 2 },
    },
  };

  return (
    <motion.div
      style={{ position: 'absolute' }}
      variants={variants}
      initial='hidden'
      animate={animate ? ['visible', 'circle'] : 'hidden'}
    >
      {flower.icon}
    </motion.div>
  );
}
