import React from 'react';
import styles from '../../app/styles.module.css';

const Work: React.FC = () => {
    return (
        <section>
            <h3 style={{fontSize:'bold'}}>worked on</h3>

            <div className={styles.work}>
                <div className={styles.workItem}>
                    <div className={styles.workHeader}>
                        <div className={styles.workTitle}>
                            <h3>todo</h3>
                            <p>at, <a href="https://github.com/dishafaujdar/todo" target="_blank" rel="noopener noreferrer">todo ↗</a></p>
                        </div>
                        <div className={styles.workDate}>
                            <p>june, 2023 - mid-june</p>
                        </div>
                    </div>
                    <div className={styles.ul}>
                    <ul>
                        <li> Worked on building web application from scratch with Nodejs, Express, Javascript, MongoDB.</li>
                        <br/>
                        <li> This side project help me in Understanding : <br/>  • How database work, how it store users information <br /> • How JsonWebToken work, storing user info and fetching <br/>  • Auth0 working, about the hooks  
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className={styles.work}>
            <div className={styles.workItem}>
                <div className={styles.workHeader}>
                    <div className={styles.workTitle}>
                        <h3>drug.remainder</h3>
                        <p>at, <a href="https://github.com/dishafaujdar/drugs" target="_blank" rel="noopener noreferrer">drugs.here ↗</a></p>
                    </div>
                    <div className={styles.workDate}>
                        <p>june, 2023 - present</p>
                    </div>
                </div>
                <div className={styles.ul}>
                    <ul>
                        <li> Worked on building web application from scratch with Python, Django, Angular, and some python libaray. </li>
                        <br/>
                        <li> This side project help me in Understanding : <br/>  • How database work, how it store users information <br /> • How JsonWebToken work, storing user info and fetching <br/>  
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </section>

    );
}

export default Work;
