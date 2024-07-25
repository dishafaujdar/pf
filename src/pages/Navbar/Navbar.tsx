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
                {/* <div className={styles.navFlag} role="img" aria-label="India flag">🇮🇳</div> */}

                <li className={styles.navItem}>
                    <button><Link href="/"><span className={styles.navLink}> • home</span></Link></button>
                </li>
                {/* <li className={styles.navItem}>
                    <Link href="/crafts"><span className={styles.navLink}> • crafts ✨ </span></Link>
                </li> */}
                {/* <li className={styles.navItem}>
                    <Link href="/books"><span className={styles.navLink}> • books </span></Link>
                </li> */}
                {/* <li className={styles.navItem}>
                    <Link href="/journey"><span className={styles.navLink}> • journey </span></Link>
                </li> */}

                <li className={styles.navItem}>
                    <button><Link href="/resume.pdf" target="_blank" rel="noopener noreferrer"><span className={styles.navLink}> • resume</span></Link></button>
                </li>

                {/* <li className={styles.navItem}>
                    <Link href="/contact" onClick={handleSidebarToggle}><span className={styles.navLink}> • contact </span></Link>
                </li> */}
                
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



// import React from 'react';
// import Link from 'next/link';

// const Nav: React.FC = () => {
//     return (
//         <nav style={{ padding: '10px', textAlign: 'right', listStyleType: 'none' }}>
//             <ul style={{ padding: '0', margin: '0', display: 'flex', justifyContent: 'right' }}>
//                 <li style={{ margin: '0 10px' }}>
//                     <Link href="/"><span style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}> Home</span></Link>
//                 </li>
//                 <li style={{ margin: '0 10px' }}>
//                     <Link href="/crafts"><span style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}> Crafts ✨</span></Link>
//                 </li>
//                 <li style={{ margin: '0 10px' }}>
//                     <Link href="/books"><span style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}> Books</span></Link>
//                 </li>
//                 <li style={{ margin: '0 10px' }}>
//                     <Link href="/journey"><span style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}> Journey</span></Link>
//                 </li>
//                 <li style={{ margin: '0 10px' }}>
//                     <Link href="/resume"><span style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}> Resume</span></Link>
//                 </li>
//                 <li style={{ margin: '0 10px' }}>
//                     <Link href="/contact"><span style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}> Contact</span></Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Nav;