'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, TrendingUp, Users, Clock, ChevronRight, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Hire-Purchase Loan Digitisation',
    subtitle: 'FinTech · Yoma Bank',
    description: 'Led a scrum team to build a hire-purchase loan application from scratch — cutting processing time from 2 weeks to just 3 minutes and achieving 99%+ uptime via automated workflows.',
    longDesc: 'As Senior Team Lead at Yoma Bank, I provided strategic vision to agile teams and key stakeholders, defining clear business and technical requirements and establishing comprehensive QA standards. Assisted in designing cloud architecture and services integration. The end result: loan processing collapsed from 2 weeks to 3 minutes — well beyond business expectations. Automated loan creation workflows drove 99%+ uptime. I proactively resolved development impediments to keep the team consistently meeting Sprint and Release Goals.',
    tags: ['FinTech', 'Scrum', 'Cloud Architecture', 'Process Automation'],
    metrics: [
      { icon: Clock, label: 'Loan processing', value: '3 min' },
      { icon: TrendingUp, label: 'Uptime achieved', value: '99%+' },
      { icon: TrendingUp, label: 'Time saved vs before', value: '2 wks→3m' },
    ],
    color: 'from-blue-600 to-indigo-600',
    accent: 'bg-blue-500',
    emoji: '🏦',
    year: '2019',
  },
  {
    id: 2,
    title: 'Identity Verification Service',
    subtitle: 'Prop-Tech · Coadjute',
    description: 'Owned and launched a scalable identity verification service for estate agents — hitting 1,000+ ID checks within the first few months and enabling compliance-ready onboarding at scale.',
    longDesc: 'At Coadjute, I quickly adapted to the prop-tech industry and led integrations with property data providers, identity verification services, and HMLR. I managed the entire process end-to-end: analysis, testing, stakeholder approvals, and development support. The identity verification service was built with compliance and UX as co-equal goals — estate agents could meet regulatory standards while users experienced a streamlined, user-friendly interface. User adoption was rapid: over 1,000 ID checks in the first few months. Continuous feedback loops drove iterative improvement post-launch.',
    tags: ['Prop-Tech', 'Identity Verification', 'Compliance', 'API Integrations'],
    metrics: [
      { icon: Users, label: 'ID checks (first months)', value: '1,000+' },
      { icon: TrendingUp, label: 'Compliance coverage', value: 'HMLR ready' },
      { icon: Clock, label: 'MVP delivered', value: '4 months' },
    ],
    color: 'from-indigo-600 to-purple-600',
    accent: 'bg-indigo-500',
    emoji: '🔐',
    year: '2023',
  },
  {
    id: 3,
    title: 'Digital Customer Onboarding',
    subtitle: 'Consulting · Elixirr',
    description: 'Owned the roadmap for a Digital Customer Onboarding product for banking clients — hitting 95% of feature deadlines, cutting time-to-market by 20%, and lifting client satisfaction by 30%.',
    longDesc: 'At Elixirr, I owned and prioritised roadmaps for two products: Digital Customer Onboarding and CRM. The challenge was translating complex client needs — including KYC, AML, and risk screening/scoring requirements — into clear, actionable user stories while keeping development on track. I facilitated cross-functional collaboration with executive banking stakeholders and design/development teams, reducing feedback turnaround time by 25%. Proactively identified and resolved development bottlenecks, leading to a 20% reduction in time-to-market and 95% of feature deadlines met. Client satisfaction improved 30% through tailored, insight-driven solutions.',
    tags: ['Digital Banking', 'KYC / AML', 'Roadmapping', 'Client Delivery'],
    metrics: [
      { icon: TrendingUp, label: 'Client satisfaction', value: '+30%' },
      { icon: Clock, label: 'Time-to-market', value: '-20%' },
      { icon: TrendingUp, label: 'Feature deadlines hit', value: '95%' },
    ],
    color: 'from-purple-600 to-pink-600',
    accent: 'bg-purple-500',
    emoji: '🏛️',
    year: '2022',
  },
  {
    id: 4,
    title: 'Enterprise Middleware Governance',
    subtitle: 'Enterprise · Cambridge University Press',
    description: 'Built the delivery framework for the MuleSoft platform at Cambridge University Press & Assessment — bringing pipeline visibility, cross-team alignment, and AI-powered executive reporting to the organisation.',
    longDesc: 'As the platform grew, so did the need for structure. I designed a requirements intake and visibility framework that gave every stakeholder — from engineers to executives — a clear, shared view of what was in the pipeline and why. I established Architecture Huddles: a regular cross-team forum that brought architects together, surfaced dependencies early, and kept decision-making joined up. On the reporting side, I introduced AI-powered newsletters and executive summaries via Power Automate — consistent, cost-aware updates delivered automatically, so leadership always had the context they needed without the manual overhead. The end result was a delivery model that was transparent, scalable, and trusted across the organisation.',
    tags: ['Enterprise Middleware', 'MuleSoft', 'API Governance', 'AI Reporting'],
    metrics: [
      { icon: TrendingUp, label: 'First migration', value: 'Historic' },
      { icon: Users, label: 'Teams aligned', value: 'Org-wide' },
      { icon: Clock, label: 'Disruption', value: 'Minimal' },
    ],
    color: 'from-green-600 to-teal-600',
    accent: 'bg-green-500',
    emoji: '🔄',
    year: '2025',
  },
]

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${project.color} p-8 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="text-4xl mb-3">{project.emoji}</div>
          <div className="text-white/70 text-sm font-semibold mb-1">{project.subtitle} · {project.year}</div>
          <h3 className="text-2xl font-black text-white">{project.title}</h3>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {project.metrics.map((m) => {
              const Icon = m.icon
              return (
                <div key={m.label} className="text-center p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800">
                  <div className="text-xl font-black gradient-text">{m.value}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{m.label}</div>
                </div>
              )
            })}
          </div>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            {project.longDesc}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)

  return (
    <section ref={ref} id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-neutral-50/50 dark:bg-neutral-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(99,102,241,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-pink-500" />
          <span className="text-sm font-semibold text-pink-500 tracking-widest uppercase">Projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl font-black tracking-tight mb-4 leading-tight"
        >
          Products I've{' '}
          <span className="gradient-text">shipped</span>{' '}
          & scaled.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl"
        >
          Click any card for the full story — the problem, the process, the outcome.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="group relative bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Color bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{project.emoji}</span>
                      <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">{project.year}</span>
                    </div>
                    <div className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 mb-1">{project.subtitle}</div>
                    <h3 className="text-xl font-black text-neutral-900 dark:text-white">{project.title}</h3>
                  </div>
                  <motion.div
                    className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300"
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.metrics.map((m) => {
                    const Icon = m.icon
                    return (
                      <div key={m.label} className="text-center p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800">
                        <div className="text-base font-black gradient-text">{m.value}</div>
                        <div className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5 leading-tight">{m.label}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more hint */}
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-indigo-500 group-hover:gap-2 transition-all">
                  <ChevronRight size={14} />
                  View project
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
