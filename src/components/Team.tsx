/* eslint-disable @next/next/no-img-element */

import { RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri';

const members = [
  {
    name: 'Alex',
    role: 'CEO | Instructor',
    image: '/images/alex.jpg',
  },
  {
    name: 'Stephen',
    role: 'Instructor',
    image: '/images/stephen.jpg',
  },
  {
    name: 'Katie',
    role: 'Instructor',
    image: '/images/katie.jpg',
  },
  {
    name: 'Chris',
    role: 'Instructor',
    image: '/images/chris.jpg',
  },
];

export const Team = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32'>
      <div className='grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-xl'>
        {members.map((member) => (
          <div key={member.name}>
            <div className='relative pb-56 mb-4 rounded shadow lg:pb-64'>
              <img
                className='absolute object-cover object-top w-full h-full rounded'
                src={member.image}
                alt='Person'
              />
            </div>
            <div className='flex flex-col sm:text-center'>
              <p className='text-lg font-bold'>{member.name}</p>
              <p className='mb-5 text-xs text-gray-800'>{member.role}</p>
              <div className='flex items-center space-x-3 sm:justify-center'>
                <RiFacebookBoxFill className='text-xl' />
                <RiInstagramFill className='text-xl' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
