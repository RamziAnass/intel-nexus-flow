
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroAnimation from '../components/IntroAnimation';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    // Redirect authenticated users to sources page
    if (user && !loading) {
      navigate('/sources');
      return;
    }

    // Masquer l'animation après 3 secondes
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-xl">N</span>
          </div>
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {showIntro && <IntroAnimation />}
      
      {!showIntro && (
        <>
          <Header />
          
          <main className="flex-1 container py-8 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mono tracking-tight">
                Surveillance intelligente des <span className="text-primary">sources</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Découvrir et analyser les sources d'information stratégiques.
              </p>
              
              <div className="animate-fade-in space-y-4">
                <div className="space-x-4">
                  <Button
                    onClick={() => navigate('/auth')}
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-mono font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Se connecter
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/auth')}
                    className="px-8 py-4 rounded-lg font-mono font-semibold transition-colors"
                  >
                    S'inscrire
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Connectez-vous pour explorer les sources d'information
                </p>
              </div>
            </div>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
