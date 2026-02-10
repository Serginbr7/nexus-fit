export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-24 text-white">
      {/* 1. Título Principal (Hero Section) */}
      <section className="px-6 text-center py-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
          TREINE COM <span className="text-orange-500">INTENSIDADE</span>
        </h1>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          A melhor estrutura de Franca para você alcançar sua melhor versão. 
          Ambiente climatizado, máquinas modernas e foco em resultado.
        </p>
      </section>

      {/* 2. Seção de Planos (Grid de 3 Colunas) */}
      <section id="planos" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Card Plano Bronze */}
          <div className="group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-orange-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-zinc-400 group-hover:text-white transition-colors">Bronze</h3>
            <div className="flex items-baseline gap-1 mt-4">
              <span className="text-4xl font-black text-white">R$ 99</span>
              <span className="text-zinc-500 font-medium">/mês</span>
            </div>
            <p className="mt-4 text-zinc-500 text-sm">
              Ideal para quem está começando e foca no essencial da musculação.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Acesso à área de musculação
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Treino em qualquer horário
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-600">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                Sem acesso a aulas de Cross
              </li>
            </ul>
            <button className="w-full mt-8 bg-zinc-800 py-3 rounded-xl font-bold text-white hover:bg-orange-500 transition-colors">
              Começar Agora
            </button>
          </div>

          {/* Card Plano Prata - DESTAQUE CENTRAL */}
          <div className="relative bg-orange-500 p-8 rounded-3xl transform md:scale-110 z-10 shadow-2xl shadow-orange-500/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-orange-600 text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
              Mais Procurado
            </div>
            <h3 className="text-xl font-bold text-orange-950">Prata</h3>
            <div className="flex items-baseline gap-1 mt-4">
              <span className="text-4xl font-black text-white">R$ 149</span>
              <span className="text-orange-900 font-medium">/mês</span>
            </div>
            <p className="mt-4 text-orange-900 text-sm font-medium">
              O melhor custo-benefício de Franca. Acesso total e suporte VIP.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-sm text-white font-medium">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                Tudo do plano Bronze
              </li>
              <li className="flex items-center gap-3 text-sm text-white font-medium">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                Acesso a aulas de Cross e Funcional
              </li>
              <li className="flex items-center gap-3 text-sm text-white font-medium">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                Avaliação física mensal
              </li>
            </ul>
            <button className="w-full mt-8 bg-white py-3 rounded-xl font-bold text-orange-600 hover:bg-zinc-100 transition-colors">
              Escolher Plano Prata
            </button>
          </div>

          {/* Card Plano Black */}
          <div className="group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-400 transition-all duration-300">
            <h3 className="text-xl font-bold text-zinc-500 group-hover:text-white transition-colors">Black</h3>
            <div className="flex items-baseline gap-1 mt-4">
              <span className="text-4xl font-black text-white">R$ 199</span>
              <span className="text-zinc-500 font-medium">/mês</span>
            </div>
            <p className="mt-4 text-zinc-500 text-sm">
              A experiência completa para quem não aceita menos que o topo.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Tudo do plano Prata
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Acesso a todas as unidades Nexus
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Leve um convidado 5x por mês
              </li>
            </ul>
            <button className="w-full mt-8 bg-white py-3 rounded-xl font-bold text-black hover:bg-zinc-200 transition-colors">
              Seja Black
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}