import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-[#FAF7F2] dark:bg-[#18181B] transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-[#3F3A34] dark:text-white">
              A small team, focused on<br />
              simple things that work.
            </h2>
            <p className="text-lg text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed">
              We&apos;re a two-person freelance team building calm, 
              practical websites for studios and local businesses.
            </p>
            <p className="text-lg text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed">
              No noise, no unnecessary complexity —<br />
              just work that feels right.
            </p>
            <span className="block text-sm text-[#9A948C] dark:text-[#6B6B6B] italic mt-4">
              — Atharva & Nandkishor
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#E8E2D9] dark:bg-[#1F1F23] relative">
                <Image 
                  src="/images/atharva.png"
                  alt="Atharva Sachin Joshi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#3F3A34] dark:text-white">
                  Atharva Sachin Joshi
                </h3>
                <span className="text-sm text-[#9A948C] dark:text-[#6B6B6B]">
                  Developer
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#E8E2D9] dark:bg-[#1F1F23] relative">
                <Image 
                  src="/images/nandu.jpeg"
                  alt="Nandkishor Jadhav"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#3F3A34] dark:text-white">
                  Nandkishor Jadhav
                </h3>
                <span className="text-sm text-[#9A948C] dark:text-[#6B6B6B]">
                  Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
