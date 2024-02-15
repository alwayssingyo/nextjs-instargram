'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';

export default function Header() {
  const currentPath = usePathname();

  return (
    <nav className='flex justify-between items-center sticky top-0 py-4 px-4 border-b bg-white'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Instagram</h1>
      </Link>

      <div className='flex items-center gap-x-4'>
        <div>
          <Link href='/'>
            <h2>{currentPath === '/' ? <AiFillHome /> : <AiOutlineHome />}</h2>
          </Link>
        </div>
        <div>
          <Link href='/search'>
            <h2>
              {currentPath === '/search' ? <RiSearchFill /> : <RiSearchLine />}
            </h2>
          </Link>
        </div>
        <div>
          <Link href='/new'>
            <h2>
              {currentPath === '/new' ? <BsPlusSquareFill /> : <BsPlusSquare />}
            </h2>
          </Link>
        </div>
        <div className='border-2 rounded-md py-1 px-2 border-fuchsia-500'>
          <Link href=''>Sign in</Link>
        </div>
      </div>
    </nav>
  );
}
