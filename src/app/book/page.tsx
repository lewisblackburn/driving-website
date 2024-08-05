'use client';

import * as React from 'react';
import '@/lib/env';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';

export default function AboutPage() {
  return (
    <main className='flex flex-col h-screen justify-between'>
      <header>
        <Banner />
        <Navbar />
      </header>
      {/* mb-auto needed for bottom footer */}
      <section className='mb-auto'>
        <PageHeader
          title='Choose Your Course'
          description='Pick a course that suits you.'
        />
        {/* <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl'>
            Terms and Conditions
          </h2>
          <div className='flex flex-col space-y-3 mt-5'>
            <p>In order to have driving lessons you must:</p>
            <ul className='list-disc'>
              <li>Be aged 17 or older (16 or over if disabled)</li>
              <li>
                Hold a driving licence that is valid for the UK (provisional,
                full or an appropriate foreign licence)
              </li>
            </ul>
            <p>
              It is your responsibility to provide your instructor with proof
              that you have a valid licence to drive before the commencement of
              your first driving lesson. If you fail to provide this proof, your
              instructor is entitled to refuse to conduct the driving lesson but
              may still charge you for such driving lesson.
            </p>
          </div>
        </div> */}
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
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
