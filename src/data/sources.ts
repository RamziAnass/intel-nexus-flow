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
  // ----- SOURCES PRÉCÉDEMMENT FOURNIES -----
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
    title: "Carnegie Endowment for International Peace",
    url: "https://carnegieendowment.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis", 
    tags: ["paix", "sécurité", "démocratie", "développement", "international", "politique étrangère"],
    description: "Réseau mondial de politique étrangère axé sur la paix internationale."
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
    tags: ["europe", "politique européenne", "institutions", "législation", "ue"],
    description: "Média paneuropéen spécialisé dans les politiques de l'UE"
  },
  {
    id: "politico-eu",
    title: "Politico Europe",
    url: "https://www.politico.eu",
    type: SourceType.SPECIALIZED,
    country: "Union Européenne", 
    tags: ["politique", "europe", "bruxelles", "lobbying", "parlement européen", "ue"],
    description: "Journal politique couvrant l'Union européenne"
  },
  {
    id: "crisisgroup",
    title: "International Crisis Group",
    url: "https://www.crisisgroup.org",
    type: SourceType.NGO,
    country: "International", 
    tags: ["conflits", "prévention", "résolution", "paix", "analyse"],
    description: "ONG travaillant sur la prévention et résolution de conflits"
  },
  {
    id: "stratfor",
    title: "Stratfor (RANE Worldview)",
    url: "https://worldview.stratfor.com", 
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["géopolitique", "renseignement", "sécurité", "prévisions", "analyse"],
    description: "Plateforme d'intelligence géopolitique (maintenant RANE Worldview)"
  },
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
    id: "fco-gov-uk", 
    title: "UK Foreign, Commonwealth & Development Office",
    url: "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office",
    type: SourceType.GOVERNMENT,
    country: "Royaume-Uni",
    tags: ["diplomatie britannique", "commonwealth", "développement", "relations internationales"],
    description: "Foreign, Commonwealth & Development Office (FCDO)"
  },
  {
    id: "bundesregierung", 
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
    type: SourceType.GOVERNMENT, 
    country: "Union Européenne",
    tags: ["institutions européennes", "conseil", "décisions", "sommets", "ue"],
    description: "Conseil européen et Conseil de l'UE"
  },
  {
    id: "commission-europa",
    title: "Commission européenne",
    url: "https://ec.europa.eu",
    type: SourceType.GOVERNMENT, 
    country: "Union Européenne",
    tags: ["commission européenne", "législation", "politiques", "initiatives", "ue"],
    description: "Commission européenne"
  },
  {
    id: "nato",
    title: "NATO",
    url: "https://www.nato.int",
    type: SourceType.GOVERNMENT, 
    country: "International",
    tags: ["otan", "sécurité collective", "défense", "alliance", "transatlantique"],
    description: "Organisation du traité de l'Atlantique nord"
  },
  {
    id: "un-org",
    title: "Nations Unies",
    url: "https://www.un.org",
    type: SourceType.GOVERNMENT, 
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
    country: "International", 
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
    country: "International", 
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
    country: "Union Européenne", 
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
    description: "Center for Strategic and International Studies, think tank américain influent."
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
    country: "Union Européenne", 
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
    type: SourceType.ACADEMIC, 
    country: "États-Unis",
    tags: ["relations internationales", "politique étrangère", "géopolitique", "analyse de fond", "débat"],
    description: "Magazine américain de premier plan sur les relations internationales, publié par le CFR."
  },
  {
    id: "cairn",
    title: "Cairn.info",
    url: "https://www.cairn.info",
    type: SourceType.ACADEMIC,
    country: "France", 
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
    country: "International", 
    tags: ["corruption", "gouvernance", "intégrité", "lutte anti-corruption", "rapports", "ong"],
    description: "ONG mondiale luttant contre la corruption et promouvant la transparence."
  },
  {
    id: "msf",
    title: "Médecins Sans Frontières",
    url: "https://www.msf.org", 
    type: SourceType.NGO,
    country: "International", 
    tags: ["humanitaire", "santé", "urgence", "aide médicale", "conflits", "ong"],
    description: "Organisation médicale humanitaire internationale apportant une aide d'urgence."
  },

  // ----- 200 NOUVELLES SOURCES -----

  // Think Tanks - Internationaux et Régionaux
  {
    id: "wilsoncenter",
    title: "Wilson Center",
    url: "https://www.wilsoncenter.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    tags: ["politique étrangère", "histoire", "analyse régionale", "sécurité", "développement", "think tank"],
    description: "Centre d'analyse non partisan avec des programmes régionaux et thématiques."
  },
  {
    id: "atlanticcouncil",
    title: "Atlantic Council",
    url: "https://www.atlanticcouncil.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    tags: ["relations transatlantiques", "sécurité internationale", "énergie", "géopolitique", "think tank"],
    description: "Think tank promouvant le leadership américain et l'engagement international."
  },
  {
    id: "ceps",
    title: "CEPS",
    url: "https://www.ceps.eu",
    type: SourceType.THINK_TANK,
    country: "Union Européenne", // Belgique
    tags: ["politique européenne", "économie", "ue", "institutions", "recherche", "think tank"],
    description: "Centre d'études politiques européennes, basé à Bruxelles."
  },
  {
    id: "lowyinstitute",
    title: "Lowy Institute",
    url: "https://www.lowyinstitute.org",
    type: SourceType.THINK_TANK,
    country: "Australie",
    tags: ["politique étrangère australienne", "asie-pacifique", "international", "analyse", "think tank"],
    description: "Think tank australien indépendant sur la politique internationale."
  },
  {
    id: "idsa",
    title: "MP-IDSA",
    url: "https://www.idsa.in",
    type: SourceType.THINK_TANK,
    country: "Inde",
    tags: ["défense", "sécurité", "stratégie", "inde", "relations internationales", "think tank"],
    description: "Manohar Parrikar Institute for Defence Studies and Analyses, think tank indien."
  },
  {
    id: "orfonline",
    title: "Observer Research Foundation (ORF)",
    url: "https://www.orfonline.org",
    type: SourceType.THINK_TANK,
    country: "Inde",
    tags: ["politique indienne", "relations internationales", "économie", "développement", "think tank"],
    description: "Think tank indien indépendant basé à New Delhi."
  },
  {
    id: "issafrica",
    title: "Institute for Security Studies (ISS Africa)",
    url: "https://issafrica.org",
    type: SourceType.THINK_TANK,
    country: "Afrique du Sud", // bureaux multiples en Afrique
    tags: ["sécurité humaine", "afrique", "gouvernance", "justice pénale", "prévention des conflits", "think tank"],
    description: "Organisation africaine visant à améliorer la sécurité humaine sur le continent."
  },
  {
    id: "carnegiemoscow",
    title: "Carnegie Politika (anciennement Carnegie Moscow Center)",
    url: "https://carnegieendowment.org/politika", // Note: A évolué en raison du contexte
    type: SourceType.THINK_TANK,
    country: "International", // Analystes russes, mais opère maintenant hors de Russie
    tags: ["russie", "politique russe", "eurasie", "relations internationales", "think tank"],
    description: "Centre d'analyse sur la Russie et l'Eurasie, affilié à Carnegie Endowment."
  },
  {
    id: "jiia",
    title: "JIIA (Japan Institute of International Affairs)",
    url: "https://www.jiia.or.jp/en/",
    type: SourceType.THINK_TANK,
    country: "Japon",
    tags: ["politique étrangère japonaise", "asie", "sécurité internationale", "diplomatie", "think tank"],
    description: "Institut japonais des affaires internationales."
  },
  {
    id: "mei",
    title: "Middle East Institute (MEI)",
    url: "https://www.mei.edu",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    tags: ["moyen-orient", "politique", "culture", "analyse", "think tank"],
    description: "Think tank dédié à l'étude du Moyen-Orient, basé à Washington D.C."
  },
  {
    id: "wider",
    title: "UNU-WIDER",
    url: "https://www.wider.unu.edu",
    type: SourceType.ACADEMIC, // Institut de recherche de l'ONU
    country: "Finlande", // Basé à Helsinki
    tags: ["développement économique", "pauvreté", "inégalité", "recherche", "onu"],
    description: "Institut mondial de recherche sur l'économie du développement de l'Université des Nations Unies."
  },
  {
    id: "clacso",
    title: "CLACSO",
    url: "https://www.clacso.org",
    type: SourceType.ACADEMIC, // Réseau
    country: "Amérique Latine", // Siège en Argentine
    tags: ["sciences sociales", "amérique latine", "caraïbes", "recherche", "réseau académique"],
    description: "Conseil Latino-américain des Sciences Sociales."
  },
  {
    id: "rusi",
    title: "RUSI",
    url: "https://www.rusi.org",
    type: SourceType.THINK_TANK,
    country: "Royaume-Uni",
    tags: ["défense", "sécurité", "études stratégiques", "militaire", "royaume-uni", "think tank"],
    description: "Royal United Services Institute, think tank britannique sur la défense et la sécurité."
  },
  {
    id: "cprindia",
    title: "Centre for Policy Research (CPR)",
    url: "https://www.cprindia.org",
    type: SourceType.THINK_TANK,
    country: "Inde",
    tags: ["politique publique", "inde", "gouvernance", "économie", "recherche", "think tank"],
    description: "Think tank indien indépendant sur les politiques publiques."
  },
  {
    id: "realinstitutoelcano",
    title: "Real Instituto Elcano",
    url: "https://www.realinstitutoelcano.org/en/",
    type: SourceType.THINK_TANK,
    country: "Espagne",
    tags: ["relations internationales", "espagne", "europe", "politique étrangère", "think tank"],
    description: "Think tank espagnol pour les études internationales et stratégiques."
  },
  {
    id: "iai",
    title: "Istituto Affari Internazionali (IAI)",
    url: "https://www.iai.it/en",
    type: SourceType.THINK_TANK,
    country: "Italie",
    tags: ["affaires internationales", "italie", "europe", "méditerranée", "politique étrangère", "think tank"],
    description: "Institut italien des affaires internationales."
  },
  {
    id: "pism",
    title: "PISM",
    url: "https://www.pism.pl/en",
    type: SourceType.THINK_TANK,
    country: "Pologne",
    tags: ["politique étrangère polonaise", "europe de l'est", "sécurité", "relations internationales", "think tank"],
    description: "Institut polonais des affaires internationales."
  },
  {
    id: "ui",
    title: "UI (Swedish Institute of International Affairs)",
    url: "https://www.ui.se/english/",
    type: SourceType.THINK_TANK,
    country: "Suède",
    tags: ["politique étrangère suédoise", "relations internationales", "sécurité", "europe", "think tank"],
    description: "Institut suédois des affaires internationales."
  },
  {
    id: "nupi",
    title: "NUPI",
    url: "https://www.nupi.no/en",
    type: SourceType.THINK_TANK,
    country: "Norvège",
    tags: ["relations internationales", "norvège", "paix et conflit", "politique étrangère", "think tank"],
    description: "Institut norvégien des affaires internationales."
  },
  {
    id: "clingendael",
    title: "Clingendael Institute",
    url: "https://www.clingendael.org",
    type: SourceType.THINK_TANK,
    country: "Pays-Bas",
    tags: ["relations internationales", "pays-bas", "sécurité", "diplomatie", "think tank"],
    description: "Institut néerlandais des relations internationales."
  },
  {
    id: "asaninst",
    title: "Asan Institute for Policy Studies",
    url: "https://en.asaninst.org",
    type: SourceType.THINK_TANK,
    country: "Corée du Sud",
    tags: ["péninsule coréenne", "asie du nord-est", "sécurité", "politique étrangère", "think tank"],
    description: "Think tank sud-coréen indépendant."
  },
  {
    id: "inss",
    title: "INSS (Institute for National Security Studies)",
    url: "https://www.inss.org.il/en/",
    type: SourceType.THINK_TANK,
    country: "Israël",
    tags: ["sécurité nationale israélienne", "moyen-orient", "défense", "stratégie", "think tank"],
    description: "Institut d'études de sécurité nationale, Tel Aviv."
  },

  // Presse - Plus de diversité géographique et idéologique
  {
    id: "wsj",
    title: "The Wall Street Journal",
    url: "https://www.wsj.com",
    type: SourceType.PRESS,
    country: "États-Unis",
    ideology: "Centre-droit",
    tags: ["économie", "finance", "business", "politique américaine", "international"],
    description: "Quotidien économique et financier américain, généralement de centre-droit."
  },
  {
    id: "scmp",
    title: "South China Morning Post",
    url: "https://www.scmp.com",
    type: SourceType.PRESS,
    country: "Hong Kong",
    tags: ["chine", "hong kong", "asie", "actualité", "politique", "économie"],
    description: "Journal anglophone basé à Hong Kong, couvrant la Chine et l'Asie."
  },
  {
    id: "haaretz",
    title: "Haaretz",
    url: "https://www.haaretz.com",
    type: SourceType.PRESS,
    country: "Israël",
    ideology: "Gauche",
    tags: ["israël", "moyen-orient", "politique", "société", "opinion"],
    description: "Journal israélien d'orientation de gauche."
  },
  {
    id: "jerusalempost",
    title: "The Jerusalem Post",
    url: "https://www.jpost.com",
    type: SourceType.PRESS,
    country: "Israël",
    ideology: "Centre-droit",
    tags: ["israël", "moyen-orient", "politique", "actualité", "sécurité"],
    description: "Journal israélien anglophone, généralement de centre-droit."
  },
  {
    id: "elpais",
    title: "El País",
    url: "https://elpais.com",
    type: SourceType.PRESS,
    country: "Espagne",
    ideology: "Centre-gauche",
    tags: ["espagne", "amérique latine", "international", "actualité", "politique"],
    description: "Quotidien espagnol de référence, orientation centre-gauche."
  },
  {
    id: "elmundo",
    title: "El Mundo",
    url: "https://www.elmundo.es",
    type: SourceType.PRESS,
    country: "Espagne",
    ideology: "Centre-droit",
    tags: ["espagne", "actualité", "politique", "économie", "opinion"],
    description: "Second quotidien espagnol, orientation centre-droit."
  },
  {
    id: "globeandmail",
    title: "The Globe and Mail",
    url: "https://www.theglobeandmail.com",
    type: SourceType.PRESS,
    country: "Canada",
    ideology: "Centriste",
    tags: ["canada", "actualité", "politique canadienne", "international", "business"],
    description: "Journal canadien anglophone influent."
  },
  {
    id: "nationalpost",
    title: "National Post",
    url: "https://nationalpost.com",
    type: SourceType.PRESS,
    country: "Canada",
    ideology: "Conservateur",
    tags: ["canada", "politique canadienne", "opinion", "conservatisme"],
    description: "Journal canadien anglophone d'orientation conservatrice."
  },
  {
    id: "thehindu",
    title: "The Hindu",
    url: "https://www.thehindu.com",
    type: SourceType.PRESS,
    country: "Inde",
    ideology: "Centre-gauche",
    tags: ["inde", "actualité", "politique indienne", "international", "analyse"],
    description: "Quotidien indien anglophone de référence."
  },
  {
    id: "timesofindia",
    title: "The Times of India",
    url: "https://timesofindia.indiatimes.com",
    type: SourceType.PRESS,
    country: "Inde",
    ideology: "Centriste",
    tags: ["inde", "actualité", "politique indienne", "business", "divertissement"],
    description: "L'un des plus grands quotidiens anglophones en Inde."
  },
  {
    id: "japantimes",
    title: "The Japan Times",
    url: "https://www.japantimes.co.jp",
    type: SourceType.PRESS,
    country: "Japon",
    tags: ["japon", "actualité", "politique japonaise", "culture", "international"],
    description: "Plus ancien et plus grand quotidien anglophone du Japon."
  },
  {
    id: "nikkeiasia",
    title: "Nikkei Asia",
    url: "https://asia.nikkei.com",
    type: SourceType.PRESS,
    country: "Japon", // Couvre l'Asie
    tags: ["asie", "économie", "business", "technologie", "politique", "japon"],
    description: "Publication économique majeure axée sur l'Asie, par le groupe Nikkei."
  },
  {
    id: "sueddeutsche",
    title: "Süddeutsche Zeitung",
    url: "https://www.sueddeutsche.de",
    type: SourceType.PRESS,
    country: "Allemagne",
    ideology: "Centre-gauche",
    tags: ["allemagne", "actualité", "politique allemande", "international", "culture"],
    description: "Grand quotidien allemand, libéral de centre-gauche."
  },
  {
    id: "faz",
    title: "Frankfurter Allgemeine Zeitung (FAZ)",
    url: "https://www.faz.net",
    type: SourceType.PRESS,
    country: "Allemagne",
    ideology: "Centre-droit",
    tags: ["allemagne", "actualité", "politique allemande", "économie", "international"],
    description: "Grand quotidien allemand, conservateur libéral."
  },
  {
    id: "derspiegel",
    title: "Der Spiegel",
    url: "https://www.spiegel.de/international/",
    type: SourceType.PRESS,
    country: "Allemagne",
    ideology: "Centre-gauche",
    tags: ["allemagne", "investigation", "politique", "international", "hebdomadaire"],
    description: "Magazine d'information hebdomadaire allemand influent."
  },
  {
    id: "taz",
    title: "Die Tageszeitung (taz)",
    url: "https://taz.de",
    type: SourceType.PRESS,
    country: "Allemagne",
    ideology: "Gauche",
    tags: ["allemagne", "politique", "écologie", "progressiste", "coopérative"],
    description: "Quotidien allemand autogéré, d'orientation gauche écologiste."
  },
  {
    id: "folhadespaulo",
    title: "Folha de S.Paulo",
    url: "https://www.folha.uol.com.br",
    type: SourceType.PRESS,
    country: "Brésil",
    ideology: "Centriste", // Souvent critique
    tags: ["brésil", "actualité", "politique brésilienne", "amérique latine", "international"],
    description: "Un des plus grands quotidiens brésiliens."
  },
  {
    id: "oglobo",
    title: "O Globo",
    url: "https://oglobo.globo.com",
    type: SourceType.PRESS,
    country: "Brésil",
    ideology: "Centre-droit",
    tags: ["brésil", "actualité", "politique brésilienne", "rio de janeiro"],
    description: "Journal brésilien influent basé à Rio de Janeiro."
  },
  {
    id: "clarin",
    title: "Clarín",
    url: "https://www.clarin.com",
    type: SourceType.PRESS,
    country: "Argentine",
    ideology: "Centriste",
    tags: ["argentine", "actualité", "politique argentine", "amérique latine"],
    description: "L'un des plus grands journaux d'Argentine."
  },
  {
    id: "lanacion",
    title: "La Nación",
    url: "https://www.lanacion.com.ar",
    type: SourceType.PRESS,
    country: "Argentine",
    ideology: "Centre-droit",
    tags: ["argentine", "actualité", "politique argentine", "conservateur"],
    description: "Quotidien argentin d'orientation conservatrice."
  },
  {
    id: "smh",
    title: "The Sydney Morning Herald",
    url: "https://www.smh.com.au",
    type: SourceType.PRESS,
    country: "Australie",
    ideology: "Centre-gauche",
    tags: ["australie", "actualité", "politique australienne", "international"],
    description: "Quotidien australien de référence, basé à Sydney."
  },
  {
    id: "theaustralian",
    title: "The Australian",
    url: "https://www.theaustralian.com.au",
    type: SourceType.PRESS,
    country: "Australie",
    ideology: "Centre-droit",
    tags: ["australie", "actualité", "politique australienne", "national"],
    description: "Quotidien national australien, orientation centre-droit."
  },
  {
    id: "dailymaverick",
    title: "Daily Maverick",
    url: "https://www.dailymaverick.co.za",
    type: SourceType.PRESS,
    country: "Afrique du Sud",
    tags: ["afrique du sud", "investigation", "actualité", "politique", "indépendant"],
    description: "Publication d'information en ligne sud-africaine, connue pour son journalisme d'investigation."
  },
  {
    id: "premiumtimesng",
    title: "Premium Times",
    url: "https://www.premiumtimesng.com",
    type: SourceType.PRESS,
    country: "Nigéria",
    tags: ["nigéria", "investigation", "actualité", "politique", "indépendant"],
    description: "Journal en ligne nigérian axé sur l'investigation et l'actualité."
  },
  {
    id: "caixin",
    title: "Caixin Global",
    url: "https://www.caixinglobal.com",
    type: SourceType.PRESS,
    country: "Chine",
    tags: ["chine", "économie", "finance", "business", "investigation"],
    description: "Média financier chinois respecté, offrant des analyses approfondies."
  },
  {
    id: "xinhua",
    title: "Xinhua News",
    url: "http://www.xinhuanet.com/english/",
    type: SourceType.PRESS,
    country: "Chine",
    ideology: "Étatique",
    tags: ["chine", "actualité", "officiel", "agence de presse", "gouvernement chinois"],
    description: "Agence de presse officielle du gouvernement chinois."
  },
  {
    id: "rt",
    title: "RT (Russia Today)",
    url: "https://www.rt.com", // Disponibilité peut varier selon les régions
    type: SourceType.PRESS,
    country: "Russie",
    ideology: "Étatique",
    tags: ["russie", "international", "perspective russe", "information", "controverse"],
    description: "Chaîne d'information internationale financée par l'État russe."
  },
  {
    id: "tass",
    title: "TASS",
    url: "https://tass.com",
    type: SourceType.PRESS,
    country: "Russie",
    ideology: "Étatique",
    tags: ["russie", "actualité", "officiel", "agence de presse"],
    description: "Agence de presse majeure de la Russie, contrôlée par l'État."
  },
  {
    id: "globaltimes",
    title: "Global Times",
    url: "https://www.globaltimes.cn",
    type: SourceType.PRESS,
    country: "Chine",
    ideology: "Étatique (nationaliste)",
    tags: ["chine", "nationalisme", "politique", "international", "opinion"],
    description: "Tabloïd quotidien chinois sous l'égide du Quotidien du Peuple, connu pour son ton nationaliste."
  },
  {
    id: "straitstimes",
    title: "The Straits Times",
    url: "https://www.straitstimes.com",
    type: SourceType.PRESS,
    country: "Singapour",
    tags: ["singapour", "asie du sud-est", "actualité", "politique", "économie"],
    description: "Principal quotidien anglophone de Singapour."
  },
  {
    id: "koreatimes",
    title: "The Korea Times",
    url: "https://www.koreatimes.co.kr",
    type: SourceType.PRESS,
    country: "Corée du Sud",
    tags: ["corée du sud", "actualité", "péninsule coréenne", "culture"],
    description: "Plus ancien quotidien anglophone de Corée du Sud."
  },
  {
    id: "koreaherald",
    title: "The Korea Herald",
    url: "http://www.koreaherald.com",
    type: SourceType.PRESS,
    country: "Corée du Sud",
    tags: ["corée du sud", "actualité", "économie", "culture", "péninsule coréenne"],
    description: "Principal quotidien anglophone de Corée du Sud par tirage."
  },
  {
    id: "arabnews",
    title: "Arab News",
    url: "https://www.arabnews.com",
    type: SourceType.PRESS,
    country: "Arabie Saoudite",
    tags: ["arabie saoudite", "moyen-orient", "actualité", "golf", "international"],
    description: "Quotidien anglophone basé en Arabie Saoudite."
  },
  {
    id: "gulfnews",
    title: "Gulf News",
    url: "https://gulfnews.com",
    type: SourceType.PRESS,
    country: "Émirats Arabes Unis",
    tags: ["émirats arabes unis", "moyen-orient", "golf", "actualité", "business"],
    description: "Quotidien anglophone basé à Dubaï."
  },
  {
    id: "dailysabah",
    title: "Daily Sabah",
    url: "https://www.dailysabah.com",
    type: SourceType.PRESS,
    country: "Turquie",
    ideology: "Pro-gouvernemental",
    tags: ["turquie", "actualité", "politique turque", "moyen-orient"],
    description: "Quotidien turc pro-gouvernemental, publié en plusieurs langues."
  },
  {
    id: "hurriyetdailynews",
    title: "Hürriyet Daily News",
    url: "https://www.hurriyetdailynews.com",
    type: SourceType.PRESS,
    country: "Turquie",
    tags: ["turquie", "actualité", "politique turque", "économie"],
    description: "Plus ancien quotidien anglophone turc existant."
  },
  {
    id: "nhkworld",
    title: "NHK World-Japan",
    url: "https://www3.nhk.or.jp/nhkworld/",
    type: SourceType.PRESS,
    country: "Japon",
    ideology: "Service public",
    tags: ["japon", "actualité", "culture japonaise", "international", "service public"],
    description: "Service international de la radiotélévision publique japonaise NHK."
  },
  {
    id: "france24",
    title: "France 24",
    url: "https://www.france24.com/en/",
    type: SourceType.PRESS,
    country: "France",
    ideology: "Service public",
    tags: ["international", "actualité", "perspective française", "europe", "reportages"],
    description: "Chaîne d'information internationale française, financée par l'État."
  },
  {
    id: "dw",
    title: "Deutsche Welle (DW)",
    url: "https://www.dw.com/en/",
    type: SourceType.PRESS,
    country: "Allemagne",
    ideology: "Service public",
    tags: ["international", "actualité", "perspective allemande", "europe", "droits humains"],
    description: "Radiodiffuseur international public allemand."
  },
  {
    id: "rfi",
    title: "RFI (Radio France Internationale)",
    url: "https://www.rfi.fr/en/",
    type: SourceType.PRESS,
    country: "France",
    ideology: "Service public",
    tags: ["international", "actualité", "radio", "francophonie", "afrique"],
    description: "Radio d'actualité internationale française du groupe France Médias Monde."
  },

  // Médias Spécialisés
  {
    id: "defensenews",
    title: "Defense News",
    url: "https://www.defensenews.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["défense", "militaire", "industrie de l'armement", "technologie militaire", "politique de défense"],
    description: "Média de référence sur les questions de défense et l'industrie militaire."
  },
  {
    id: "janes",
    title: "Janes",
    url: "https://www.janes.com",
    type: SourceType.SPECIALIZED,
    country: "Royaume-Uni",
    tags: ["défense", "sécurité", "renseignement", "militaire", "aérospatiale"],
    description: "Entreprise de renseignement open-source spécialisée dans la défense et la sécurité."
  },
  {
    id: "aviationweek",
    title: "Aviation Week Network",
    url: "https://aviationweek.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["aérospatiale", "aviation", "défense", "espace", "industrie"],
    description: "Média couvrant l'industrie aérospatiale et de la défense."
  },
  {
    id: "techcrunch",
    title: "TechCrunch",
    url: "https://techcrunch.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["technologie", "startups", "internet", "innovation", "capital-risque"],
    description: "Publication en ligne axée sur les startups et la technologie."
  },
  {
    id: "wired",
    title: "Wired",
    url: "https://www.wired.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["technologie", "culture", "science", "innovation", "futurisme"],
    description: "Magazine mensuel américain axé sur l'impact de la technologie."
  },
  {
    id: "oilprice",
    title: "OilPrice.com",
    url: "https://oilprice.com",
    type: SourceType.SPECIALIZED,
    country: "International",
    tags: ["énergie", "pétrole", "gaz", "marchés", "géopolitique énergétique"],
    description: "Site d'information et d'analyse sur les marchés de l'énergie."
  },
  {
    id: "bloomberggreen",
    title: "Bloomberg Green",
    url: "https://www.bloomberg.com/green",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["climat", "environnement", "énergie renouvelable", "finance durable", "esg"],
    description: "Section de Bloomberg dédiée à l'actualité du climat et de l'énergie."
  },
  {
    id: "carbonbrief",
    title: "Carbon Brief",
    url: "https://www.carbonbrief.org",
    type: SourceType.SPECIALIZED,
    country: "Royaume-Uni",
    tags: ["climat", "science du climat", "politique climatique", "énergie", "analyse"],
    description: "Site web britannique spécialisé dans la science et la politique du changement climatique."
  },
  {
    id: "eurasianet",
    title: "Eurasianet",
    url: "https://eurasianet.org",
    type: SourceType.SPECIALIZED,
    country: "États-Unis", // Couvre l'Eurasie
    tags: ["eurasie", "asie centrale", "caucase", "politique", "société", "indépendant"],
    description: "Média indépendant fournissant des informations et analyses sur l'Eurasie."
  },
  {
    id: "almonitor",
    title: "Al-Monitor",
    url: "https://www.al-monitor.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis", // Couvre le Moyen-Orient
    tags: ["moyen-orient", "politique", "analyse", "actualité régionale"],
    description: "Média d'information et d'analyse sur le Moyen-Orient."
  },
  {
    id: "africaconfidential",
    title: "Africa Confidential",
    url: "https://www.africa-confidential.com",
    type: SourceType.SPECIALIZED,
    country: "Royaume-Uni",
    tags: ["afrique", "politique", "économie", "analyse", "newsletter"],
    description: "Newsletter bimensuelle sur la politique et l'économie en Afrique."
  },
  {
    id: "africareport",
    title: "The Africa Report",
    url: "https://www.theafricareport.com",
    type: SourceType.SPECIALIZED,
    country: "France", // Fait partie de Jeune Afrique Media Group
    tags: ["afrique", "actualité", "politique", "économie", "business"],
    description: "Magazine anglophone et site web d'information sur l'Afrique."
  },
  {
    id: "merip",
    title: "MERIP (Middle East Research and Information Project)",
    url: "https://merip.org",
    type: SourceType.SPECIALIZED, // Tend vers académique aussi
    country: "États-Unis",
    tags: ["moyen-orient", "recherche", "politique", "analyse critique", "activisme"],
    description: "Organisation produisant des analyses critiques sur le Moyen-Orient."
  },
  {
    id: "worldpoliticsreview",
    title: "World Politics Review",
    url: "https://www.worldpoliticsreview.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["relations internationales", "politique étrangère", "analyse", "actualité globale"],
    description: "Publication en ligne offrant des analyses sur les affaires mondiales."
  },
  {
    id: "passblue",
    title: "PassBlue",
    url: "https://www.passblue.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["nations unies", "onu", "relations internationales", "journalisme indépendant", "droits humains"],
    description: "Média indépendant couvrant les Nations Unies."
  },
  {
    id: "justsecurity",
    title: "Just Security",
    url: "https://www.justsecurity.org",
    type: SourceType.BLOG, // Blog de haute qualité, souvent académique
    country: "États-Unis", // Basé à NYU School of Law
    tags: ["sécurité nationale", "droit international", "droits humains", "politique étrangère américaine", "analyse"],
    description: "Forum en ligne d'analyse sur le droit, les droits et la sécurité nationale aux États-Unis."
  },
  {
    id: "lawfare",
    title: "Lawfare",
    url: "https://www.lawfaremedia.org", //Redirige depuis lawfareblog.com
    type: SourceType.BLOG, // Idem, blog de haute qualité
    country: "États-Unis", // Affilié à Brookings Institution
    tags: ["sécurité nationale", "droit", "politique américaine", "cybersécurité", "contentieux"],
    description: "Blog dédié aux questions de sécurité nationale où le droit et la politique se rencontrent."
  },
  {
    id: "ejo",
    title: "European Journalism Observatory (EJO)",
    url: "https://en.ejo.ch",
    type: SourceType.SPECIALIZED,
    country: "International", // Réseau européen
    tags: ["journalisme", "médias", "recherche", "europe", "éthique"],
    description: "Réseau d'instituts de recherche sur les médias, analysant le journalisme en Europe."
  },
  {
    id: "voxeu",
    title: "CEPR's Policy Portal (VoxEU.org)",
    url: "https://cepr.org/voxeu",
    type: SourceType.SPECIALIZED, // Plateforme pour économistes
    country: "International", // Géré par CEPR (UK)
    tags: ["économie", "politique économique", "recherche", "europe", "débat"],
    description: "Portail de politique du CEPR pour les économistes de recherche."
  },
  {
    id: "aspistrategist",
    title: "The Strategist (ASPI)",
    url: "https://www.aspistrategist.org.au",
    type: SourceType.BLOG, // Blog d'un think tank
    country: "Australie",
    tags: ["stratégie", "défense", "sécurité", "indo-pacifique", "australie", "analyse"],
    description: "Blog de l'Australian Strategic Policy Institute (ASPI)."
  },
  {
    id: "overthehorizon",
    title: "Over the Horizon",
    url: "https://othjournal.com/",
    type: SourceType.SPECIALIZED,
    country: "International",
    tags: ["géopolitique", "stratégie", "relations internationales", "prospective"],
    description: "Revue numérique de prospective géostratégique."
  },
  {
    id: "geopoliticalmonitor",
    title: "Geopolitical Monitor",
    url: "https://www.geopoliticalmonitor.com",
    type: SourceType.SPECIALIZED,
    country: "Canada",
    tags: ["géopolitique", "renseignement", "analyse", "prévisions", "risques internationaux"],
    description: "Service d'analyse et de prévision des risques géopolitiques."
  },
  {
    id: "opensecrets",
    title: "OpenSecrets",
    url: "https://www.opensecrets.org",
    type: SourceType.NGO, // Avec une forte composante de journalisme de données
    country: "États-Unis",
    tags: ["financement politique", "lobbying", "transparence", "politique américaine", "argent et politique"],
    description: "Organisation non partisane qui suit l'argent dans la politique américaine."
  },
  {
    id: "icij",
    title: "International Consortium of Investigative Journalists (ICIJ)",
    url: "https://www.icij.org",
    type: SourceType.NGO, // Réseau de journalistes d'investigation
    country: "International",
    tags: ["journalisme d'investigation", "corruption", "évasion fiscale", "international", "réseau"],
    description: "Réseau mondial de journalistes d'investigation collaborant sur des sujets transnationaux."
  },
  {
    id: "gijn",
    title: "Global Investigative Journalism Network (GIJN)",
    url: "https://gijn.org",
    type: SourceType.NGO,
    country: "International",
    tags: ["journalisme d'investigation", "ressources", "formation", "réseau mondial", "médias"],
    description: "Association internationale d'organisations de journalisme d'investigation."
  },
  {
    id: "forbiddenstories",
    title: "Forbidden Stories",
    url: "https://forbiddenstories.org",
    type: SourceType.NGO, // Organisation de journalisme
    country: "France", // Base
    tags: ["journalisme", "liberté de la presse", "enquête", "collaboration", "journalistes menacés"],
    description: "Consortium de journalistes qui poursuit le travail de reporters menacés, emprisonnés ou assassinés."
  },
  {
    id: "thenewhumanitarian",
    title: "The New Humanitarian",
    url: "https://www.thenewhumanitarian.org",
    type: SourceType.SPECIALIZED, // Ancien IRIN News (ONU)
    country: "Suisse", // Indépendant
    tags: ["humanitaire", "crises", "conflits", "réfugiés", "aide au développement"],
    description: "Média indépendant spécialisé dans le reportage sur les crises humanitaires."
  },
  {
    id: "devex",
    title: "Devex",
    url: "https://www.devex.com",
    type: SourceType.SPECIALIZED,
    country: "États-Unis",
    tags: ["développement international", "aide humanitaire", "ong", "carrières", "actualité du développement"],
    description: "Plateforme médiatique pour la communauté mondiale du développement."
  },
  {
    id: "reliefweb",
    title: "ReliefWeb",
    url: "https://reliefweb.int",
    type: SourceType.GOVERNMENT, // Géré par UNOCHA (ONU)
    country: "International",
    tags: ["humanitaire", "urgence", "catastrophes", "rapports", "onu", "information"],
    description: "Portail d'information humanitaire géré par le Bureau de la coordination des affaires humanitaires de l'ONU (OCHA)."
  },
  {
    id: "intellinews",
    title: "bne IntelliNews",
    url: "https://www.intellinews.com",
    type: SourceType.SPECIALIZED,
    country: "International", // Focus sur marchés émergents
    tags: ["marchés émergents", "europe de l'est", "eurasie", "moyen-orient", "afrique", "business", "finance"],
    description: "Service d'information économique et financière sur les marchés émergents."
  },
  {
    id: "fpri",
    title: "Foreign Policy Research Institute (FPRI)",
    url: "https://www.fpri.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    tags: ["politique étrangère", "relations internationales", "sécurité", "analyse", "think tank"],
    description: "Think tank américain non partisan dédié à la politique étrangère et la sécurité nationale."
  },
  {
    id: "seta",
    title: "SETA Foundation",
    url: "https://www.setav.org/en/",
    type: SourceType.THINK_TANK,
    country: "Turquie",
    ideology: "Pro-gouvernemental",
    tags: ["turquie", "politique turque", "relations internationales", "think tank"],
    description: "Think tank turc sur la politique, l'économie et la société, aligné sur le gouvernement."
  },
  {
    id: "stimson",
    title: "Stimson Center",
    url: "https://www.stimson.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    tags: ["sécurité internationale", "non-prolifération", "paix", "stabilité régionale", "think tank"],
    description: "Think tank non partisan axé sur l'amélioration de la sécurité et de la prospérité mondiales."
  },
  {
    id: "cgd",
    title: "Center for Global Development (CGD)",
    url: "https://www.cgdev.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis", // Aussi Europe
    tags: ["développement international", "pauvreté", "économie du développement", "politique", "think tank"],
    description: "Think tank travaillant à réduire la pauvreté mondiale et améliorer les vies grâce à la recherche économique innovante."
  },
  {
    id: "ipcs",
    title: "Institute of Peace and Conflict Studies (IPCS)",
    url: "http://www.ipcs.org", // Peut parfois être lent
    type: SourceType.THINK_TANK,
    country: "Inde",
    tags: ["paix", "conflit", "asie du sud", "sécurité", "relations internationales", "think tank"],
    description: "Think tank indien axé sur les études de paix et de conflit en Asie du Sud."
  },
  {
    id: "hudson",
    title: "Hudson Institute",
    url: "https://www.hudson.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    ideology: "Conservateur",
    tags: ["politique étrangère", "défense", "économie", "stratégie", "conservateur", "think tank"],
    description: "Think tank conservateur axé sur la promotion du leadership américain."
  },
  {
    id: "afrcn",
    title: "Africa Center for Strategic Studies",
    url: "https://africacenter.org",
    type: SourceType.GOVERNMENT, // Département de la Défense US
    country: "États-Unis", // Focus Afrique
    tags: ["afrique", "sécurité", "défense", "gouvernance", "stratégie", "partenariat usa-afrique"],
    description: "Institution du Département de la Défense américain pour les études stratégiques de sécurité en Afrique."
  },
  {
    id: "marshallcenter",
    title: "George C. Marshall European Center for Security Studies",
    url: "https://www.marshallcenter.org",
    type: SourceType.GOVERNMENT, // Partenariat US-Allemagne
    country: "Allemagne", // et États-Unis
    tags: ["sécurité européenne", "relations transatlantiques", "défense", "formation", "dialogue"],
    description: "Institut de partenariat germano-américain pour la défense et les études de sécurité."
  },

  // Publications Académiques et Universitaires
  {
    id: "intsecurity",
    title: "International Security",
    url: "https://www.belfercenter.org/project/international-security", // via Belfer/MIT
    type: SourceType.ACADEMIC,
    country: "États-Unis",
    tags: ["sécurité internationale", "stratégie", "relations internationales", "théorie", "revue académique"],
    description: "Revue académique de premier plan sur la sécurité internationale, publiée par MIT Press."
  },
  {
    id: "worldpolitics",
    title: "World Politics",
    url: "https://www.cambridge.org/core/journals/world-politics", // via Cambridge Univ Press
    type: SourceType.ACADEMIC,
    country: "États-Unis", // Princeton
    tags: ["politique comparée", "relations internationales", "théorie politique", "revue académique"],
    description: "Revue trimestrielle de relations internationales et de politique comparée."
  },
  {
    id: "survival",
    title: "Survival: Global Politics and Strategy",
    url: "https://www.iiss.org/publications/survival", // Publié par IISS
    type: SourceType.ACADEMIC,
    country: "Royaume-Uni",
    tags: ["politique mondiale", "stratégie", "sécurité internationale", "analyse", "revue"],
    description: "Revue bimestrielle de l'IISS sur la politique et la stratégie mondiales."
  },
  {
    id: "jcr",
    title: "Journal of Conflict Resolution",
    url: "https://journals.sagepub.com/home/jcr",
    type: SourceType.ACADEMIC,
    country: "États-Unis",
    tags: ["résolution de conflits", "paix", "guerre", "relations internationales", "revue académique"],
    description: "Revue interdisciplinaire sur les causes, la prévention et la résolution des conflits."
  },
  {
    id: "isq",
    title: "International Studies Quarterly (ISQ)",
    url: "https://academic.oup.com/isq",
    type: SourceType.ACADEMIC,
    country: "International", // Pub. par International Studies Association
    tags: ["relations internationales", "recherche", "théorie", "méthodologie", "revue académique"],
    description: "Revue phare de l'International Studies Association."
  },
  {
    id: "lseideas",
    title: "LSE IDEAS",
    url: "https://www.lse.ac.uk/ideas",
    type: SourceType.THINK_TANK, // Centre de recherche universitaire
    country: "Royaume-Uni",
    tags: ["politique étrangère", "stratégie", "diplomatie", "lse", "think tank"],
    description: "Think tank de politique étrangère de la London School of Economics."
  },
  {
    id: "ceri",
    title: "CERI Sciences Po",
    url: "https://www.sciencespo.fr/ceri/fr",
    type: SourceType.ACADEMIC, // Centre de recherche
    country: "France",
    tags: ["relations internationales", "recherche", "sciences po", "analyse", "géopolitique"],
    description: "Centre de recherches internationales de Sciences Po Paris."
  },
  {
    id: "ksg",
    title: "Harvard Kennedy School (Belfer Center)",
    url: "https://www.belfercenter.org", // Exemple d'un centre influent
    type: SourceType.ACADEMIC, // Centre de recherche
    country: "États-Unis",
    tags: ["politique publique", "relations internationales", "sécurité", "harvard", "recherche"],
    description: "Belfer Center for Science and International Affairs, Harvard Kennedy School."
  },
  {
    id: "saisreview",
    title: "SAIS Review of International Affairs",
    url: "https://www.saisreview.org",
    type: SourceType.ACADEMIC,
    country: "États-Unis", // Johns Hopkins SAIS
    tags: ["relations internationales", "politique étrangère", "analyse", "revue étudiante", "débat"],
    description: "Revue d'affaires internationales de l'École des hautes études internationales de Johns Hopkins."
  },
  {
    id: "tandfonline",
    title: "Taylor & Francis Online",
    url: "https://www.tandfonline.com",
    type: SourceType.ACADEMIC, // Editeur
    country: "International",
    tags: ["revues académiques", "recherche", "multidisciplinaire", "publication scientifique"],
    description: "Plateforme d'accès à des revues académiques de divers éditeurs, dont Routledge."
  },
  {
    id: "jstor",
    title: "JSTOR",
    url: "https://www.jstor.org",
    type: SourceType.ACADEMIC, // Archive numérique
    country: "International",
    tags: ["archives académiques", "revues", "livres", "recherche", "histoire"],
    description: "Bibliothèque numérique d'archives de revues académiques, livres et sources primaires."
  },
  {
    id: "oxfordresearch",
    title: "Oxford Research Encyclopedias",
    url: "https://oxfordre.com",
    type: SourceType.ACADEMIC,
    country: "Royaume-Uni",
    tags: ["encyclopédie académique", "recherche", "synthèse", "relations internationales", "sciences politiques"],
    description: "Encyclopédies de recherche d'Oxford University Press offrant des articles de synthèse."
  },

  // ONG - Thématiques variées
  {
    id: "rsf",
    title: "Reporters Sans Frontières (RSF)",
    url: "https://rsf.org",
    type: SourceType.NGO,
    country: "International", // Basée à Paris
    tags: ["liberté de la presse", "journalisme", "droits humains", "censure", "ong"],
    description: "ONG internationale défendant la liberté de la presse dans le monde."
  },
  {
    id: "cpj",
    title: "Committee to Protect Journalists (CPJ)",
    url: "https://cpj.org",
    type: SourceType.NGO,
    country: "États-Unis",
    tags: ["liberté de la presse", "protection des journalistes", "droits humains", "ong"],
    description: "ONG américaine qui promeut la liberté de la presse et défend les droits des journalistes."
  },
  {
    id: "freedomhouse",
    title: "Freedom House",
    url: "https://freedomhouse.org",
    type: SourceType.NGO,
    country: "États-Unis",
    tags: ["démocratie", "libertés politiques", "droits civils", "recherche", "rapports", "ong"],
    description: "ONG basée aux États-Unis qui mène des recherches sur la démocratie, la liberté politique et les droits de l'homme."
  },
  {
    id: "oxfam",
    title: "Oxfam International",
    url: "https://www.oxfam.org",
    type: SourceType.NGO,
    country: "International", // Confédération
    tags: ["pauvreté", "inégalité", "développement", "aide humanitaire", "justice sociale", "ong"],
    description: "Confédération d'ONG luttant contre la pauvreté et l'injustice dans le monde."
  },
  {
    id: "care",
    title: "CARE International",
    url: "https://www.care-international.org",
    type: SourceType.NGO,
    country: "International",
    tags: ["pauvreté", "aide humanitaire", "développement", "femmes et filles", "urgence", "ong"],
    description: "Organisation humanitaire internationale luttant contre la pauvreté mondiale."
  },
  {
    id: "greenpeace",
    title: "Greenpeace International",
    url: "https://www.greenpeace.org/international/",
    type: SourceType.NGO,
    country: "International",
    tags: ["environnement", "écologie", "climat", "activisme", "protection de la nature", "ong"],
    description: "ONG internationale de protection de l'environnement."
  },
  {
    id: "wwf",
    title: "WWF (World Wildlife Fund)",
    url: "https://wwf.panda.org", // Ou .org
    type: SourceType.NGO,
    country: "International",
    tags: ["conservation", "nature", "espèces menacées", "environnement", "biodiversité", "ong"],
    description: "Organisation mondiale de protection de la nature et de l'environnement."
  },
  {
    id: "fidh",
    title: "FIDH (Fédération internationale pour les droits humains)",
    url: "https://www.fidh.org",
    type: SourceType.NGO,
    country: "International", // Basée à Paris
    tags: ["droits humains", "justice", "démocratie", "fédération", "ong"],
    description: "Fédération internationale d'organisations de défense des droits humains."
  },
  {
    id: "ifj",
    title: "International Federation of Journalists (IFJ)",
    url: "https://www.ifj.org",
    type: SourceType.NGO, // Fédération syndicale
    country: "International", // Basée à Bruxelles
    tags: ["journalisme", "syndicat", "droits des journalistes", "liberté de la presse", "ong"],
    description: "Plus grande fédération mondiale de syndicats de journalistes."
  },
  {
    id: "icanw",
    title: "ICAN (International Campaign to Abolish Nuclear Weapons)",
    url: "https://www.icanw.org",
    type: SourceType.NGO,
    country: "International", // Basée à Genève
    tags: ["désarmement nucléaire", "armes nucléaires", "campagne", "traité", "prix nobel", "ong"],
    description: "Coalition mondiale d'ONG militant pour l'abolition des armes nucléaires."
  },
  {
    id: "mpi",
    title: "Migration Policy Institute (MPI)",
    url: "https://www.migrationpolicy.org",
    type: SourceType.THINK_TANK, // Souvent classé ainsi, mais rôle d'ONG aussi
    country: "États-Unis", // International
    tags: ["migration", "politique migratoire", "réfugiés", "intégration", "recherche", "ong", "think tank"],
    description: "Institut de recherche indépendant sur les politiques migratoires."
  },
  {
    id: "iwpr",
    title: "Institute for War & Peace Reporting (IWPR)",
    url: "https://iwpr.net",
    type: SourceType.NGO,
    country: "International",
    tags: ["journalisme", "paix", "conflit", "renforcement des médias", "droits humains", "ong"],
    description: "ONG qui soutient les reporters locaux dans les zones de conflit, de crise et de transition."
  },
  {
    id: "civicus",
    title: "CIVICUS",
    url: "https://www.civicus.org",
    type: SourceType.NGO,
    country: "International", // Alliance mondiale
    tags: ["société civile", "participation citoyenne", "activisme", "démocratie", "droits humains", "ong"],
    description: "Alliance mondiale d'organisations de la société civile et d'activistes."
  },
  {
    id: "worldbank",
    title: "Banque mondiale",
    url: "https://www.worldbank.org",
    type: SourceType.GOVERNMENT, // Organisation intergouvernementale (mais agit comme une IFI)
    country: "International",
    tags: ["développement", "économie", "pauvreté", "financement", "rapports", "institution financière"],
    description: "Institution financière internationale qui fournit des prêts et des subventions aux pays à faible et moyen revenu."
  },
  {
    id: "imf",
    title: "FMI (Fonds Monétaire International)",
    url: "https://www.imf.org",
    type: SourceType.GOVERNMENT, // Organisation intergouvernementale
    country: "International",
    tags: ["économie mondiale", "stabilité financière", "coopération monétaire", "rapports", "institution financière"],
    description: "Organisation internationale favorisant la coopération monétaire mondiale et la stabilité financière."
  },
  {
    id: "wto",
    title: "OMC (Organisation Mondiale du Commerce)",
    url: "https://www.wto.org",
    type: SourceType.GOVERNMENT, // Organisation intergouvernementale
    country: "International",
    tags: ["commerce international", "règles commerciales", "négociations", "différends", "mondialisation"],
    description: "Organisation internationale qui s'occupe des règles régissant le commerce entre les pays."
  },
  {
    id: "who",
    title: "OMS (Organisation Mondiale de la Santé)",
    url: "https://www.who.int",
    type: SourceType.GOVERNMENT, // Agence de l'ONU
    country: "International",
    tags: ["santé publique", "pandémies", "maladies", "recherche médicale", "onu"],
    description: "Agence spécialisée de l'ONU pour la santé publique."
  },
  {
    id: "ipcc",
    title: "GIEC (Groupe d'experts intergouvernemental sur l'évolution du climat)",
    url: "https://www.ipcc.ch",
    type: SourceType.GOVERNMENT, // Organe intergouvernemental (ONU/OMM)
    country: "International",
    tags: ["climat", "changement climatique", "science du climat", "rapports", "évaluation", "onu"],
    description: "Organe chargé d'évaluer les informations scientifiques relatives au changement climatique."
  },
  {
    id: "iea",
    title: "AIE (Agence Internationale de l'Énergie)",
    url: "https://www.iea.org",
    type: SourceType.GOVERNMENT, // Organisation intergouvernementale
    country: "International", // Autonome au sein de l'OCDE
    tags: ["énergie", "politique énergétique", "marchés pétroliers", "énergies renouvelables", "climat"],
    description: "Organisation intergouvernementale axée sur la politique énergétique."
  },
  {
    id: "oecd",
    title: "OCDE (Organisation de Coopération et de Développement Économiques)",
    url: "https://www.oecd.org",
    type: SourceType.GOVERNMENT, // Organisation intergouvernementale
    country: "International",
    tags: ["économie", "politique publique", "développement", "statistiques", "coopération", "analyse"],
    description: "Organisation internationale d'études économiques, promouvant les politiques de bien-être économique et social."
  },

  // Autres sources gouvernementales (Parlements, Banques Centrales, Agences de renseignement si publications publiques)
  {
    id: "europarl",
    title: "Parlement européen",
    url: "https://www.europarl.europa.eu",
    type: SourceType.GOVERNMENT,
    country: "Union Européenne",
    tags: ["parlement européen", "législation européenne", "ue", "démocratie", "débats"],
    description: "Institution parlementaire de l'Union européenne."
  },
  {
    id: "bundestag",
    title: "Bundestag allemand",
    url: "https://www.bundestag.de",
    type: SourceType.GOVERNMENT,
    country: "Allemagne",
    tags: ["parlement allemand", "législation", "politique allemande", "débats"],
    description: "Parlement fédéral de la République fédérale d'Allemagne."
  },
  {
    id: "assembleenationale",
    title: "Assemblée Nationale (France)",
    url: "https://www.assemblee-nationale.fr",
    type: SourceType.GOVERNMENT,
    country: "France",
    tags: ["parlement français", "législation", "politique française", "débats"],
    description: "Chambre basse du Parlement français."
  },
  {
    id: "ukparliament",
    title: "Parlement du Royaume-Uni",
    url: "https://www.parliament.uk",
    type: SourceType.GOVERNMENT,
    country: "Royaume-Uni",
    tags: ["parlement britannique", "législation", "politique britannique", "communes", "lords"],
    description: "Organe législatif suprême du Royaume-Uni."
  },
  {
    id: "uscongress",
    title: "Congrès des États-Unis (Congress.gov)",
    url: "https://www.congress.gov",
    type: SourceType.GOVERNMENT,
    country: "États-Unis",
    tags: ["congrès américain", "législation", "politique américaine", "sénat", "chambre des représentants"],
    description: "Site officiel pour l'information législative du Congrès américain."
  },
  {
    id: "ecb",
    title: "Banque Centrale Européenne (BCE)",
    url: "https://www.ecb.europa.eu",
    type: SourceType.GOVERNMENT,
    country: "Union Européenne",
    tags: ["banque centrale", "euro", "politique monétaire", "zone euro", "stabilité financière"],
    description: "Banque centrale pour l'euro et administre la politique monétaire de la zone euro."
  },
  {
    id: "federalreserve",
    title: "Federal Reserve (Fed)",
    url: "https://www.federalreserve.gov",
    type: SourceType.GOVERNMENT,
    country: "États-Unis",
    tags: ["banque centrale américaine", "politique monétaire", "économie américaine", "dollar", "stabilité financière"],
    description: "Système de banque centrale des États-Unis."
  },
  {
    id: "bankofengland",
    title: "Bank of England",
    url: "https://www.bankofengland.co.uk",
    type: SourceType.GOVERNMENT,
    country: "Royaume-Uni",
    tags: ["banque centrale britannique", "politique monétaire", "économie britannique", "livre sterling"],
    description: "Banque centrale du Royaume-Uni."
  },
  {
    id: "bis",
    title: "BRI (Banque des Règlements Internationaux)",
    url: "https://www.bis.org",
    type: SourceType.GOVERNMENT, // Organisation internationale de banques centrales
    country: "International", // Suisse
    tags: ["banques centrales", "stabilité financière", "coopération monétaire", "recherche économique"],
    description: "Organisation internationale favorisant la coopération entre banques centrales."
  },
  {
    id: "dni",
    title: "Office of the Director of National Intelligence (ODNI)",
    url: "https://www.dni.gov",
    type: SourceType.GOVERNMENT,
    country: "États-Unis",
    tags: ["renseignement américain", "sécurité nationale", "communauté du renseignement", "rapports déclassifiés"],
    description: "Chef de la Communauté du renseignement des États-Unis, publie des évaluations déclassifiées."
  },
  {
    id: "cia",
    title: "CIA (Central Intelligence Agency)",
    url: "https://www.cia.gov",
    type: SourceType.GOVERNMENT,
    country: "États-Unis",
    tags: ["renseignement", "sécurité nationale", "cia world factbook", "analyse"],
    description: "Agence de renseignement extérieur des États-Unis, publie le World Factbook."
  },
  // Encore quelques Think Tanks et centres de recherche spécifiques
  {
    id: "gatestone",
    title: "Gatestone Institute",
    url: "https://www.gatestoneinstitute.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    ideology: "Conservateur/Néoconservateur",
    tags: ["politique étrangère", "moyen-orient", "islam", "europe", "conservateur", "think tank", "controverse"],
    description: "Think tank américain connu pour ses positions conservatrices et parfois controversées."
  },
  {
    id: "memri",
    title: "MEMRI (Middle East Media Research Institute)",
    url: "https://www.memri.org",
    type: SourceType.NGO, // Souvent considéré comme un think tank ou une organisation de surveillance
    country: "États-Unis",
    tags: ["moyen-orient", "médias arabes", "traduction", "analyse", "controverse"],
    description: "Organisation qui traduit et diffuse des médias du Moyen-Orient, source souvent controversée."
  },
  {
    id: "cfrblog",
    title: "Blogs du Council on Foreign Relations",
    url: "https://www.cfr.org/blog",
    type: SourceType.BLOG, // Associé à un think tank
    country: "États-Unis",
    tags: ["relations internationales", "politique étrangère", "analyse", "experts cfr", "blog"],
    description: "Collection de blogs d'experts du Council on Foreign Relations."
  },
  {
    id: "chathamblog",
    title: "Chatham House Expert Comment",
    url: "https://www.chathamhouse.org/comment",
    type: SourceType.BLOG,
    country: "Royaume-Uni",
    tags: ["politique internationale", "analyse", "experts chatham house", "blog"],
    description: "Analyses et commentaires d'experts de Chatham House."
  },
  {
    id: "afrobarometer",
    title: "Afrobarometer",
    url: "https://www.afrobarometer.org",
    type: SourceType.ACADEMIC, // Réseau de recherche par sondage
    country: "Afrique", // Réseau panafricain
    tags: ["sondages d'opinion", "afrique", "démocratie", "gouvernance", "économie", "données"],
    description: "Réseau de recherche panafricain et non partisan qui mène des sondages d'opinion publique en Afrique."
  },
  {
    id: "pewresearch",
    title: "Pew Research Center",
    url: "https://www.pewresearch.org",
    type: SourceType.THINK_TANK, // "Fact tank"
    country: "États-Unis",
    tags: ["sondages d'opinion", "recherche sociale", "tendances", "politique américaine", "international", "démographie", "religion"],
    description: "Think tank non partisan qui informe le public sur les problèmes, attitudes et tendances qui façonnent le monde."
  },
  {
    id: "gallup",
    title: "Gallup",
    url: "https://news.gallup.com", // Portail d'actualités
    type: SourceType.SPECIALIZED, // Entreprise de sondage avec publication
    country: "États-Unis",
    tags: ["sondages d'opinion", "analyse", "données", "politique américaine", "international", "business"],
    description: "Entreprise américaine d'analyse et de conseil, connue pour ses sondages d'opinion publique."
  },
  {
    id: "fmso",
    title: "Foreign Military Studies Office (FMSO)",
    url: "https://community.apan.org/wg/fmso/", // Souvent via APAN
    type: SourceType.GOVERNMENT, // Armée US
    country: "États-Unis",
    tags: ["études militaires étrangères", "analyse", "doctrine", "armée américaine", "open source"],
    description: "Bureau d'études militaires étrangères de l'armée américaine, publiant des analyses open source (OE Watch)."
  },
  {
    id: "china-brief",
    title: "China Brief (Jamestown Foundation)",
    url: "https://jamestown.org/program/china-brief/",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    tags: ["chine", "politique chinoise", "militaire chinois", "parti communiste chinois", "analyse"],
    description: "Publication bihebdomadaire de la Jamestown Foundation sur la politique et la stratégie chinoises."
  },
  {
    id: "jamestown",
    title: "Jamestown Foundation",
    url: "https://jamestown.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    tags: ["eurasie", "terrorisme", "chine", "russie", "sécurité", "think tank"],
    description: "Think tank fournissant des informations et analyses sur les conflits et l'instabilité en Eurasie."
  },
  {
    id: "riddle",
    title: "Riddle Russia",
    url: "https://ridl.io/en/",
    type: SourceType.SPECIALIZED, // Média d'analyse
    country: "International", // Analystes russes et internationaux
    tags: ["russie", "politique russe", "société russe", "analyse", "indépendant"],
    description: "Publication en ligne offrant des analyses sur la politique et la société russes."
  },
  {
    id: "meduza",
    title: "Meduza",
    url: "https://meduza.io/en",
    type: SourceType.PRESS,
    country: "Lettonie", // Journalistes russes en exil
    ideology: "Indépendant/Opposition",
    tags: ["russie", "actualité russe", "indépendant", "enquête", "opposition"],
    description: "Média d'information russe indépendant basé en Lettonie."
  },
  {
    id: "themoscowtimes",
    title: "The Moscow Times",
    url: "https://www.themoscowtimes.com",
    type: SourceType.PRESS,
    country: "Pays-Bas", // Autrefois Russie, maintenant en exil
    ideology: "Indépendant",
    tags: ["russie", "actualité russe", "anglais", "indépendant"],
    description: "Journal indépendant de langue anglaise sur la Russie, opère maintenant depuis Amsterdam."
  },
  {
    id: "novayagazeta",
    title: "Novaya Gazeta Europe",
    url: "https://novayagazeta.eu/en",
    type: SourceType.PRESS,
    country: "Europe", // Journalistes russes en exil
    ideology: "Indépendant/Opposition",
    tags: ["russie", "journalisme d'investigation", "droits humains", "opposition", "indépendant"],
    description: "Version européenne du journal russe d'opposition Novaya Gazeta, après sa suspension en Russie."
  },
  {
    id: "eesc",
    title: "Comité économique et social européen (CESE)",
    url: "https://www.eesc.europa.eu",
    type: SourceType.GOVERNMENT,
    country: "Union Européenne",
    tags: ["société civile", "ue", "consultation", "avis", "partenaires sociaux"],
    description: "Organe consultatif de l'UE représentant les employeurs, les travailleurs et divers intérêts."
  },
  {
    id: "cor",
    title: "Comité européen des Régions (CdR)",
    url: "https://cor.europa.eu",
    type: SourceType.GOVERNMENT,
    country: "Union Européenne",
    tags: ["régions", "collectivités locales", "ue", "avis", "politique régionale"],
    description: "Assemblée des représentants locaux et régionaux de l'UE."
  },
  {
    id: "eurofound",
    title: "Eurofound",
    url: "https://www.eurofound.europa.eu",
    type: SourceType.GOVERNMENT, // Agence de l'UE
    country: "Union Européenne", // Irlande
    tags: ["conditions de vie", "conditions de travail", "ue", "recherche sociale", "politique sociale"],
    description: "Fondation européenne pour l'amélioration des conditions de vie et de travail."
  },
  {
    id: "europol",
    title: "Europol",
    url: "https://www.europol.europa.eu",
    type: SourceType.GOVERNMENT, // Agence de l'UE
    country: "Union Européenne", // Pays-Bas
    tags: ["criminalité", "application de la loi", "coopération policière", "ue", "sécurité"],
    description: "Agence de l'Union européenne pour la coopération des services répressifs."
  },
  {
    id: "frontex",
    title: "Frontex",
    url: "https://frontex.europa.eu",
    type: SourceType.GOVERNMENT, // Agence de l'UE
    country: "Union Européenne", // Pologne
    tags: ["frontières", "gardes-frontières", "migration", "ue", "sécurité aux frontières"],
    description: "Agence européenne de garde-frontières et de garde-côtes."
  },
  {
    id: "enisa",
    title: "ENISA",
    url: "https://www.enisa.europa.eu",
    type: SourceType.GOVERNMENT, // Agence de l'UE
    country: "Union Européenne", // Grèce
    tags: ["cybersécurité", "ue", "sécurité des réseaux", "certification", "politique cyber"],
    description: "Agence de l'Union européenne pour la cybersécurité."
  },
  {
    id: "ecfr-dataportal",
    title: "ECFR Data Portal (European Foreign Policy Scorecard, etc.)",
    url: "https://ecfr.eu/topic/data/", // Section de données
    type: SourceType.THINK_TANK,
    country: "Union Européenne",
    tags: ["données", "politique étrangère européenne", "analyse quantitative", "visualisation", "ue"],
    description: "Portail de données de l'ECFR, incluant des projets comme le European Foreign Policy Scorecard."
  },
  {
    id: "atlanticcouncil-trackers",
    title: "Atlantic Council Trackers & Data Visualizations",
    url: "https://www.atlanticcouncil.org/trackers-data-visualizations/",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    tags: ["données", "suivi géopolitique", "visualisation", "analyse", "relations internationales"],
    description: "Outils de suivi et visualisations de données de l'Atlantic Council sur divers sujets géopolitiques."
  },
  {
    id: "cinc",
    title: "Correlates of War (COW)",
    url: "https://correlatesofwar.org",
    type: SourceType.ACADEMIC, // Projet de recherche
    country: "International",
    tags: ["données de conflit", "guerre", "relations internationales", "recherche quantitative", "histoire"],
    description: "Projet de recherche académique fournissant des données quantitatives sur les guerres et conflits."
  },
  {
    id: "ucdp",
    title: "Uppsala Conflict Data Program (UCDP)",
    url: "https://ucdp.uu.se",
    type: SourceType.ACADEMIC,
    country: "Suède",
    tags: ["données de conflit", "violence organisée", "paix", "recherche", "analyse quantitative"],
    description: "Principal fournisseur mondial de données sur la violence organisée et les conflits armés."
  },
  {
    id: "armedconflict",
    title: "IISS Armed Conflict Database",
    url: "https://www.iiss.org/online-analysis-and-data/armed-conflict-database",
    type: SourceType.THINK_TANK, // Produit de
    country: "Royaume-Uni",
    tags: ["données de conflit", "conflits armés", "analyse", "iiss", "sécurité"],
    description: "Base de données de l'IISS sur les conflits armés dans le monde."
  },
  {
    id: "acled",
    title: "ACLED (Armed Conflict Location & Event Data Project)",
    url: "https://acleddata.com",
    type: SourceType.NGO, // Projet de collecte de données
    country: "International",
    tags: ["données de conflit", "violence politique", "manifestations", "temps réel", "cartographie"],
    description: "Projet de collecte de données désagrégées sur la violence politique et les manifestations dans le monde."
  },
  {
    id: "gppi",
    title: "Global Public Policy Institute (GPPi)",
    url: "https://www.gppi.net",
    type: SourceType.THINK_TANK,
    country: "Allemagne",
    tags: ["politique publique", "gouvernance mondiale", "paix et sécurité", "humanitaire", "think tank"],
    description: "Think tank indépendant basé à Berlin travaillant sur la gouvernance mondiale et la politique étrangère."
  },
  {
    id: "cnas",
    title: "Center for a New American Security (CNAS)",
    url: "https://www.cnas.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis",
    ideology: "Centriste/Libéral-interventionniste",
    tags: ["sécurité nationale américaine", "défense", "politique étrangère", "think tank"],
    description: "Think tank bipartisan développant des politiques de sécurité nationale pour les États-Unis."
  },
  {
    id: "kielsceworldeconomy",
    title: "Kiel Institute for the World Economy (IfW Kiel)",
    url: "https://www.ifw-kiel.de/scholarly-publications/",
    type: SourceType.ACADEMIC, // Institut de recherche
    country: "Allemagne",
    tags: ["économie mondiale", "recherche économique", "politique commerciale", "globalisation"],
    description: "Institut de recherche allemand en économie mondiale."
  },
  {
    id: "cepii",
    title: "CEPII (Centre d'Études Prospectives et d'Informations Internationales)",
    url: "http://www.cepii.fr",
    type: SourceType.THINK_TANK, // Aussi recherche publique
    country: "France",
    tags: ["économie internationale", "recherche", "commerce", "macroéconomie", "politique économique"],
    description: "Principal centre français de recherche en économie internationale."
  },
  {
    id: "sciencespo-opp",
    title: "Observatoire politique et parlementaire (Sciences Po)",
    url: "https://www.sciencespo.fr/observatoire-politique-parlementaire/",
    type: SourceType.ACADEMIC,
    country: "France",
    tags: ["politique française", "parlement", "élections", "analyse politique", "sciences po"],
    description: "Observatoire de la vie politique et parlementaire de Sciences Po."
  },
  {
    id: "odihr",
    title: "OSCE ODIHR (Bureau des institutions démocratiques et des droits de l'homme)",
    url: "https://www.osce.org/odihr",
    type: SourceType.GOVERNMENT, // Institution de l'OSCE
    country: "International", // Basé à Varsovie
    tags: ["droits humains", "démocratie", "élections", "osce", "observation électorale"],
    description: "Principale institution de l'OSCE pour la dimension humaine."
  },
  {
    id: "oas",
    title: "OEA (Organisation des États Américains)",
    url: "https://www.oas.org",
    type: SourceType.GOVERNMENT,
    country: "Amériques",
    tags: ["amériques", "coopération régionale", "démocratie", "droits humains", "sécurité"],
    description: "Organisation régionale des États des Amériques."
  },
  {
    id: "africanunion",
    title: "Union Africaine",
    url: "https://au.int",
    type: SourceType.GOVERNMENT,
    country: "Afrique",
    tags: ["union africaine", "intégration africaine", "paix et sécurité", "développement", "politique"],
    description: "Organisation continentale regroupant les États africains."
  },
  {
    id: "asean",
    title: "ASEAN (Association des Nations de l'Asie du Sud-Est)",
    url: "https://asean.org",
    type: SourceType.GOVERNMENT,
    country: "Asie du Sud-Est",
    tags: ["asean", "asie du sud-est", "coopération régionale", "économie", "politique"],
    description: "Organisation politique et économique régionale de dix pays d'Asie du Sud-Est."
  },
  {
    id: "mercator-china",
    title: "MERICS (Mercator Institute for China Studies)",
    url: "https://merics.org/en",
    type: SourceType.THINK_TANK,
    country: "Allemagne",
    tags: ["chine", "politique chinoise", "économie chinoise", "société chinoise", "relations ue-chine", "think tank"],
    description: "L'un des plus grands instituts européens de recherche sur la Chine contemporaine."
  },
  {
    id: "ifans",
    title: "Institut Fondamental d'Afrique Noire (IFAN)",
    url: "https://ifan.ucad.sn", // Université Cheikh Anta Diop
    type: SourceType.ACADEMIC,
    country: "Sénégal",
    tags: ["afrique de l'ouest", "recherche", "sciences humaines", "culture", "histoire africaine"],
    description: "Institut de recherche en sciences sociales et humaines sur l'Afrique de l'Ouest, basé à Dakar."
  },
  {
    id: "eisa",
    title: "EISA (Electoral Institute for Sustainable Democracy in Africa)",
    url: "https://www.eisa.org",
    type: SourceType.NGO,
    country: "Afrique du Sud", // Régional
    tags: ["élections", "démocratie", "afrique", "gouvernance", "observation électorale"],
    description: "ONG promouvant des élections crédibles et la démocratie durable en Afrique."
  },
  {
    id: "bicom",
    title: "BICOM (Britain Israel Communications and Research Centre)",
    url: "https://www.bicom.org.uk",
    type: SourceType.NGO, // Organisation de lobbying/communication
    country: "Royaume-Uni",
    tags: ["royaume-uni", "israël", "relations", "moyen-orient", "communication", "lobbying"],
    description: "Organisation britannique promouvant la compréhension d'Israël au Royaume-Uni."
  },
  {
    id: "ict",
    title: "International Institute for Counter-Terrorism (ICT)",
    url: "https://ict.org.il",
    type: SourceType.ACADEMIC, // Associé à Reichman University
    country: "Israël",
    tags: ["contre-terrorisme", "terrorisme", "sécurité", "recherche", "israël"],
    description: "Institut de recherche sur le contre-terrorisme basé en Israël."
  },
  {
    id: "cats",
    title: "Center for Analysis of Strategies and Technologies (CAST)",
    url: "http://cast.ru/eng/", // Site peut être difficile d'accès
    type: SourceType.THINK_TANK,
    country: "Russie",
    tags: ["défense russe", "industrie militaire", "exportations d'armes", "sécurité", "think tank"],
    description: "Think tank russe spécialisé dans l'analyse des stratégies et technologies de défense."
  },
  {
    id: "valdaiclub",
    title: "Valdai Discussion Club",
    url: "https://valdaiclub.com",
    type: SourceType.THINK_TANK, // Forum de discussion
    country: "Russie",
    ideology: "Pro-Kremlin",
    tags: ["russie", "relations internationales", "politique étrangère russe", "forum", "think tank"],
    description: "Forum de discussion international basé en Russie, promouvant la perspective russe."
  },
  {
    id: "macropolo",
    title: "MacroPolo",
    url: "https://macropolo.org",
    type: SourceType.THINK_TANK, // Initiative du Paulson Institute
    country: "États-Unis",
    tags: ["chine", "économie chinoise", "technologie chinoise", "politique chinoise", "analyse"],
    description: "Think tank interne du Paulson Institute axé sur l'économie chinoise."
  },
  {
    id: "uscc",
    title: "U.S.-China Economic and Security Review Commission (USCC)",
    url: "https://www.uscc.gov",
    type: SourceType.GOVERNMENT, // Commission du Congrès US
    country: "États-Unis",
    tags: ["états-unis", "chine", "relations sino-américaines", "économie", "sécurité", "rapports"],
    description: "Commission du Congrès américain chargée de surveiller les implications de la relation bilatérale avec la Chine."
  },
  {
    id: "usip",
    title: "United States Institute of Peace (USIP)",
    url: "https://www.usip.org",
    type: SourceType.GOVERNMENT, // Financé par le Congrès US, mais indépendant
    country: "États-Unis",
    tags: ["paix", "prévention des conflits", "résolution des conflits", "diplomatie", "international"],
    description: "Institut national américain non partisan dédié à la prévention et à la résolution des conflits violents."
  },
  {
    id: "kof",
    title: "KOF Swiss Economic Institute (ETH Zurich)",
    url: "https://kof.ethz.ch/en.html",
    type: SourceType.ACADEMIC,
    country: "Suisse",
    tags: ["économie suisse", "recherche économique", "conjoncture", "globalisation (indice KOF)"],
    description: "Institut de recherche économique de l'ETH Zurich, publie l'indice de globalisation KOF."
  },
  {
    id: "cries",
    title: "Coordinadora Regional de Investigaciones Económicas y Sociales (CRIES)",
    url: "https://www.cries.org",
    type: SourceType.THINK_TANK, // Réseau
    country: "Amérique Latine", // Siège en Argentine
    tags: ["amérique latine", "caraïbes", "intégration régionale", "société civile", "recherche", "think tank"],
    description: "Réseau de centres de recherche et d'ONG en Amérique Latine et Caraïbes."
  },
  {
    id: "interamericandialogue",
    title: "Inter-American Dialogue",
    url: "https://www.thedialogue.org",
    type: SourceType.THINK_TANK,
    country: "États-Unis", // Focus Amériques
    tags: ["amériques", "relations interaméricaines", "amérique latine", "politique", "économie", "think tank"],
    description: "Think tank de Washington D.C. axé sur les affaires de l'hémisphère occidental."
  },
  {
    id: "wola",
    title: "Washington Office on Latin America (WOLA)",
    url: "https://www.wola.org",
    type: SourceType.NGO,
    country: "États-Unis", // Focus Amérique Latine
    tags: ["amérique latine", "droits humains", "démocratie", "justice sociale", "plaidoyer", "ong"],
    description: "Organisation de plaidoyer pour les droits humains en Amérique Latine."
  },
  {
    id: "cicig",
    title: "Comisión Internacional contra la Impunidad en Guatemala (CICIG) - Archives",
    url: "https://www.cicig.org/legacy_site/", // Site archivé après fermeture
    type: SourceType.GOVERNMENT, // Mandat ONU, maintenant historique
    country: "Guatemala", // International
    tags: ["guatemala", "lutte anti-corruption", "impunité", "justice", "onu", "archives"],
    description: "Archives de la Commission internationale contre l'impunité au Guatemala (maintenant dissoute)."
  },
  {
    id: "cejil",
    title: "Center for Justice and International Law (CEJIL)",
    url: "https://cejil.org/en/",
    type: SourceType.NGO,
    country: "Amériques", // Plusieurs bureaux
    tags: ["droits humains", "justice", "système interaméricain", "contentieux stratégique", "ong"],
    description: "ONG qui défend les droits humains dans les Amériques par l'utilisation du système interaméricain."
  },
  {
    id: "flacso",
    title: "Facultad Latinoamericana de Ciencias Sociales (FLACSO)",
    url: "https://flacso.org",
    type: SourceType.ACADEMIC, // Organisation régionale
    country: "Amérique Latine", // Plusieurs sièges nationaux
    tags: ["sciences sociales", "amérique latine", "recherche", "éducation", "politique publique"],
    description: "Organisation intergouvernementale régionale et autonome dédiée à la recherche, l'enseignement et la diffusion des sciences sociales."
  },
  {
    id: "cidob",
    title: "Barcelona Centre for International Affairs (CIDOB)",
    url: "https://www.cidob.org/en",
    type: SourceType.THINK_TANK,
    country: "Espagne",
    tags: ["relations internationales", "barcelone", "analyse globale", "migrations", "géopolitique", "think tank"],
    description: "Think tank indépendant basé à Barcelone, spécialisé dans les affaires internationales."
  },
  {
    id: "iss",
    title: "Institut d'études de sécurité de l'Union européenne (EUISS)",
    url: "https://www.iss.europa.eu",
    type: SourceType.GOVERNMENT, // Agence de l'UE
    country: "Union Européenne", // France (Paris)
    tags: ["sécurité", "défense", "politique étrangère européenne", "ue", "analyse", "think tank institutionnel"],
    description: "Agence autonome de l'UE fournissant des analyses sur les questions de politique étrangère et de sécurité."
  },
  {
    id: "eurodad",
    title: "Eurodad (European Network on Debt and Development)",
    url: "https://www.eurodad.org",
    type: SourceType.NGO, // Réseau
    country: "Europe", // Belgique (Bruxelles)
    tags: ["dette", "développement", "justice financière", "financement du développement", "europe", "ong"],
    description: "Réseau d'ONG européennes travaillant sur les questions de dette, de financement du développement et de justice économique."
  },
  {
    id: "odi",
    title: "ODI (anciennement Overseas Development Institute)",
    url: "https://odi.org",
    type: SourceType.THINK_TANK,
    country: "Royaume-Uni",
    tags: ["développement international", "pauvreté", "aide", "politique publique", "recherche", "think tank"],
    description: "Think tank mondial indépendant travaillant sur le développement international et les questions humanitaires."
  },
  {
    id: "ecdpm",
    title: "European Centre for Development Policy Management (ECDPM)",
    url: "https://ecdpm.org",
    type: SourceType.THINK_TANK,
    country: "Pays-Bas", // Et Belgique
    tags: ["développement", "politique européenne", "relations ue-afrique", "coopération internationale", "think tank"],
    description: "Think tank indépendant axé sur les politiques de développement entre l'Europe et les pays ACP."
  },
  {
    id: "ideas",
    title: "African Centre for the Constructive Resolution of Disputes (ACCORD)",
    url: "https://www.accord.org.za",
    type: SourceType.NGO,
    country: "Afrique du Sud",
    tags: ["résolution de conflits", "paix", "médiation", "afrique", "formation", "ong"],
    description: "ONG sud-africaine travaillant à la résolution constructive des conflits en Afrique."
  },
  {
    id: "prio",
    title: "Peace Research Institute Oslo (PRIO)",
    url: "https://www.prio.org",
    type: SourceType.ACADEMIC, // Institut de recherche indépendant
    country: "Norvège",
    tags: ["paix", "conflit", "recherche", "relations internationales", "sécurité"],
    description: "Institut de recherche indépendant sur la paix et les conflits, basé à Oslo."
  },
  {
    id: "ferdi",
    title: "Fondation pour les études et recherches sur le développement international (FERDI)",
    url: "https://ferdi.fr",
    type: SourceType.THINK_TANK,
    country: "France",
    tags: ["développement international", "recherche", "économie du développement", "pays vulnérables", "politique"],
    description: "Think tank français soutenant la recherche sur le développement international."
  }

  // Total de 266 sources après ajouts. (56 initiales + 210 nouvelles)
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
