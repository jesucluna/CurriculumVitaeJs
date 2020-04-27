import React from 'react';
import styles from './Edu-Expe.module.css';

function Firstsection() {
   return (
      <section className={styles.info1}>
         <div className={styles.btn1}>
            <h2 className={styles.title}>Experience</h2>
         </div>
         <div className={styles.descrip}>
            <p>
               <br />
               <b>Company name: </b>Institución Educativa Hermano Antonio Ramos De La Salle<br />
               <b>Position: </b>Missionary and animator <br />
               <b>March 2014 - December 2014</b>
            </p>
         </div>
      </section>
   );
}


function Secondsection() {
   return (
      <section className={styles.mine}>
         <div>
            <p>
               <b>Company name: </b>Institución Educativa Hermano Antonio Ramos De La Salle<br />
               <b>Position: </b>Painter and support of school furniture <br />
               <b>June 2016 - October 2016 </b>
            </p>
         </div>
      </section>
   );
}
function Social() {
   return (
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
         <Secondsection />
         <Social />
      </aside>
   );
}

const Experience = () => {
   return (
      <div className={styles.container}>
         <Firstsection />
         <Aside />
      </div>
   );
}

export default Experience;