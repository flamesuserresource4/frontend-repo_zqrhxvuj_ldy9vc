import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="demo" className="relative bg-slate-950 py-16 text-white">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-sky-500/10 to-amber-500/10 p-8 backdrop-blur-xl">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Solicita un tour guiado</h3>
              <p className="mt-1 text-white/75">Descubre cómo lanzar tu agente de voz en minutos con nuestra orquesta de IA.</p>
            </div>
            <a
              href="/test"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Probar conectividad
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
