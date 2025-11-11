import React, { useMemo, useState } from 'react';

// --- Palette
// Dark: purple + black
// Light: lilac + white
const PALETTE = {
  dark: {
    bg: 'from-[#0b0416] via-[#140424] to-[#0b0416]',
    card: 'bg-[#151021]/80 border-purple-800/50',
    text: 'text-white',
    sub: 'text-white/70',
    accent: 'text-fuchsia-400',
    ring: 'ring-fuchsia-500/40',
    chip: 'bg-fuchsia-900/40 text-fuchsia-100 border-fuchsia-500/30',
    button: 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white',
    ghost: 'bg-white/10 hover:bg-white/20 text-white',
    nav: 'bg-[#0f0a19]/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur',
  },
  light: {
    bg: 'from-white via-[#faf6ff] to-white',
    card: 'bg-white border-violet-200',
    text: 'text-zinc-900',
    sub: 'text-zinc-600',
    accent: 'text-violet-600',
    ring: 'ring-violet-500/30',
    chip: 'bg-violet-100 text-violet-800 border-violet-300',
    button: 'bg-violet-600 hover:bg-violet-500 text-white',
    ghost: 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900',
    nav: 'bg-white/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur',
  },
};

const Tag = ({ children, tone }) => (
  <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs ${tone}`}>{children}</span>
);

const Section = ({ id, title, subtitle, tone, children }) => (
  <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="mb-8">
      <h2 className={`text-3xl sm:text-4xl font-bold ${tone.text}`}>{title}</h2>
      {subtitle && <p className={`mt-2 ${tone.sub}`}>{subtitle}</p>}
    </div>
    {children}
  </section>
);

const ProjectCard = ({ p, tone }) => (
  <article className={`group border rounded-2xl p-5 transition-all ${tone.card} hover:shadow-2xl hover:-translate-y-[2px]`}> 
    <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-fuchsia-600/20 via-purple-600/10 to-blue-600/20 grid place-items-center">
      <span className="text-sm opacity-60">Preview</span>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <h3 className={`font-semibold text-lg ${tone.text}`}>{p.title}</h3>
      <Tag tone={tone.chip}>{p.year}</Tag>
    </div>
    <p className={`mt-2 ${tone.sub}`}>{p.desc}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {p.tags.map((t) => (
        <Tag key={t} tone={tone.chip}>{t}</Tag>
      ))}
    </div>
    <div className="mt-5 flex gap-3">
      <a href={p.demo} target="_blank" rel="noreferrer" className={`text-sm rounded-xl px-4 py-2 ${tone.button}`}>Demo</a>
      <a href={p.repo} target="_blank" rel="noreferrer" className={`text-sm rounded-xl px-4 py-2 ${tone.ghost}`}>Código</a>
    </div>
  </article>
);

export default function PortfolioNunsongi() {
  const [mode, setMode] = useState('dark');
  const tone = useMemo(() => (mode === 'dark' ? PALETTE.dark : PALETTE.light), [mode]);

  const projects = [
    {
      title: 'Mapa de Riesgos Quito',
      year: '2025',
      desc: 'Análisis de sismos, lluvias y olas de calor con Python. Limpieza, EDA y visualizaciones interactivas.',
      tags: ['Python', 'Pandas', 'GeoPandas', 'EDA'],
      demo: '#',
      repo: '#',
    },
    {
      title: 'Clasificador de Tweets (NLP)',
      year: '2025',
      desc: 'Modelo básico para clasificar sentimiento en español. Pipeline reproducible y métricas claras.',
      tags: ['Python', 'scikit-learn', 'NLP'],
      demo: '#',
      repo: '#',
    },
    {
      title: 'Dashboard de Hábitos',
      year: '2024',
      desc: 'Aplicación web para seguimiento de estudio y Pomodoros. Exporta reportes semanales.',
      tags: ['React', 'Vite', 'Tailwind'],
      demo: '#',
      repo: '#',
    },
  ];

  const expertise = [
    { title: 'Python', desc: 'Pandas • Numpy • Matplotlib • Jupyter', icon: '🐍' },
    { title: 'Ciencia de Datos', desc: 'EDA • Limpieza • Feature Engineering', icon: '📊' },
    { title: 'Machine Learning', desc: 'Modelos clásicos • Evaluación • Pipelines', icon: '🤖' },
    { title: 'Web', desc: 'React • Tailwind • Vite', icon: '🕸️' },
  ];

  const slugify = (s) =>
    s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

  return ( 
   <div className={`min-h-screen w-full bg-gradient-to-b ${tone.bg} transition-colors`}>
     {/* NAV */} 
     <header className={`${tone.nav} sticky top-0 z-50 border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className={`font-extrabold tracking-tight text-xl ${tone.text} text-neutral-900 dark:text-neutral-100`}
        >
          Nunsongi
          <span className="hidden sm:inline text-sm font-semibold text-white/90 opacity-80">
            · Junior Data Scientist
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {['Proyectos', 'Habilidades', 'Sobre mí', 'Contacto'].map((item) => (
           <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`${tone.sub} hover:${tone.accent} transition-colors`}>
            {item}
           </a>
         ))}
        </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} aria-label="Cambiar tema" className={`rounded-xl px-3 py-2 border ${tone.card} ${tone.ring}`}>
              {mode === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
            </button>
        </div>
      </div>
    </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl bg-fuchsia-600/30"/>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl bg-violet-600/30"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className={`uppercase tracking-widest text-sm ${tone.sub}`}>Portafolio Personal</p>
              <h1 className={`mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold ${tone.text}`}>
                Hi, I’m Dayana — a.k.a <span className={`${tone.accent}`}>Nunsongi</span>
                <br className="hidden sm:block"/>
                
              </h1>
              <p className={`mt-4 max-w-2xl ${tone.sub}`}>
                 
                I’m a junior data scientist and self-taught learner exploring <span className="font-semibold">AI/ML</span>. 
                My goal is to build intelligent systems that learn from data and make sense of the world. 📚💫
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#proyectos" className={`rounded-xl px-5 py-3 text-sm font-semibold ${tone.button}`}>Ver Proyectos</a>
                <a href="#contacto" className={`rounded-xl px-5 py-3 text-sm font-semibold ${tone.ghost}`}>Contactar</a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <Tag tone={tone.chip}>Python</Tag>
                <Tag tone={tone.chip}>Pandas</Tag>
                <Tag tone={tone.chip}>Numpy</Tag>
                <Tag tone={tone.chip}>Matplotlib</Tag>
                <Tag tone={tone.chip}>ScikitLearn</Tag>
                <Tag tone={tone.chip}>PyTorch</Tag>
                <Tag tone={tone.chip}>TensorFlow</Tag>
              </div>
            </div>
            <div className={`rounded-3xl border ${tone.card} p-6`}> 
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}avatar.jpg`}
                  alt="Avatar de Dayana (Nunsongi)"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <Section id="habilidades" title="Áreas de Experiencia" subtitle="Lo que disfruto construir" tone={tone}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((e) => (
            <div key={e.title} className={`border rounded-2xl p-6 ${tone.card}`}>
              <div className="text-3xl">{e.icon}</div>
              <h3 className={`mt-3 font-semibold text-lg ${tone.text}`}>{e.title}</h3>
              <p className={`mt-1 text-sm ${tone.sub}`}>{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="proyectos" title="Proyectos Destacados" subtitle="Selección de trabajos y estudios" tone={tone}>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} tone={tone} />
          ))}
        </div>
      </Section>

      {/* WHAT TO USE */}
      <Section id="stack" title="¿Qué lenguaje uso para este sitio?" subtitle="Mi pila recomendada" tone={tone}>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className={`border rounded-2xl p-6 ${tone.card}`}>
            <h3 className={`font-semibold text-xl ${tone.text}`}>Frontend</h3>
            <ul className={`mt-3 list-disc pl-5 space-y-1 ${tone.sub}`}>
              <li><b className={tone.accent}>React + Vite</b> para componentes y rendimiento.</li>
              <li><b className={tone.accent}>TailwindCSS</b> para estilos rápidos y consistentes.</li>
              <li>Soporte de modo <b>oscuro/claro</b> con estado local.</li>
            </ul>
          </div>
          <div className={`border rounded-2xl p-6 ${tone.card}`}>
            <h3 className={`font-semibold text-xl ${tone.text}`}>Datos & ML</h3>
            <ul className={`mt-3 list-disc pl-5 space-y-1 ${tone.sub}`}>
              <li><b className={tone.accent}>Python</b> como lenguaje principal.</li>
              <li>Pandas / scikit-learn / Matplotlib para prototipos.</li>
              <li>Publica notebooks con <b>nbviewer</b> o convierte resultados en dashboards.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="sobre-mí" title="Sobre mí" subtitle="Un poco de contexto" tone={tone}>
        <div className={`grid lg:grid-cols-3 gap-6`}>
          <div className={`border rounded-2xl p-6 ${tone.card} lg:col-span-2`}>
            <p className={`${tone.sub}`}>
              Soy Dayana, una chica curiosa que está formándose en Ciencia de Datos. Me interesan los
              procesos completos: desde formular preguntas hasta entregar visualizaciones claras y
              modelos evaluados con rigor. Busco oportunidades para aprender, colaborar y crear
              herramientas útiles.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Tag tone={tone.chip}>Autodidacta</Tag>
              <Tag tone={tone.chip}>Pensamiento crítico</Tag>
              <Tag tone={tone.chip}>Aprendizaje continuo</Tag>
            </div>
          </div>
          <div className={`border rounded-2xl p-6 ${tone.card}`}>
            <h4 className={`font-semibold ${tone.text}`}>Disponibilidad</h4>
            <ul className={`mt-2 space-y-1 text-sm ${tone.sub}`}>
              <li>• Proyectos freelance de análisis de datos</li>
              <li>• Colaboraciones open-source</li>
              <li>• Mentorías/pares de estudio</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contacto" title="Contacto" subtitle="¿Tienes una idea? Hablemos" tone={tone}>
        <div className={`grid md:grid-cols-2 gap-6`}>
          <div className={`border rounded-2xl p-6 ${tone.card}`}>
            <h4 className={`font-semibold ${tone.text}`}>Redes</h4>
            <p className={`${tone.sub} mt-2`}>Prefiero mensajes claros y concretos. ¡Gracias por escribir!</p>
            <div className="mt-4 flex gap-3">
              <a className={`rounded-xl px-4 py-2 text-sm ${tone.ghost}`} href="#">GitHub</a>
              <a className={`rounded-xl px-4 py-2 text-sm ${tone.ghost}`} href="#">LinkedIn</a>
              <a className={`rounded-xl px-4 py-2 text-sm ${tone.ghost}`} href="#">Email</a>
            </div>
          </div>
          <form className={`border rounded-2xl p-6 ${tone.card}`}
                onSubmit={(e)=>{e.preventDefault(); alert('¡Gracias! Mensaje enviado (demo).');}}>
            <div className="grid gap-4">
              <div>
                <label className={`block text-sm mb-1 ${tone.sub}`}>Nombre</label>
                <input className={`w-full rounded-xl border px-3 py-2 outline-none ${tone.ring} ${mode==='dark'?'bg-transparent text-white placeholder-white/40':'bg-white text-zinc-900 placeholder-zinc-500'}`} placeholder="Tu nombre"/>
              </div>
              <div>
                <label className={`block text-sm mb-1 ${tone.sub}`}>Email</label>
                <input type="email" className={`w-full rounded-xl border px-3 py-2 outline-none ${tone.ring} ${mode==='dark'?'bg-transparent text-white placeholder-white/40':'bg-white text-zinc-900 placeholder-zinc-500'}`} placeholder="tu@email.com"/>
              </div>
              <div>
                <label className={`block text-sm mb-1 ${tone.sub}`}>Mensaje</label>
                <textarea rows={4} className={`w-full rounded-xl border px-3 py-2 outline-none ${tone.ring} ${mode==='dark'?'bg-transparent text-white placeholder-white/40':'bg-white text-zinc-900 placeholder-zinc-500'}`} placeholder="Cuéntame sobre tu proyecto"/>
              </div>
              <button className={`rounded-xl px-5 py-3 text-sm font-semibold ${tone.button}`}>Enviar</button>
            </div>
          </form>
        </div>
      </Section>

      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`${tone.sub}`}>© {new Date().getFullYear()} Nunsongi | Portafolio.</p>
          <div className="flex gap-3 text-sm">
            <a href="#stack" className={`${tone.sub} hover:${tone.accent}`}>Stack</a>
            <a href="#proyectos" className={`${tone.sub} hover:${tone.accent}`}>Proyectos</a>
            <a href="#contacto" className={`${tone.sub} hover:${tone.accent}`}>Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
