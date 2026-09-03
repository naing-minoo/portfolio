'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const experiences = [
  {
    company: 'Cambridge University Press & Assessment',
    role: 'Technical Delivery Manager',
    period: 'Apr 2025 – Present',
    location: 'Cambridge, UK',
    type: 'Full-time',
    description: 'TDM for the enterprise MuleSoft middleware platform, overseeing API delivery across multiple departments and stakeholder groups.',
    achievements: [
      'Led the first-ever migration of BizTalk services to MuleSoft, delivering with minimal disruption across all dependent teams',
      'Designed a requirements visibility framework from scratch — brought full pipeline transparency that had not previously existed',
      'Established Architecture Huddles: a cross-functional forum aligning architects across teams, eliminating siloed decision-making',
      'Introduced AI-powered reporting using Power Automate, automating executive summaries and team newsletters',
      'Manage end-to-end budget, stakeholder relationships, and delivery governance across all middleware programmes',
    ],
    tech: ['MuleSoft', 'Power Automate', 'Azure DevOps', 'Jira', 'Confluence'],
    color: 'from-blue-600 to-indigo-600',
    logo: '🎓',
  },
  {
    company: 'Coadjute',
    role: 'Product Owner',
    period: 'Apr 2023 – Nov 2024',
    location: 'London, UK',
    type: 'Full-time',
    description: 'Led integrations with property data providers, identity verification services, and HMLR in the prop-tech space.',
    achievements: [
      'Developed a scalable identity verification service — 1,000+ ID checks within the first few months',
      'Enhanced platform capabilities enabling estate agents to meet compliance standards, driving high user adoption',
      'Managed end-to-end: analysis, testing, stakeholder approvals, and development support for all integrations',
      'Focused on continuous UX improvement, iterating based on user feedback and delivering a streamlined interface',
      'Servant leader and strategic partner, guiding product and technical solutioning while fostering team collaboration',
    ],
    tech: ['Jira', 'Confluence', 'Postman', 'Figma', 'REST APIs'],
    color: 'from-indigo-600 to-purple-600',
    logo: '🏠',
  },
  {
    company: 'Elixirr',
    role: 'Product Owner',
    period: 'Dec 2021 – Dec 2022',
    location: 'London, UK',
    type: 'Full-time',
    description: 'Owned roadmaps for Digital Customer Onboarding and CRM products for banking clients.',
    achievements: [
      'Achieved a 30% increase in client satisfaction through tailored solutions and proactive bottleneck resolution',
      'Met 95% of all feature deadlines, reducing time-to-market by 20% across both product lines',
      'Developed complex product requirements for KYC, AML, and risk screening/scoring features',
      'Reduced feedback turnaround time by 25% through streamlined cross-functional collaboration with executive banking stakeholders',
      'Led product discovery and market research efforts, driving key process improvements and user engagement',
    ],
    tech: ['Backbase', 'Jira', 'Confluence', 'Miro', 'Figma'],
    color: 'from-purple-600 to-pink-600',
    logo: '💼',
  },
  {
    company: 'Yoma Bank',
    role: 'Senior Team Lead → Product Owner',
    period: 'Jan 2019 – Jun 2020',
    location: 'Yangon, Myanmar',
    type: 'Full-time',
    description: 'Led a high-performing scrum team building a hire-purchase loan application, then transitioned to PO for digital payment services.',
    achievements: [
      'Reduced loan processing time from 2 weeks to 3 minutes — dramatically exceeding business expectations',
      'Designed architecture and cloud services integration, achieving 99%+ uptime through automated loan creation workflows',
      'Provided strategic vision to agile teams and stakeholders, defining business and technical requirements with full QA standards',
      'Owned and managed product backlogs for digital payment services, prioritising features based on business value and user feedback',
      'Proactively resolved development impediments to consistently meet Release and Sprint Goals',
    ],
    tech: ['AWS', 'CI/CD', 'SQL', 'REST APIs', 'Scrum'],
    color: 'from-pink-600 to-orange-500',
    logo: '🏦',
  },
  {
    company: 'Yoma Bank',
    role: 'DevOps Engineer',
    period: 'Jan 2018 – Dec 2018',
    location: 'Yangon, Myanmar',
    type: 'Full-time',
    description: 'Full engineering role building the foundation that would later make me a stronger PM and technical leader.',
    achievements: [
      'Coordinated efficient large-scale software deployments, minimising downtime during critical updates',
      'Monitored and optimised automated build and CI processes, quickly resolving build/release issues',
      'Collaborated with cross-functional design teams to develop software solutions improving client-side experience',
      'Reviewed project specifications and designed technology solutions exceeding performance benchmarks',
    ],
    tech: ['CI/CD', 'Docker', 'Linux', 'Bash', 'AWS'],
    color: 'from-green-600 to-teal-600',
    logo: '⚙️',
  },
]

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < experiences.length - 1 && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 to-transparent" />
      )}

      {/* Timeline dot — sits on the line, outside the card */}
      <div
        className={`absolute left-0 top-6 w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2 z-10 ${
          expanded
            ? 'border-indigo-500 bg-indigo-500/10'
            : 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900'
        } transition-all duration-300`}
      >
        {exp.logo}
      </div>

      <div
        className={`relative ml-16 bg-white dark:bg-neutral-900 rounded-2xl border transition-all duration-300 overflow-hidden ${
          expanded
            ? 'border-indigo-500/40 shadow-lg shadow-indigo-500/10'
            : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
        }`}
      >
        {/* Color top bar */}
        <div className={`h-1 bg-gradient-to-r ${exp.color} ${expanded ? 'opacity-100' : 'opacity-40'} transition-opacity`} />

        <div
          className="p-6 cursor-pointer select-none"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <h3 className="text-lg font-black text-neutral-900 dark:text-white">{exp.role}</h3>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                    {exp.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm flex-wrap">
                  <span className={`font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.company}
                  </span>
                  <span className="text-neutral-400">·</span>
                  <span className="text-neutral-500 dark:text-neutral-400">{exp.location}</span>
                  <span className="text-neutral-400">·</span>
                  <span className="text-neutral-500 dark:text-neutral-400">{exp.period}</span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-neutral-400 flex-shrink-0"
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed">
            {exp.description}
          </p>
        </div>

        {/* Expanded content */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 border-t border-neutral-100 dark:border-neutral-800 pt-5">
            <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 tracking-widest uppercase mb-3">
              Key Achievements
            </h4>
            <ul className="space-y-2 mb-5">
              {exp.achievements.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={expanded ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  {a}
                </motion.li>
              ))}
            </ul>

            <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 tracking-widest uppercase mb-2">
              Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_30%,rgba(99,102,241,0.07),transparent)]" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-orange-500" />
          <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl font-black tracking-tight mb-4 leading-tight"
        >
          Where I&apos;ve{' '}
          <span className="gradient-text">made things</span>{' '}
          happen.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl"
        >
          Seven years across fintech, prop-tech, and enterprise consulting. Click each role to expand the details.
        </motion.p>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={`${exp.company}-${i}`} exp={exp} index={i} />
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🎓</span>
            <div>
              <h3 className="font-black text-neutral-900 dark:text-white">
                Queen&apos;s University Belfast · MBA
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Master of Business Administration · 2020 – 2021 · Belfast, UK
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Business Administration', 'Strategy', 'Leadership', 'Finance'].map((c) => (
              <span key={c} className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800">
                {c}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">💻</span>
            <div>
              <h3 className="font-black text-neutral-900 dark:text-white">
                University of Canberra · B.Eng Software Engineering
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Bachelor of Software Engineering · Canberra, Australia · Dean&apos;s Excellence Award
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Software Engineering', 'Networking & Cyber Security', 'CISCO Scholarship'].map((c) => (
              <span key={c} className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800">
                {c}
              </span>
            ))}
          </div>

          <div className="border-t border-indigo-500/20 pt-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🏅</span>
              <h3 className="font-black text-neutral-900 dark:text-white text-sm">Professional Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Certified Professional Scrum Master', sub: 'Scrum.org' },
                { label: 'Google Project Management', sub: 'Google / Coursera' },
                { label: 'Backbase CXS WC2', sub: 'Backbase' },
              ].map((cert) => (
                <div key={cert.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{cert.label}</span>
                  <span className="text-xs text-indigo-400/60 dark:text-indigo-500/60">· {cert.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
