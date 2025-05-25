
import { useState, useMemo } from 'react';
import { enrichedSources, SourceType, Region, getAllTags, getAllCountries, getAllRegions } from '../data/enrichedSources';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EnrichedSourceCard from '../components/EnrichedSourceCard';
import EnrichedSourceFilters from '../components/EnrichedSourceFilters';

const Sources = () => {
  const [selectedTypes, setSelectedTypes] = useState<SourceType[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReliability, setSelectedReliability] = useState<number[]>([]);
  const [selectedAccessLevel, setSelectedAccessLevel] = useState<string[]>([]);

  const filteredSources = useMemo(() => {
    return enrichedSources.filter(source => {
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(source.type);
      const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(source.country);
      const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(source.region);
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => source.tags.includes(tag));
      const matchesReliability = selectedReliability.length === 0 || selectedReliability.includes(source.reliability);
      const matchesAccessLevel = selectedAccessLevel.length === 0 || selectedAccessLevel.includes(source.accessLevel);
      const matchesSearch = searchTerm === '' || 
        source.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        source.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        source.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        source.country.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesType && matchesCountry && matchesRegion && matchesTags && 
             matchesReliability && matchesAccessLevel && matchesSearch;
    });
  }, [selectedTypes, selectedCountries, selectedRegions, selectedTags, 
      selectedReliability, selectedAccessLevel, searchTerm]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mono tracking-tight">
              Explorer les <span className="text-primary">sources</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Découvrez notre base de données enrichie de {enrichedSources.length} sources d'information stratégique
            </p>
          </div>

          <EnrichedSourceFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedTypes={selectedTypes}
            onTypesChange={setSelectedTypes}
            selectedCountries={selectedCountries}
            onCountriesChange={setSelectedCountries}
            selectedRegions={selectedRegions}
            onRegionsChange={setSelectedRegions}
            selectedTags={selectedTags}
            onTagsChange={setSelectedTags}
            selectedReliability={selectedReliability}
            onReliabilityChange={setSelectedReliability}
            selectedAccessLevel={selectedAccessLevel}
            onAccessLevelChange={setSelectedAccessLevel}
            countries={getAllCountries()}
            regions={getAllRegions()}
            tags={getAllTags()}
          />

          <div className="mb-6">
            <p className="text-sm font-mono text-muted-foreground">
              {filteredSources.length} source{filteredSources.length !== 1 ? 's' : ''} trouvée{filteredSources.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSources.map(source => (
              <EnrichedSourceCard key={source.id} source={source} />
            ))}
          </div>

          {filteredSources.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucune source ne correspond à vos critères de recherche.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sources;
