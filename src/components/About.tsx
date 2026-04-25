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
    <section id="about" className={styles.aboutSection} data-aos="fade-up">
      <motion.div
        className={styles.sectionSeparator}
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 80, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="container">
        <div className={styles.aboutContainer}>
          <div className={styles.sectionIndicator}>
            <h2
              className={styles.indicatorText}
              data-aos="fade-up"
              data-aos-duration="700"
            >
              About Me
            </h2>
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
            <p
              className={styles.paragraph}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
            >
              Hi, I'm <strong>Nirjar</strong>, an <strong>Associate Cloud Engineer</strong>, living in <strong>Ahemdabad.</strong> I work on cloud infrastructure and security, mostly the infrastructure side: understanding how systems are actually put together and what can go wrong.
            </p>

            <p
              className={styles.paragraph}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              The interest started early. I was always more curious about what was happening behind the screen than what was on it. Networks, systems, the cloud. Somewhere along the way that turned into a career direction. These days I'm trying to get good at a few specific things rather than knowing a bit about everything.
            </p>

            <p
              className={styles.paragraph}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="700"
            >
              Outside of work, I’m gaming or discovering new places to eat.
            </p>

            <div className={styles.actionsContainer}>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                download="Nirjar_Goswami_Resume.pdf"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="700"
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
                    rel="noopener noreferrer me"
                    aria-label={`Follow Nirjar Goswami on ${social.name || social.icon.name || 'Social Media'}`}
                    className={styles.socialLink}
                    whileTap={{ scale: 0.9 }}
                    data-aos="fade-up"
                    data-aos-delay={500 + index * 100}
                    data-aos-duration="700"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


