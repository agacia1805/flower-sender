'use client';

import { GiFlowerHat } from 'react-icons/gi';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      className='w-12 cursor-pointer md:w-16'
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.6 }}
    >
      <GiFlowerHat size={50} className='text-pink-100' />
    </motion.div>
  );
}
