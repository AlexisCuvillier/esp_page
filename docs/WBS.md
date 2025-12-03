# 🧱 SPOT — WBS & Description des Fonctions

> *La réalité d'hier dans le monde d'aujourd'hui*

---

## 📱 1. Application Mobile

L'application mobile est le cœur du projet SPOT. Elle permet aux utilisateurs de découvrir le patrimoine local via une interface intuitive, d'explorer une carte interactive, de consulter les fiches descriptives des lieux, et de gérer leur profil et leurs préférences.

### 1.1 Interface Utilisateur (UI)

L'interface utilisateur définit l'expérience visuelle et interactive de l'application. Elle comprend le design system (couleurs, composants), la navigation entre les écrans, et les différents thèmes disponibles.

| Élément | Description |
|---------|-------------|
| **Design System** | Charte graphique, composants réutilisables, iconographie, animations |
| **Navigation** | Menu principal, navigation entre écrans, deep linking |
| **Thèmes** | Mode clair, mode sombre, thèmes personnalisés selon grade |

### 1.2 Carte Interactive

La carte interactive est la fonctionnalité principale de l'application. Elle affiche les SPOT sur une carte géolocalisée, permet de filtrer les lieux par catégorie ou rareté, et offre une recherche avancée.

| Élément | Description |
|---------|-------------|
| **Affichage** | Intégration MapBox/Google Maps, géolocalisation temps réel |
| **Marqueurs SPOT** | Affichage POI, clustering, différenciation par rareté |
| **Filtres** | Par catégorie, rareté, statut, distance, recherche textuelle |

### 1.3 Fiches SPOT

Chaque SPOT dispose d'une fiche détaillée présentant le lieu : description, photos, informations historiques, et données pratiques. L'utilisateur peut interagir avec la fiche et voir les récompenses associées.

| Élément | Description |
|---------|-------------|
| **Contenu** | Nom, description, photos, infos historiques, coordonnées GPS |
| **Interactions** | Check-in "J'y suis", partage, favoris, signalement |
| **Gamification** | Badge de rareté, XP gagnée, statut de découverte |

### 1.4 Paramètres

Les paramètres permettent à l'utilisateur de personnaliser son expérience.

| Élément | Description |
|---------|-------------|
| **Compte** | Modification profil, mot de passe, suppression, export RGPD |
| **Notifications** | Push on/off, alertes proximité, notifications sociales |
| **Accessibilité** | Taille texte, contraste, lecteur d'écran |
| **Application** | Langue, unités, cache hors ligne, mentions légales |

### 1.5 Profil Utilisateur

Le profil affiche les informations personnelles, les statistiques de progression, et les collections de l'utilisateur.

| Élément | Description |
|---------|-------------|
| **Informations** | Avatar, pseudo, bio, région |
| **Statistiques** | SPOT découverts, XP, grade, distance parcourue |
| **Collections** | Liste des découvertes, favoris, timeline |

---

## 🎮 2. Gamification

La gamification transforme la découverte du patrimoine en expérience ludique et motivante. Elle repose sur un système de récompenses, un mécanisme de rareté, des succès à débloquer, et des classements.

### 2.1 Trophées

Les trophées récompensent les accomplissements de l'utilisateur.

| Type | Exemples |
|------|----------|
| **Exploration** | Nombre de SPOT visités |
| **Collection** | Tous les SPOT d'une catégorie |
| **Rareté** | Premier SPOT légendaire |
| **Social** | Inviter des amis |
| **Fidélité** | Jours consécutifs |

**Niveaux** : 🥉 Bronze → 🥈 Argent → 🥇 Or → 💎 Platine

### 2.2 Grades

Le système de grades récompense la progression globale via l'XP accumulée.

| Grade | XP requise |
|-------|------------|
| Explorateur Novice | 0 - 100 |
| Explorateur Confirmé | 100 - 500 |
| Aventurier | 500 - 1 500 |
| Aventurier Expert | 1 500 - 3 500 |
| Découvreur | 3 500 - 7 000 |
| Découvreur Elite | 7 000 - 12 000 |
| Maître Explorateur | 12 000 - 20 000 |
| **Légende** | 20 000+ |

### 2.3 Rareté des SPOT

Chaque SPOT est classé selon un niveau de rareté basé sur son importance historique.

| Rareté | Proportion | XP gagnée |
|--------|------------|-----------|
| ⚪ Commun | 60% | 10 XP |
| 🔵 Rare | 25% | 25 XP |
| 🟣 Unique | 12% | 50 XP |
| 🟡 Légendaire | 3% | 100 XP |

### 2.4 Succès

Les succès sont des objectifs spécifiques à accomplir.

- **Exploration** : Premier SPOT, 10/50/100/500 découverts, tous les SPOT d'une ville
- **Collection** : Première collection complète, tous les SPOT d'une catégorie
- **Social** : Premier ami, 10 amis, partage, SPOT proposé et validé

### 2.5 Classements

| Type | Description |
|------|-------------|
| Global | Tous les utilisateurs |
| Amis | Entre amis uniquement |
| Régional | Par zone géographique |
| Hebdomadaire | Reset chaque semaine |
| Mensuel | Reset chaque mois |

