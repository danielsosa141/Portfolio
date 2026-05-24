import elizaImg from "../assets/eliza.png";
import todoImg from "../assets/TODO.png";
import yolwImg from "../assets/yolw.png";
import tardisImg from "../assets/tardis.png";
import nextImg from "../assets/next.png";
import bookImg from "../assets/bookworm.png";

export type Project = {
  id: number;
  title: string;
  client: string;
  status: "completed" | "wip";
  tags: string[];
  image?: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Projet ELIZA — Chatbot Fitness B2B",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["Python", "NLP", "LLM", "Business Plan"],
    image: elizaImg,
    description:
      "Chatbot assistant pour salles de sport : analyse des besoins métier, business plan, modèle SaaS, calcul ROI/KPIs et évaluation éthique. Landing page promotionnelle.",
  },
  {
    id: 2,
    title: "Data Analysis — NEXT BUY",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["Python", "Machine Learning", "Data Analysis", "scikit-learn"],
    image: nextImg,
    description:
      "Perspectives commerciales d'un supermarché. Analyses prédictive, explicative, descriptive et prescriptive. Construction de modèles prédictifs et compréhension des tendances comportementales.",
  },
  {
    id: 3,
    title: "NLP CLI — Book Card",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["Python", "NLP", "TF-IDF", "LDA", "NER"],
    image: bookImg,
    description:
      "Outil CLI d'analyse de livres (Project Gutenberg) : diversité lexicale, topic modeling, reconnaissance d'entités, résumé automatique et similarité entreouvrages.",
  },
  {
    id: 4,
    title: "Data Analysis — Retards SNCF",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["Python", "pandas", "matplotlib", "scikit-learn", "Streamlit"],
    image: tardisImg,
    description:
      "Analyses et prédictions des retards SNCF. Nettoyage de données, analyse exploratoire, visualisations, modèle prédictif ML et dashboard interactif Streamlit.",
  },
  {
    id: 5,
    title: "Product Design — MVP App Sociale",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["UI/UX", "Figma", "Product Design", "MVP"],
    image: yolwImg,
    description:
      "Conception d'un MVP d'un reseau sociale pour les institutions pédagogiques. De la recherche utilisateur au prototype Figma.",
  },
  {
    id: 6,
    title: "Hackathon — Le Petit Ecolo",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["React", "UI/UX", "Figma", "Hackathon"],
    image: "",
    description:
      "Bibliothèque interactive écologique conçue lors d'un hackathon produit design. Renforcement des compétences React et UI/UX.",
  },
  {
    id: 7,
    title: "Hack & Juice — CTF Cybersécurité",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["OWASP Top 10", "Pen Testing", "Sécurité"],
    image: "",
    description:
      "CTF en cybersécurité. Apprentissage des vulnérabilités OWASP Top 10, pen testing et rédaction de rapports de résultats.",
  },
  {
    id: 8,
    title: "TODO List — Full-Stack",
    client: "Bachelor Informatique & Tech · 2025–2026",
    status: "completed",
    tags: ["REACT", "JS", "Node.js", "MySQL"],
    image: todoImg,
    description:
      "Application de gestion de tâches en REACT avec backend Node.js et base de données MySQL.",
  },
];
