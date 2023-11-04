import Link from 'next/link';
import Image from 'next/image';


export function Footer() {
    return (
        <div>
            <footer className='bg-blue-900 p-8 text-white'> 
                <section className='max-w-5xl mx-auto md:px-5 md:py-16 py-8'>
                    <div className='md:flex pb-16 md:justify-between md:gap-10'>
                        <div className='basis-1/3 mb-10 md:mb-0'>
                            <h2 className='text-xl font-bold mb-4'>COMPANY NAME</h2>
                            <h3 className='font-bold text-3xl'>未来を共に築く情熱、信頼、そして成長。Together, We Define Tomorrow</h3>
                        </div>
                        <nav className='basis-1/3 mb-10 md:mb-0'>
                            <p className='text-base font-bold mb-4'>INFORMATION</p>
                            <ul>
                                <li><Link href="/service" className="font-bold hover:border-b hver:border-gray-900">Service</Link></li>
                                <li><Link href="/works" className="font-bold hover:border-b hver:border-gray-900">Works</Link></li>
                                <li><Link href="/company" className="font-bold hover:border-b hver:border-gray-900">Company</Link></li>
                                <li><Link href="/about" className="font-bold hover:border-b hver:border-gray-900">About</Link></li>
                                <li><Link href="/contact" className="font-bold hover:border-b hver:border-gray-900">Contact</Link></li>
                            </ul>
                        </nav>
                        <div className='basis-1/3 grow'>
                            <div className='mb-5'>
                                <Link href='/'><Image src="/img/foot-1.jpg" alt="logo" width={250} height={200} /></Link>                   
                            </div>
                            <div className=''>
                                <Link href='/'><Image src="/img/foot-2.jpg" alt="logo" width={250} height={200} /></Link>                   
                            </div>
                        </div>
                    </div>
                    <div className='md:flex'>
                        <small>&copy;xxx inc. All Rights Reserved</small>
                        <ul className='text-xs text-gray-50 md:pl-16 mt-4 md:mt-0'>
                            <li><Link href="/" className="leading-relaxed">プライバシーポリシー</Link></li>
                            <li><Link href="/" className="leading-relaxed">運営会社</Link></li>
                        </ul>
                    </div>
                </section>                               
            </footer>
        </div>    
    );
  };