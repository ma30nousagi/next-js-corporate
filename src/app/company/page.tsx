import Header from 'src/components/Header/page';
import { Footer } from 'src/components/Footer/page';
import type { Metadata } from 'next'
import { Company } from 'src/components/Company/page';



export const metadata: Metadata = {
  title: 'Company',
  description: 'こちらのページはCompanyページです',
}

export default function Home() {
  return (
    <div>
      <Header />
      <Company />
      <Footer />
    </div>
    
  )
}