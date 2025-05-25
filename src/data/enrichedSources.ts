
export type SourceType = 'government' | 'media' | 'academic' | 'intelligence' | 'ngo' | 'corporate' | 'social';
export type Region = 'North America' | 'Europe' | 'Asia-Pacific' | 'Middle East' | 'Africa' | 'Latin America' | 'Global';

export interface EnrichedSource {
  id: string;
  title: string;
  url: string;
  description: string;
  type: SourceType;
  country: string;
  region: Region;
  tags: string[];
  ideology: string;
  reliability: number; // 1-5 scale
  accessLevel: 'public' | 'restricted' | 'classified';
  lastUpdated: string;
  language: string;
  credibilityScore: number; // 1-10 scale
}

export const enrichedSources: EnrichedSource[] = [
  {
    id: "1",
    title: "CIA World Factbook",
    url: "https://www.cia.gov/the-world-factbook/",
    description: "Comprehensive intelligence reports on world countries",
    type: "intelligence",
    country: "United States",
    region: "North America",
    tags: ["intelligence", "geopolitics", "demographics"],
    ideology: "neutral",
    reliability: 5,
    accessLevel: "public",
    lastUpdated: "2024-01-15",
    language: "English",
    credibilityScore: 9
  },
  {
    id: "2",
    title: "BBC News",
    url: "https://www.bbc.com/news",
    description: "British public service broadcaster news coverage",
    type: "media",
    country: "United Kingdom",
    region: "Europe",
    tags: ["news", "current events", "international"],
    ideology: "center-left",
    reliability: 4,
    accessLevel: "public",
    lastUpdated: "2024-01-14",
    language: "English",
    credibilityScore: 8
  }
];

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  enrichedSources.forEach(source => {
    source.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const getAllCountries = (): string[] => {
  const countries = new Set<string>();
  enrichedSources.forEach(source => {
    countries.add(source.country);
  });
  return Array.from(countries).sort();
};

export const getAllRegions = (): Region[] => {
  const regions = new Set<Region>();
  enrichedSources.forEach(source => {
    regions.add(source.region);
  });
  return Array.from(regions).sort();
};
