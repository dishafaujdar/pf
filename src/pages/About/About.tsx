import React from 'react';
import styles from '../../app/styles.module.css';
import Image from 'next/image'
import photo from '../../../public/image/disha2.png'
import bug from '../../../public/image/lady-bug.png'

const About: React.FC = () => {

    return (
        <section className={styles.about}>
            <div className={styles.profileAndIntro}>
                <div className={styles.profilePicContainer}>
                    <Image src= {photo} alt="Profile Picture" className={styles.profilePic}  />
                </div>
                <div className={styles.aboutPhoto}>
                    <div className={styles.aboutText}>
                        <h2>👋 hi, i am disha</h2>
                        <p>software engineer.<br />20, she/her</p>
                    </div>
                </div>
            </div>
            <div className={styles.aboutText}>
                <h3>about me</h3>
                <p style={{fontSize:'medium'}}> figuring bugs out <Image src={bug} alt="bug" className={styles.bugpf} ></Image> <br/> 
                available <span style={{ color: '#3CB41B' }}> ● </span> </p>
            </div>
        </section>
    );
}
    
export default About;

