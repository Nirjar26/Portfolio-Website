"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './TechStack.module.css';

const techIcons = [
  { name: "AWS", icon: "/assets/icons/tech/aws_logo.svg" },
  { name: "Docker", icon: "/assets/icons/tech/docker.svg" },
  { name: "Kubernetes", icon: "/assets/icons/tech/kubernetes.svg" },
  { name: "Jenkins", icon: "/assets/icons/tech/jenkins.svg" },
  { name: "Nginx", icon: "/assets/icons/tech/nginx.svg" },
  { name: "GitHub", icon: "/assets/icons/tech/github.svg", isLarger: true },
  { name: "Git", icon: "/assets/icons/tech/git.svg" },
  { name: "Linux", icon: "/assets/icons/tech/linux.svg" },
  { name: "Python", icon: "/assets/icons/tech/python.svg" },
  { name: "TypeScript", icon: "/assets/icons/tech/typescript.svg" },
  { name: "JavaScript", icon: "/assets/icons/tech/javascript.svg" },
  { name: "PostgreSQL", icon: "/assets/icons/tech/postgresql.svg" },
  { name: "SQL", icon: "/assets/icons/tech/mysql_logo.svg", isLarger: true },
  { name: "Go", icon: "/assets/icons/tech/go.svg" },
  { name: "Java", icon: "/assets/icons/tech/java.svg" },
  { name: "Grafana", icon: "/assets/icons/tech/grafana-svgrepo-com.svg" },
];

const TechStack = () => {
  return (
    <section className={styles.techStackSection} data-aos="fade-up">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.headerLabel} data-aos="fade-up" data-aos-duration="600">
            Tech Stack
          </h2>
          <p className={styles.headerSubtitle} data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
            Technologies, frameworks and tools I use to build applications.
          </p>
        </div>
        <div className={styles.centeredContainer}>
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className={styles.iconBox}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              whileHover={{
                scale: 1.15,
              }}
              title={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className={`${styles.iconImg} ${tech.isLarger ? styles.largerIcon : ''}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
