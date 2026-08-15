const services = [
  {
    title: 'Website Design',
    description: 'Clean, modern designs that reflect your brand identity and resonate with your audience.',
    icon: '✦'
  },
  {
    title: 'Development',
    description: 'Fast, reliable websites built with modern technology. Optimized for performance and accessibility.',
    icon: '◆'
  },
  {
    title: 'Portfolio Sites',
    description: 'Beautiful showcases for your creative work. Designed to let your projects shine and speak for themselves.',
    icon: '◉'
  },
  {
    title: 'Business Sites',
    description: 'Professional web presence for local businesses. Simple, effective, and easy to manage.',
    icon: '◈'
  }
];

const advancedCapabilities = [
  {
    title: 'Store Management',
    description: 'Complete point-of-sale systems with product catalogs, pricing, and sales tracking.',
    icon: '🏪'
  },
  {
    title: 'Inventory Control',
    description: 'Real-time stock monitoring, automated alerts, and supplier management systems.',
    icon: '📦'
  },
  {
    title: 'Staff Management',
    description: 'Employee scheduling, attendance tracking, and performance monitoring tools.',
    icon: '👥'
  },
  {
    title: 'Customer Relations',
    description: 'CRM systems, booking management, appointment scheduling, and customer database.',
    icon: '🤝'
  },
  {
    title: 'Analytics & Reports',
    description: 'Business insights, sales reports, revenue tracking, and data visualization dashboards.',
    icon: '📊'
  },
  {
    title: 'Payment Integration',
    description: 'Secure payment gateways, invoice generation, and automated billing systems.',
    icon: '💳'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="text-center mb-16 md:mb-20 lg:mb-24 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#3F3A34] dark:text-white mb-6 tracking-tight leading-[1.1]">
            What we do
          </h2>
          <p className="text-xl md:text-2xl text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed">
            Simple solutions, thoughtfully crafted for real people.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20 md:mb-28 lg:mb-32">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 lg:p-10 bg-[#FAF7F2] dark:bg-[#18181B] rounded-3xl border border-[#E6DED3] dark:border-[#2A2A2E] transition-all duration-500 hover:border-[#C07A3D] dark:hover:border-[#C6A75E] hover:shadow-2xl hover:shadow-[#C07A3D]/10 dark:hover:shadow-[#C6A75E]/10 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C07A3D]/0 to-[#C07A3D]/0 group-hover:from-[#C07A3D]/5 group-hover:to-transparent dark:group-hover:from-[#C6A75E]/5 transition-all duration-500 rounded-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl text-[#C07A3D] dark:text-[#C6A75E] transition-transform duration-500 group-hover:scale-110 inline-block">
                    {service.icon}
                  </span>
                  <span className="text-sm font-medium text-[#9A948C] dark:text-[#6B6B6B] group-hover:text-[#C07A3D] dark:group-hover:text-[#C6A75E] transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-medium text-[#3F3A34] dark:text-white mb-4 group-hover:text-[#C07A3D] dark:group-hover:text-[#C6A75E] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-base lg:text-lg text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#C07A3D]/0 to-transparent group-hover:from-[#C07A3D]/10 dark:group-hover:from-[#C6A75E]/10 transition-all duration-500 rounded-tl-full pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C07A3D]/10 dark:bg-[#C6A75E]/10 text-[#C07A3D] dark:text-[#C6A75E] text-sm font-medium mb-6">
              <span className="inline-block w-2 h-2 bg-[#C07A3D] dark:bg-[#C6A75E] rounded-full animate-pulse"></span>
              Full-Stack Solutions
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3F3A34] dark:text-white mb-6 tracking-tight leading-[1.1]">
              Beyond beautiful websites
            </h3>
            <p className="text-lg md:text-xl text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed max-w-3xl mx-auto">
              We&apos;re currently focused on portfolios and showcase websites, but we also build comprehensive business management systems tailored to your operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advancedCapabilities.map((capability, index) => (
              <div 
                key={index}
                className="group relative p-6 lg:p-8 bg-gradient-to-br from-[#FAF7F2] to-[#F5F0E8] dark:from-[#18181B] dark:to-[#1F1F23] rounded-2xl border border-[#E6DED3] dark:border-[#2A2A2E] transition-all duration-300 hover:border-[#C07A3D] dark:hover:border-[#C6A75E] hover:shadow-xl hover:shadow-[#C07A3D]/5 dark:hover:shadow-[#C6A75E]/5 hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {capability.icon}
                </div>
                
                <h4 className="text-xl font-medium text-[#3F3A34] dark:text-white mb-3 group-hover:text-[#C07A3D] dark:group-hover:text-[#C6A75E] transition-colors duration-300">
                  {capability.title}
                </h4>
                
                <p className="text-sm lg:text-base text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed">
                  {capability.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C07A3D]/0 to-transparent group-hover:via-[#C07A3D]/50 dark:group-hover:via-[#C6A75E]/50 transition-all duration-500 rounded-b-2xl"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 lg:p-10 bg-gradient-to-br from-[#C07A3D]/5 to-transparent dark:from-[#C6A75E]/5 rounded-3xl border border-[#C07A3D]/20 dark:border-[#C6A75E]/20">
              <p className="text-lg md:text-xl text-[#3F3A34] dark:text-white font-medium">
                Need a custom business solution?
              </p>
              <p className="text-base text-[#6B645C] dark:text-[#B3B3B3] max-w-2xl">
                From simple booking systems to complex inventory management, we build scalable solutions that grow with your business.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-medium rounded-xl bg-[#C07A3D] hover:bg-[#A86930] dark:bg-[#C6A75E] dark:hover:bg-[#D4B86A] text-white transition-all duration-200 hover:-translate-y-0.5 mt-2"
              >
                Discuss your project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
