export default function Philosophy() {
  return (
    <section className="py-10 md:py-14">
      <div className="container text-center">
        <h2 className="mb-6 text-4xl font-medium leading-tight tracking-tight text-[#3F3A34] dark:text-white md:mb-8 md:text-5xl lg:text-6xl">
          Software built to perform,
          <br />
          not just to exist.
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 text-lg text-[#6B645C] dark:text-[#B3B3B3] md:flex-row md:gap-10">
          <span>Custom products</span>
          <span className="hidden text-[#E6DED3] dark:text-[#2A2A2E] md:inline">•</span>
          <span>Scalable systems</span>
          <span className="hidden text-[#E6DED3] dark:text-[#2A2A2E] md:inline">•</span>
          <span>Production-ready delivery</span>
        </div>
      </div>
    </section>
  );
}
