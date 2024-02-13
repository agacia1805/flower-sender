'use client';

import { Fragment, useState, useCallback } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from './button';

interface EmailModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senderName }),
    });
    if (response.ok) {
      setMessage('Flowers were sent successfully. Thank you for sharing love!');
    } else {
      setMessage('Something went wrong. Please try again later.');
    }
  };

  const handleCloseDialog = useCallback(() => {
    onClose();
    setMessage('');
    setEmail('');
    setSenderName('');
  }, []);

  if (!isOpen) return null;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={handleCloseDialog}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-gray-200 text-left text-purple-900 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                {message ? (
                  <div className='flex flex-col gap-6 p-6 md:p-8'>
                    <Dialog.Title
                      as='h2'
                      className='text-center text-lg font-semibold leading-6 text-purple-900'
                    >
                      {message}
                    </Dialog.Title>
                    <div className='flex gap-4'>
                      <Button
                        name='Send more flowers button'
                        className='self-center bg-purple-900 text-sm text-white md:w-full'
                        onClick={() => {
                          setMessage('');
                          setEmail('');
                          setSenderName('');
                        }}
                      >
                        Send more
                      </Button>
                      <Button
                        name='Close dialog button'
                        className='self-center bg-gray-400 text-sm text-white md:w-full'
                        onClick={handleCloseDialog}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className='p-6 md:p-8'>
                      <div className='flex flex-col items-center'>
                        <Dialog.Title
                          as='h2'
                          className='text-lg font-semibold leading-6 text-purple-900'
                        >
                          Share the love
                        </Dialog.Title>
                        <div className='mt-2'>
                          <p className='text-sm text-gray-500'>
                            Add email address and your name (or stay anonymous).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='px-6 pb-6 pt-0 md:px-8 md:pb-8'>
                      <form
                        onSubmit={handleSubmit}
                        className='flex flex-col items-center gap-2'
                      >
                        <input
                          type='text'
                          placeholder='Name'
                          value={senderName}
                          className='block w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-900 sm:leading-6 md:w-10/12'
                          onChange={(e) => setSenderName(e.target.value)}
                        />
                        <input
                          type='email'
                          placeholder='Email'
                          value={email}
                          className='block w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-900 sm:leading-6 md:w-10/12'
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <Button
                          type='submit'
                          name='Send flowers button'
                          className='mt-4 self-center bg-purple-900 text-sm text-white'
                        >
                          Send Flowers
                        </Button>
                      </form>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
