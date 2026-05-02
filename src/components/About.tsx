'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Code2, BarChart3, Users, Zap, GraduationCap, Briefcase } from 'lucide-react'

const funFacts = [
  {
    emoji: '🌏',
    text: 'Three continents, one career. Myanmar, Australia, the UK — and counting.',
  },
  {
    emoji: '👨‍🏫',
    text: "I was a teacher before I was a PM. Canberra Institute of Technology. Turns out explaining complex things clearly is useful in both jobs.",
  },
  {
    emoji: '🗣️',
    text: 'I speak Burmese and English fluently, and enough French to get into trouble. Three languages, varying levels of confidence.',
  },
  {
    emoji: '🏆',
    text: "Two academic awards: a Dean's Excellence Award and a CISCO Scholarship. Old habits die hard.",
  },
  {
    emoji: '🏦',
    text: 'Cambridge University Press & Assessment has been around since 1534. Coadjute was a fast-moving London startup disrupting property transactions. I\'ve thrived in both.',
  },
  {
    emoji: '⚡',
    text: "I cut a loan process from 2 weeks to 3 minutes. That's a 99.98% reduction. It's the stat I'm most proud of.",
  },
]

const traits = [
  {
    icon: Code2,
    title: 'Engineering DNA',
    description: 'Started as a DevOps engineer at Yoma Bank. I can challenge estimates, review PRs, and design cloud architecture.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Delivery-Focused',
    description: 'As TDM at Cambridge University Press, I govern delivery of the MuleSoft platform — the middleware that connects systems across the organisation.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'Servant Leader',
    description: 'I step into support roles when teams need it. Cross-functional alignment is the product.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Domain Agile',
    description: 'Fintech, prop-tech, consulting, edtech — I adapt fast, master complex domains, and ship value.',
    color: 'from-orange-500 to-red-500',
  },
]

const timeline = [
  { year: '2025', title: 'Technical Delivery Manager @ Cambridge University Press & Assessment', detail: 'Enterprise MuleSoft middleware platform' },
  { year: '2023', title: 'Product Owner @ Coadjute', detail: 'Prop-tech: ID verification & property data integrations' },
  { year: '2021', title: 'Product Owner @ Elixirr', detail: 'Digital onboarding & CRM for banking clients' },
  { year: '2020', title: 'MBA — Queen\'s University Belfast', detail: 'While transitioning to full PM role' },
  { year: '2018', title: 'DevOps → Team Lead → PO @ Yoma Bank', detail: 'Built engineering foundation, led loan digitisation' },
]

function FunFactsCarousel({ isInView }: { isInView: boolean }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const id = setInterval(() => setIndex((i) => (i + 1) % funFacts.length), 7000)
    return () => clearInterval(id)
  }, [isInView])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="sm:col-span-2 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-indigo-200 tracking-widest uppercase">Fun facts</span>
          <div className="flex gap-1">
            {funFacts.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-white w-4' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="h-20 relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="font-bold text-base leading-snug absolute inset-0"
            >
              <span className="mr-2">{funFacts[index].emoji}</span>
              {funFacts[index].text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,rgba(99,102,241,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-indigo-500" />
          <span className="text-sm font-semibold text-indigo-500 tracking-widest uppercase">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight"
            >
              I build products{' '}
              <span className="gradient-text">people love</span>{' '}
              using logic{' '}
              <em className="not-italic text-neutral-400">and</em> empathy.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed"
            >
              <p>
                Starting as a DevOps engineer at Yoma Bank, I grew into Senior Team Lead, Product Owner, and Technical
                Delivery Manager — bringing{' '}
                <span className="text-neutral-900 dark:text-white font-semibold">genuine technical depth</span> to every
                product decision, not just fluency.
              </p>
              <p>
                Over 7+ years across fintech, prop-tech, and enterprise consulting, I've cut loan processing from{' '}
                <span className="text-neutral-900 dark:text-white font-semibold">2 weeks to 3 minutes</span>, launched
                identity verification hitting 1,000+ checks within months, and led the{' '}
                <span className="text-neutral-900 dark:text-white font-semibold">first-ever BizTalk to MuleSoft
                migration</span> at Cambridge University Press & Assessment. I adapt fast, earn trust across engineering
                and business, and step into whatever role the team needs most.
              </p>
            </motion.div>

            {/* Credential badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                { label: 'Certified Scrum Master', emoji: '🏅' },
                { label: 'Google PM Certified', emoji: '📐' },
                { label: 'Backbase WC2 Certified', emoji: '🏦' },
                { label: 'Right to Work · UK', emoji: '🇬🇧' },
                { label: 'Right to Work · AU', emoji: '🇦🇺' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-indigo-500/25 bg-indigo-500/8 text-indigo-600 dark:text-indigo-400"
                >
                  <span>{badge.emoji}</span>
                  {badge.label}
                </span>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10"
            >
              <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 tracking-widest uppercase mb-6">
                Career Path
              </h3>
              <div className="relative space-y-0">
                {/* Timeline line */}
                <div className="absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex gap-4 pb-6 last:pb-0"
                  >
                    <div className="relative z-10 w-11 h-11 rounded-full bg-white dark:bg-neutral-900 border-2 border-indigo-500/40 flex items-center justify-center flex-shrink-0 text-xs font-bold text-indigo-500">
                      {i === timeline.length - 1 ? (
                        <GraduationCap size={16} />
                      ) : (
                        <Briefcase size={14} />
                      )}
                    </div>
                    <div className="pt-2">
                      <div className="text-xs text-indigo-500 font-bold mb-0.5">{item.year}</div>
                      <div className="font-semibold text-neutral-900 dark:text-white text-sm">{item.title}</div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => {
              const Icon = trait.icon
              return (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden cursor-default"
                >
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${trait.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${trait.color} flex items-center justify-center mb-4`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-neutral-900 dark:text-white mb-2">{trait.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {trait.description}
                  </p>
                </motion.div>
              )
            })}

            {/* Fun facts carousel */}
            <FunFactsCarousel isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  )
}
