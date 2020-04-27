import React from 'react';
import styles from './Home.module.css';

function Section() {
  return (
    <section className={styles.info}>
      <ul>
        <Nameletter c_name="" p_text="JESÚS" />
        <Nameletter c_name={styles.david} p_text="DAVID" />
      </ul>
      <ul>
        <Nameletter c_name={styles.last1} p_text="CARABALLO" />
      </ul>
      <ul>
        <Nameletter c_name={styles.last2} p_text="LUNA" />
      </ul>
    </section>
  );
}
function Nameletter(props) {
  return (
    <li className={props.c_name}>
      <p>{props.p_text}</p>
    </li>
  );
}

function Aside() {
  return (
    <aside className={styles.info1}>
      <img className={styles.pequeña} src={process.env.PUBLIC_URL + "./images/Yisusc.png"} alt="lutherking" />
    </aside>
  );
}

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <Section />
        <Aside />
      </div>
      <div className={styles.second}>
        <Nameletter c_name={styles.line2} p_text="System Engineering Student" />
      </div>
    </div>
  );
}

export default Home;