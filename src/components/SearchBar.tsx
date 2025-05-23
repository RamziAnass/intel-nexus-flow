
import { useState, useEffect, useRef } from 'react';
import { getAllTags } from '../data/sources';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const allTags = useRef<string[]>(getAllTags());
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filteredSuggestions = allTags.current
        .filter(tag => tag.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = () => {
    onSearch(inputValue);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex">
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Rechercher un thème..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => inputValue && setSuggestions.length > 0 ? setShowSuggestions(true) : null}
        />
        <Button 
          onClick={handleSearch}
          className="ml-2 bg-primary text-white hover:bg-primary/80"
        >
          Explorer
        </Button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute mt-1 w-full bg-card border border-border rounded-md shadow-lg z-10">
          <ul className="py-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-muted cursor-pointer font-mono text-sm"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
