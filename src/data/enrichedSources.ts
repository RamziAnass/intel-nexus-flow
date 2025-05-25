
export enum SourceType {
  PRESS = 'PRESS',
  THINK_TANK = 'THINK_TANK',
  BLOG = 'BLOG',
  GOVERNMENT = 'GOVERNMENT',
  ACADEMIC = 'ACADEMIC',
  NGO = 'NGO',
  SPECIALIZED = 'SPECIALIZED',
  INTELLIGENCE = 'INTELLIGENCE',
  MILITARY = 'MILITARY',
  ECONOMIC = 'ECONOMIC',
  DIPLOMATIC = 'DIPLOMATIC',
  CYBER = 'CYBER',
  SOCIAL_MEDIA = 'SOCIAL_MEDIA',
  RESEARCH_INSTITUTE = 'RESEARCH_INSTITUTE'
}

export enum Region {
  EUROPE = 'Europe',
  NORTH_AMERICA = 'Amérique du Nord',
  ASIA_PACIFIC = 'Asie-Pacifique',
  MIDDLE_EAST = 'Moyen-Orient',
  AFRICA = 'Afrique',
  LATIN_AMERICA = 'Amérique Latine',
  OCEANIA = 'Océanie'
}

export interface EnrichedSource {
  id: string;
  title: string;
  url: string;
  description: string;
  type: SourceType;
  country: string;
  region: Region;
  ideology?: string;
  tags: string[];
  reliability: number; // 1-5 scale
  accessLevel: 'public' | 'restricted' | 'classified';
  language: string;
  frequency: string; // daily, weekly, monthly
}

// Extended tags collection
export const extendedTags = [
  // Géopolitique
  'géopolitique', 'relations internationales', 'diplomatie', 'conflits', 'alliances',
  'sanctions', 'négociations', 'traités', 'souveraineté', 'territoires disputés',
  
  // Sécurité et Défense
  'sécurité nationale', 'défense', 'terrorisme', 'contre-terrorisme', 'cybersécurité',
  'cyberguerre', 'renseignement', 'espionnage', 'forces armées', 'stratégie militaire',
  'armes nucléaires', 'prolifération', 'désarmement', 'peacekeeping',
  
  // Économie et Commerce
  'économie', 'commerce international', 'sanctions économiques', 'investissements',
  'chaînes d\'approvisionnement', 'ressources naturelles', 'énergie', 'pétrole',
  'gaz naturel', 'minerais stratégiques', 'terres rares', 'agriculture',
  
  // Technologie
  'intelligence artificielle', 'technologies émergentes', 'semiconducteurs',
  '5G', 'quantum computing', 'biotechnologies', 'espace', 'satellites',
  'drones', 'robotique', 'blockchain', 'cryptomonnaies',
  
  // Régions spécifiques
  'Chine', 'États-Unis', 'Russie', 'Union européenne', 'OTAN', 'ASEAN',
  'Moyen-Orient', 'Afrique', 'Indo-Pacifique', 'Arctique', 'Balkans',
  
  // Thématiques sociales
  'migration', 'réfugiés', 'droits humains', 'démocratie', 'autoritarisme',
  'propagande', 'désinformation', 'médias sociaux', 'influence étrangère',
  
  // Environnement et climat
  'changement climatique', 'environnement', 'ressources en eau', 'sécurité alimentaire',
  'catastrophes naturelles', 'transition énergétique', 'développement durable',
  
  // Organisations internationales
  'ONU', 'Conseil de sécurité', 'G7', 'G20', 'BRICS', 'SCO', 'QUAD',
  'Banque mondiale', 'FMI', 'OMC', 'AIEA'
];

