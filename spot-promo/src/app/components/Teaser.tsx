export default function Teaser() {
  return (
    <section id="teaser" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4">
          🎬 Teaser Officiel
        </h2>
        <p className="text-center text-[var(--foreground)]/70 mb-12">
          Découvrez SPOT en action
        </p>
        
        <div className="video-container glow-box">
          <video
            controls
            className="w-full aspect-video rounded-lg"
            poster="/logo.png"
          >
            <source src="/SPOT_Teaser.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </div>
    </section>
  );
}

