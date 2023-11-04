import Header from 'src/components/Header/page';
import { Works } from 'src/components/Works/page';
import { Footer } from 'src/components/Footer/page';
import type { Metadata } from 'next'
import { useEffect } from 'react';


export const metadata: Metadata = {
  title: 'Works',
  description: 'こちらのページはWorksページです',
}

export default function Home() {
  return (
    <div>
      <Header />
      <Works />
      <Footer />
    </div>
    
  )
}