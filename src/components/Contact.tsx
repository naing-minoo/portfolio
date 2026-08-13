'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, ExternalLink, Code2, Send, CheckCircle2, ArrowRight, Copy, Check } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/naingminoo',
    icon: ExternalLink,
    href: 'https://www.linkedin.com/in/naingminoo',
    color: 'hover:text-blue-600 hover:border-blue-600/40 hover:bg-blue-600/5',
  },
  {
    name: 'Email',
    handle: 'naingminoo93@gmail.com',
    icon: Mail,
    href: 'mailto:naingminoo93@gmail.com',
    color: 'hover:text-indigo-600 hover:border-indigo-600/40 hover:bg-indigo-600/5',
  },
  {
    name: 'Location',
    handle: 'Cambridge, United Kingdom',
    icon: Code2,
    href: 'https://www.google.com/maps/search/Cambridge,+United+Kingdom',
    color: 'hover:text-green-600 hover:border-green-600/40 hover:bg-green-600/5',
  },
]

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const email = 'naingminoo93@gmail.com'

  const copy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      onClick={copy}
      className="group flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      whileHover={{ x: 3 }}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="text-green-500"
          >
            <Check size={14} />
          </motion.span>
        ) : (
          <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <Copy size={14} />
          </motion.span>
        )}
      </AnimatePresence>
      {copied ? 'Copied!' : email}
    </motion.button>
  )
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '', subject: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('https://formspree.io/f/mwvyvkyj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try emailing me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section ref={ref} id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(99,102,241,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-green-500" />
          <span className="text-sm font-semibold text-green-500 tracking-widest uppercase">Get in Touch</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl font-black tracking-tight mb-4 leading-tight"
        >
          Let's build something{' '}
          <span className="gradient-text">remarkable</span>{' '}
          together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl"
        >
          Open to Senior PM, Technical Delivery Manager, and Head of Product roles in the UK.
          Also happy to consult, advise, or talk shop.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Social links + availability */}
          <div className="space-y-8">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="font-semibold">Open to new opportunities · Right to Work in UK</span>
            </motion.div>

            {/* Social cards */}
            <div className="space-y-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    whileHover={{ x: 6 }}
                    className={`group flex items-center gap-4 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-all duration-300 ${social.color}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 group-hover:bg-current/10 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900 dark:text-white text-sm">{social.name}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">{social.handle}</div>
                    </div>
                    <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </motion.a>
                )
              })}
            </div>

            {/* Quick copy email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 tracking-widest uppercase mb-2">Quick copy</div>
              <CopyEmail />
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                  >
                    <CheckCircle2 size={56} className="text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-black mb-2">Message sent! 🎉</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '', subject: '' }) }}
                    className="mt-6 text-sm text-indigo-500 hover:text-indigo-600 font-semibold"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-black mb-6">Send a message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2 tracking-wide uppercase">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2 tracking-wide uppercase">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2 tracking-wide uppercase">
                      Subject
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                    >
                      <option value="">Select a topic…</option>
                      <option>Full-time PM opportunity</option>
                      <option>Consulting / Advisory</option>
                      <option>Speaking engagement</option>
                      <option>Just saying hi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2 tracking-wide uppercase">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your product, team, and what you're looking for…"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none text-sm"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 font-medium">{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 text-white font-bold flex items-center justify-center gap-2 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
