'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';
import ColorButton from './ColorButton';

export default function Header() {
  const currentPath = usePathname();

  return (
    <header className='flex justify-between items-center sticky top-0 py-4 px-4 border-b bg-white z-10'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Instagram</h1>
      </Link>

      <nav className='flex items-center gap-x-4'>
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
        <ColorButton text='Sign in' onClick={() => {}} />
      </nav>
    </header>
  );
}
