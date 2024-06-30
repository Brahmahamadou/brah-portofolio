// Content.jsx
import React from 'react';
import Home from './Home'; // Importer vos composants nécessaires
import About from './About';
import Service from './Services';
import Contact from './Contact';
import Footer from './Footer'; // Importer le Footer

function Content({ activeItem }) {
  const renderContent = () => {
    switch (activeItem) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Service />;
      case 'contact':
        return <Contact />;
      default:
        return <div>Home Content</div>; // Contenu par défaut si aucun cas ne correspond
    }
  };

  return (
    <div className="content">
      {renderContent()}
      <Footer className="footer" /> {/* Ajouter le Footer */}
    </div>
  );
}

export default Content;
