# Prime Gaming Website

Une plateforme de gaming moderne construite avec Next.js et Go, offrant une expérience complète pour les joueurs.

## 🚀 Fonctionnalités

### Frontend (Next.js + TypeScript + Tailwind CSS)
- **Page d'accueil** : Vue d'ensemble avec jeux populaires et tendances
- **Store** : Catalogue complet de jeux avec filtres et recherche
- **News** : Articles d'actualité gaming avec catégories
- **Reviews** : Critiques détaillées avec système de notation
- **Guides** : Tutoriels et guides de jeu
- **About** : Présentation de l'équipe et de la mission
- **Authentification** : Pages de connexion et inscription complètes

### Backend (Go + Gorilla Mux)
- **API RESTful** complète
- **Gestion des jeux** : CRUD et recherche
- **Système d'utilisateurs** : Inscription et connexion
- **Gestion des catégories**
- **Articles de news**
- **CORS** configuré pour le développement

## 🛠️ Technologies utilisées

### Frontend
- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Shadcn/ui** - Composants UI
- **Lucide React** - Icônes

### Backend
- **Go** - Langage de programmation
- **Gorilla Mux** - Router HTTP
- **CORS** - Gestion des requêtes cross-origin

## 📦 Installation et démarrage

### Prérequis
- Node.js (v18 ou plus)
- Go (v1.21 ou plus)
- npm ou yarn

### 1. Cloner le projet
```bash
git clone <repository-url>
cd prime-gaming-website
```

### 2. Installation du Frontend
```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```
Le frontend sera accessible sur `http://localhost:3000` (ou 3001 si 3000 est occupé)

### 3. Installation du Backend
```bash
# Aller dans le dossier backend
cd backend

# Installer les dépendances Go
go mod download

# Démarrer le serveur
go run .
```
Le backend sera accessible sur `http://localhost:8081`

### 4. Tester l'API (optionnel)
```bash
# Rendre le script exécutable
chmod +x test_api.sh

# Exécuter les tests
./test_api.sh
```

## 📁 Structure du projet

```
prime-gaming-website/
├── app/                    # Pages Next.js
│   ├── Home/              # Page d'accueil
│   ├── about/             # Page à propos
│   ├── guides/            # Page guides
│   ├── login/             # Page de connexion
│   ├── news/              # Page actualités
│   ├── review/            # Page critiques
│   ├── signup/            # Page d'inscription
│   ├── store/             # Page boutique
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil par défaut
├── backend/               # Serveur Go
│   ├── main.go           # Serveur principal
│   ├── go.mod            # Dépendances Go
│   └── test_api.sh       # Script de test API
├── components/           # Composants React
│   └── ui/              # Composants UI (Shadcn)
├── lib/                 # Utilitaires
│   ├── api.ts          # Client API
│   └── utils.ts        # Fonctions utilitaires
├── public/             # Assets statiques
└── styles/            # Styles CSS
```

## 🔌 API Endpoints

### Games
- `GET /api/games` - Liste tous les jeux
- `GET /api/games/{id}` - Détails d'un jeu
- `GET /api/games/search?q=query` - Recherche de jeux

### Categories
- `GET /api/categories` - Liste des catégories

### News
- `GET /api/news` - Articles de news

### Users
- `POST /api/register` - Inscription utilisateur
- `POST /api/login` - Connexion utilisateur

### Health
- `GET /api/health` - Vérification de l'état du serveur

## 🎨 Design et UI

Le site utilise une palette de couleurs moderne avec :
- **Couleur principale** : `#06E193` (vert néon)
- **Couleur secondaire** : Orange (`orange-500`)
- **Arrière-plan** : Slate foncé (`slate-900`)
- **Interface** : Design sombre et moderne

### Composants UI
- Cards responsives avec hover effects
- Navigation avec breadcrumbs
- Système de badges et ratings
- Boutons avec animations
- Formulaires avec validation visuelle

## 🚀 Fonctionnalités avancées

### Pages spécialisées
1. **Store** : 
   - Vue grille/liste
   - Filtres par catégorie
   - Système de réduction
   - Wishlist

2. **Reviews** : 
   - Notation sur 10
   - Pros/Cons
   - Statistiques de reviews

3. **News** : 
   - Articles tendances
   - Catégories multiples
   - Système de vues/likes

4. **Guides** : 
   - Différents types (articles, vidéos)
   - Système de popularité
   - Newsletter

## 📱 Responsive Design

Le site est entièrement responsive avec :
- Breakpoints Tailwind (sm, md, lg, xl)
- Navigation mobile adaptée
- Grilles flexibles
- Images optimisées

## ⚡ Performance

- **Next.js** optimisations automatiques
- **Images optimisées** avec le composant Image de Next.js
- **Code splitting** automatique
- **CSS optimisé** avec Tailwind

## 🔧 Développement

### Scripts disponibles
```bash
npm run dev          # Démarrage développement
npm run build        # Build production
npm run start        # Démarrage production
npm run lint         # Linting du code
```

### Variables d'environnement
Créer un fichier `.env.local` :
```env
NEXT_PUBLIC_API_URL=http://localhost:8081/api
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Shadcn/ui](https://ui.shadcn.com/) - Composants UI
- [Lucide](https://lucide.dev/) - Icônes
- [Go](https://golang.org/) - Langage backend
- [Gorilla Mux](https://github.com/gorilla/mux) - Router HTTP

---

**Note** : Ce projet est un exemple de développement full-stack moderne avec des technologies actuelles. Il démontre les meilleures pratiques en matière de développement web, d'API design, et d'expérience utilisateur.




Fonctionnalités implémentées :
NextAuth.js configuré avec Google et GitHub
Boutons OAuth fonctionnels sur les pages login et signup
Gestion des sessions avec middleware de protection
Page d'erreur pour les échecs d'authentification
Composant SessionInfo pour afficher l'utilisateur connecté
🚀 Comment tester :
Configuration des clés OAuth (suivez OAUTH_SETUP.md)
Allez sur http://localhost:3000/login ou /signup
Cliquez sur Google ou GitHub
Autorisez l'application
Vous serez redirigé vers Home
🔧 Prochaines étapes :
Configurez vos vraies clés OAuth dans .env.local
Testez l'authentification
Ajoutez le composant SessionInfo dans vos headers
Personnalisez les callbacks selon vos besoins