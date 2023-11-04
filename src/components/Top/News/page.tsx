import Image from 'next/image';

const LISTS = [
    {
        date: "2023.10.23",
        title: "News1",
        text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります"
    },
    {
        date: "2023.10.25",
        title: "News2",
        text: "2テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります"
    },
];


export default function News() {
return (
  <div>
    <section className='bg-gray-400 text-white'>
        <div className='max-w-5xl mx-auto py-6'>
            <ul>                
                {LISTS.map((item, index) => {
                    return (    
                        <li key={index} className='flex items-center p-5'>
                        <time>{item.date}</time>
                        <h3 className='pl-2 md:pl-6 font-bold'>{item.title}</h3>
                        <p className='pl-2 md:pl-6 overflow-hidden whitespace-nowrap text-ellipsis'>{item.text}</p>
                        </li>    
                    );
                })}               
            </ul>
        </div>
    </section>
  </div>
);
}