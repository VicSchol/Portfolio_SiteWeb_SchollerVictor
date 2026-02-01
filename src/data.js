// src/data.js
export const myProjects = [
{
    title: "Analyse d'Images Médicales",
    subtitle: "Deep Learning & Approches Semi-supervisées",
    iconName: "Microscope",
    details: {
      needs: "Identifier des cellules cancéreuses parmi **4 millions d'images** avec une contrainte budgétaire forte de **5 000 €**.",
      audit: "**Accuracy initiale : 0,70**. Le diagnostic a révélé que la performance stagnait à cause du volume massif de données non labélisées.",
      solution: "Mise en place d'un pipeline **Torchvision** : extraction d'embeddings, réduction de dimension (**t-SNE**) et clustering **K-Means** pour générer des pseudo-labels avant l'entraînement du CNN.",
      strategy: "**Score final : 0,95 d'Accuracy**. Déploiement d'une **API de diagnostic instantané** pour transformer l'analyse en outil d'aide à la décision médicale.",
      performance: "Solution scalable garantissant une meilleure généralisation grâce à l'apport du non-supervisé, tout en respectant l'enveloppe budgétaire.",
      reflexion: "L'exploration de l'**Active Learning** aurait été un levier supplémentaire pour affiner la sélection des images à labéliser et optimiser encore davantage le budget de 5 000 €."
    }
  },
  {
    title: "Agriculture Optimisée",
    subtitle: "MLOps & Système de Recommandation",
    iconName: "Sprout",
    details: {
      needs: "Optimiser les rendements agricoles en fonction des conditions environnementales (température, pluviométrie, pesticides).",
      audit: "**Analyse en Composantes Principales (PCA)** : 69,2% de la variance expliquée par le climat. Identification de corrélations négatives entre température et rendement.",
      solution: "Fusion de datasets via des 'bins' climatiques et modélisation via **XGBoost**. Architecture **MLOps** : GitHub Actions (CI/CD) et suivi via **MLFlow**.",
      strategy: "Application **Streamlit** offrant deux services : prédiction de rendement futur et recommandation de la culture la plus adaptée au climat.",
      performance: "Évaluation rigoureuse (RMSE, MAE). Mise en place de tests unitaires vérifiant les endpoints de l'API et la structure des données.",
      reflexion: "L'intégration de données satellite en temps réel via API permettrait d'automatiser entièrement le pipeline de recommandation."
    }
  },
  {
    title: "Plateforme Groupama-FDJ",
    subtitle: "Sport Scientist & Fullstack Data",
    iconName: "Activity",
    details: {
      needs: "Concevoir une plateforme propriétaire pour planifier l'entraînement et analyser la performance des coureurs cyclistes professionnels.",
      audit: "**Gestion de flux de données massifs (puissance, GPS, fréquence cardiaque)**. Nécessité d'une base flexible pour des séries temporelles complexes.",
      solution: "Architecture NoSQL avec MongoDB. Backend en Python (Pandas) pour le nettoyage et les stats de performance. Frontend en React JS.",
      strategy: "Outil centralisé permettant aux entraîneurs de prendre des décisions basées sur la charge d'entraînement réelle et la fatigue prédite.",
      performance: "Plateforme hébergée sur serveur Linux (OVH), utilisée quotidiennement par l'équipe World Tour pour le suivi de la performance de haut niveau."
    }
  }
];

export const skills = {
  hard: [
    { name: "Python (Pandas, Scikit-Learn)", level: 95 },
    { name: "Deep Learning (PyTorch)", level: 85 },
    { name: "Architecture NoSQL (MongoDB)", level: 90 },
    { name: "MLOps (CI/CD, MLFlow)", level: 75 },
    { name: "Développement React JS", level: 80 }
  ],
  soft: [
    { name: "Vulgarisation scientifique", level: 100 },
    { name: "Résolution de problèmes complexes", level: 90 },
    { name: "Autonomie & Gestion de projet", level: 95 }
  ]
};