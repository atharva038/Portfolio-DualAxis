export default function Philosophy() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-[#3F3A34] dark:text-white mb-8 md:mb-12">
          Designed for humans,<br />
          not algorithms.
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-lg text-[#6B645C] dark:text-[#B3B3B3]">
          <span>Easy to understand</span>
          <span className="hidden md:inline text-[#E6DED3] dark:text-[#2A2A2E]">•</span>
          <span>Easy to navigate</span>
          <span className="hidden md:inline text-[#E6DED3] dark:text-[#2A2A2E]">•</span>
          <span>Easy to contact</span>
        </div>
      </div>
    </section>
  );
}
