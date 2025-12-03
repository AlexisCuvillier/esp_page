import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: "🗺️",
    title: "Carte interactive",
    description: "Découvrez les lieux emblématiques de votre région sur une carte immersive. Filtrez par type de SPOT pour trouver ce qui vous passionne.",
  },
  {
    icon: "🥇",
    title: "Grades & progression",
    description: "Chaque découverte rapporte de l'expérience. Montez en grade et débloquez de nouveaux privilèges.",
  },
  {
    icon: "🌟",
    title: "Système de rareté",
    description: "Les SPOTs existent en plusieurs niveaux : commun, rare, unique, légendaire. Collectionnez-les tous !",
  },
  {
    icon: "🎖️",
    title: "Trophées & succès",
    description: "Accomplissez des objectifs variés : visites, collections, catégories... et gagnez des récompenses exclusives.",
  },
  {
    icon: "👥",
    title: "Classements",
    description: "Comparez votre progression avec vos amis et grimpez dans les classements pour devenir le meilleur explorateur.",
  },
  {
    icon: "➕",
    title: "Contribution",
    description: "Proposez vos propres SPOTs depuis l'application et enrichissez le patrimoine collectif.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4">
          🧩 Fonctionnalités
        </h2>
        <p className="text-center text-[var(--foreground)]/70 mb-16 text-lg">
          Tout ce dont vous avez besoin pour explorer
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="feature-card p-8 rounded-2xl group h-full">
                <span className="text-5xl block mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-4 text-[var(--accent-light)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

