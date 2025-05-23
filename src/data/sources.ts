
export interface Source {
  id: string;
  title: string;
  url: string;
  type: SourceType;
  country: string;
  ideology?: string;
  tags: string[];
  description: string;
}

export enum SourceType {
  PRESS = "Presse généraliste",
  THINK_TANK = "Think tank",
  BLOG = "Blog spécialisé",
  GOVERNMENT = "Source gouvernementale",
  ACADEMIC = "Publication académique",
  NGO = "ONG",
  SPECIALIZED = "Média spécialisé"
}

export const sources: Source[] = [
  {
    id: "lemonde",
    title: "Le Monde",
    url: "https://www.lemonde.fr",
    type: SourceType.PRESS,
    country: "France",
    ideology: "Centre",
    tags: ["actualité", "politique", "international", "économie", "europe"],
    description: "Quotidien français de référence"
  },
  {
    id: "ft",
    title: "Financial Times",
    url: "https://www.ft.com",
    type: SourceType.PRESS,
    country: "Royaume-Uni",
    ideology: "Libéral",
    tags: ["finance", "économie", "business", "international", "marchés"],
    description: "Journal économique et financier britannique"
  },
  {
    id: "foreignpolicy",
    title: "Foreign Policy",
    url: "https://foreignpolicy.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["relations internationales", "géopolitique", "diplomatie", "sécurité"],
    description: "Magazine américain spécialisé en relations internationales"
  },
  {
    id: "ifri",
    title: "IFRI",
    url: "https://www.ifri.org",
    type: SourceType.THINK_TANK,
    country: "France",
    tags: ["géopolitique", "défense", "sécurité", "relations internationales", "europe"],
    description: "Institut français des relations internationales"
  },
  {
    id: "brookings",
    title: "Brookings Institution",
    url: "https://www.brookings.edu",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    ideology: "Centre",
    tags: ["politique", "économie", "développement", "gouvernance"],
    description: "Think tank américain de recherche en sciences sociales"
  },
  {
    id: "elysee",
    title: "Élysée",
    url: "https://www.elysee.fr",
    type: SourceType.GOVERNMENT,
    country: "France",
    tags: ["gouvernement", "présidence", "politique", "diplomatie"],
    description: "Site officiel de la Présidence de la République française"
  },
  {
    id: "diplomatie",
    title: "France Diplomatie",
    url: "https://www.diplomatie.gouv.fr",
    type: SourceType.GOVERNMENT,
    country: "France",
    tags: ["diplomatie", "international", "coopération", "consulaire"],
    description: "Ministère de l'Europe et des Affaires étrangères"
  },
  {
    id: "cfr",
    title: "Council on Foreign Relations",
    url: "https://www.cfr.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    tags: ["politique étrangère", "défense", "sécurité", "économie mondiale"],
    description: "Think tank américain spécialisé en politique étrangère"
  },
  {
    id: "diploweb",
    title: "Diploweb",
    url: "https://www.diploweb.com",
    type: SourceType.SPECIALIZED,
    country: "France",
    tags: ["géopolitique", "géoéconomie", "relations internationales"],
    description: "Revue géopolitique en ligne"
  },
  {
    id: "iris",
    title: "IRIS",
    url: "https://www.iris-france.org",
    type: SourceType.THINK_TANK,
    country: "France",
    tags: ["relations internationales", "stratégique", "sécurité", "défense"],
    description: "Institut de relations internationales et stratégiques"
  },
  {
    id: "monde-diplomatique",
    title: "Le Monde Diplomatique",
    url: "https://www.monde-diplomatique.fr",
    type: SourceType.PRESS,
    country: "France",
    ideology: "Gauche",
    tags: ["analyse", "international", "politique", "économie", "société"],
    description: "Mensuel d'analyse et d'opinion international"
  },
  {
    id: "economist",
    title: "The Economist",
    url: "https://www.economist.com",
    type: SourceType.PRESS,
    country: "Royaume-Uni",
    ideology: "Libéral",
    tags: ["économie", "politique", "international", "finance", "business"],
    description: "Hebdomadaire britannique d'actualité économique et politique"
  },
  {
    id: "chatham",
    title: "Chatham House",
    url: "https://www.chathamhouse.org",
    type: SourceType.THINK_TANK,
    country: "Royaume-Uni",
    tags: ["politique internationale", "gouvernance", "économie", "sécurité", "énergie"],
    description: "Royal Institute of International Affairs"
  },
  {
    id: "carnegie",
    title: "Carnegie Endowment",
    url: "https://carnegieendowment.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    tags: ["paix", "sécurité", "démocratie", "développement"],
    description: "Réseau mondial de politique étrangère"
  },
  {
    id: "iiss",
    title: "IISS",
    url: "https://www.iiss.org",
    type: SourceType.THINK_TANK,
    country: "Royaume-Uni",
    tags: ["sécurité", "défense", "conflits", "militaire", "stratégie"],
    description: "International Institute for Strategic Studies"
  },
  {
    id: "sipri",
    title: "SIPRI",
    url: "https://www.sipri.org",
    type: SourceType.ACADEMIC,
    country: "Suède",
    tags: ["paix", "conflit", "armement", "désarmement", "sécurité"],
    description: "Stockholm International Peace Research Institute"
  },
  {
    id: "euractiv",
    title: "Euractiv",
    url: "https://www.euractiv.com",
    type: SourceType.SPECIALIZED,
    country: "Union Européenne",
    tags: ["europe", "politique européenne", "institutions", "législation"],
    description: "Média paneuropéen spécialisé dans les politiques de l'UE"
  },
  {
    id: "politico-eu",
    title: "Politico Europe",
    url: "https://www.politico.eu",
    type: SourceType.SPECIALIZED,
    country: "Union Européenne",
    tags: ["politique", "europe", "bruxelles", "lobbying", "parlement européen"],
    description: "Journal politique couvrant l'Union européenne"
  },
  {
    id: "crisisgroup",
    title: "International Crisis Group",
    url: "https://www.crisisgroup.org",
    type: SourceType.NGO,
    country: "International",
    tags: ["conflits", "prévention", "résolution", "paix"],
    description: "ONG travaillant sur la prévention et résolution de conflits"
  },
  {
    id: "stratfor",
    title: "Stratfor",
    url: "https://www.stratfor.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["géopolitique", "renseignement", "sécurité", "prévisions", "analyse"],
    description: "Plateforme d'intelligence géopolitique"
  }
];

export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  sources.forEach(source => {
    source.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

export const findSourcesByTag = (tag: string): Source[] => {
  return sources.filter(source => 
    source.tags.some(sourceTag => 
      sourceTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};

export const findSourcesByKeyword = (keyword: string): Source[] => {
  const lowerCaseKeyword = keyword.toLowerCase();
  return sources.filter(source => 
    source.title.toLowerCase().includes(lowerCaseKeyword) ||
    source.description.toLowerCase().includes(lowerCaseKeyword) ||
    source.tags.some(tag => tag.toLowerCase().includes(lowerCaseKeyword)) ||
    source.type.toLowerCase().includes(lowerCaseKeyword) ||
    source.country.toLowerCase().includes(lowerCaseKeyword) ||
    (source.ideology && source.ideology.toLowerCase().includes(lowerCaseKeyword))
  );
};
