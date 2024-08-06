'use client';

import dynamic from 'next/dynamic';
import * as React from 'react';
import { Suspense } from 'react';
import '@/lib/env';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import { toast } from '@/components/ui/use-toast';

const SelectFormClient = dynamic(() => import('@/components/CourseSelection'), {
  suspense: true,
});

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '',
// );

export default function BookPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setTimeout(() => {
        toast({
          title: 'Deposit made!',
          description: 'You will receive an email confirmation.',
        });
      }, 1000);
    }

    if (query.get('canceled')) {
      setTimeout(() => {
        toast({
          title: 'Deposit canceled! ',
          description:
            'Continue to shop around and checkout when you’re ready.',
        });
      }, 1000);
    }
  }, []);

  return (
    <main className='flex flex-col h-screen justify-between'>
      <header>
        <Banner />
        <Navbar />
      </header>
      <section className='mb-auto'>
        <PageHeader
          title='Choose Your Course'
          description='Pick a course that suits you.'
        />
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <div className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold mb-4'>Terms and Conditions</h1>
            <p className='mb-4'>
              These terms and conditions outline the rules and regulations for
              driving lessons with Drive 2 Learn.
            </p>
            <h2 className='text-2xl font-bold mb-2'>Requirements</h2>
            <p className='mb-4'>In order to have driving lessons you must:</p>
            <ul className='list-disc list-inside mb-4'>
              <li>Be aged 17 or older (16 or over if disabled)</li>
              <li>
                Hold a driving licence that is valid for the UK (provisional,
                full or an appropriate foreign licence)
              </li>
            </ul>
            <p className='mb-4'>
              It is your responsibility to provide your instructor with proof
              that you have a valid licence to drive before the commencement of
              your first driving lesson. If you fail to provide this proof, your
              instructor is entitled to refuse to conduct the driving lesson but
              may still charge you for such driving lesson.
            </p>
            <h2 className='text-2xl font-bold mb-2'>Paying For Lessons</h2>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              doloribus vero dolore voluptatem ea, explicabo eum fuga optio in
              eveniet ad repellendus magni quidem corporis? Aliquam optio
              recusandae dicta voluptas.
            </p>
            <h3 className='text-xl font-semibold mb-2'>Refund Policy</h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              doloribus vero dolore voluptatem ea, explicabo eum fuga optio in
              eveniet ad repellendus magni quidem corporis? Aliquam optio
              recusandae dicta voluptas.
            </p>
            <div className='mt-10'>
              <Suspense fallback={<div>Loading...</div>}>
                <SelectFormClient />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
