'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Map, Search, BarChart2, Users2, Target, Megaphone,
  Code2, Database, Cloud, GitBranch, Terminal, Layers,
  BrainCircuit, Workflow
} from 'lucide-react'

const pmSkills = [
  { name: 'Agile / Scrum', icon: Workflow, level: 'Expert' as const, desc: 'Certified Professional Scrum Master, sprint planning, retrospectives' },
  { name: 'Stakeholder Management', icon: Users2, level: 'Expert' as const, desc: 'Executive alignment, cross-functional leadership across 3 continents' },
  { name: 'Product Roadmapping', icon: Map, level: 'Expert' as const, desc: 'Multi-quarter planning, OKR alignment, backlog prioritisation' },
  { name: 'Delivery Governance', icon: BrainCircuit, level: 'Expert' as const, desc: 'Budget management, pipeline transparency, reporting frameworks' },
  { name: 'Product Strategy', icon: Target, level: 'Advanced' as const, desc: 'Market analysis, digital transformation, go-to-market' },
  { name: 'User Research & Discovery', icon: Search, level: 'Advanced' as const, desc: 'Discovery interviews, usability testing, persona mapping' },
  { name: 'Go-to-Market', icon: Megaphone, level: 'Advanced' as const, desc: 'Launch strategy, positioning, compliance-driven feature design' },
  { name: 'Data & Analytics', icon: BarChart2, level: 'Advanced' as const, desc: 'Power Automate, dashboards, KPI tracking, executive reporting' },
]

const techSkills = [
  { name: 'Power Automate / AI Tools', icon: BrainCircuit, level: 'Expert' as const, desc: 'AI-powered exec summaries, automated newsletters' },
  { name: 'System Design', icon: Layers, level: 'Expert' as const, desc: 'Architecture Huddles, middleware platform governance' },
  { name: 'MuleSoft / API Integration', icon: Layers, level: 'Advanced' as const, desc: 'Led BizTalk → MuleSoft migration at Cambridge' },
  { name: 'SQL / Databases', icon: Database, level: 'Advanced' as const, desc: 'Data modelling, reporting queries, integration schemas' },
  { name: 'Programming (Full-stack)', icon: Terminal, level: 'Advanced' as const, desc: 'Software engineering roots — React, Node.js, CI pipelines' },
  { name: 'DevOps / CI-CD', icon: GitBranch, level: 'Proficient' as const, desc: 'Automated build pipelines, deployment orchestration' },
  { name: 'Backbase CXS Front-end', icon: Code2, level: 'Proficient' as const, desc: 'WC2 Certified — banking digital platform' },
  { name: 'Cloud Services', icon: Cloud, level: 'Proficient' as const, desc: 'AWS/Azure, 99%+ uptime, automated loan workflows' },
]

const tools = [
  'Jira', 'Azure DevOps', 'Confluence', 'Miro',
  'Power Automate', 'MuleSoft', 'Backbase', 'Postman',
  'GitHub', 'SQL', 'Slack', 'SharePoint', 'Teams',
]

type Level = 'Expert' | 'Advanced' | 'Proficient'

const levelConfig: Record<Level, { width: string; color: string }> = {
  Expert:    { width: '100%', color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10' },
  Advanced:  { width: '70%',  color: 'text-purple-600 dark:text-purple-400 bg-purple-500/10' },
  Proficient:{ width: '45%',  color: 'text-pink-600 dark:text-pink-400 bg-pink-500/10' },
}

function SkillBar({ name, level, icon: Icon, desc, delay }: {
  name: string; level: Level; icon: React.ElementType; desc?: string; delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const { width, color } = levelConfig[level]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-start gap-2">
          <Icon size={16} className="text-indigo-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{name}</span>
            {desc && (
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{desc}</p>
            )}
          </div>
        </div>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ml-4 ${color}`}>
          {level}
        </span>
      </div>
      <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          initial={{ width: 0 }}
          animate={inView ? { width } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'pm' | 'tech'>('pm')

  return (
    <section ref={ref} id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,rgba(168,85,247,0.07),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-purple-500" />
          <span className="text-sm font-semibold text-purple-500 tracking-widest uppercase">Skills & Expertise</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl font-black tracking-tight mb-4 leading-tight"
        >
          Two skill sets,{' '}
          <span className="gradient-text">one PM.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl"
        >
          Most PMs have one. I bring product mastery AND the technical depth to challenge engineering estimates,
          write SQL queries, and ship prototypes.
        </motion.p>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="inline-flex p-1 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-10"
        >
          {[
            { key: 'pm', label: '📋 Product Skills' },
            { key: 'tech', label: '⚙️ Technical Skills' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as 'pm' | 'tech')}
              className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? 'text-white'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600"
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Skill bars */}
          <div>
            <div className="space-y-5">
              {activeTab === 'pm'
                ? pmSkills.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} delay={i * 0.06} />
                  ))
                : techSkills.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} delay={i * 0.07} />
                  ))
              }
            </div>
          </div>

          {/* Right: Tools grid + radar-style visual */}
          <div className="space-y-8">
            {/* Visual competency grid */}
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 tracking-widest uppercase mb-5">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Delivery', level: 'Expert' },
                  { label: 'Stakeholders', level: 'Expert' },
                  { label: 'Agile', level: 'Expert' },
                  { label: 'Strategy', level: 'Advanced' },
                  { label: 'Technical', level: 'Advanced' },
                  { label: 'Analytics', level: 'Advanced' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.07, type: 'spring', stiffness: 200 }}
                    className="relative p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
                    <div className="relative z-10">
                      <div className={`text-xs font-bold mb-1 ${levelConfig[item.level as Level].color} px-0 bg-transparent`}>{item.level}</div>
                      <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">{item.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 tracking-widest uppercase mb-5">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.03 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
