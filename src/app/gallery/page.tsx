'use client';

import * as React from 'react';
import '@/lib/env';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';

export default function GalleryPage() {
  return (
    <main className='flex flex-col h-screen justify-between'>
      <header>
        <Banner />
        <Navbar />
      </header>
      {/* mb-auto needed for bottom footer */}
      <section className='mb-auto'>
        <PageHeader
          title='Gallery'
          description='The gallery of Drive 2 Learn, where you can see our students in action.'
        />
        <Gallery />
      </section>
      <Footer />
    </main>
  );
}
