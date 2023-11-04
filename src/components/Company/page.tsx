import Link from 'next/link';
import Image from 'next/image';


export function Company() {
    return (
        <div>
            <main>
                <Image src="/img/about-hero.jpg" width={1920} height={300} alt="hero" className='w-full'/>
                <section className='max-w-5xl mx-auto py-20 px-5 md:px-0'>
                    <h1 className='text-2xl font-bold text-center mb-5'>Company Profile</h1>
                    <table className='border-collapse mx-auto max-w-3xl w-full my-20 border-solid border border-gray-200'>
                      <tbody>
                        <tr className='md:table-row block'>
                          <th className='bg-gray-100 md:w-3/12 w-full md:table-cell block pl-2 py-4 pr-4 text-center border-b'>企業名</th>
                          <td className='md:w-9/12 w-full md:table-cell block md:border-l border-b p-4 md:text-left text-center'>株式会社xxxxx</td>
                        </tr>
                        <tr className='md:table-row block'>
                          <th className='bg-gray-100 md:w-3/12 w-full md:table-cell block pl-2 py-4 pr-4 text-center border-b'>所在地</th>
                          <td className='md:w-9/12 w-full md:table-cell block md:border-l border-b p-4 md:text-left text-center'>東京都港区xxx</td>
                        </tr>
                        <tr className='md:table-row block'>
                          <th className='bg-gray-100 md:w-3/12 w-full md:table-cell block pl-2 py-4 pr-4 text-center md:border-0 border-b'>代表取締役</th>
                          <td className='md:w-9/12 w-full md:table-cell block md:border-l p-4 md:text-left text-center'>Mike Jones</td>
                        </tr>
                      </tbody>
                    </table>
                </section>                
            </main>            
        </div>        
    );
}