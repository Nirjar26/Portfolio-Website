"use client";

import React from 'react';
import styles from './Hero.module.css';

const Hero = () => (
  <section id="hero" className={styles.heroSection}>
    <div className="container" style={{ perspective: 1200 }}>
      <div className={styles.heroContent}>
        <div className={styles.headline}>
          <div className={styles.row}>
            <span className={styles.heroWord} style={{ animationDelay: '0s' }}>Architecture.</span>
            <span className={styles.heroWord} style={{ animationDelay: '0.15s' }}>Logic.</span>
          </div>
          <div className={styles.row}>
            <span className={styles.heroWord} style={{ animationDelay: '0.30s' }}>Security.</span>
            <span className={styles.heroWord} style={{ animationDelay: '0.45s' }}>Scale.</span>
          </div>
        </div>

        <div className={`${styles.infoGroup} ${styles.heroSubtitle}`} style={{ animationDelay: '0.70s' }}>
          <h1 className={styles.intro}>Nirjar Goswami</h1>
          <span className={styles.role}>Associate Cloud Engineer</span>
        </div>

        <div className={styles.verticalLine}></div>
      </div>
    </div>
  </section>
);

export default Hero;
