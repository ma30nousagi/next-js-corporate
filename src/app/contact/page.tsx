import Header from 'src/components/Header/page';
import { Footer } from 'src/components/Footer/page';
import type { Metadata } from 'next'
import { useEffect } from 'react';
import Contact from 'src/components/Contact/page';


export const metadata: Metadata = {
  title: 'Contactページ',
  description: 'こちらのページはContactページです',
}


export default function Home() {
  return (
    <div>
      <Header />
        <Contact />      
      <Footer />
    </div>
    
  )
}