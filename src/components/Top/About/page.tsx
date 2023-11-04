import Image from 'next/image';
import Link from 'next/link';

export default function AboutTop() {
  return (
    <div>
      <section style={{ backgroundImage: "url(/img/about-hero.jpg)", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}className='w-full py-20 text-center'>
          <h2 className='text-2xl font-bold mb-4 text-white'>About</h2>
          <button className='bg-black px-6 py-3'><Link href="/about" className='text-xs text-center font-bold text-white'>詳しく見る</Link></button>
      </section>
    </div>
  );
}