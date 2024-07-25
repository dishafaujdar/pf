import React from 'react';
import styles from './navv.module.css';

interface Sidebar{
  isopen:boolean,
  onClose: () => void;  
}

const Contact:React.FC<Sidebar>=({isopen,onClose})=> {

  return (
    <div className={`${styles.sidebar} ${isopen ? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      <ul className={styles.links}>
        <li><a href="https://twitter.com/dishafaujdar" target="_blank" rel="noopener noreferrer">X</a></li>
        <li><a href="https://www.linkedin.com/in/disha-faujdar-df1102/" target="_blank" rel="noopener noreferrer">Linkedin</a></li> 
        <li><a href="https://github.com/dishafaujdar" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </div>
  );
};
export default Contact;

