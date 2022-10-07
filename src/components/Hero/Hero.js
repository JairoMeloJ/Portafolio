import { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import hero from '../../assets/hero8.svg';
import styles from './Hero.module.css';
import { constants } from '../../utils/constants';
import useIsInViewport from '../../utils/hooks/useIsInViewport';

function Hero() {
  const titleRef = useRef();
  const isInViewport = useIsInViewport(titleRef);
  const [activeNav, setActiveNav] = useState(false);
  useEffect(() => {
    function handleScroll() {
      window.scrollY > 100 ? setActiveNav(true) : setActiveNav(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      className={
        activeNav ? `${styles.hero} ${styles.heroActive}` : styles.hero
      }
      id="home"
      ref={titleRef}
    >
      {/*       <div className={styles.boxP}>ss</div>
      <div className={styles.boxS}>f</div> */}
      {/*       <div className="container f_flex top">
       */}{' '}
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h3
            className={isInViewport ? 'useSlideInLeft' : 'useSlideInLeftEnter'}
          >
            ¡HOLA MUNDO!
          </h3>
          <h1>
            Hi, I&#39;m <span>Antonio Ayola</span>
          </h1>

          <h2>
            a
            <Typewriter
              words={[
                ' Profesional Coder',
                ' Frontend Developer',
                ' Software Developer',
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p>
            Con gran afición al mundo Tecnológico, tanto Frontend como Backend;
            persiguiendo nuevos retos y explorando continuamente las nuevas
            tendencias.
            {/* Experiencia en Creación, prototipado y desarrollo de
            productos digitales innovadores centrados en el usuario. */}
          </p>
          <div className={styles.socialSkills}>
            <div className={`col_1 ${isInViewport ? styles.slideIn : ''}`}>
              <h4>ENCUENTRAME AQUI</h4>
              <div className={styles.socialContainer}>
                <a
                  href={constants.profilesUrls.github}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Github Profile"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  href={constants.profilesUrls.linkedin}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Linkedin Profile"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href={constants.profilesUrls.facebook}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook Profile"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>
            <div className={`col_1 ${isInViewport ? styles.slideIn : ''}`}>
              <h4>APRENDIENDO</h4>
              <figure className={styles.skillBtn}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                />
              </figure>
              <figure className={styles.skillBtn}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="NodeJs"
                />
              </figure>
              <figure className={styles.skillBtn}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="Js"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.rightImg}>
            <img src={hero} alt="hero" className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
