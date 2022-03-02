import React from 'react';
import Card from './Card';
import styles from './Features.module.css';
import data from './FeaturesData';

function Features() {
  return (
    <section className={styles.Features} id="features">
      <div className="container">
        <div className="heading">
          <h4>Features</h4>
          <h1>What I Do</h1>
        </div>
        <div className={styles.contentGrid}>
          {data.map((feature, index) => (
            <Card
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
