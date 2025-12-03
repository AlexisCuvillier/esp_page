import ScrollReveal from "./ScrollReveal";

const rarities = [
  { name: "Commun", class: "rarity-common", count: "60%" },
  { name: "Rare", class: "rarity-rare", count: "25%" },
  { name: "Unique", class: "rarity-unique", count: "12%" },
  { name: "Légendaire", class: "rarity-legendary", count: "3%" },
];

export default function Rarity() {
  return (
    <section className="py-20 px-6 bg-[var(--muted)]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4">
          🌟 Système de Rareté
        </h2>
        <p className="text-center text-[var(--foreground)]/70 mb-12 text-lg">
          Collectionnez des SPOTs de différentes raretés
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {rarities.map((rarity, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div
                className={`${rarity.class} px-8 py-4 rounded-full text-white font-bold shadow-lg hover:scale-110 transition-transform duration-300`}
              >
                <span className="block text-lg">{rarity.name}</span>
                <span className="block text-sm opacity-80">{rarity.count}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

