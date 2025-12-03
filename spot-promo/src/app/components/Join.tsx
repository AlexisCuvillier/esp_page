import Image from "next/image";

export default function Join() {
  return (
    <section id="join" className="py-20 px-6 bg-gradient-to-b from-[var(--muted)]/30 to-transparent">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
          💬 Rejoignez-nous
        </h2>
        <p className="text-[var(--foreground)]/70 mb-8 text-lg">
          Le projet SPOT recrute au sein de la promotion
        </p>
        
        <div className="feature-card p-8 rounded-2xl inline-block">
          <p className="text-xl mb-6">
            Toutes les informations de positionnement sont disponibles sur notre serveur Discord
          </p>
          
          {/* QR Code Discord */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <Image
                src="/discord-qr.svg"
                alt="QR Code Discord SPOT"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <p className="text-[var(--accent-light)] font-semibold">
              📱 Scannez pour rejoindre le Discord
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
