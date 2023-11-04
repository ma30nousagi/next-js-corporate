import Header from 'src/components/Header/page';
import { About } from 'src/components/About/page';
import { Footer } from 'src/components/Footer/page';
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About',
  description: 'こちらのページはAboutページです',
}

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
    
  )
}