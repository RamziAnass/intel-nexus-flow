
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';
import { SourceType, Region } from '../data/enrichedSources';

interface EnrichedSourceFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
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
  countries,
  regions,
  tags
}) => {
  const sourceTypes: SourceType[] = ['government', 'media', 'academic', 'intelligence', 'ngo', 'corporate', 'social'];

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

  const clearAllFilters = () => {
    onSearchChange('');
    onTypesChange([]);
    onCountriesChange([]);
    onRegionsChange([]);
    onTagsChange([]);
  };

  return (
    <div className="space-y-6 mb-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Rechercher par titre, description, tags ou pays..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 font-mono"
        />
      </div>

      {/* Active filters summary */}
      {(selectedTypes.length > 0 || selectedCountries.length > 0 || selectedRegions.length > 0 || selectedTags.length > 0) && (
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {selectedTypes.map(type => (
              <Badge key={type} variant="secondary" className="font-mono">
                {type}
                <X 
                  className="w-3 h-3 ml-1 cursor-pointer" 
                  onClick={() => toggleType(type)}
                />
              </Badge>
            ))}
            {selectedCountries.map(country => (
              <Badge key={country} variant="secondary" className="font-mono">
                {country}
                <X 
                  className="w-3 h-3 ml-1 cursor-pointer" 
                  onClick={() => toggleCountry(country)}
                />
              </Badge>
            ))}
            {selectedRegions.map(region => (
              <Badge key={region} variant="secondary" className="font-mono">
                {region}
                <X 
                  className="w-3 h-3 ml-1 cursor-pointer" 
                  onClick={() => toggleRegion(region)}
                />
              </Badge>
            ))}
            {selectedTags.map(tag => (
              <Badge key={tag} variant="secondary" className="font-mono">
                {tag}
                <X 
                  className="w-3 h-3 ml-1 cursor-pointer" 
                  onClick={() => toggleTag(tag)}
                />
              </Badge>
            ))}
          </div>
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Effacer tout
          </Button>
        </div>
      )}

      {/* Filter sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Types */}
        <div>
          <h3 className="font-semibold font-mono mb-2 text-sm">Types</h3>
          <div className="flex flex-wrap gap-2">
            {sourceTypes.map(type => (
              <Button
                key={type}
                variant={selectedTypes.includes(type) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleType(type)}
                className="text-xs font-mono"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div>
          <h3 className="font-semibold font-mono mb-2 text-sm">Régions</h3>
          <div className="flex flex-wrap gap-2">
            {regions.slice(0, 4).map(region => (
              <Button
                key={region}
                variant={selectedRegions.includes(region) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleRegion(region)}
                className="text-xs font-mono"
              >
                {region}
              </Button>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div>
          <h3 className="font-semibold font-mono mb-2 text-sm">Pays</h3>
          <div className="flex flex-wrap gap-2">
            {countries.slice(0, 4).map(country => (
              <Button
                key={country}
                variant={selectedCountries.includes(country) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleCountry(country)}
                className="text-xs font-mono"
              >
                {country}
              </Button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="font-semibold font-mono mb-2 text-sm">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map(tag => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleTag(tag)}
                className="text-xs font-mono"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrichedSourceFilters;
