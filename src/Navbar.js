import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black tracking-tighter text-orange-500">
          NEXUS<span className="text-white">FIT</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex text-white">
          <Link href="#planos" className="text-sm font-medium hover:text-orange-500">Planos</Link>
          <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-105">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}