"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Blog.module.css';

const blogPosts = [
  {
    id: 1,
    tag: "CI/CD OBSERVABILITY",
    readTime: "4 MIN READ",
    badgeTitle: "Blind Spots",
    badgeDesc: "CI/CD visibility",
    title: "Building a CI/CD Tool Exposed My Deployment Blind Spots",
    description: "I built a CI/CD tool and uncovered a bigger issue: I couldn’t tell what was actually deployed—and neither could my pipeline security.",
    date: "Apr 2026",
    footer: "3 takeaways",
    gradientClass: styles.gradientBlue,
    articleUrl: "https://blog.nirjar.me/ci-cd-blind-spots"
  },
  {
    id: 2,
    tag: "System Design",
    readTime: "2 MIN READ",
    badgeTitle: "Logo Fetching",
    badgeDesc: "Reliable, secure icon delivery",
    title: "How VaultLock Reliably Fetches Brand Logos",
    description: "Turning messy inputs like “GitHub” or “facebook.com” into consistent, validated icons using backend without exposing the UI to fetching or security risks.",
    date: "Apr 2026",
    footer: "4 takeaways",
    gradientClass: styles.gradientViolet,
    articleUrl: "https://blog.nirjar.me/vaultlock-logo-fetching"
  }
];

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="blog" className={styles.blogSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionHeader}>Engineering Notes</h2>
          <p className={styles.sectionSubtitle}>Articles on what I’ve experienced.</p>
        </div>

        <motion.div
          className={styles.blogGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className={styles.blogCard}
              variants={itemVariants}
            >
              <div className={`${styles.cardHeader} ${post.gradientClass}`}>
                <div className={styles.tagGroup}>
                  <span className={styles.tag}>{post.tag}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>

                <div className={styles.badgeBox}>
                  <div className={styles.badgeTitle}>{post.badgeTitle}</div>
                  <div className={styles.badgeDesc}>{post.badgeDesc}</div>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardDescription}>{post.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.footerInfo}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.takeaways}>{post.footer}</span>
                  </div>
                  <a
                    className={styles.readButton}
                    href={post.articleUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read article
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
