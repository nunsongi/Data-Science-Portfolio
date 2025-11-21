import React, { useMemo, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from 'react-icons/fa';
import { SiX, SiHuggingface } from 'react-icons/si';

// --- Palette
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
  <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs ${tone}`}>
    {children}
  </span>
);

const Section = ({ id, title, subtitle, tone, children, center }) => (
  <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className={`mb-8 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl sm:text-4xl font-bold ${tone.text}`}>{title}</h2>
      {subtitle && <p className={`mt-2 ${tone.sub}`}>{subtitle}</p>}
    </div>
    {children}
  </section>
);

const ProjectCard = ({ p, tone }) => (
  <article
    className={`group border rounded-2xl p-5 transition-all ${tone.card} hover:shadow-2xl hover:-translate-y-[2px]`}
  >
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
        <Tag key={t} tone={tone.chip}>
          {t}
        </Tag>
      ))}
    </div>
    <div className="mt-5 flex gap-3">
      <a
        href={p.demo}
        target="_blank"
        rel="noreferrer"
        className={`text-sm rounded-xl px-4 py-2 ${tone.button}`}
      >
        Demo
      </a>
      <a
        href={p.repo}
        target="_blank"
        rel="noreferrer"
        className={`text-sm rounded-xl px-4 py-2 ${tone.ghost}`}
      >
        Código
      </a>
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
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-');

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navItems = [
  { label: 'About',    id: 'home' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Projects', id: 'proyectos' },
  { label: 'Contact',  id: 'contacto' },
];

  return (
    <div className={`min-h-screen w-full bg-gradient-to-b ${tone.bg} transition-colors`}>
      {/* NAV */}
      <header className={`${tone.nav} sticky top-0 z-50 border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className={`font-extrabold tracking-tight text-xl ${tone.text}`}>
            Nunsongi<span className={`${tone.accent}`}> Junior Data Scientist</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, id }) => (
              <a
                key={label}
                href={`#${id}`}
                className={`${tone.sub} hover:${tone.accent} transition-colors`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
              aria-label="Cambiar tema"
              className={`
                rounded-xl px-4 py-2 border ${tone.card} ${tone.ring}
                bg-transparent hover:bg-violet-50
                dark:bg-white/5 dark:hover:bg-white/10
                dark:text-neutral-100
                font-semibold text-base transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                focus-visible:ring-fuchsia-400/50 dark:focus-visible:ring-white/30
                ${tone.sub}
              `}
            >
              {mode === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* HERO / SOBRE MÍ */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl bg-fuchsia-600/30" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl bg-violet-600/30" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className={`uppercase tracking-widest text-sm ${tone.sub}`}>Portafolio Personal</p>
              <h1 className={`mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold ${tone.text}`}>
                Hi, I’m Dayana — a.k.a <span className={`${tone.accent}`}>Nunsongi</span>
              </h1>
              {/* nuevo texto de sobre mí aquí */}
              <p className={`mt-4 max-w-2xl ${tone.sub}`}>
                I’m a junior data scientist and self-taught learner focused on end-to-end data workflows: 
                from exploring messy datasets and asking the right questions to building machine learning 
                models and communicating insights with clear visualizations. I enjoy working on AI/ML 
                projects that solve real problems 
                and help people make better decisions. 📚💫
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#proyectos"
                  className={`rounded-xl px-5 py-3 text-sm font-semibold ${tone.button}`}
                >
                  Ver Proyectos
                </a>
                <a
                  href="#contacto"
                  className={`rounded-xl px-5 py-3 text-sm font-semibold ${tone.ghost}`}
                >
                  Contactar
                </a>
              </div>
              {/* chips de librerías ELIMINADOS del hero */}
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

      {/* SKILLS */}
          <Section
            id="skills"
            title="Skills"
            tone={tone}
          >
            <div className={`border rounded-2xl p-6 ${tone.card} max-w-5xl mx-auto`}>
              <p className={`mt-1 text-sm ${tone.sub} text-center`}>
                Technologies I use the most.
              </p>

             <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Tag tone={tone.chip}>Python</Tag>
                <Tag tone={tone.chip}>Pandas</Tag>
                <Tag tone={tone.chip}>Numpy</Tag>
                <Tag tone={tone.chip}>Matplotlib</Tag>
                <Tag tone={tone.chip}>ScikitLearn</Tag>
                <Tag tone={tone.chip}>PyTorch</Tag>
                <Tag tone={tone.chip}>TensorFlow</Tag>
                {/* aquí puedes seguir agregando más skills cuando quieras */}
              </div>
            </div>
          </Section>


      {/* PROYECTOS */}
      <Section
        id="proyectos"
        title="Proyectos Destacados"
        subtitle="Selección de trabajos y estudios"
        tone={tone}
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} tone={tone} />
          ))}
        </div>
      </Section>

      {/* (SECCIÓN SOBRE MÍ ORIGINAL ELIMINADA) */}

      {/* CONTACTO */}
      <Section id="contacto" title="Contacto" tone={tone} center>
        <div className="flex justify-center">
          <div className={`border rounded-2xl p-6 ${tone.card} max-w-xl w-full`}>
            <p className={`${tone.sub} mt-2`}>
              ¿Quieres trabajar conmigo? Para proyectos de datos u oportunidades laborales, contáctame
              por LinkedIn o por correo. No respondo a spam ni a mensajes comerciales.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {/* GitHub */}
              <a
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm ${tone.ghost}`}
                href="https://github.com/nunsongi"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm ${tone.ghost}`}
                href="https://www.linkedin.com/in/dayana-c-a3470b299"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              {/* X */}
              <a
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm ${tone.ghost}`}
                href="https://x.com/nunsongi613"
                target="_blank"
                rel="noreferrer"
              >
                <SiX className="w-4 h-4" />
                <span>X</span>
              </a>

              {/* Medium */}
              <a
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm ${tone.ghost}`}
                href="https://medium.com/@nunsongi0613"
                target="_blank"
                rel="noreferrer"
              >
                <FaMedium className="w-4 h-4" />
                <span>Medium</span>
              </a>

              {/* Hugging Face */}
              <a
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm ${tone.ghost}`}
                href="https://huggingface.co/nunsongi"
                target="_blank"
                rel="noreferrer"
              >
                <SiHuggingface className="w-4 h-4" />
                <span>Hugging Face</span>
              </a>

              {/* Email */}
              <a
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm ${tone.ghost}`}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nunsongi0613@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`${tone.sub}`}>© {new Date().getFullYear()} Nunsongi | Portafolio.</p>
          <div className="flex gap-3 text-sm">
            <a href="#skills" className={`${tone.sub} hover:${tone.accent}`}>
              Skills
            </a>
            <a href="#proyectos" className={`${tone.sub} hover:${tone.accent}`}>
              Proyectos
            </a>
            <a href="#contacto" className={`${tone.sub} hover:${tone.accent}`}>
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
