import React from 'react';
import styles from './About.module.css';

function Firstsection() {
    return (
        <section className={styles.info1}>
            <h2 className={styles.title}>About me</h2>
            <img className={styles.pequeña} src={process.env.PUBLIC_URL + "./images/Yisus.png"} alt="lutherking2" />
            <div className={styles.descrip}>
                <p>
                    Ability to work in a team, readiness for learning and new knowledge, I adapt quickly to the
                    type of work required.
                </p>
            </div>
        </section>
    );
}


function Secondsection() {
    return (
        <section className={styles.mine}>
            <div className={styles.skilltit}>
                <p>MY SKILLS</p>
            </div>
            <div className={styles.skills}>
                <ul>
                    <li>
                        <i className="fab fa-python"></i>
                        <p>Python</p>
                        <p>70%</p>
                    </li>
                    <li>
                        <i className="devicon-csharp-plain"></i>
                        <p>C#</p>
                        <p>  60%</p>
                    </li>
                    <li>
                        <i className="devicon-cplusplus-plain"></i>
                        <p>C++</p>
                        <p>  70%</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i className="fab fa-html5" ></i>
                        <p>HTML5</p>
                        <p>  80%</p>
                    </li>
                    <li>
                        <i className="fab fa-css3-alt"></i>
                        <p>CSS</p>
                        <p>  60%</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

function Social(){
    return(
        <aside className={styles.social}>
            <ul>
                    <li>
                        <div>
                            <a href="https://github.com/jesucluna"><i className="fab fa-github"></i></a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="mailto:jcaraballo@utb.edu.co"><i className="devicon-google-plain"></i></a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="https://twitter.com/explore"><i className="fab fa-twitter"></i></a>
                        </div>
                    </li>
                </ul>
        </aside>
    );  
}



function Aside() {
    return (
        <aside className={styles.info}>
            <Secondsection/>
            <Social/>
        </aside>
    );
}

const About = () => {
    return (
        <div className={styles.container}>
            <Firstsection />
            <Aside />
        </div>
    );
}

export default About;