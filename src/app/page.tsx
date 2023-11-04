'use client';

import Image from 'next/image';
import Header from 'src/components/Header/page';
import Main from '@/components/Top/Main/page';
import { Footer } from 'src/components/Footer/page';
import { useEffect } from 'react';



export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
    
  );
}
