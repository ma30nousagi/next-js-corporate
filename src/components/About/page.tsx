import Link from 'next/link';
import Image from 'next/image';


export function About() {
    return (
        <div>
            <main>
                <Image src="/img/about-hero.jpg" width={1920} height={300} alt="hero" className='w-full'/>
                <section className='max-w-5xl mx-auto py-20 px-5 md:px-0'>
                    <h1 className='text-2xl font-bold text-center mb-5'>タイトル</h1>
                    <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint modi exercitationem dolores vel temporibus consequatur, inventore maxime aut tenetur pariatur molestias dolor cupiditate est repudiandae optio nemo quia vero eaque, saepe architecto magnam autem similique nisi. Ab, minus. Iste sapiente tempore molestias quia alias, iusto voluptates possimus similique voluptatem, reiciendis explicabo, quaerat quae molestiae. Eum, architecto! Quasi saepe distinctio iusto illo? Enim porro id consequatur nostrum quidem assumenda, repellendus quis esse qui saepe blanditiis fugit asperiores numquam pariatur cupiditate quas perspiciatis ullam, ut quos! Vel numquam molestias dolorum eveniet iste sint illum, quaerat dolores nihil natus quae voluptates quia?</p>
                    <p className='mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga voluptate, quam accusamus ad quae aliquid animi dolor culpa officiis dolorem.</p>
                    <Image src="/img/corp.jpg" width={600} height={450} alt="hero" className='w-full mb-10'/>
                    <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint modi exercitationem dolores vel temporibus consequatur, inventore maxime aut tenetur pariatur molestias dolor cupiditate est repudiandae optio nemo quia vero eaque, saepe architecto magnam autem similique nisi. Ab, minus. Iste sapiente tempore molestias quia alias, iusto voluptates possimus similique voluptatem, reiciendis explicabo, quaerat quae molestiae. Eum, architecto! Quasi saepe distinctio iusto illo? Enim porro id consequatur nostrum quidem assumenda, repellendus quis esse qui saepe blanditiis fugit asperiores numquam pariatur cupiditate quas perspiciatis ullam, ut quos! Vel numquam molestias dolorum eveniet iste sint illum, quaerat dolores nihil natus quae voluptates quia?</p>
                    <p className='mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga voluptate, quam accusamus ad quae aliquid animi dolor culpa officiis dolorem.</p>
                </section>                
            </main>
            
        </div>
        
    );
}