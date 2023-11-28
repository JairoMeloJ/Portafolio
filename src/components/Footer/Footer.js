import { useState, lazy, Suspense } from 'react';
import logo1 from '../../assets/logo_fondo_blanco_1.webp';
import line from '../../assets/llline.svg';

import styles from './Footer.module.css';
import scrollTop from '../../utils/helpers/scrollTop';

import Modal from '../Modal/Modal';
import Loader from '../Loader';

const AboutMe = lazy(() => import('../AboutMe/AboutMe'));

const Footer = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContent}
      >
        <Suspense fallback={<Loader />}>
          <AboutMe />
        </Suspense>
      </Modal>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className="img">
            <img
              width="300px"
              height="300px"
              src={logo1}
              className={styles.logoImg}
              alt=""
            />
          </div>
          <p>
            {' '}
            💻 - Construido por{' '}
            <button type="button" className={styles.userBtn}>
              @jairogabriel_{' '}
            </button>{' '}
            con 🖤 en 2023
          </p>
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />

          <button
            title="Regresar arriba"
            name="Regresar arriba"
            type="button"
            className={styles.floatBtn}
            onClick={scrollTop}
          >
            <i className="fas fa-angle-double-up" />
          </button>
        </div>
        <p className={styles.visitas}>
          Num. Visitas
          <img
            width="200px"
            height="100px"
            src="https://counter8.optistats.ovh/private/contadorvisitasgratis.php?c=24xcarhazjgz7ecrgkxqfgzc5w9g7xx2"
            border="0"
            title="contador de visitas"
            alt="contador de visitas"
          />
        </p>
      </footer>
    </>
  );
};

export default Footer;
