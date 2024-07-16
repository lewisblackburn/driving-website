import Link from 'next/link';
import { RiCarFill } from 'react-icons/ri';

export const Logo = () => {
  return (
    <Link href='/' className='flex items-center space-x-2'>
      <RiCarFill className='text-primary' size={32} />
      <h1 className='font-bold text-lg'>Drive 2 Learn</h1>
    </Link>
  );
};
