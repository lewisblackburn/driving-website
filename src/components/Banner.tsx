import { Clock, MapPin, Share2 } from 'lucide-react';
import * as React from 'react';
import {
  RiFacebookFill,
  RiInstagramFill,
  RiPhoneFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri';

export default function Banner() {
  return (
    <div className='flex flex-col space-y-3 lg:space-y-0 lg:flex-row items-center justify-between bg-foreground text-white px-5 xl:px-32 py-5'>
      <div>
        <div className='flex items-center space-x-2'>
          <Clock className='text-primary' />
          <span className='font-bold uppercase text-xs tracking-widest'>
            Get In Touch
          </span>
        </div>
      </div>
      <div>
        <div className='flex items-center space-x-2'>
          <MapPin className='text-primary' />
          <span className='font-bold uppercase text-xs tracking-widest'>
            About Us
          </span>
        </div>
      </div>
      <div className='hidden lg:flex items-center space-x-2'>
        <Share2 className='text-primary' />
        <span className='font-bold uppercase text-xs tracking-widest'>
          Social Media:
        </span>
        <div className='flex items-center space-x-3'>
          <RiFacebookFill />
          <RiInstagramFill />
          <RiTwitterFill />
          <RiYoutubeFill />
          <RiPhoneFill />
        </div>
      </div>
    </div>
  );
}