---

## 📍 3. Gestion des SPOT

Cette section couvre le stockage, la catégorisation, les métadonnées, la contribution utilisateur, et la modération.

### 3.1 Base de Données

| Champ | Description |
|-------|-------------|
| ID | Identifiant unique |
| Nom, Description | Informations textuelles |
| Coordonnées GPS | Latitude, longitude |
| Catégorie | Historique, culturel, océanique... |
| Rareté | Commun à Légendaire |
| Images | URLs des photos |
| Métadonnées | Contexte historique, anecdotes |

### 3.2 Catégories

**Principales** :
- 🏛️ Patrimoine Historique
- 🎭 Patrimoine Culturel
- 🌊 Patrimoine Océanique/Maritime
- 🌲 Patrimoine Naturel
- 🏗️ Architecture remarquable

**Sous-catégories** : Châteaux, monuments religieux, musées, sites archéologiques, phares, plages, parcs, street art, gastronomie...

### 3.3 Métadonnées

- **Enrichies** : Période historique, personnages associés, événements, anecdotes
- **Pratiques** : Accessibilité PMR, parking, transports, tarifs, temps de visite

### 3.4 Contribution Utilisateur

Les utilisateurs peuvent proposer de nouveaux SPOT via un formulaire dédié.

| Étape | Statut |
|-------|--------|
| 1 | En attente de validation |
| 2 | En cours de révision |
| 3 | ✅ Validé ou ❌ Refusé |

### 3.5 Modération

- Vérification automatique (doublons, spam)
- Révision par modérateurs
- Attribution de la rareté
- Dashboard admin avec file d'attente

---

## 👥 4. Communauté

La dimension communautaire permet de créer un compte, d'ajouter des amis, de contribuer au contenu, et de personnaliser son profil public.

### 4.1 Comptes Utilisateurs

| Fonctionnalité | Options |
|----------------|---------|
| **Inscription** | Email + mot de passe, OAuth (Google, Apple, Facebook) |
| **Authentification** | Login classique, biométrie, session persistante |
| **Récupération** | Mot de passe oublié |

### 4.2 Système d'Amis

- Recherche par pseudo
- Ajout par QR code
- Import des contacts
- Comparaison des statistiques
- Défis entre amis

### 4.3 Contribution

| Niveau | SPOT validés |
|--------|--------------|
| Contributeur | 1 - 5 |
| Contributeur Actif | 6 - 20 |
| Contributeur Expert | 21+ |

**Récompenses** : Badge spécial, XP bonus, mention dans les crédits

### 4.4 Profils Publics

- Visibilité configurable (public/privé)
- Personnalisation du thème
- Mise en avant des accomplissements

---

## ⚙️ 5. Backend

Le backend constitue l'infrastructure technique : API, stockage, sécurité, et moteur de gamification.

### 5.1 API REST

| Endpoint | Description |
|----------|-------------|
| `/auth` | Inscription, login, logout |
| `/users` | Profil, stats, amis |
| `/spots` | CRUD, recherche, filtres |
| `/achievements` | Trophées, succès |
| `/leaderboard` | Classements |

**Spécifications** : JWT, rate limiting, versioning, documentation Swagger

### 5.2 Stockage

| Service | Usage |
|---------|-------|
| PostgreSQL | Données relationnelles |
| Redis | Cache, sessions |
| AWS S3 / CloudFlare R2 | Images, fichiers |
| CDN | Distribution rapide |

### 5.3 Sécurité

- ✅ Chiffrement HTTPS
- ✅ Hashage bcrypt
- ✅ Conformité RGPD
- ✅ Protection CSRF / Injection SQL
- ✅ Audit logs

### 5.4 Moteur de Gamification

- Calcul XP en temps réel
- Vérification des succès
- Attribution automatique des grades
- Mise à jour des classements
- **Anti-triche** : Vérification GPS, cooldown, détection de comportements suspects

---

## 📢 6. Promotion

La promotion assure la visibilité du projet : teaser vidéo, site web, identité visuelle, et présentations.

### 6.1 Teaser Vidéo

| Phase | Détails |
|-------|---------|
| Production | Scénario, storyboard, tournage/animation, montage |
| Distribution | YouTube, réseaux sociaux, site web |

### 6.2 Site Web (GitHub Page)

- **Stack** : Next.js, Tailwind CSS
- **Contenu** : Présentation, fonctionnalités, équipe
- **Technique** : Responsive, SEO, analytics

### 6.3 Identité Visuelle

- Logo (versions couleur, N&B, icône)
- Palette de couleurs turquoise
- Typographie cohérente
- Templates réseaux sociaux
- Charte graphique documentée

### 6.4 Présentation Orale

- Structure du pitch
- Slides visuelles
- Démonstration live
- Anticipation des questions

---

**SPOT** — *La réalité d'hier dans le monde d'aujourd'hui* — v1.1 — 🌐 Site : [esp-page.vercel.app](https://esp-page.vercel.app/)

