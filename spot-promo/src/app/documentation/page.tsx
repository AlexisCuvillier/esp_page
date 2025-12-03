import ScrollReveal from "../components/ScrollReveal";

const wbsSections = [
  {
    id: "app-mobile",
    number: "1",
    title: "Application Mobile",
    icon: "📱",
    description: "L'application mobile est le cœur du projet SPOT. Elle permet aux utilisateurs de découvrir le patrimoine local via une interface intuitive, d'explorer une carte interactive, de consulter les fiches descriptives des lieux, et de gérer leur profil et leurs préférences.",
    subsections: [
      {
        title: "1.1 Interface Utilisateur",
        items: ["Design System (charte graphique, composants)", "Navigation (menu, écrans, deep linking)", "Thèmes (clair, sombre, personnalisés)"]
      },
      {
        title: "1.2 Carte Interactive",
        items: ["Affichage carte (MapBox/Google Maps, géolocalisation)", "Marqueurs SPOT (POI, clustering, rareté)", "Filtres et recherche (catégorie, distance, texte)"]
      },
      {
        title: "1.3 Fiches SPOT",
        items: ["Contenu (description, photos, historique)", "Interactions (check-in, partage, favoris)", "Gamification (badge rareté, XP, statut)"]
      },
      {
        title: "1.4 Paramètres",
        items: ["Compte (profil, mot de passe, RGPD)", "Notifications (push, alertes, résumé)", "Accessibilité et configuration"]
      },
      {
        title: "1.5 Profil Utilisateur",
        items: ["Informations personnelles", "Statistiques (SPOT, XP, grade)", "Collections et timeline"]
      }
    ]
  },
  {
    id: "gamification",
    number: "2",
    title: "Gamification",
    icon: "🎮",
    description: "La gamification transforme la découverte du patrimoine en expérience ludique et motivante. Elle repose sur un système de récompenses (trophées, XP, grades), un mécanisme de rareté des SPOT, des succès à débloquer, et des classements.",
    subsections: [
      {
        title: "2.1 Trophées",
        items: ["Types (exploration, collection, social, fidélité)", "Niveaux (Bronze → Argent → Or → Platine)", "Affichage et animations de déblocage"]
      },
      {
        title: "2.2 Grades",
        items: ["Système XP (Novice → Légende)", "8 niveaux de progression", "Avantages exclusifs par grade"]
      },
      {
        title: "2.3 Rareté des SPOT",
        items: ["Commun (60%) - 10 XP", "Rare (25%) - 25 XP", "Unique (12%) - 50 XP", "Légendaire (3%) - 100 XP"]
      },
      {
        title: "2.4 Succès",
        items: ["Succès d'exploration", "Succès de collection", "Succès sociaux"]
      },
      {
        title: "2.5 Classements",
        items: ["Global, Amis, Régional", "Hebdomadaire, Mensuel", "Critères (XP, SPOT, trophées)"]
      }
    ]
  },
  {
    id: "gestion-spot",
    number: "3",
    title: "Gestion des SPOT",
    icon: "📍",
    description: "Cette section couvre tout ce qui concerne les SPOT eux-mêmes : leur stockage en base de données, leur catégorisation, leurs métadonnées enrichies, le système de contribution utilisateur, et le processus de modération.",
    subsections: [
      {
        title: "3.1 Base de Données",
        items: ["Structure (ID, nom, GPS, catégorie, rareté)", "Sources (patrimoine national, contributions, API)"]
      },
      {
        title: "3.2 Catégories",
        items: ["Historique, Culturel, Océanique, Naturel", "Sous-catégories détaillées"]
      },
      {
        title: "3.3 Métadonnées",
        items: ["Informations enrichies (histoire, anecdotes)", "Informations pratiques (accès, tarifs)"]
      },
      {
        title: "3.4 Contribution Utilisateur",
        items: ["Formulaire de proposition", "Suivi du statut de validation"]
      },
      {
        title: "3.5 Modération",
        items: ["Vérification automatique", "Révision humaine", "Dashboard admin"]
      }
    ]
  },
  {
    id: "communaute",
    number: "4",
    title: "Communauté",
    icon: "👥",
    description: "La dimension communautaire de SPOT permet aux utilisateurs de créer un compte, d'ajouter des amis, de comparer leurs progressions, de contribuer au contenu, et de personnaliser leur profil public.",
    subsections: [
      {
        title: "4.1 Comptes Utilisateurs",
        items: ["Inscription (email, OAuth)", "Authentification (biométrie, session)", "Récupération mot de passe"]
      },
      {
        title: "4.2 Système d'Amis",
        items: ["Recherche et ajout (pseudo, QR code)", "Comparaison et défis"]
      },
      {
        title: "4.3 Contribution",
        items: ["Récompenses contributeur", "Niveaux (Contributeur → Expert)"]
      },
      {
        title: "4.4 Profils Publics",
        items: ["Visibilité configurable", "Personnalisation du profil"]
      }
    ]
  },
  {
    id: "backend",
    number: "5",
    title: "Backend",
    icon: "⚙️",
    description: "Le backend constitue l'infrastructure technique du projet. Il comprend l'API REST qui connecte l'application aux données, le système de stockage, les mesures de sécurité, et le moteur de calcul des récompenses.",
    subsections: [
      {
        title: "5.1 API REST",
        items: ["Endpoints (/auth, /users, /spots, /achievements)", "JWT, rate limiting, documentation Swagger"]
      },
      {
        title: "5.2 Stockage",
        items: ["PostgreSQL, Redis, Elasticsearch", "AWS S3 / CDN pour les images"]
      },
      {
        title: "5.3 Sécurité",
        items: ["Chiffrement (HTTPS, bcrypt)", "Conformité RGPD", "Protection CSRF/SQL injection"]
      },
      {
        title: "5.4 Moteur de Gamification",
        items: ["Calcul XP temps réel", "Attribution grades et succès", "Système anti-triche"]
      }
    ]
  },
  {
    id: "promotion",
    number: "6",
    title: "Promotion",
    icon: "📢",
    description: "La promotion assure la visibilité du projet auprès du public cible. Elle comprend la production d'un teaser vidéo, la création d'un site web vitrine, le développement d'une identité visuelle cohérente, et la préparation des présentations.",
    subsections: [
      {
        title: "6.1 Teaser Vidéo",
        items: ["Production (scénario, tournage, montage)", "Distribution (YouTube, réseaux sociaux)"]
      },
      {
        title: "6.2 Site Web",
        items: ["Next.js, Tailwind CSS", "Responsive, SEO, Analytics"]
      },
      {
        title: "6.3 Identité Visuelle",
        items: ["Logo, palette couleurs, typographie", "Charte graphique documentée"]
      },
      {
        title: "6.4 Présentation Orale",
        items: ["Pitch structuré, slides", "Démonstration live"]
      }
    ]
  }
];

