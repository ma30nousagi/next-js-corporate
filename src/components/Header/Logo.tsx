import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
    return (
      <div>
        <div className=''>
            <Link href='/'><Image src="/img/compile.png" alt="logo" width={80} height={80} /></Link>
        </div>
      </div>
      
    );
  }