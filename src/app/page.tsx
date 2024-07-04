'use client';

import * as React from 'react';
import '@/lib/env';

import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <main>
      <header>
        <Banner />
        <Navbar />
      </header>
    </main>
  );
}
