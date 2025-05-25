
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import ERAIntroAnimation from "../components/ERAIntroAnimation";
import IntelligentSearch from "../components/IntelligentSearch";
import NetworkGraph from "../components/NetworkGraph";
import ThemeExplorer from "../components/ThemeExplorer";
import { enrichedSources, EnrichedSource } from "../data/enrichedSources";
import { ArrowRight, Globe, Shield, Target, Users, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'search' | 'theme'>('home');
  const [searchResults, setSearchResults] = useState<EnrichedSource[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [themeKeyword, setThemeKeyword] = useState<string>('');

  if (showIntro) {
    return <ERAIntroAnimation onComplete={() => setShowIntro(false)} />;
  }

  const handleSearch = (keyword: string) => {
    const results = enrichedSources.filter(source =>
      source.tags.some(tag => 
        tag.toLowerCase().includes(keyword.toLowerCase())
      ) ||
      source.title.toLowerCase().includes(keyword.toLowerCase()) ||
      source.description.toLowerCase().includes(keyword.toLowerCase()) ||
      source.country.toLowerCase().includes(keyword.toLowerCase())
    );
    
    setSearchResults(results);
    setSearchKeyword(keyword);
    setCurrentView('search');
  };

  const handleThemeExploration = (theme: string) => {
    setThemeKeyword(theme);
    setCurrentView('theme');
  };

  const handleSourceSelection = (sources: EnrichedSource[]) => {
    setSearchResults(sources);
    setSearchKeyword(`Cluster: ${themeKeyword}`);
    setCurrentView('search');
  };

  const resetToHome = () => {
    setCurrentView('home');
    setSearchResults([]);
    setSearchKeyword('');
    setThemeKeyword('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-background via-background to-muted/20">
              <div className="container max-w-6xl mx-auto text-center">
                <div className="flex justify-center mb-8">
                  <ThemeToggle />
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
                  <h1 className="relative text-5xl md:text-7xl font-bold mb-6 font-mono tracking-tight">
                    <span className="text-primary">ERA</span>
                    <span className="text-muted-foreground mx-4">•</span>
                    <span className="text-accent-foreground">Sourcing</span>
                  </h1>
                </div>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                  Intelligence stratégique et cartographie des sources d'information
                </p>
                
                <div className="mb-12">
                  <IntelligentSearch 
                    onSearch={handleSearch}
                    onThemeExploration={handleThemeExploration}
                  />
                </div>

                {/* Mission Statement */}
                <div className="bg-card border border-border rounded-lg p-8 mb-16 max-w-4xl mx-auto">
                  <h2 className="text-2xl font-bold font-mono mb-4">Notre Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    ERA Sourcing révolutionne l'analyse stratégique en cartographiant intelligemment 
                    l'écosystème mondial des sources d'information. Notre plateforme transforme 
                    la recherche en renseignement actionnable à travers une interface immersive 
                    inspirée des centres d'analyse géopolitique.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <Card className="group hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <Shield className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-semibold font-mono mb-2">Intelligence Stratégique</h3>
                      <p className="text-muted-foreground text-sm">
                        Analyse approfondie et veille géopolitique mondiale
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="group hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <Brain className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-semibold font-mono mb-2">Cartographie Interactive</h3>
                      <p className="text-muted-foreground text-sm">
                        Visualisation en graphe des réseaux d'information
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="group hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <Globe className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-semibold font-mono mb-2">Couverture Mondiale</h3>
                      <p className="text-muted-foreground text-sm">
                        Sources couvrant toutes les régions stratégiques
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="group hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-semibold font-mono mb-2">Collaboration</h3>
                      <p className="text-muted-foreground text-sm">
                        Plateforme pour analystes et chercheurs
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="font-mono" onClick={() => handleSearch('géopolitique')}>
                    <Target className="w-5 h-5 mr-2" />
                    Analyser la Géopolitique
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="font-mono" onClick={() => handleThemeExploration('cybersécurité')}>
                    <Zap className="w-5 h-5 mr-2" />
                    Explorer la Cybersécurité
                  </Button>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 bg-muted/20">
              <div className="container max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold font-mono text-primary mb-2">
                      {enrichedSources.length}+
                    </div>
                    <div className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                      Sources Cartographiées
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-3xl md:text-4xl font-bold font-mono text-primary mb-2">
                      150+
                    </div>
                    <div className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                      Pays Analysés
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-3xl md:text-4xl font-bold font-mono text-primary mb-2">
                      7
                    </div>
                    <div className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                      Régions Mondiales
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-3xl md:text-4xl font-bold font-mono text-primary mb-2">
                      50+
                    </div>
                    <div className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                      Domaines Thématiques
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {currentView === 'search' && (
          <section className="py-8 px-4 min-h-screen">
            <div className="container max-w-7xl mx-auto">
              <div className="mb-6">
                <Button 
                  variant="outline" 
                  onClick={resetToHome}
                  className="mb-4 font-mono"
                >
                  ← Retour à l'accueil
                </Button>
                <h1 className="text-3xl font-bold font-mono mb-2">
                  Résultats de l'analyse : <span className="text-primary">{searchKeyword}</span>
                </h1>
                <p className="text-muted-foreground">
                  {searchResults.length} source{searchResults.length !== 1 ? 's' : ''} identifiée{searchResults.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="h-[600px]">
                <NetworkGraph 
                  sources={searchResults} 
                  searchKeyword={searchKeyword}
                />
              </div>
            </div>
          </section>
        )}

        {currentView === 'theme' && (
          <section className="py-8 px-4 min-h-screen">
            <div className="container max-w-6xl mx-auto">
              <Button 
                variant="outline" 
                onClick={resetToHome}
                className="mb-6 font-mono"
              >
                ← Retour à l'accueil
              </Button>
              
              <ThemeExplorer 
                theme={themeKeyword}
                onSourceSelect={handleSourceSelection}
              />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
