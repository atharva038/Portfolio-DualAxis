export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 md:py-20 border-t border-[#E6DED3] dark:border-[#2A2A2E] transition-colors duration-300">
      <div className="container">
        <div className="text-center space-y-6">
          {/* Big Brand Name */}
          <div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#C07A3D] via-[#A86930] to-[#8B5824] dark:from-[#C6A75E] dark:via-[#D4B86A] dark:to-[#E5D4A0] mb-4">
              Dual Axis
            </h2>
            <p className="text-lg md:text-xl text-[#6B645C] dark:text-[#B3B3B3] font-medium">
              Websites that feel right.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 md:pt-12 border-t border-[#E6DED3] dark:border-[#2A2A2E]">
            <p className="text-sm text-[#9A948C] dark:text-[#6B6B6B]">
              © {currentYear} Dual Axis. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
