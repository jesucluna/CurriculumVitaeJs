import React from 'react';
import styles from './Edu-Expe.module.css';

function Firstsection() {
   return (
      <section className={styles.info1}>
         <div className={styles.btn1}>
            <h2 className={styles.title}>Education</h2>
         </div>
         <div className={styles.descrip}>
            <p>
               <br />
               <b>Type: </b>School<br />
               <b>Title: </b>High School student <br />
               <b>Institution: </b> Institución Educativa Hermano Antonio Ramos De La Salle
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
               <b>Type: </b>College<br />
               <b>Title: </b>System Engineering <br /> ( forming - 6th semester) <br />
               <b>Institution: </b>Universidad Tecnologíca de Bolívar
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

const Education = () => {
   return (
      <div className={styles.container}>
         <Firstsection />
         <Aside />
      </div>
   );
}

export default Education;