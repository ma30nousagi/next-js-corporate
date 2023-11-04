import Image from 'next/image';
import News from '@/components/Top/News/page';
import Message from '@/components/Top/Message/page';
import Card from '@/components/Top/Card/page';
import Slider from '@/components/Top/Slider/page';
import BannerSlide from '@/components/Top/Banner/page';
import AboutTop from '../About/page';


export default function Main() {
return (
  <div>
    <main className="w-full">
    {/* <Image src="/img/corp.jpg" width={1920} height={1080} alt="Home Image" className='md:block hidden'/>
    <Image src="/img/sp-visual.jpg" width={768} height={1080} alt="Sp Image" className='md:hidden block'/> */}
    <Slider />
    <News />
    <Message />
    <Card />
    <AboutTop />
    <BannerSlide />
    </main>
  </div>
);
}