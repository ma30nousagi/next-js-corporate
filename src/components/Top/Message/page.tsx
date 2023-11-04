import Image from 'next/image';

export default function Message() {
return (
  <div>
    <section className='mx-auto px-5 pt-20 max-w-5xl'>
        <div className='md:grid md:grid-cols-2 md:gap-x-5 md:items-center'>
          <Image src="/img/tokyo-land.jpg" width={600} height={450} alt="message" className='w-full  md:mb-0 mb-6'/>
          <div>
            <h3 className='text-lg font-bold mb-5'>未来を共に築く情熱、信頼、そして成長。Together, We Define Tomorrow</h3>
            <p className='text-base'>弊社は10年の歴史を誇り、5年後の上場を目指して努力します。社員の成長と幸福を大切にし、そのための支援を行います。皆様の信頼と協力が、私たちの成長に不可欠です。共に新たな未来を切り開くため、皆様とのパートナーシップに感謝し、期待しています。</p>
          </div>
        </div>
    </section>
  </div>
);
}