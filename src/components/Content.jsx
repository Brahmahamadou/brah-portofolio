import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Resume from './Resume'; 

function Content({ activeItem }) {

  const renderContent = () => {
    switch (activeItem) {
      case 'home':
        return <Home />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <About />;
      case 'contacter':
        return <Service />;
      case 'bloging':
        return <Contact />;
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <div className="content">
      {renderContent()}
      <Footer className="footer" />
    </div>
  );
}


export default Content;
