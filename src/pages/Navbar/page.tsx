import React, { useState } from 'react';
import Link from 'next/link';
import Contact from '../Contact'; 
import styles from '../../app/styles.module.css';

const Nav: React.FC = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    
    return (
        <>
        <nav className={styles.nav}>
        <div className={styles.navFlag} role="imgage" aria-label="India flag">🇮🇳</div>
        <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <button><Link href="/"><span className={styles.navLink}> • home</span></Link></button>
                </li>
                <li className={styles.navItem}>
                    <button><Link href="/resume.pdf" target="_blank" rel="noopener noreferrer"><span className={styles.navLink}> • resume</span></Link></button>
                </li>
                <li className={styles.navItem}>
                    <button className={styles.navLink} onClick={handleSidebarToggle}>• contact</button>
                </li>
            </ul>
        </nav>
        <Contact isopen={isSidebarOpen} onClose={handleSidebarToggle} />
        </>
    );  
}
export default Nav;