const grades = [
  { name: "Explorateur Novice", xp: "0 - 100", color: "bg-gray-500" },
  { name: "Explorateur Confirmé", xp: "100 - 500", color: "bg-gray-400" },
  { name: "Aventurier", xp: "500 - 1 500", color: "bg-green-600" },
  { name: "Aventurier Expert", xp: "1 500 - 3 500", color: "bg-green-500" },
  { name: "Découvreur", xp: "3 500 - 7 000", color: "bg-blue-600" },
  { name: "Découvreur Elite", xp: "7 000 - 12 000", color: "bg-blue-500" },
  { name: "Maître Explorateur", xp: "12 000 - 20 000", color: "bg-purple-600" },
  { name: "Légende", xp: "20 000+", color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
];

export default function Documentation() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="py-20 px-6 text-center border-b border-[var(--foreground)]/10">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold mb-4">
          🧱 Documentation WBS
        </h1>
        <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
          Work Breakdown Structure — Description détaillée des fonctions du projet SPOT
        </p>
        <a 
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-full font-medium hover:bg-[var(--accent-light)] transition-colors"
        >
          ← Retour au site
        </a>
      </header>

      {/* Table of Contents */}
      <nav className="py-12 px-6 bg-[var(--muted)]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">📋 Sommaire</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wbsSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="p-4 bg-[var(--card-bg)] rounded-xl hover:bg-[var(--accent)]/10 transition-colors border border-[var(--foreground)]/10"
              >
                <span className="text-2xl mr-2">{section.icon}</span>
                <span className="font-medium">{section.number}. {section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* WBS Sections */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {wbsSections.map((section, sectionIndex) => (
          <section key={section.id} id={section.id} className="mb-20 scroll-mt-8">
            <ScrollReveal delay={0}>
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{section.icon}</span>
                  <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold">
                    {section.number}. {section.title}
                  </h2>
                </div>
                <p className="text-lg text-[var(--foreground)]/80 leading-relaxed pl-16">
                  {section.description}
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6 pl-4 border-l-2 border-[var(--accent)]/30">
              {section.subsections.map((sub, subIndex) => (
                <ScrollReveal key={subIndex} delay={subIndex * 100}>
                  <div className="pl-8 py-4">
                    <h3 className="text-xl font-semibold text-[var(--accent-light)] mb-3">
                      {sub.title}
                    </h3>
                    <ul className="space-y-2">
                      {sub.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-[var(--foreground)]/70">
                          <span className="text-[var(--accent)] mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {sectionIndex < wbsSections.length - 1 && (
              <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent mt-16" />
            )}
          </section>
        ))}

        {/* Grades Table */}
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-8 text-center">
              🏆 Système de Grades
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[var(--foreground)]/20">
                    <th className="text-left py-4 px-4">Grade</th>
                    <th className="text-left py-4 px-4">XP Requise</th>
                    <th className="text-left py-4 px-4">Indicateur</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((grade, index) => (
                    <tr key={index} className="border-b border-[var(--foreground)]/10">
                      <td className="py-3 px-4 font-medium">{grade.name}</td>
                      <td className="py-3 px-4 text-[var(--foreground)]/70">{grade.xp}</td>
                      <td className="py-3 px-4">
                        <div className={`w-20 h-3 rounded-full ${grade.color}`} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--foreground)]/10 text-center">
        <p className="text-[var(--foreground)]/50">
          <strong>SPOT</strong> — Work Breakdown Structure v1.1 — Décembre 2025
        </p>
        <a 
          href="/"
          className="inline-block mt-4 text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors"
        >
          ← Retour au site principal
        </a>
      </footer>
    </main>
  );
}

