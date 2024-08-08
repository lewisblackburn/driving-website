'use client';

import Link from 'next/link';
import * as React from 'react';
import { RiCheckFill } from 'react-icons/ri';
import '@/lib/env';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

export default function SuccessPage() {
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setTimeout(() => {
        toast({
          title: 'Deposit Successful!',
          description:
            'Thank you for your purchanse. You will receive an email confirmation.',
        });
      }, 0);
    } else {
      window.location.href = '/';
    }
  }, []);

  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black space-y-10'>
          <RiCheckFill
            size={60}
            className='drop-shadow-glow animate-flicker text-green-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Deposit Successful</h1>
          <Link href='/'>
            <Button>Back to home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
