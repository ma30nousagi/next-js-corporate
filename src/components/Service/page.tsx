import Image from 'next/image';

const CARD = [
    {
        title: "カードタイトル1",
        src: "/img/tokyo-land.jpg",
        text: "弊社は10年の歴史を誇り、5年後の上場を目指して努力します。社員の成長と幸福を大切にし、そのための支援を行います。皆様の信頼と協力が、私たちの成長に不可欠です。共に新たな未来を切り開くため、皆様とのパートナーシップに感謝し、期待しています。"
    },
    {
        title: "カードタイトル2",
        src: "/img/tokyo-land.jpg",
        text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります"
    },
    {
        title: "カードタイトル3",
        src: "/img/tokyo-land.jpg",
        text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります"
    },
];

export default function Service() {
  return (
    <div>
      <Image src="/img/about-hero.jpg" width={1920} height={300} alt="hero" className='w-full'/>
      <section className='mx-auto px-5 py-20 max-w-5xl'>
          <h2 className='text-2xl text-center font-bold mb-4'>Service</h2>
          <div className='md:grid md:grid-cols-3 md:gap-x-5'>
              {CARD.map((item, index) => (
                  <article key={index} className='shadow-md md:w-80 w-full px-4 py-6 rounded-lg mb-5 md:mb-0'>
                      <div className='mb-4'>
                          <Image
                              src={item.src}
                              alt="message"
                              width={600}
                              height={450}
                              className='w-full md:mb-0 mb-6'
                          />
                      </div>
                      <div>
                          <h3 className='text-lg font-bold mb-5'>{item.title}</h3>
                          <p className='text-base'>{item.text}</p>
                      </div>
                  </article>
              ))}           
          </div>
      </section>
    </div>
  );
}