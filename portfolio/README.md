# Portfolio

Portfolio des projets, compétences et parcours pedagogique du premier année bachelor.
Construit avec React.

---

## Stack technique

- **React**
- **Vite**
- **CSS**

## Fonctionnalités

- Mode sombre
- Navbar fixe avec effet au scroll
- projets avec tags, descriptions et réflexions
- Téléchargement du CV
- Responsive (mobile)

---

## Lancer le projet en local

```bash
# Installer les dépendances
npm install

# Lancer le serveur dev
npm run dev
```

Le site est accessible à `http://localhost:5173`

## Build & déploiement

```bash
# Build de production
npm run build

# Prévisualiser le build en local
npm run preview

# Déployer sur GitHub Pages
npm run deploy
```

---

## Structure du projet

```
portfolio/
├── public/
│   └── Daniel Sosa Merino.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── ProjectCard.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── pages/
│   │   └── Home.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Projects.tsx
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```
