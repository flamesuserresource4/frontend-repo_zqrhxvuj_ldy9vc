import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero />
      <Features />
      <CTA />
      <footer className="bg-slate-950 py-10 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} AIOS Center Orquesta — Futuro de agentes de voz impulsados por IA
        </p>
      </footer>
    </div>
  )
}

export default App
