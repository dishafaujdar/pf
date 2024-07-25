import React from 'react';
import styles from './navv.module.css';
import {InstagramSVG, XSVG,
  EmailSVG,
  GithubSVG,
  GoogleSVG,
  DownloadSVG,
  LinkedinSVG,} from '../components/icons/index';

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
        <li><a href="https://www.instagram.com/maidishahoon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        {/* <li><a href="https://drive.google.com/file/d/1VWdWDAm2sAtbH0DYTOSR2YFmaFt6DemA/view?usp=sharing" target="_blank" rel="noopener noreferrer external">Resume</a></li> */}

      </ul>
    </div>
  );
};
export default Contact;

