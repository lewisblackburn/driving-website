'use client';

import * as React from 'react';
import '@/lib/env';

import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Hero } from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { Pricing } from '@/components/Pricing';
import { Services } from '@/components/Services';

export default function HomePage() {
  return (
    <main className='flex flex-col h-screen justify-between'>
      <header>
        <Banner />
        <Navbar />
      </header>
      {/* mb-auto needed for bottom footer */}
      <section className='mb-auto'>
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
