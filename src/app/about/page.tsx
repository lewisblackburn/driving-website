'use client';

import * as React from 'react';
import '@/lib/env';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Reviews from '@/components/Reviews';

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
          title='About Us'
          description='At Drive 2 Learn, we work as hard as our students to make sure their driving ability is safe and to prepare them for the Test.'
        />
        <Reviews />
      </section>
      <Footer />
    </main>
  );
}
