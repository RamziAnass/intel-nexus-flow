
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import GraphVisualization from '../components/GraphVisualization';
import Legend from '../components/Legend';
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
            Cartographier l'information <span className="text-primary">stratégique</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Révéler les connexions invisibles entre les sources d'information.
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
          <>
            <div className="bg-card border border-border rounded-lg shadow-sm p-4 mb-8">
              <GraphVisualization sources={sources} />
            </div>
            <Legend />
          </>
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
