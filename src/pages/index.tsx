import { useState } from 'react';
import Nav from './Navbar/page';
import About from './About/page';
import Work from './work/page';
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
