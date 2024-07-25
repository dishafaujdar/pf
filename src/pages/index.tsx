import { useState } from 'react';
import Nav from './Navbar/Navbar';
import About from './About/About';
import Work from './work/Work';
import '../app/styles.global.css';

const Home:React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">    
    <Nav />
    <About/>
    <Work/>
    </div>
    );
};

export default Home;
