
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroAnimation from '../components/IntroAnimation';
import { findSourcesByKeyword, sources as allSources } from '../data/sources';

const Index = () => {
  const [sources, setSources] = useState(allSources.slice(0, 10)); // Affiche 10 sources par défaut
  const [showIntro, setShowIntro] = useState(true);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    // Masquer l'animation après 3 secondes
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (keyword: string) => {
    if (keyword.trim() === '') {
      setSources(allSources.slice(0, 10));
      setSearchPerformed(false);
      return;
    }

    const results = findSourcesByKeyword(keyword);
    setSources(results);
    setSearchPerformed(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {showIntro && <IntroAnimation />}
      
      <Header />
      
      <main className="flex-1 container py-8 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mono tracking-tight">
            Surveillance intelligente des <span className="text-primary">sources</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Découvrir et analyser les sources d'information stratégiques.
          </p>
          
          <div className="flex justify-center mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          {searchPerformed && (
            <p className="text-sm font-mono mb-6">
              {sources.length} source{sources.length !== 1 ? 's' : ''} trouvée{sources.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {sources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sources.map((source) => (
              <div 
                key={source.id} 
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => window.open(source.url, '_blank')}
              >
                <h3 className="text-lg font-semibold font-mono tracking-tight mb-2">{source.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{source.description}</p>
                <div className="flex flex-wrap gap-2">
                  {source.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-xs text-muted-foreground font-mono">
                  {source.country} • {source.type}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Aucune source trouvée pour cette recherche.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
