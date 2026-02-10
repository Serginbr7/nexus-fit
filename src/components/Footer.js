import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Coluna 1: Logo e Descrição */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-2xl font-black tracking-tighter text-orange-500">
            NEXUS<span className="text-white">FIT</span>
          </Link>
          <p className="mt-2 text-zinc-500 text-sm leading-relaxed">
            A academia que entende o seu ritmo em Franca. 
            Tecnologia, conforto e resultados reais.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h4 className="text-white font-bold mb-4">Explorar</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><Link href="#planos" className="hover:text-orange-500 transition-colors">Planos</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Aulas</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Unidades</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Horários */}
        <div>
          <h4 className="text-white font-bold mb-4">Funcionamento</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li>Seg - Sex: 05:00 - 23:00</li>
            <li>Sábado: 08:00 - 18:00</li>
            <li>Domingo: 09:00 - 13:00</li>
          </ul>
        </div>

        {/* Coluna 4: Contato Local */}
        <div>
          <h4 className="text-white font-bold mb-4">Contato</h4>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Av. Adhemar de Barros, Franca - SP <br />
            (16) 99999-9999
          </p>
        </div>

      </div>

      {/* Linha Final de Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
        © 2026 Nexus Fit. Desenvolvido para portfólio.
      </div>
    </footer>
  );
}