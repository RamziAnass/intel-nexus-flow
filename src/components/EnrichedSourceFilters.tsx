
import React from 'react';
import { SourceType, Region } from '../data/enrichedSources';
import { Button } from '@/components/ui/button';
import { X, Star } from 'lucide-react';

interface EnrichedSourceFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedTypes: SourceType[];
  onTypesChange: (types: SourceType[]) => void;
  selectedCountries: string[];
  onCountriesChange: (countries: string[]) => void;
  selectedRegions: Region[];
  onRegionsChange: (regions: Region[]) => void;
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
  selectedReliability: number[];
  onReliabilityChange: (reliability: number[]) => void;
  selectedAccessLevel: string[];
  onAccessLevelChange: (accessLevel: string[]) => void;
  countries: string[];
  regions: Region[];
  tags: string[];
}

const EnrichedSourceFilters: React.FC<EnrichedSourceFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedTypes,
  onTypesChange,
  selectedCountries,
  onCountriesChange,
  selectedRegions,
  onRegionsChange,
  selectedTags,
  onTagsChange,
  selectedReliability,
  onReliabilityChange,
  selectedAccessLevel,
  onAccessLevelChange,
  countries,
  regions,
  tags
}) => {
  const toggleType = (type: SourceType) => {
    if (selectedTypes.includes(type)) {
      onTypesChange(selectedTypes.filter(t => t !== type));
    } else {
      onTypesChange([...selectedTypes, type]);
    }
  };

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      onCountriesChange(selectedCountries.filter(c => c !== country));
    } else {
      onCountriesChange([...selectedCountries, country]);
    }
  };

  const toggleRegion = (region: Region) => {
    if (selectedRegions.includes(region)) {
      onRegionsChange(selectedRegions.filter(r => r !== region));
    } else {
      onRegionsChange([...selectedRegions, region]);
    }
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const toggleReliability = (rating: number) => {
    if (selectedReliability.includes(rating)) {
      onReliabilityChange(selectedReliability.filter(r => r !== rating));
    } else {
      onReliabilityChange([...selectedReliability, rating]);
    }
  };

  const toggleAccessLevel = (level: string) => {
    if (selectedAccessLevel.includes(level)) {
      onAccessLevelChange(selectedAccessLevel.filter(a => a !== level));
    } else {
      onAccessLevelChange([...selectedAccessLevel, level]);
    }
  };

  const clearAllFilters = () => {
    onSearchChange('');
    onTypesChange([]);
    onCountriesChange([]);
    onRegionsChange([]);
    onTagsChange([]);
    onReliabilityChange([]);
    onAccessLevelChange([]);
  };

  const hasActiveFilters = searchTerm || selectedTypes.length > 0 || selectedCountries.length > 0 || 
                          selectedRegions.length > 0 || selectedTags.length > 0 || 
                          selectedReliability.length > 0 || selectedAccessLevel.length > 0;

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold font-mono">Filtres de recherche avancés</h2>
        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={clearAllFilters}>
            <X className="w-4 h-4 mr-2" />
            Effacer tout
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium mb-2">Recherche globale</label>
          <input
            type="text"
            placeholder="Rechercher par nom, description, tag ou pays..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background font-mono"
          />
        </div>

        {/* Regions */}
        <div>
          <label className="block text-sm font-medium mb-2">Régions ({selectedRegions.length})</label>
          <div className="flex flex-wrap gap-2">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => toggleRegion(region)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedRegions.includes(region)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Types */}
        <div>
          <label className="block text-sm font-medium mb-2">Types de sources ({selectedTypes.length})</label>
          <div className="flex flex-wrap gap-2">
            {Object.values(SourceType).map(type => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedTypes.includes(type)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {type.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Reliability */}
        <div>
          <label className="block text-sm font-medium mb-2">Fiabilité ({selectedReliability.length})</label>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map(rating => (
              <button
                key={rating}
                onClick={() => toggleReliability(rating)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center ${
                  selectedReliability.includes(rating)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Star className="w-3 h-3 mr-1" />
                {rating}+
              </button>
            ))}
          </div>
        </div>

        {/* Access Level */}
        <div>
          <label className="block text-sm font-medium mb-2">Niveau d'accès ({selectedAccessLevel.length})</label>
          <div className="flex flex-wrap gap-2">
            {['public', 'restricted', 'classified'].map(level => (
              <button
                key={level}
                onClick={() => toggleAccessLevel(level)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedAccessLevel.includes(level)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {level === 'public' ? 'Public' : level === 'restricted' ? 'Restreint' : 'Classifié'}
              </button>
            ))}
          </div>
        </div>

        {/* Countries - Limited display */}
        <div>
          <label className="block text-sm font-medium mb-2">Pays ({selectedCountries.length})</label>
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
            {countries.slice(0, 30).map(country => (
              <button
                key={country}
                onClick={() => toggleCountry(country)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCountries.includes(country)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {country}
              </button>
            ))}
            {countries.length > 30 && (
              <span className="px-3 py-1 text-xs text-muted-foreground">
                +{countries.length - 30} autres...
              </span>
            )}
          </div>
        </div>

        {/* Popular Tags */}
        <div>
          <label className="block text-sm font-medium mb-2">Tags populaires ({selectedTags.length})</label>
          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
            {tags.slice(0, 25).map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {tag}
              </button>
            ))}
            {tags.length > 25 && (
              <span className="px-3 py-1 text-xs text-muted-foreground">
                +{tags.length - 25} autres...
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrichedSourceFilters;
