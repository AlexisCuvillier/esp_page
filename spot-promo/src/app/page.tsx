import Image from "next/image";
import ScrollTrace from "./components/ScrollTrace";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Teaser", href: "#teaser" },
  { label: "Concept", href: "#concept" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Structure", href: "#wbs" },
  { label: "Rejoindre", href: "#join" },
];

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

const rarities = [
  { name: "Commun", class: "rarity-common", count: "60%" },
  { name: "Rare", class: "rarity-rare", count: "25%" },
  { name: "Unique", class: "rarity-unique", count: "12%" },
  { name: "Légendaire", class: "rarity-legendary", count: "3%" },
];

const wbsItems = [
  { title: "Application Mobile", items: ["Interface utilisateur", "Carte interactive", "Fiches SPOT", "Paramètres", "Profil utilisateur"] },
  { title: "Gamification", items: ["Trophées", "Grades", "Rareté", "Succès", "Classements"] },
  { title: "Gestion des SPOTs", items: ["Base de données", "Catégories", "Métadonnées", "Ajout utilisateur", "Modération"] },
  { title: "Communauté", items: ["Comptes utilisateurs", "Classement amis", "Contribution", "Profils publics"] },
  { title: "Backend", items: ["API", "Stockage", "Sécurité", "Calcul récompenses"] },
];

export default function Home() {
  return (
    <>
      <div className="gradient-bg" />
      <div className="grid-pattern" />
      
      {/* Side tracing line */}
      <ScrollTrace />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="SPOT"
              width={40}
              height={40}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-[family-name:var(--font-playfair)] font-bold text-xl hidden sm:block">
              SPOT
            </span>
          </a>
          
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-[var(--accent)] hover:bg-[var(--accent)]/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      <main className="relative min-h-screen">
        {/* Hero Section */}
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

        {/* Video Teaser Section */}
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

        <div className="section-divider max-w-2xl mx-auto" />

        {/* Résumé Section */}
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

        {/* Concept Section */}
        <section id="concept" className="py-20 px-6 bg-[var(--muted)]/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4">
              🗺️ Le Concept
            </h2>
            <p className="text-center text-[var(--foreground)]/70 mb-12 text-lg">
              SPOT transforme la découverte du patrimoine en expérience ludique
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Exploration d'une carte interactive",
                "Collection de SPOTs rares",
                "Gain de trophées",
                "Progression via des grades",
                "Classement entre amis",
                "Proposition de nouveaux SPOTs"
              ].map((item, index) => (
                <div key={index} className="feature-card p-6 rounded-xl flex items-center gap-4">
                  <span className="text-2xl">✨</span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center mt-12 text-xl text-[var(--accent-light)] font-semibold">
              SPOT rend la culture accessible, fun et motivante.
            </p>
          </div>
        </section>

        <div className="section-divider max-w-2xl mx-auto" />

        {/* Features Section */}
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
                <div
                  key={index}
                  className="feature-card p-8 rounded-2xl group"
                >
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
              ))}
            </div>
          </div>
        </section>

        {/* Rarity Section */}
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
                <div
                  key={index}
                  className={`${rarity.class} px-8 py-4 rounded-full text-white font-bold shadow-lg hover:scale-110 transition-transform duration-300`}
                >
                  <span className="block text-lg">{rarity.name}</span>
                  <span className="block text-sm opacity-80">{rarity.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-2xl mx-auto" />

        {/* WBS Section */}
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
                <div key={index} className="feature-card p-6 rounded-2xl">
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
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment Section */}
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
              <p className="text-[var(--accent-light)] font-semibold">
                🔗 QR code disponible dans le teaser
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-[var(--foreground)]/10">
          <div className="max-w-4xl mx-auto text-center">
            <Image
              src="/logo.png"
              alt="Logo SPOT"
              width={80}
              height={80}
              className="mx-auto mb-6 opacity-80"
            />
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-2 glow">
              🌟 Merci !
            </h3>
            <p className="text-[var(--foreground)]/70 text-lg">
              <strong>SPOT</strong> — La réalité d&apos;hier dans le monde d&apos;aujourd&apos;hui
            </p>
            <p className="mt-8 text-sm text-[var(--foreground)]/40">
              © 2025 Équipe SPOT — Projet étudiant
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
