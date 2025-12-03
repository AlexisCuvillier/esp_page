import ScrollReveal from "./ScrollReveal";

const conceptItems = [
  "Exploration d'une carte interactive",
  "Collection de SPOTs rares",
  "Gain de trophées",
  "Progression via des grades",
  "Classement entre amis",
  "Proposition de nouveaux SPOTs"
];

export default function Concept() {
  return (
    <section id="concept" className="py-20 px-6 bg-[var(--muted)]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4">
          🗺️ Le Concept
        </h2>
        <p className="text-center text-[var(--foreground)]/70 mb-12 text-lg">
          SPOT transforme la découverte du patrimoine en expérience ludique
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {conceptItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="feature-card p-6 rounded-xl flex items-center gap-4">
                <span className="text-2xl">✨</span>
                <span className="text-lg">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <p className="text-center mt-12 text-xl text-[var(--accent-light)] font-semibold">
          SPOT rend la culture accessible, fun et motivante.
        </p>
      </div>
    </section>
  );
}

