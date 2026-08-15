'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'motion/react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { ShineBorder } from '@/components/ui/shine-border';

const inputClass =
  'w-full rounded-xl border border-[#E6DED3] bg-[#F5EFE6] px-5 py-4 text-[#3F3A34] placeholder:text-[#9A948C] outline-none transition-all duration-300 focus:border-[#C07A3D] focus:shadow-[0_0_0_4px_rgba(192,122,61,0.12)] dark:border-[#2A2A2E] dark:bg-[#0E0E10] dark:text-white dark:placeholder:text-[#6B6B6B] dark:focus:border-[#C6A75E] dark:focus:shadow-[0_0_0_4px_rgba(198,167,94,0.18)]';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_im12pji',
        'template_llw2pyt',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: 'Dual Axis',
        },
        'gCfpr50F88PRPOQbK',
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = `https://wa.me/919156906881?text=${encodeURIComponent("Hi! I came across Dual Axis and I'm interested in discussing a website project. Can we chat?")}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#FAF7F2] py-16 transition-colors duration-300 dark:bg-[#18181B] md:py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#C07A3D]/10 blur-3xl dark:bg-[#C6A75E]/10" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#C07A3D]/8 blur-3xl dark:bg-[#C6A75E]/8" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 lg:space-y-8">
            <BlurFade inView delay={0.1}>
              <h2 className="text-4xl font-medium leading-tight tracking-tight text-[#3F3A34] dark:text-white md:text-5xl lg:text-6xl">
                Let&apos;s talk about
                <br />
                your{' '}
                <AnimatedGradientText colorFrom="#C07A3D" colorTo="#D4B86A">
                  project
                </AnimatedGradientText>
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-lg leading-relaxed text-[#6B645C] dark:text-[#B3B3B3]">
                No pressure, no commitment —
                <br />
                just a friendly conversation.
              </p>
            </BlurFade>

            <BlurFade inView delay={0.3}>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-medium text-white shadow-[0_8px_24px_rgba(37,211,102,0.28)] transition-colors hover:bg-[#128C7E] dark:shadow-[0_8px_28px_rgba(37,211,102,0.18)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </motion.a>
            </BlurFade>

            <BlurFade inView delay={0.4}>
              <span className="block text-sm text-[#9A948C] dark:text-[#6B6B6B]">or send a message</span>
            </BlurFade>
          </div>

          <BlurFade inView delay={0.2} direction="left">
            <div className="relative overflow-hidden rounded-3xl border border-[#E6DED3]/80 bg-[#F5EFE6]/80 p-1 shadow-[0_20px_50px_rgba(63,58,52,0.08)] backdrop-blur-sm dark:border-[#2A2A2E] dark:bg-[#0E0E10]/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <ShineBorder shineColor={['#C07A3D', '#C6A75E', '#A86930']} borderWidth={1} duration={10} />
              <BorderBeam size={140} duration={9} colorFrom="#C07A3D" colorTo="#C6A75E" borderWidth={1.5} />

              <form className="relative space-y-5 rounded-[1.35rem] bg-[#F5EFE6] p-6 dark:bg-[#0E0E10] md:space-y-6 md:p-8" onSubmit={handleSubmit}>
                {([
                  { id: 'name', type: 'text', placeholder: 'Name' },
                  { id: 'email', type: 'email', placeholder: 'Email' },
                  { id: 'phone', type: 'tel', placeholder: 'Phone Number' },
                ] as const).map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * index, duration: 0.4 }}
                    className="relative"
                  >
                    <input
                      type={field.type}
                      id={field.id}
                      className={inputClass}
                      value={formData[field.id]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder={field.placeholder}
                    />
                    <AnimatePresence>
                      {focused === field.id && (
                        <motion.span
                          className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-[#C07A3D]/40 dark:ring-[#C6A75E]/40"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.24, duration: 0.4 }}
                  className="relative"
                >
                  <textarea
                    id="message"
                    className={`${inputClass} resize-none`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={4}
                    placeholder="Tell us about your project"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? undefined : { y: -2 }}
                  whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                  className={`relative w-full overflow-hidden rounded-xl px-8 py-4 text-[15px] font-medium text-white transition-colors ${
                    isSubmitting
                      ? 'cursor-not-allowed bg-[#9A948C]'
                      : 'bg-[#C07A3D] hover:bg-[#A86930] dark:bg-[#C6A75E] dark:hover:bg-[#D4B86A]'
                  }`}
                >
                  {!isSubmitting && (
                    <motion.span
                      className="pointer-events-none absolute inset-y-0 w-16 bg-white/25 blur-md"
                      initial={{ x: '-120%' }}
                      animate={{ x: '420%' }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send message'
                    )}
                  </span>
                </motion.button>

                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="rounded-xl border border-emerald-300/70 bg-emerald-100 p-4 text-sm text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
                    >
                      ✓ Message sent successfully! We&apos;ll get back to you soon.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="rounded-xl border border-red-300/70 bg-red-100 p-4 text-sm text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
                    >
                      ✗ Failed to send message. Please try WhatsApp or email directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
