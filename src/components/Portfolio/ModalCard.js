import styles from './ModalCard.module.css';

function ModalCard({ project }) {
  const { category, title, image, desc, date, technologies, links } = project;
  // eslint-disable-next-line import/no-dynamic-require
  const img = require(`../../assets/portafolio/${image}`);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalImg}>
        <img src={img} alt="" />
      </div>
      <div className={styles.modalText}>
        <span>
          <i className="fas fa-calendar-alt" /> {date} - {category}
        </span>
        <h1>{title}</h1>
        <p>{desc}</p>
        <h4>Tecnologias - Herramientas Usadas- Features </h4>
        <p>{technologies.map((tech) => `• ${tech} | `)}</p>
        <div className={styles.modalActions}>
          <a
            className={styles.actionBtn}
            href={links.code}
            target="_blank"
            rel="noreferrer noopener"
          >
            VER CODIGO <i className="fab fa-github" />
          </a>
          <a
            className={styles.actionBtn}
            href={links.page}
            target="_blank"
            rel="noreferrer noopener"
          >
            VISITAR PROYECTO <i className="fas fa-chevron-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;