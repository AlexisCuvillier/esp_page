import ScrollReveal from "./ScrollReveal";

const wbsItems = [
  { title: "Application Mobile", items: ["Interface utilisateur", "Carte interactive", "Fiches SPOT", "Paramètres", "Profil utilisateur"] },
  { title: "Gamification", items: ["Trophées", "Grades", "Rareté", "Succès", "Classements"] },
  { title: "Gestion des SPOTs", items: ["Base de données", "Catégories", "Métadonnées", "Ajout utilisateur", "Modération"] },
  { title: "Communauté", items: ["Comptes utilisateurs", "Classement amis", "Contribution", "Profils publics"] },
  { title: "Backend", items: ["API", "Stockage", "Sécurité", "Calcul récompenses"] },
];

export default function WBS() {
  return (
    <section id="wbs" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4">
          🧱 Structure du Projet
        </h2>
        <p className="text-center text-[var(--foreground)]/70 mb-16 text-lg">
          Work Breakdown Structure (WBS)
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wbsItems.map((section, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="feature-card p-6 rounded-2xl h-full">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold mb-4 text-[var(--accent)]">
                  {index + 1}. {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-[var(--foreground)]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-dark)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

