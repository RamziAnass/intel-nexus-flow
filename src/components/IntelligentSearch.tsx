
import React, { useState, useEffect, useRef } from 'react';
import { Search, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { enrichedSources, getAllTags } from '../data/enrichedSources';

interface IntelligentSearchProps {
  onSearch: (keyword: string) => void;
  onThemeExploration: (theme: string) => void;
}

const IntelligentSearch: React.FC<IntelligentSearchProps> = ({ onSearch, onThemeExploration }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const allKeywords = [
    ...getAllTags(),
    'géopolitique', 'élections', 'climat', 'cybersécurité', 'terrorisme',
    'intelligence artificielle', 'sanctions', 'commerce international',
    'défense', 'diplomatie', 'énergie', 'migration'
  ];

  useEffect(() => {
    if (inputValue.length > 1) {
      const filtered = allKeywords
        .filter(keyword => 
          keyword.toLowerCase().includes(inputValue.toLowerCase())
        )
        .slice(0, 6);
      setSuggestions(filtered);
      setShowSuggestions(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSearch(suggestions[selectedIndex]);
        } else {
          handleSearch(inputValue);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSearch = (keyword: string) => {
    setInputValue(keyword);
    setShowSuggestions(false);
    onSearch(keyword);
  };

  const handleThemeExploration = () => {
    if (inputValue.trim()) {
      onThemeExploration(inputValue);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Analysez un domaine stratégique..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => inputValue && setSuggestions.length > 0 && setShowSuggestions(true)}
          className="pl-12 pr-4 py-6 text-lg font-mono bg-card border-2 border-border focus:border-primary transition-all"
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion}
              onClick={() => handleSearch(suggestion)}
              className={`w-full text-left px-4 py-3 font-mono text-sm transition-colors ${
                index === selectedIndex 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
            >
              <Target className="inline w-3 h-3 mr-2" />
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-3 mt-4 justify-center">
        <Button 
          onClick={() => handleSearch(inputValue)}
          size="lg" 
          className="font-mono"
          disabled={!inputValue.trim()}
        >
          <Search className="w-4 h-4 mr-2" />
          Analyser
        </Button>
        <Button 
          onClick={handleThemeExploration}
          variant="outline" 
          size="lg" 
          className="font-mono"
          disabled={!inputValue.trim()}
        >
          <Zap className="w-4 h-4 mr-2" />
          Explorer le thème
        </Button>
      </div>
    </div>
  );
};

export default IntelligentSearch;
