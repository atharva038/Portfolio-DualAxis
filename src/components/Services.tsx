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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 lg:p-10 bg-[#FAF7F2] dark:bg-[#18181B] rounded-3xl border border-[#E6DED3] dark:border-[#2A2A2E] transition-all duration-500 hover:border-[#C07A3D] dark:hover:border-[#C6A75E] hover:shadow-2xl hover:shadow-[#C07A3D]/10 dark:hover:shadow-[#C6A75E]/10 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C07A3D]/0 to-[#C07A3D]/0 group-hover:from-[#C07A3D]/5 group-hover:to-transparent dark:group-hover:from-[#C6A75E]/5 transition-all duration-500 rounded-3xl pointer-events-none"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and number */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl text-[#C07A3D] dark:text-[#C6A75E] transition-transform duration-500 group-hover:scale-110 inline-block">
                    {service.icon}
                  </span>
                  <span className="text-sm font-medium text-[#9A948C] dark:text-[#6B6B6B] group-hover:text-[#C07A3D] dark:group-hover:text-[#C6A75E] transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-medium text-[#3F3A34] dark:text-white mb-4 group-hover:text-[#C07A3D] dark:group-hover:text-[#C6A75E] transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-base lg:text-lg text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#C07A3D]/0 to-transparent group-hover:from-[#C07A3D]/10 dark:group-hover:from-[#C6A75E]/10 transition-all duration-500 rounded-tl-full pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
