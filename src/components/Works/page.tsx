import Link from 'next/link';
import Image from 'next/image';

const images = [
  '/img/works/wo-1.jpg', 
  '/img/works/wo-2.jpg', 
  '/img/works/wo-3.jpg', 
  '/img/works/wo-4.jpg',
  '/img/works/wo-5.jpg',
  '/img/works/wo-6.jpg',
  '/img/works/wo-7.jpg',
  '/img/works/wo-8.jpg'
];

export function Works() {
    return (
        <div>
            <main>
                <Image src="/img/about-hero.jpg" width={1920} height={300} alt="hero" className='w-full'/>
                <section className='max-w-5xl mx-auto py-20 px-5 md:px-0'>
                    <h1 className='text-2xl font-bold text-center mb-5'>Works</h1>
                    <p className='mb-10'>株式会社xxxがこれまでに開発したシステム一覧です。</p>
                    <ul className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                      {images.map((src: string, index: number) => {
                        return (
                          <li className="hover:opacity-80" key={index}>
                            <Image src={src} layout="responsive" width={300} height={300} alt="works" />
                          </li>
                        )
                      })}
                    </ul>
                    
                </section>                
            </main>
            
        </div>
        
    );
}