const projects = [
  {
    id: 1,
    title: 'Serene Photography',
    category: 'Portfolio Website',
    link: 'https://photographer-portfolio-mauve-nine.vercel.app'
  },
  {
    id: 2,
    title: 'Bloom Floristry',
    category: 'Business Website',
    link: null
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E8E2D9] dark:bg-[#1F1F23] mb-4 transition-all duration-300">
                {project.link ? (
                  <iframe
                    src={project.link}
                    className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300 group-hover:scale-105"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    title={project.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-[#A8A29E] dark:text-[#4A4A4E] font-medium">
                      Project preview coming soon
                    </span>
                  </div>
                )}
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
