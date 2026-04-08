"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, Instagram, Linkedin, Github, Twitter, Ghost } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.96, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const leftItemVariants: Variants = {
    hidden: { opacity: 0, x: -20, scale: 0.96, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div 
        className={styles.sectionSeparator}
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 80, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="container">
        <motion.div
          className={styles.aboutContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className={styles.sectionIndicator}>
            <motion.span
              className={styles.indicatorText}
              variants={itemVariants}
            >
              About
            </motion.span>
            <motion.div
              className={styles.indicatorLine}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className={styles.textContainer}>
            <motion.p className={styles.paragraph} variants={itemVariants}>
              Hi, I'm <strong>Nirjar</strong>, an <strong>Associate Cloud Engineer </strong>residing in <strong>Ahmedabad, Gujarat</strong>. I work in cloud and security — mostly the infrastructure side, understanding how systems are actually put together and what can go wrong.
            </motion.p>

            <motion.p className={styles.paragraph} variants={itemVariants}>
              The interest started early. I was always more curious about what was happening behind the screen than what was on it. Networks, systems, the cloud — I wanted to know how things actually run, not just that they do. That eventually turned into something I take seriously.
              These days I'm trying to get good at a few specific things rather than knowing a bit about everything.
            </motion.p>

            <motion.p className={styles.paragraph} variants={itemVariants}>
              Outside of work, I’m gaming or discovering new places to eat.
            </motion.p>

            <div className={styles.actionsContainer}>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadBtn}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                download="Nirjar_Goswami_Resume.pdf"
              >
                <Download size={18} />
                Download CV
              </motion.a>

              <div className={styles.socialRow}>
                {[
                  { icon: Instagram, href: "https://www.instagram.com/nirjar_goswami/" },
                  { icon: Twitter, href: "https://x.com/nirjxrgoswami" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/nirjarbharthi-goswami-b593633a7" },
                  { icon: Ghost, href: "https://www.snapchat.com/@nirjxr26" },
                  { icon: Github, href: "https://github.com/Nirjar26/" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    variants={leftItemVariants}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


