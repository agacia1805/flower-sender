import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-center p-10 md:justify-start'>
      <Link href='/' passHref>
        <span className='sr-only'>Flower sender app homepage</span>
      </Link>
    </header>
  );
}
