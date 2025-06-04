
import { useState, useMemo } from 'react';
import { sources, SourceType, getAllTags } from '../data/sources';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SourceCard from '../components/SourceCard';
import SourceFilters from '../components/SourceFilters';

const Sources = () => {
  const [selectedTypes, setSelectedTypes] = useState<SourceType[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const countries = useMemo(() => {
    const countrySet = new Set(sources.map(source => source.country));
    return Array.from(countrySet).sort();
  }, []);

  const filteredSources = useMemo(() => {
    return sources.filter(source => {
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(source.type);
      const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(source.country);
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => source.tags.includes(tag));
      const matchesSearch = searchTerm === '' || 
        source.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        source.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        source.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesType && matchesCountry && matchesTags && matchesSearch;
    });
  }, [selectedTypes, selectedCountries, selectedTags, searchTerm]);

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
              Découvrez notre base de données de {sources.length} sources d'information stratégique
            </p>
          </div>

          <SourceFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedTypes={selectedTypes}
            onTypesChange={setSelectedTypes}
            selectedCountries={selectedCountries}
            onCountriesChange={setSelectedCountries}
            selectedTags={selectedTags}
            onTagsChange={setSelectedTags}
            countries={countries}
            tags={getAllTags()}
          />

          <div className="mb-6">
            <p className="text-sm font-mono text-muted-foreground">
              {filteredSources.length} source{filteredSources.length !== 1 ? 's' : ''} trouvée{filteredSources.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSources.map(source => (
              <SourceCard key={source.id} source={source} />
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
