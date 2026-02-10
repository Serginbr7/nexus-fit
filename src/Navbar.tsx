import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black tracking-tighter text-primary">
          NEXUS<span className="text-secondary dark:text-white">FIT</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex text-secondary dark:text-white">
          <Link href="#catalogo" className="text-sm font-medium hover:text-primary transition-colors">Catálogo</Link>
          <Link href="#planos" className="text-sm font-medium hover:text-primary transition-colors">Planos</Link>
          <button className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-105">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}