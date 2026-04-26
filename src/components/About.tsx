"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, Instagram, Linkedin, Github, Twitter, Ghost } from 'lucide-react';
import styles from './About.module.css';

const GithubIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <img
    src="/assets/common/social-icons/github.svg"
    width={size * 1.4}
    height={size * 1.4}
    alt="GitHub"
    className={className}
    style={{ display: 'block', transform: 'scale(1.1)' }}
  />
);

const techStackRow1 = [
  { name: "AWS", category: "Cloud", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  { name: "Docker", category: "DevOps", icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
  { name: "Kubernetes", category: "Orchestration", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
  { name: "Jenkins", category: "CI/CD", icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
  { name: "Nginx", category: "Web Server", icon: "https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg" },
  { name: "GitHub", category: "Platform", icon: "/assets/common/social-icons/github.svg" },
  { name: "Git", category: "Tools", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Linux", category: "OS", icon: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg" }
];

const techStackRow2 = [
  { name: "Python", category: "Language", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
  { name: "TypeScript", category: "Language", icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
  { name: "JavaScript", category: "Language", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
  { name: "PostgreSQL", category: "Database", icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
  { name: "Redis", category: "Database", icon: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg" },
  { name: "SQL", category: "Database", icon: "https://www.svgrepo.com/show/331760/sql-database-generic.svg" },
  { name: "Go", category: "Language", icon: "https://www.vectorlogo.zone/logos/golang/golang-icon.svg" },
  { name: "Java", category: "Language", icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
  // { name: "PyQt6", category: "UI Framework", icon: "https://raw.githubusercontent.com/isaac-parker/python-pyqt6-template/main/icon.png" }
];

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
              Hi, I'm <strong>Nirjar</strong>, an <strong>Associate Cloud Engineer</strong>, living in <strong>Ahmedabad.</strong> Into cloud Infrastructure and security. How systems are put together, what holds, what doesn't.
            </p>

            <p
              className={styles.paragraph}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              I've been drawn to what's behind the screen since I was a kid. That eventually turned into a career. These days I'd rather know a few things properly than a lot of things barely.
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
                href="/assets/docs/resume.pdf"
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
                  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/nirjar_goswami/" },
                  { name: "X (Twitter)", icon: Twitter, href: "https://x.com/nirjxrgoswami" },
                  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/nirjxr" },
                  { name: "Snapchat", icon: Ghost, href: "https://www.snapchat.com/@nirjxr26" },
                  { name: "GitHub", icon: GithubIcon, href: "https://github.com/nirjxr26/" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={`Follow Nirjar Goswami on ${social.name}`}
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

          <div className={styles.techStackWrapper} data-aos="fade-up" data-aos-delay="600">
            <div className={styles.marqueeContainer}>
              {[...techStackRow1, ...techStackRow1].map((tech, index) => (
                <div key={index} className={styles.techCard}>
                  <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
                  <div className={styles.techInfo}>
                    <span className={styles.techName}>{tech.name}</span>
                    <span className={styles.techCategory}>{tech.category}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.marqueeContainerRev}>
              {[...techStackRow2, ...techStackRow2].map((tech, index) => (
                <div key={index} className={styles.techCard}>
                  <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
                  <div className={styles.techInfo}>
                    <span className={styles.techName}>{tech.name}</span>
                    <span className={styles.techCategory}>{tech.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


