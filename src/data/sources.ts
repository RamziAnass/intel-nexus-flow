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
  BLOG = "Blog spécialisé", // Noté: Cet enum est défini mais peu utilisé dans l'exemple, j'utiliserai SPECIALIZED ou PRESS pour les blogs influents.
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
    country: "États-Unis", // Réseau mondial, mais fondation américaine
    tags: ["paix", "sécurité", "démocratie", "développement", "international"],
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
    type: SourceType.ACADEMIC, // Institut de recherche
    country: "Suède",
    tags: ["paix", "conflit", "armement", "désarmement", "sécurité"],
    description: "Stockholm International Peace Research Institute"
  },
  {
    id: "euractiv",
    title: "Euractiv",
    url: "https://www.euractiv.com",
    type: SourceType.SPECIALIZED,
    country: "Union Européenne", // Paneuropéen
    tags: ["europe", "politique européenne", "institutions", "législation"],
    description: "Média paneuropéen spécialisé dans les politiques de l'UE"
  },
  {
    id: "politico-eu",
    title: "Politico Europe",
    url: "https://www.politico.eu",
    type: SourceType.SPECIALIZED,
    country: "Union Européenne", // Couvre l'UE, basé à Bruxelles
    tags: ["politique", "europe", "bruxelles", "lobbying", "parlement européen"],
    description: "Journal politique couvrant l'Union européenne"
  },
  {
    id: "crisisgroup",
    title: "International Crisis Group",
    url: "https://www.crisisgroup.org",
    type: SourceType.NGO,
    country: "International", // Basé à Bruxelles
    tags: ["conflits", "prévention", "résolution", "paix", "analyse"],
    description: "ONG travaillant sur la prévention et résolution de conflits"
  },
  {
    id: "stratfor",
    title: "Stratfor",
    url: "https://worldview.stratfor.com", // URL mise à jour pour RANE Worldview
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["géopolitique", "renseignement", "sécurité", "prévisions", "analyse"],
    description: "Plateforme d'intelligence géopolitique (maintenant RANE Worldview)"
  },
  // Nouvelles sources gouvernementales (déjà fournies)
  {
    id: "whitehouse",
    title: "The White House",
    url: "https://www.whitehouse.gov",
    type: SourceType.GOVERNMENT,
    country: "États-Unis",
    tags: ["présidence", "politique américaine", "exécutif", "communiqués"],
    description: "Site officiel de la Maison Blanche"
  },
  {
    id: "state-gov",
    title: "U.S. Department of State",
    url: "https://www.state.gov",
    type: SourceType.GOVERNMENT,
    country: "États-Unis",
    tags: ["diplomatie", "politique étrangère", "relations bilatérales", "sanctions"],
    description: "Département d'État américain"
  },
  {
    id: "defense-gov",
    title: "U.S. Department of Defense",
    url: "https://www.defense.gov",
    type: SourceType.GOVERNMENT,
    country: "États-Unis",
    tags: ["défense", "militaire", "sécurité nationale", "opérations"],
    description: "Ministère de la Défense américain"
  },
  {
    id: "gov-uk",
    title: "GOV.UK",
    url: "https://www.gov.uk",
    type: SourceType.GOVERNMENT,
    country: "Royaume-Uni",
    tags: ["gouvernement britannique", "politique", "services publics", "brexit"],
    description: "Portail officiel du gouvernement britannique"
  },
  {
    id: "fco-gov-uk", // Note: Peut être redondant avec gov.uk, mais spécifique au FCDO
    title: "UK Foreign, Commonwealth & Development Office",
    url: "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office",
    type: SourceType.GOVERNMENT,
    country: "Royaume-Uni",
    tags: ["diplomatie britannique", "commonwealth", "développement", "relations internationales"],
    description: "Foreign, Commonwealth & Development Office (FCDO)"
  },
  {
    id: "bundesregierung", // Portail général du gouvernement allemand
    title: "Bundesregierung",
    url: "https://www.bundesregierung.de",
    type: SourceType.GOVERNMENT,
    country: "Allemagne",
    tags: ["gouvernement allemand", "politique allemande", "communiqués"],
    description: "Portail officiel du Gouvernement fédéral allemand"
  },
  {
    id: "auswaertiges-amt",
    title: "Auswärtiges Amt",
    url: "https://www.auswaertiges-amt.de",
    type: SourceType.GOVERNMENT,
    country: "Allemagne",
    tags: ["diplomatie allemande", "politique étrangère", "coopération", "culture"],
    description: "Ministère des Affaires étrangères allemand"
  },
  {
    id: "consilium-europa",
    title: "Conseil européen",
    url: "https://www.consilium.europa.eu",
    type: SourceType.GOVERNMENT, // Institution de l'UE
    country: "Union Européenne",
    tags: ["institutions européennes", "conseil", "décisions", "sommets", "ue"],
    description: "Conseil européen et Conseil de l'UE"
  },
  {
    id: "commission-europa",
    title: "Commission européenne",
    url: "https://ec.europa.eu",
    type: SourceType.GOVERNMENT, // Institution de l'UE
    country: "Union Européenne",
    tags: ["commission européenne", "législation", "politiques", "initiatives", "ue"],
    description: "Commission européenne"
  },
  {
    id: "nato",
    title: "NATO",
    url: "https://www.nato.int",
    type: SourceType.GOVERNMENT, // Organisation intergouvernementale
    country: "International",
    tags: ["otan", "sécurité collective", "défense", "alliance", "transatlantique"],
    description: "Organisation du traité de l'Atlantique nord"
  },
  {
    id: "un-org",
    title: "Nations Unies",
    url: "https://www.un.org",
    type: SourceType.GOVERNMENT, // Organisation intergouvernementale
    country: "International",
    tags: ["onu", "multilatéralisme", "paix", "développement", "droits humains"],
    description: "Organisation des Nations Unies"
  },
  {
    id: "kremlin",
    title: "Kremlin",
    url: "http://en.kremlin.ru",
    type: SourceType.GOVERNMENT,
    country: "Russie",
    tags: ["présidence russe", "politique russe", "eurasie", "sécurité"],
    description: "Site officiel du Président de la Fédération de Russie"
  },
  {
    id: "mid-russia",
    title: "MID Russia",
    url: "https://mid.ru/en",
    type: SourceType.GOVERNMENT,
    country: "Russie",
    tags: ["diplomatie russe", "politique étrangère", "multipolaire", "coopération"],
    description: "Ministère des Affaires étrangères de Russie"
  },
  {
    id: "gov-cn",
    title: "Gov.cn",
    url: "http://english.gov.cn",
    type: SourceType.GOVERNMENT,
    country: "Chine",
    tags: ["gouvernement chinois", "politique", "développement", "réformes"],
    description: "Portail du gouvernement populaire central de Chine"
  },
  {
    id: "fmprc-gov-cn",
    title: "FMPRC",
    url: "https://www.fmprc.gov.cn/eng",
    type: SourceType.GOVERNMENT,
    country: "Chine",
    tags: ["diplomatie chinoise", "relations bilatérales", "coopération", "belt and road"],
    description: "Ministère des Affaires étrangères de Chine"
  },
  {
    id: "canada-ca",
    title: "Gouvernement du Canada",
    url: "https://www.canada.ca",
    type: SourceType.GOVERNMENT,
    country: "Canada",
    tags: ["gouvernement canadien", "politique", "services", "multilinguisme"],
    description: "Portail officiel du gouvernement canadien"
  },
  {
    id: "international-gc-ca",
    title: "Affaires mondiales Canada",
    url: "https://www.international.gc.ca",
    type: SourceType.GOVERNMENT,
    country: "Canada",
    tags: ["diplomatie canadienne", "commerce", "développement", "paix"],
    description: "Affaires mondiales Canada"
  },
  {
    id: "mofa-japan",
    title: "MOFA Japan",
    url: "https://www.mofa.go.jp",
    type: SourceType.GOVERNMENT,
    country: "Japon",
    tags: ["diplomatie japonaise", "indo-pacifique", "sécurité", "coopération"],
    description: "Ministère des Affaires étrangères du Japon"
  },
  {
    id: "mea-india",
    title: "MEA India",
    url: "https://www.mea.gov.in",
    type: SourceType.GOVERNMENT,
    country: "Inde",
    tags: ["diplomatie indienne", "relations extérieures", "non-alignement", "développement"],
    description: "Ministère des Affaires extérieures de l'Inde"
  },
  {
    id: "itamaraty",
    title: "Itamaraty",
    url: "https://www.gov.br/mre",
    type: SourceType.GOVERNMENT,
    country: "Brésil",
    tags: ["diplomatie brésilienne", "amérique latine", "coopération sud-sud", "environnement"],
    description: "Ministère des Relations extérieures du Brésil"
  },

  // ----- NOUVELLES SOURCES AJOUTÉES -----
  {
    id: "nytimes",
    title: "The New York Times",
    url: "https://www.nytimes.com",
    type: SourceType.PRESS,
    country: "États-Unis",
    ideology: "Centre-gauche",
    tags: ["actualité", "politique américaine", "international", "enquête", "opinion"],
    description: "Journal américain de renommée mondiale, souvent considéré de centre-gauche."
  },
  {
    id: "guardian",
    title: "The Guardian",
    url: "https://www.theguardian.com",
    type: SourceType.PRESS,
    country: "Royaume-Uni",
    ideology: "Centre-gauche",
    tags: ["actualité", "politique britannique", "international", "environnement", "progressiste"],
    description: "Journal britannique de référence, orientation progressiste et de centre-gauche."
  },
  {
    id: "bbcnews",
    title: "BBC News",
    url: "https://www.bbc.com/news",
    type: SourceType.PRESS,
    country: "Royaume-Uni",
    ideology: "Neutre (service public)",
    tags: ["actualité", "international", "royaume-uni", "reportages", "analyse"],
    description: "Service d'information public britannique de renommée internationale."
  },
  {
    id: "aljazeera",
    title: "Al Jazeera",
    url: "https://www.aljazeera.com",
    type: SourceType.PRESS,
    country: "Qatar",
    tags: ["actualité", "international", "moyen-orient", "afrique", "perspective globale"],
    description: "Chaîne d'information internationale basée au Qatar, offrant une perspective du Sud global."
  },
  {
    id: "reuters",
    title: "Reuters",
    url: "https://www.reuters.com",
    type: SourceType.PRESS,
    country: "International", // Propriété canadienne, opérations majeures UK/USA
    tags: ["actualité", "finance", "économie", "international", "dépêches", "agence de presse"],
    description: "Agence de presse internationale majeure."
  },
  {
    id: "apnews",
    title: "Associated Press",
    url: "https://apnews.com",
    type: SourceType.PRESS,
    country: "États-Unis",
    tags: ["actualité", "international", "états-unis", "enquête", "dépêches", "agence de presse"],
    description: "Agence de presse coopérative américaine, parmi les plus grandes au monde."
  },
  {
    id: "lefigaro",
    title: "Le Figaro",
    url: "https://www.lefigaro.fr",
    type: SourceType.PRESS,
    country: "France",
    ideology: "Droite",
    tags: ["actualité", "politique", "économie", "conservateur", "france"],
    description: "Quotidien français d'orientation conservatrice."
  },
  {
    id: "liberation",
    title: "Libération",
    url: "https://www.liberation.fr",
    type: SourceType.PRESS,
    country: "France",
    ideology: "Gauche",
    tags: ["actualité", "politique", "société", "culture", "progressiste", "france"],
    description: "Quotidien français d'orientation de gauche."
  },
  {
    id: "mediapart",
    title: "Mediapart",
    url: "https://www.mediapart.fr",
    type: SourceType.PRESS, 
    country: "France",
    ideology: "Gauche",
    tags: ["investigation", "politique", "france", "enquête", "indépendant"],
    description: "Journal d'information français en ligne, connu pour ses enquêtes."
  },
  {
    id: "thediplomat",
    title: "The Diplomat",
    url: "https://thediplomat.com",
    type: SourceType.SPECIALIZED,
    country: "International", // Focus Asie-Pacifique
    tags: ["asie-pacifique", "géopolitique", "défense", "économie", "diplomatie"],
    description: "Média en ligne spécialisé sur la région Asie-Pacifique."
  },
  {
    id: "warontherocks",
    title: "War on the Rocks",
    url: "https://warontherocks.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["défense", "sécurité nationale", "stratégie", "militaire", "analyse"],
    description: "Plateforme d'analyse et de commentaire sur la politique étrangère et la sécurité nationale."
  },
  {
    id: "projectsyndicate",
    title: "Project Syndicate",
    url: "https://www.project-syndicate.org",
    type: SourceType.SPECIALIZED, 
    country: "International",
    tags: ["opinion", "analyse", "économie", "politique", "développement", "international"],
    description: "Organisation internationale de presse diffusant des commentaires d'experts."
  },
  {
    id: "ecfr",
    title: "European Council on Foreign Relations",
    url: "https://ecfr.eu",
    type: SourceType.THINK_TANK,
    country: "Union Européenne", // Paneuropéen
    tags: ["europe", "politique étrangère", "relations internationales", "ue", "analyse", "think tank"],
    description: "Think tank paneuropéen axé sur la politique étrangère de l'UE."
  },
  {
    id: "csis",
    title: "CSIS",
    url: "https://www.csis.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    ideology: "Centriste", 
    tags: ["géopolitique", "sécurité", "défense", "international", "politique américaine", "think tank"],
    description: "Think tank américain influent sur les questions de stratégie et de politique internationale."
  },
  {
    id: "rand",
    title: "RAND Corporation",
    url: "https://www.rand.org",
    type: SourceType.THINK_TANK, 
    country: "États-Unis",
    tags: ["recherche", "politique publique", "sécurité", "défense", "santé", "éducation", "think tank"],
    description: "Think tank américain et organisation de recherche mondiale."
  },
  {
    id: "bruegel",
    title: "Bruegel",
    url: "https://www.bruegel.org",
    type: SourceType.THINK_TANK,
    country: "Union Européenne", // Basé à Bruxelles
    tags: ["économie", "europe", "politique économique", "finance", "ue", "think tank"],
    description: "Think tank européen spécialisé dans l'économie."
  },
  {
    id: "cato",
    title: "Cato Institute",
    url: "https://www.cato.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    ideology: "Libertarien",
    tags: ["libertarianisme", "politique publique", "économie de marché", "libertés individuelles", "think tank"],
    description: "Think tank américain d'orientation libertarienne."
  },
  {
    id: "heritage",
    title: "The Heritage Foundation",
    url: "https://www.heritage.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    ideology: "Conservateur",
    tags: ["conservatisme", "politique publique", "économie", "défense", "politique américaine", "think tank"],
    description: "Think tank américain influent d'orientation conservatrice."
  },
  {
    id: "dgap",
    title: "DGAP",
    url: "https://dgap.org",
    type: SourceType.THINK_TANK,
    country: "Allemagne",
    tags: ["politique étrangère", "allemagne", "europe", "relations internationales", "sécurité", "think tank"],
    description: "Société allemande de politique étrangère (German Council on Foreign Relations)."
  },
  {
    id: "swp",
    title: "SWP Berlin",
    url: "https://www.swp-berlin.org",
    type: SourceType.THINK_TANK,
    country: "Allemagne",
    tags: ["relations internationales", "politique de sécurité", "allemagne", "europe", "analyse", "think tank"],
    description: "Institut allemand pour les affaires internationales et de sécurité."
  },
  {
    id: "foreignaffairs",
    title: "Foreign Affairs",
    url: "https://www.foreignaffairs.com",
    type: SourceType.ACADEMIC, // Publié par le CFR, mais contenu académique/analyse
    country: "États-Unis",
    tags: ["relations internationales", "politique étrangère", "géopolitique", "analyse de fond", "débat"],
    description: "Magazine américain de premier plan sur les relations internationales, publié par le CFR."
  },
  {
    id: "cairn",
    title: "Cairn.info",
    url: "https://www.cairn.info",
    type: SourceType.ACADEMIC,
    country: "France", // Et pays francophones
    tags: ["sciences humaines", "sciences sociales", "revues académiques", "recherche", "francophonie"],
    description: "Portail de revues et d'ouvrages en sciences humaines et sociales de langue française."
  },
  {
    id: "amnesty",
    title: "Amnesty International",
    url: "https://www.amnesty.org",
    type: SourceType.NGO,
    country: "International",
    tags: ["droits humains", "libertés fondamentales", "justice", "activisme", "rapports", "ong"],
    description: "ONG mondiale luttant pour la défense des droits humains et des libertés fondamentales."
  },
  {
    id: "hrw",
    title: "Human Rights Watch",
    url: "https://www.hrw.org",
    type: SourceType.NGO,
    country: "International",
    tags: ["droits humains", "enquête", "justice", "conflits", "réfugiés", "ong"],
    description: "ONG internationale qui mène des recherches et défend les droits humains."
  },
  {
    id: "transparency",
    title: "Transparency International",
    url: "https://www.transparency.org",
    type: SourceType.NGO,
    country: "International", // Basé en Allemagne
    tags: ["corruption", "gouvernance", "intégrité", "lutte anti-corruption", "rapports", "ong"],
    description: "ONG mondiale luttant contre la corruption et promouvant la transparence."
  },
  {
    id: "msf",
    title: "Médecins Sans Frontières",
    url: "https://www.msf.org", // URL internationale, redirige souvent
    type: SourceType.NGO,
    country: "International", // Mouvement international
    tags: ["humanitaire", "santé", "urgence", "aide médicale", "conflits", "ong"],
    description: "Organisation médicale humanitaire internationale apportant une aide d'urgence."
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
