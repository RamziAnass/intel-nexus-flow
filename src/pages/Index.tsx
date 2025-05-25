
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import ERAIntroAnimation from "../components/ERAIntroAnimation";
import GraphVisualization from "../components/GraphVisualization";
import Legend from "../components/Legend";
import { enrichedSources } from "../data/enrichedSources";
import { ArrowRight, Globe, Shield, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  // Convert enriched sources to legacy format for compatibility
  const legacySources = enrichedSources.map(source => ({
    id: source.id,
    title: source.title,
    url: source.url,
    description: source.description,
    type: source.type as any,
    country: source.country,
    tags: source.tags,
    ideology: source.ideology
  }));

  if (showIntro) {
    return <ERAIntroAnimation />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <ThemeToggle />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono tracking-tight">
              <span className="text-primary">ERA</span>
              <span className="text-muted-foreground mx-3">•</span>
              <span className="text-accent-foreground">Sourcing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Enhanced Research & Analysis Platform pour l'intelligence stratégique et la veille géopolitique
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="font-mono">
                <Globe className="w-5 h-5 mr-2" />
                Explorer les Sources
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="font-mono">
                <Target className="w-5 h-5 mr-2" />
                Cartographie Interactive
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card border border-border rounded-lg p-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold font-mono mb-2">Intelligence Stratégique</h3>
                <p className="text-muted-foreground text-sm">
                  Analyse approfondie des sources de renseignement et veille géopolitique
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold font-mono mb-2">Couverture Mondiale</h3>
                <p className="text-muted-foreground text-sm">
                  Réseau de sources couvrant toutes les régions stratégiques du globe
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold font-mono mb-2">Collaboration</h3>
                <p className="text-muted-foreground text-sm">
                  Plateforme collaborative pour les analystes et chercheurs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Network Visualization Section */}
        <section className="py-16 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono tracking-tight">
                Cartographie des <span className="text-primary">Sources</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Visualisation interactive du réseau mondial de sources d'information stratégique
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-6">
                <GraphVisualization sources={legacySources} />
              </div>
              <Legend />
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
                  Sources Analysées
                </div>
              </div>
              
              <div>
                <div className="text-3xl md:text-4xl font-bold font-mono text-primary mb-2">
                  150+
                </div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                  Pays Couverts
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
                  Tags Thématiques
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
