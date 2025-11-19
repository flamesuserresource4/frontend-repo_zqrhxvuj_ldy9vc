import { Cpu, Headphones, LineChart, Shield, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Arquitectura en tiempo real',
    desc: 'Procesamiento de voz de baja latencia con pipelines optimizados y streaming bidireccional.',
  },
  {
    icon: Headphones,
    title: 'Agentes multicanal',
    desc: 'Integra telefonía, web y apps móviles con un motor de orquestación único.',
  },
  {
    icon: Zap,
    title: 'Escalado elástico',
    desc: 'Autoescalado transparente para picos de tráfico y alta disponibilidad garantizada.',
  },
  {
    icon: Shield,
    title: 'Seguridad empresarial',
    desc: 'Cifrado extremo a extremo, cumplimiento y controles granulares de acceso.',
  },
  {
    icon: LineChart,
    title: 'Analítica avanzada',
    desc: 'Dashboard con métricas de intentos, sentiment, NLU y calidad de audio en vivo.',
  },
  {
    icon: Globe,
    title: 'Global-ready',
    desc: 'Locales, acentos y TTS multilenguaje con detección automática y fallback inteligente.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_10%_10%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Todo lo que necesitas para orquestar</h2>
          <p className="mt-3 text-white/70">Componentes modulares que se conectan como bloques: prompts, flujos, conectores y métricas.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-500/30 to-sky-400/30 text-violet-200 ring-1 ring-inset ring-white/10">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
