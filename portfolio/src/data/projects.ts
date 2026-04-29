export type Project = {
  id: number;
  title: string;
  client: string;
  status: "completed" | "wip";
  tags: string[];
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Projet ELIZA — Chatbot Fitness B2B",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["Python", "NLP", "LLM", "Business Plan"],
    description:
      "Chatbot assistant pour salles de sport : analyse des besoins métier, business plan, modèle SaaS, calcul ROI/KPIs et évaluation éthique. Landing page promotionnelle.",
  },
  {
    id: 2,
    title: "Data Analysis — NEXT BUY",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["Python", "Machine Learning", "Data Analysis", "scikit-learn"],
    description:
      "Perspectives commerciales d'un supermarché. Analyses prédictive, explicative, descriptive et prescriptive. Construction de modèles prédictifs et compréhension des tendances comportementales.",
  },
  {
    id: 3,
    title: "NLP CLI — Book Card",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["Python", "NLP", "TF-IDF", "LDA", "NER"],
    description:
      "Outil CLI d'analyse de livres (Project Gutenberg) : diversité lexicale, topic modeling, reconnaissance d'entités, résumé automatique et similarité entreouvrages.",
  },
  {
    id: 4,
    title: "Data Analysis — Retards SNCF",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["Python", "pandas", "matplotlib", "scikit-learn", "Streamlit"],
    description:
      "Analyses et prédictions des retards SNCF. Nettoyage de données, analyse exploratoire, visualisations, modèle prédictif ML et dashboard interactif Streamlit.",
  },
  {
    id: 5,
    title: "Product Design — MVP App Sociale",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["UI/UX", "Figma", "Product Design", "MVP"],
    description:
      "Conception d'un MVP d'un reseau sociale pour les institutions pédagogiques. De la recherche utilisateur au prototype Figma.",
  },
  {
    id: 6,
    title: "Hackathon — Le Petit Ecolo",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["React", "UI/UX", "Figma", "Hackathon"],
    description:
      "Bibliothèque interactive écologique conçue lors d'un hackathon produit design. Renforcement des compétences React et UI/UX.",
  },
  {
    id: 7,
    title: "Hack & Juice — CTF Cybersécurité",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["OWASP Top 10", "Pen Testing", "Sécurité"],
    description:
      "CTF en cybersécurité. Apprentissage des vulnérabilités OWASP Top 10, pen testing et rédaction de rapports de résultats.",
  },
  {
    id: 8,
    title: "TODO List — Full-Stack",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["HTML", "CSS", "JS", "Node.js", "MySQL"],
    description:
      "Application de gestion de tâches en HTML, CSS, JS avec backend Node.js et base de données MySQL.",
  },
];
