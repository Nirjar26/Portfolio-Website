"use client";

import styles from './Gists.module.css';

const gistPosts = [
  {
    id: 1,
    tag: "SECURITY",
    date: "APRIL 16, 2026",
    title: "AegisMesh - Core Fixes",
    description: "Real IAM fixes covering RBAC conflicts, reauthentication, session control, and audit logging.",
    articleUrl: "https://gist.github.com/nirjxr26/db51dfe1093fed690f6372116483bc9a",
    gradientClass: styles.gradientAegis
  },
  {
    id: 2,
    tag: "API",
    date: "APRIL 16, 2026",
    title: "VaultLock Logo Fetching",
    description: "Securing brand assets by validating messy inputs into consistent icons without exposing the UI to fetch risks.",
    articleUrl: "https://gist.github.com/nirjxr26/c17a2a37c02277d12829c7e18ab4e319",
    gradientClass: styles.gradientIndigo
  }
];

const Gists = () => {
  return (
    <section id="gists" className={styles.gistsSection} data-aos="fade-up">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionHeader} data-aos="fade-up" data-aos-duration="600">Gists</h2>
          <p className={styles.sectionSubtitle} data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
            Documents on what i’ve faced and solved with code snippets.
          </p>
        </div>

        <div className={styles.gistsGrid}>
          {gistPosts.map((post, index) => (
            <div
              key={post.id}
              className={styles.gistCard}
              data-aos="fade-up"
              data-aos-delay={(index * 100) + 100}
              data-aos-duration="600"
            >
              <div className={`${styles.cardBanner} ${post.gradientClass}`}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardDescription}>{post.description}</p>

                <div className={styles.metaRow}>
                  <span className={styles.date}>{post.date}</span>
                </div>

                <div className={styles.cardFooter}>
                  <a
                    className={styles.readButton}
                    href={post.articleUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Read document: ${post.title}`}
                  >
                    Read Document
                  </a>
                </div>

                  <div className={styles.blendedLogo}>
                    <img src="/assets/icons/tech/gitbook.svg" alt="GitBook documentation platform" />
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gists;
