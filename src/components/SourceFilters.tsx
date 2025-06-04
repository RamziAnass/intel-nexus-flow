
import React from 'react';
import { SourceType } from '../data/sources';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface SourceFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedTypes: SourceType[];
  onTypesChange: (types: SourceType[]) => void;
  selectedCountries: string[];
  onCountriesChange: (countries: string[]) => void;
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
  countries: string[];
  tags: string[];
}

const SourceFilters: React.FC<SourceFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedTypes,
  onTypesChange,
  selectedCountries,
  onCountriesChange,
  selectedTags,
  onTagsChange,
  countries,
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

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const clearAllFilters = () => {
    onSearchChange('');
    onTypesChange([]);
    onCountriesChange([]);
    onTagsChange([]);
  };

  const hasActiveFilters = searchTerm || selectedTypes.length > 0 || selectedCountries.length > 0 || selectedTags.length > 0;

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold font-mono">Filtres de recherche</h2>
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
          <label className="block text-sm font-medium mb-2">Recherche</label>
          <input
            type="text"
            placeholder="Rechercher par nom, description ou tag..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
          />
        </div>

        {/* Types */}
        <div>
          <label className="block text-sm font-medium mb-2">Types de sources</label>
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
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div>
          <label className="block text-sm font-medium mb-2">Pays</label>
          <div className="flex flex-wrap gap-2">
            {countries.map(country => (
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
          </div>
        </div>

        {/* Popular Tags */}
        <div>
          <label className="block text-sm font-medium mb-2">Tags populaires</label>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 15).map(tag => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceFilters;
