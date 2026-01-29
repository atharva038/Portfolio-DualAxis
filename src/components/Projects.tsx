const projects = [
  {
    id: 1,
    title: 'Serene Photography',
    category: 'Portfolio Website'
  },
  {
    id: 2,
    title: 'Bloom Floristry',
    category: 'Business Website'
  },
  {
    id: 3,
    title: 'Atlas Coffee Co.',
    category: 'Brand Website'
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-16 md:py-24 lg:py-32 bg-[#FAF7F2] dark:bg-[#18181B] transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3F3A34] dark:text-white mb-4">
            Recent work
          </h2>
          <p className="text-lg text-[#6B645C] dark:text-[#B3B3B3]">
            Selected projects we're proud of.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#E8E2D9] dark:bg-[#1F1F23] mb-4 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-[#A8A29E] dark:text-[#4A4A4E] font-medium">
                    Project preview coming soon
                  </span>
                </div>
                <div className="absolute inset-0 bg-[#C07A3D]/90 dark:bg-[#C6A75E]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <h3 className="text-2xl font-medium text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-white/80">
                    View concept
                  </span>
                </div>
              </div>
              <div>
                <span className="text-sm text-[#9A948C] dark:text-[#6B6B6B]">
                  {project.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
