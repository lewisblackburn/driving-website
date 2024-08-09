'use client';

import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import { Team } from '@/components/Team';

export default function InsturctorsPage() {
  return (
    <main className='flex flex-col h-screen justify-between'>
      <header>
        <Banner />
        <Navbar />
      </header>
      {/* mb-auto needed for bottom footer */}
      <section className='mb-auto'>
        <PageHeader
          title='Meet the Team'
          description='Our team of talented instructors are here to help you learn to drive safely and confidently. We are dedicated to helping you pass your driving test and become a safe driver for life.'
        />
        <Team />
        <div className='px-4 py-8 pb-40 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <div className='p-8 rounded shadow-xl sm:p-16'>
            <div className='flex flex-col lg:flex-row'>
              <div className='mb-6 lg:mb-0 lg:w-1/2 lg:pr-5'>
                <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                  We are now
                  <br className='hidden md:block' />
                  <span className='inline-block text-primary'>recruiting</span>
                </h2>
              </div>
              <div className='lg:w-1/2'>
                <p className='mb-4 text-base text-gray-700'>
                  If you would like to be part of our Drive2Learn community,
                  please do not hesitate to get in touch. Whether you are a PDI,
                  an ADI, or even considering entering this industry, we are
                  here to help.
                </p>
                <Link
                  href='/#contact'
                  className='inline-flex items-center font-semibold transition-colors duration-200 text-primary hover:text-red-800'
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
