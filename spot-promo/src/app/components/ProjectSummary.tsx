export default function ProjectSummary() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-12">
          📖 Le Projet
        </h2>
        
        <div className="feature-card p-8 md:p-12 rounded-2xl text-center">
          <p className="text-xl md:text-2xl leading-relaxed text-[var(--foreground)]/90">
            SPOT est une application gratuite qui valorise le <span className="text-[var(--accent)]">patrimoine historique</span>, 
            <span className="text-[var(--accent-dark)]"> culturel</span> et <span className="text-[var(--accent-light)]">océanique</span> de 
            chaque territoire. Elle permet de découvrir les lieux emblématiques d&apos;une région de manière ludique, 
            de collectionner des récompenses, d&apos;obtenir des grades, de comparer sa progression avec ses amis 
            et de proposer de nouveaux SPOTs.
          </p>
        </div>
      </div>
    </section>
  );
}

