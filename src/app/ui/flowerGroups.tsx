import { FlowerGroup } from './types';
import { IoIosFlower } from 'react-icons/io';
import { GiDandelionFlower } from 'react-icons/gi';
import { IoFlowerOutline } from 'react-icons/io5';
import { PiFlowerLight } from 'react-icons/pi';

export const flowerGroups: FlowerGroup[] = [
  {
    id: 'group1',
    subgroups: [
      {
        flowers: [
          {
            id: 'flower1-1',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-100' />,
            startPosition: { x: '-500%', y: '-650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower1-2',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-400' />,
            startPosition: { x: '500%', y: '-650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower1-3',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-300' />,
            startPosition: { x: '-500%', y: '650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower1-4',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-200' />,
            startPosition: { x: '500%', y: '650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower1-5',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-100' />,
            startPosition: { x: '-150%', y: '-800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower1-6',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-300' />,
            startPosition: { x: '150%', y: '-800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower1-7',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-400' />,
            startPosition: { x: '-150%', y: '800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower1-8',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-200' />,
            startPosition: { x: '150%', y: '800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower1-9',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower1-10',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower1-11',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower1-12',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-200' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower1-13',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-300' />,
            startPosition: { x: '-300%', y: '-900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower1-14',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-400' />,
            startPosition: { x: '300%', y: '-900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower1-15',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-100' />,
            startPosition: { x: '-300%', y: '900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower1-16',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-200' />,
            startPosition: { x: '300%', y: '900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower1-17',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower1-18',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower1-19',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower1-20',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-200' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower1-21',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower1-22',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower1-23',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower1-24',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-200' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '50%', y: '50%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower1-25',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-400' />,
            startPosition: { x: '-300%', y: '-300px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower1-26',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-100' />,
            startPosition: { x: '300%', y: '-300px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower1-27',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-200' />,
            startPosition: { x: '-300%', y: '400px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower1-28',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-pink-300' />,
            startPosition: { x: '300%', y: '400px' },
            endPosition: { x: '0', y: '0' },
          },
        ],
      },
    ],
  },
  {
    id: 'group2',
    subgroups: [
      {
        flowers: [
          {
            id: 'flower2-1',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '-500%', y: '-650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower2-2',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '500%', y: '-650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower2-3',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '-500%', y: '650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower2-4',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-200' />,
            startPosition: { x: '500%', y: '650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower2-5',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '-150%', y: '-800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower2-6',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '150%', y: '-800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower2-7',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '-150%', y: '800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower2-8',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-200' />,
            startPosition: { x: '150%', y: '800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower2-9',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower2-10',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower2-11',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower2-12',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-200' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower2-13',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '-300%', y: '-900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower2-14',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '300%', y: '-900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower2-15',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '-300%', y: '900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower2-16',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-200' />,
            startPosition: { x: '300%', y: '900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower2-17',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower2-18',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower2-19',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower2-20',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-200' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower2-21',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower2-22',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower2-23',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower2-24',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-200' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '50%', y: '50%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower2-25',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '-300%', y: '-300px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower2-26',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '300%', y: '-300px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower2-27',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-200' />,
            startPosition: { x: '-300%', y: '400px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower2-28',
            icon: <GiDandelionFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-600' />,
            startPosition: { x: '300%', y: '400px' },
            endPosition: { x: '0', y: '0' },
          },
        ],
      },
    ],
  },
  {
    id: 'group3',
    subgroups: [
      {
        flowers: [
          {
            id: 'flower3-1',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-100' />,
            startPosition: { x: '-500%', y: '-650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower3-2',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-400' />,
            startPosition: { x: '500%', y: '-650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower3-3',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '-500%', y: '650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower3-4',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '500%', y: '650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower3-5',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-100' />,
            startPosition: { x: '-150%', y: '-800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower3-6',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '150%', y: '-800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower3-7',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-400' />,
            startPosition: { x: '-150%', y: '800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower3-8',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '150%', y: '800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower3-9',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower3-10',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower3-11',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower3-12',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower3-13',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '-300%', y: '-900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower3-14',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-400' />,
            startPosition: { x: '300%', y: '-900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower3-15',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-100' />,
            startPosition: { x: '-300%', y: '900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower3-16',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '300%', y: '900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower3-17',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower3-18',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower3-19',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower3-20',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower3-21',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower3-22',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower3-23',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower3-24',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-300' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '50%', y: '50%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower3-25',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-400' />,
            startPosition: { x: '-300%', y: '-300px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower3-26',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-100' />,
            startPosition: { x: '300%', y: '-300px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower3-27',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-200' />,
            startPosition: { x: '-300%', y: '400px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower3-28',
            icon: <PiFlowerLight className='w-32 h-32 md:w-96 md:h-96 text-indigo-700' />,
            startPosition: { x: '300%', y: '400px' },
            endPosition: { x: '0', y: '0' },
          },
        ],
      },
    ],
  },
  {
    id: 'group4',
    subgroups: [
      {
        flowers: [
          {
            id: 'flower4-1',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '-500%', y: '-650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower4-2',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-400' />,
            startPosition: { x: '500%', y: '-650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower4-3',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '-500%', y: '650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
          {
            id: 'flower4-4',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-200' />,
            startPosition: { x: '500%', y: '650px' },
            endPosition: { x: '20%', y: '-70%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower4-5',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-100' />,
            startPosition: { x: '-150%', y: '-800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower4-6',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '150%', y: '-800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower4-7',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '-150%', y: '800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
          {
            id: 'flower4-8',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-200' />,
            startPosition: { x: '150%', y: '800px' },
            endPosition: { x: '-20%', y: '70%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower4-9',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower4-10',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower4-11',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
          {
            id: 'flower4-12',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-200' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '-65%', y: '15%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower4-13',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '-300%', y: '-900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower4-14',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '300%', y: '-900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower4-15',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-100' />,
            startPosition: { x: '-300%', y: '900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
          {
            id: 'flower4-16',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-200' />,
            startPosition: { x: '300%', y: '900px' },
            endPosition: { x: '70%', y: '-20%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower4-17',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower4-18',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower4-19',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
          {
            id: 'flower4-20',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-200' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '-50%', y: '-50%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower4-21',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-400' />,
            startPosition: { x: '-100%', y: '-500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower4-22',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-100' />,
            startPosition: { x: '100%', y: '-500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower4-23',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-300' />,
            startPosition: { x: '-100%', y: '500px' },
            endPosition: { x: '50%', y: '50%' },
          },
          {
            id: 'flower4-24',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-200' />,
            startPosition: { x: '100%', y: '500px' },
            endPosition: { x: '50%', y: '50%' },
          },
        ],
      },
      {
        flowers: [
          {
            id: 'flower4-25',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-300' />,
            startPosition: { x: '-300%', y: '-300px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower4-26',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-100' />,
            startPosition: { x: '300%', y: '-300px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower4-27',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-yellow-200' />,
            startPosition: { x: '-300%', y: '400px' },
            endPosition: { x: '0', y: '0' },
          },
          {
            id: 'flower4-28',
            icon: <IoIosFlower className='w-32 h-32 md:w-96 md:h-96 text-blue-400' />,
            startPosition: { x: '300%', y: '400px' },
            endPosition: { x: '0', y: '0' },
          },
        ],
      },
    ],
  },
];
