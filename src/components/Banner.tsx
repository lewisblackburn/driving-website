import { MailIcon, Share2 } from 'lucide-react';
import Link from 'next/link';
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
      <Link href='/#contact'>
        <div className='flex items-center space-x-3'>
          <MailIcon className='text-primary' />
          <span className='font-bold uppercase text-xs tracking-widest'>
            Get In Touch
          </span>
        </div>
      </Link>
      {/* <div>
        <div className='flex items-center space-x-3'>
          <MapPin className='text-primary' />
          <span className='font-bold uppercase text-xs tracking-widest'>
            About Us
          </span>
        </div>
      </div> */}
      <div className='hidden lg:flex items-center'>
        <Share2 className='text-primary mr-3' />
        <span className='font-bold uppercase text-xs tracking-widest mr-2'>
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
