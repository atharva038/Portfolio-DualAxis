import { useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_im12pji';
      const templateId = 'template_llw2pyt';
      const publicKey = 'gCfpr50F88PRPOQbK';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Dual Axis',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '919156906881';
  const whatsappMessage = encodeURIComponent('Hi! I came across Dual Axis and I\'m interested in discussing a website project. Can we chat?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-[#FAF7F2] dark:bg-[#18181B] transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-[#3F3A34] dark:text-white">
              Let's talk about<br />
              your project
            </h2>
            <p className="text-lg text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed">
              No pressure, no commitment —<br />
              just a friendly conversation.
            </p>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-all duration-200 font-medium"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            
            <span className="block text-sm text-[#9A948C] dark:text-[#6B6B6B]">
              or send a message
            </span>
          </div>

          <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                className="w-full px-5 py-4 bg-[#F5EFE6] dark:bg-[#0E0E10] border border-[#E6DED3] dark:border-[#2A2A2E] rounded-xl text-[#3F3A34] dark:text-white placeholder:text-[#9A948C] dark:placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#C07A3D] dark:focus:border-[#C6A75E] transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Name"
              />
            </div>
            
            <div>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-4 bg-[#F5EFE6] dark:bg-[#0E0E10] border border-[#E6DED3] dark:border-[#2A2A2E] rounded-xl text-[#3F3A34] dark:text-white placeholder:text-[#9A948C] dark:placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#C07A3D] dark:focus:border-[#C6A75E] transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="Email"
              />
            </div>
            
            <div>
              <input
                type="tel"
                id="phone"
                className="w-full px-5 py-4 bg-[#F5EFE6] dark:bg-[#0E0E10] border border-[#E6DED3] dark:border-[#2A2A2E] rounded-xl text-[#3F3A34] dark:text-white placeholder:text-[#9A948C] dark:placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#C07A3D] dark:focus:border-[#C6A75E] transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder="Phone Number"
              />
            </div>
            
            <div>
              <textarea
                id="message"
                className="w-full px-5 py-4 bg-[#F5EFE6] dark:bg-[#0E0E10] border border-[#E6DED3] dark:border-[#2A2A2E] rounded-xl text-[#3F3A34] dark:text-white placeholder:text-[#9A948C] dark:placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#C07A3D] dark:focus:border-[#C6A75E] transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                placeholder="Tell us about your project"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`
                w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-medium rounded-xl 
                text-white transition-all duration-200 
                ${isSubmitting 
                  ? 'bg-[#9A948C] cursor-not-allowed' 
                  : 'bg-[#C07A3D] hover:bg-[#A86930] dark:bg-[#C6A75E] dark:hover:bg-[#D4B86A] hover:-translate-y-0.5'
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send message'
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl text-green-800 dark:text-green-300 text-sm">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl text-red-800 dark:text-red-300 text-sm">
                ✗ Failed to send message. Please try WhatsApp or email directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
