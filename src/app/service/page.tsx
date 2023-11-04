import Header from 'src/components/Header/page';
import Service from 'src/components/Service/page';
import { Footer } from 'src/components/Footer/page';
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Service',
  description: 'こちらのページはServiceページです',
}

export default function Home() {
  return (
    <div>
      <Header />
      <Service />
      <Footer />
    </div>    
  );
}