// Countries grouped by regions
export const countriesByRegion: Record<Region, string[]> = {
  [Region.EUROPE]: [
    'France', 'Allemagne', 'Royaume-Uni', 'Italie', 'Espagne', 'Pays-Bas',
    'Belgique', 'Suisse', 'Autriche', 'Suède', 'Norvège', 'Danemark',
    'Finlande', 'Pologne', 'République tchèque', 'Hongrie', 'Roumanie',
    'Bulgarie', 'Grèce', 'Portugal', 'Irlande', 'Croatie', 'Slovénie',
    'Slovaquie', 'Estonie', 'Lettonie', 'Lituanie', 'Malte', 'Chypre',
    'Luxembourg', 'Monaco', 'Vatican', 'Saint-Marin', 'Andorre'
  ],
  [Region.NORTH_AMERICA]: [
    'États-Unis', 'Canada', 'Mexique'
  ],
  [Region.ASIA_PACIFIC]: [
    'Chine', 'Japon', 'Corée du Sud', 'Corée du Nord', 'Inde', 'Indonésie',
    'Thaïlande', 'Vietnam', 'Philippines', 'Malaisie', 'Singapour',
    'Brunei', 'Myanmar', 'Cambodge', 'Laos', 'Bangladesh', 'Pakistan',
    'Sri Lanka', 'Népal', 'Bhoutan', 'Maldives', 'Afghanistan',
    'Mongolie', 'Taiwan', 'Hong Kong', 'Macao'
  ],
  [Region.MIDDLE_EAST]: [
    'Arabie Saoudite', 'Iran', 'Israël', 'Turquie', 'Émirats Arabes Unis',
    'Qatar', 'Koweït', 'Bahreïn', 'Oman', 'Jordanie', 'Liban', 'Syrie',
    'Irak', 'Yémen', 'Palestine', 'Chypre du Nord'
  ],
  [Region.AFRICA]: [
    'Afrique du Sud', 'Nigeria', 'Égypte', 'Kenya', 'Ghana', 'Éthiopie',
    'Maroc', 'Algérie', 'Tunisie', 'Libye', 'Soudan', 'Tchad', 'Niger',
    'Mali', 'Burkina Faso', 'Sénégal', 'Côte d\'Ivoire', 'Guinea',
    'Sierra Leone', 'Liberia', 'Cameroun', 'République centrafricaine',
    'République démocratique du Congo', 'Congo', 'Gabon', 'Guinée équatoriale',
    'São Tomé-et-Príncipe', 'Angola', 'Zambie', 'Zimbabwe', 'Botswana',
    'Namibie', 'Lesotho', 'Eswatini', 'Mozambique', 'Madagascar',
    'Maurice', 'Seychelles', 'Comores', 'Djibouti', 'Érythrée', 'Somalie'
  ],
  [Region.LATIN_AMERICA]: [
    'Brésil', 'Argentine', 'Chili', 'Pérou', 'Colombie', 'Venezuela',
    'Équateur', 'Bolivie', 'Paraguay', 'Uruguay', 'Guyana', 'Suriname',
    'Guyane française', 'Cuba', 'République dominicaine', 'Haïti',
    'Jamaïque', 'Trinidad-et-Tobago', 'Barbade', 'Costa Rica', 'Panama',
    'Nicaragua', 'Honduras', 'El Salvador', 'Guatemala', 'Belize'
  ],
  [Region.OCEANIA]: [
    'Australie', 'Nouvelle-Zélande', 'Fidji', 'Papouasie-Nouvelle-Guinée',
    'Samoa', 'Tonga', 'Vanuatu', 'Îles Salomon', 'Palau', 'Micronésie',
    'Îles Marshall', 'Nauru', 'Kiribati', 'Tuvalu'
  ]
};

// Sample enriched sources data
export const enrichedSources: EnrichedSource[] = [
  {
    id: '1',
    title: 'Stratfor Global Intelligence',
    url: 'https://worldview.stratfor.com',
    description: 'Analyse géopolitique et intelligence stratégique mondiale',
    type: SourceType.INTELLIGENCE,
    country: 'États-Unis',
    region: Region.NORTH_AMERICA,
    tags: ['géopolitique', 'renseignement', 'sécurité nationale', 'analyse stratégique'],
    reliability: 4,
    accessLevel: 'restricted',
    language: 'anglais',
    frequency: 'daily'
  },
  {
    id: '2',
    title: 'Institut français des relations internationales (IFRI)',
    url: 'https://www.ifri.org',
    description: 'Think tank français spécialisé dans les relations internationales',
    type: SourceType.THINK_TANK,
    country: 'France',
    region: Region.EUROPE,
    tags: ['relations internationales', 'Union européenne', 'diplomatie', 'sécurité'],
    reliability: 5,
    accessLevel: 'public',
    language: 'français',
    frequency: 'weekly'
  },
  {
    id: '3',
    title: 'Jane\'s Defence Intelligence',
    url: 'https://www.janes.com',
    description: 'Sources militaires et de défense de référence mondiale',
    type: SourceType.MILITARY,
    country: 'Royaume-Uni',
    region: Region.EUROPE,
    tags: ['défense', 'forces armées', 'armement', 'stratégie militaire'],
    reliability: 5,
    accessLevel: 'restricted',
    language: 'anglais',
    frequency: 'daily'
  },
  {
    id: '4',
    title: 'Center for Strategic and International Studies (CSIS)',
    url: 'https://www.csis.org',
    description: 'Think tank américain sur la sécurité internationale',
    type: SourceType.THINK_TANK,
    country: 'États-Unis',
    region: Region.NORTH_AMERICA,
    tags: ['sécurité internationale', 'Chine', 'Indo-Pacifique', 'cyber'],
    reliability: 4,
    accessLevel: 'public',
    language: 'anglais',
    frequency: 'daily'
  },
  {
    id: '5',
    title: 'Chatham House',
    url: 'https://www.chathamhouse.org',
    description: 'Institut royal des affaires internationales britannique',
    type: SourceType.RESEARCH_INSTITUTE,
    country: 'Royaume-Uni',
    region: Region.EUROPE,
    tags: ['politique internationale', 'diplomatie', 'gouvernance mondiale'],
    reliability: 5,
    accessLevel: 'public',
    language: 'anglais',
    frequency: 'weekly'
  }
];

export const getAllCountries = (): string[] => {
  return Object.values(countriesByRegion).flat().sort();
};

export const getAllRegions = (): Region[] => {
  return Object.values(Region);
};

export const getAllTags = (): string[] => {
  return extendedTags.sort();
};

export const getCountriesByRegion = (region: Region): string[] => {
  return countriesByRegion[region] || [];
};
