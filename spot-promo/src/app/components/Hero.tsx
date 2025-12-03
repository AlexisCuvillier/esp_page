import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-24">
      <div className="text-center max-w-4xl mx-auto">
        <div className="float mb-8 fade-in stagger-1">
          <Image
            src="/logo.png"
            alt="Logo SPOT"
            width={180}
            height={180}
            className="mx-auto drop-shadow-2xl"
            priority
          />
        </div>
        
        <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-bold mb-6 glow fade-in-up stagger-2">
          SPOT
        </h1>
        
        <p className="text-xl md:text-2xl text-[var(--accent-light)] italic mb-8 fade-in-up stagger-3">
          La réalité d&apos;hier dans le monde d&apos;aujourd&apos;hui
        </p>
        
        <p className="text-lg md:text-xl text-[var(--foreground)]/80 max-w-2xl mx-auto mb-12 fade-in-up stagger-4">
          Une application gratuite qui valorise le patrimoine historique, culturel 
          et océanique de chaque territoire.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-5">
          <a
            href="#teaser"
            className="px-8 py-4 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-full hover:bg-[var(--accent-light)] transition-all duration-300 pulse-glow"
          >
            Voir le teaser
          </a>
          <a
            href="#features"
            className="px-8 py-4 border-2 border-[var(--foreground)]/30 rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
          >
            Découvrir
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 scroll-indicator">
        <svg className="w-6 h-6 text-[var(--foreground)]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

