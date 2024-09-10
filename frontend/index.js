import Link from 'next/link';
import Layout from '../components/Layouts';

export default function Home() {
  return (
    <Layout>
      <div className="relative h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

        {/* Quote and Watch Video Button */}
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-8">
            "Empower Your Coding Journey"
          </h1>
          <Link href="/videos" legacyBehavior>
            <button className="bg-white text-indigo-500 px-8 py-4 rounded-full shadow-lg hover:bg-indigo-500 hover:text-white transition duration-300">
              Watch Video
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
