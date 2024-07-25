import React from 'react';
import styles from '../pages/styles.module.css';
// import photo from '../../../public/image/disha.jpg'

interface ProfileSection {
    photo: string,
    name: string,
    intro: string,
    pronoun:string,
    description: React.ReactNode,
    age: number,
}

const ProfileTemp : React.FC<ProfileSection> = ({photo,name,intro,description,age,pronoun}) => {

    return (
        <section className={styles.about}>
            <div className={styles.profileAndIntro}>
                <div className={styles.profilePicContainer}>
                    <img src= {photo} alt="Profile Picture" className={styles.profilePic}  />
                </div>
                <div className={styles.aboutPhoto}>
                    <div className={styles.aboutText}>
                        <h2>👋 {name}</h2>
                        <p>{intro} <br /> {age} {pronoun}</p>
                    </div>
                </div>
            </div>
            <div className={styles.aboutText}>
                <h3>about me</h3>
                <p>{description}</p>
                <p style={{fontSize:'medium'}}> available <span style={{ color: '#3CB41B' }}> ● </span></p>
            </div>
        </section>
    );
}

export default ProfileTemp;



// import React from 'react';
// // import styles from '../styles.module.css';
// import ProfileTemp from '../../Template/About'

// const About: React.FC = () => {

//     return (
//         <ProfileTemp
//         photo='/image/disha.jpg'
//         name="disha"
//         intro="software engineer."
//         age= {20}
//         pronoun= ",she/her"
//         description={
//                 <>
//                     <p>im gonna code till sam altman launches agi.</p>
//                 </>
//             }>

//         </ProfileTemp>
//     );
// }

// export default About;
