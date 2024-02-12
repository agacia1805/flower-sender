'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/app/ui/button';
import Flower from '@/app/ui/flower';
import ShareEmail from '@/app/ui/shareEmail';
import { flowerGroups } from '@/app/ui/flowerGroups';
import { FlowerGroup } from '@/app/ui/types';

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<FlowerGroup | null>(null);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * flowerGroups.length);
    const randomGroup = flowerGroups[randomIndex];
    setSelectedGroup(randomGroup);
  };

  return (
    <div className='fixed left-0 flex w-full items-center justify-center'>
      {selectedGroup ? (
        selectedGroup.subgroups.map((subgroup, index) =>
          subgroup.flowers.map((flower) => (
            <Flower
              key={`${flower.id}-${index}`}
              flower={flower}
              animate={true}
            />
          ))
        )
      ) : (
        <Button onClick={handleButtonClick} name='Show flowers button'>
          Open me
        </Button>
      )}
      <ShareEmail />
    </div>
  );
}
