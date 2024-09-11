import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link'; // Import the Link component from Next.js

const Layout = ({ children }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Head>
        <meta name="description" content="Learn coding with curated video tutorials and comprehensive notes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-800 p-4 text-white">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">CampusCode</div>
          <div className="hidden md:flex space-x-4"> {/* Added space between links */}
            <Link href="/" passHref>
              <span className="hover:underline">Home</span> {/* Optional hover effect */}
            </Link>
            <Link href="/videos" passHref>
              <span className="hover:underline">Videos</span>
            </Link>
            <Link href="/notes" passHref>
              <span className="hover:underline">Notes</span>
            </Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden flex flex-col mt-2 space-y-2"> {/* Added space between menu items */}
            <Link href="/" passHref>
              <span className="hover:underline">Home</span>
            </Link>
            <Link href="/videos" passHref>
              <span className="hover:underline">Videos</span>
            </Link>
            <Link href="/notes" passHref>
              <span className="hover:underline">Notes</span>
            </Link>
          </div>
        )}
      </header>
      <main className="container mx-auto my-6">
        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-white mt-10">
        <div className="container mx-auto text-center">
          &copy; 2024 CampusCode. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
