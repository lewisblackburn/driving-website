import * as React from 'react';
import { RiCarFill } from 'react-icons/ri';

import { NavigationMenuDemo } from '@/components/NavigationMenu';
import { Separator } from '@/components/ui/separator';

import { Button } from './ui/button';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between border h-32 px-10">
      <div className="flex items-center space-x-2">
        <RiCarFill className="text-primary" size={32} />
        <h1 className="font-bold text-lg">Drive 2 Learn</h1>
      </div>
      <div className="flex items-center space-x-5">
        <NavigationMenuDemo />
        <Separator orientation="vertical" />
        <Button
          className="uppercase font-bold text-xs tracking-widest text-black"
          size="lg"
        >
          Consultation
        </Button>
      </div>
    </div>
  );
}
