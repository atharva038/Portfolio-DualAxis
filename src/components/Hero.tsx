export default function Hero() {
  return (
    <section className="hero-section pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-32 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="hero-texture absolute inset-0 pointer-events-none opacity-30 dark:opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-[#3F3A34] dark:text-white relative z-20">
              Websites that<br />
              feel <span className="text-[#C07A3D] dark:text-[#C6A75E]">right</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed relative z-20">
              Calm, thoughtful websites for studios<br />
              and local businesses.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-medium rounded-xl bg-[#C07A3D] hover:bg-[#A86930] dark:bg-[#C6A75E] dark:hover:bg-[#D4B86A] text-white transition-all duration-200 hover:-translate-y-0.5 relative z-20"
            >
              Start a conversation
            </a>
          </div>
          
          <div className="order-first lg:order-last">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#E8E2D9] dark:bg-[#1F1F23] flex items-center justify-center transition-colors duration-300">
              <span className="text-sm text-[#A8A29E] dark:text-[#4A4A4E] font-medium">
                Website preview placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
