'use client';

import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'

interface DialogProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function EmailModal({ isOpen, onClose }: DialogProps) {
  const [email, setEmail] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senderName }),
    });
    if (response.ok) {
      alert('Email sent successfully!');
      onClose();
    } else {
      alert('Failed to send email. Test');
      console.log(response);
    }
  };

  if (!isOpen) return null;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
         <Dialog as="div" className="relative z-10" onClose={onClose}>
           <Transition.Child
             as={Fragment}
             enter="ease-out duration-300"
             enterFrom="opacity-0"
             enterTo="opacity-100"
             leave="ease-in duration-200"
             leaveFrom="opacity-100"
             leaveTo="opacity-0"
           >
             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
           </Transition.Child>

           <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
             <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
               <Transition.Child
                 as={Fragment}
                 enter="ease-out duration-300"
                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                 enterTo="opacity-100 translate-y-0 sm:scale-100"
                 leave="ease-in duration-200"
                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
               >
                 <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                   <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                     <div className="sm:flex sm:items-start">
                       <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                         <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                           Send flowers to your loved ones
                         </Dialog.Title>
                         <div className="mt-2">
                           <p className="text-sm text-gray-500">
                             Share the love.
                             Add email address(es) and your name (or stay anonymous).
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                     <form onSubmit={handleSubmit}>
                       <input
                         type='email'
                         placeholder="Enter recipient's email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                       />
                       <input
                         type='text'
                         placeholder='Enter your name'
                         value={senderName}
                         onChange={(e) => setSenderName(e.target.value)}
                         required
                       />
                       <button type='submit'>Send Flowers</button>
                     </form>
                   </div>
                 </Dialog.Panel>
               </Transition.Child>
             </div>
           </div>
         </Dialog>
       </Transition.Root>
  );
}
