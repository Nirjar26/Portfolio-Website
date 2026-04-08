"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.96,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] // Apple-style ease-out
      }
    }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className="container" style={{ perspective: 1200 }}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className={styles.headline}>
            <div className={styles.row}>
              <motion.span variants={itemVariants}>Architecture.</motion.span>
              <motion.span variants={itemVariants}>Logic.</motion.span>
            </div>
            <div className={styles.row}>
              <motion.span variants={itemVariants}>Security.</motion.span>
              <motion.span variants={itemVariants}>Scale.</motion.span>
            </div>
          </div>
          
          <motion.div 
            className={styles.infoGroup}
            variants={itemVariants}
          >
            <span className={styles.intro}>Hello! I am Nirjar Goswami</span>
            <span className={styles.role}>Associate Cloud Engineer</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
