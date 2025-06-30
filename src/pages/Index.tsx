
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroAnimation from '../components/IntroAnimation';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Masquer l'animation après 3 secondes et rediriger
    const timer = setTimeout(() => {
      setShowIntro(false);
      // Rediriger automatiquement vers la page des sources après l'animation
      setTimeout(() => {
        navigate('/sources');
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
              
              <div className="animate-fade-in">
                <button
                  onClick={() => navigate('/sources')}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-mono font-semibold hover:bg-primary/90 transition-colors"
                >
                  Explorer les sources
                </button>
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
