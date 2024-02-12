'use client';

import { useState } from 'react';

import EmailModal from './emailModal';
import Button from './button';

export default function ShareEmail() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        name="Share email button"
      >
        Share
      </Button>
      <Dialog isOpen={isOpen} onClose={() => {setIsOpen(false)}}/>
    </>
  );
}
