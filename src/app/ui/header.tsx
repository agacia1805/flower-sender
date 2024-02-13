import Link from 'next/link';
import Logo from './logo';
import ShareEmail from './shareEmail';

export default function Header() {
  return (
    <header className='flex justify-between px-6 py-10 md:p-10 items-center'>
      <Link href='/' passHref>
        <Logo />
        <span className='sr-only'>Flower sender app homepage</span>
      </Link>
      <ShareEmail />
    </header>
  );
}
