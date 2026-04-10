"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Github, Shield, Rocket, Lock, Layers, X, Cpu, Globe, Database, Cog } from 'lucide-react';
import styles from './Works.module.css';

interface TechStack {
  category: string;
  items: string[];
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  securityPills: string[];
  links: {
    github?: string;
    live?: string;
  };
  icon: React.ReactNode;
  techStack: TechStack[];
  badge?: string;
}

const projects: Project[] = [
  {
    title: "AegisMesh",
    subtitle: "Identity Infrastructure & IAM",
    description: "Most teams end up with auth in one tool, permissions in another, and audit logs somewhere nobody checks. AegisMesh consolidates all of it, its a platform built around a single admin console — MFA, OAuth, session control, RBAC, and audit logs in one place. Which makes access control something you can actually reason about at scale.",
    features: [
      "Token-Based Auth", "TOTP MFA", "Federated Identity", "Enterprise RBAC"
    ],
    securityPills: ["CI pipeline", "CodeQL Advance", "Dependabot"],
    links: { github: "https://github.com/Nirjar26/AegisMesh-IAM", live: "#" },
    icon: <Shield size={24} />,
    techStack: [
      { category: "Frontend", items: ["React 19", "Vite", "Tailwind CSS 4", "React Router DOM v7", "TanStack React Query", "React Hook Form", "Zod", "Axios", "Recharts", "Lucide Icons", "react-hot-toast"] },
      { category: "Backend", items: ["Node.js Runtime", "Express.js", "JWT Auth", "Passport.js OAuth", "TOTP / otplib", "Prisma ORM", "bcryptjs", "Helmet.js", "Joi Validation", "Winston Logging", "express-rate-limit", "Multer", "node-cron", "UUID", "CORS"] },
      { category: "Database", items: ["PostgreSQL", "Prisma Schema", "Indexed Access Structures", "Transaction-Safe Auth Workflows"] }
    ]
  },
  {
    title: "DeployLens",
    subtitle: "CI/CD Deployment Insights",
    description: "GitHub Actions and AWS CodeDeploy don't talk to each other. A workflow run completes, a CodeDeploy execution fires and whether a specific commit reached production is something you have to piece together yourself. DeployLens joins both into one timeline by tracks deployments across GitHub Actions and AWS CodeDeploy from a single dashboard",
    features: [
      "SHA Join Engine", "Real-time WebSockets", "CodeDeploy SDK"
    ],
    securityPills: ["CodeQL", "Dependabot"],
    links: { github: "https://github.com/Nirjar26/DeployLens", live: "#" },
    icon: <Rocket size={24} />,
    techStack: [
      { category: "Frontend", items: ["React 19", "TypeScript", "Zustand", "Axios", "socket.io-client", "CSS Custom Properties", "React Router v6"] },
      { category: "Backend", items: ["Node.js 20", "Express", "PostgreSQL 15", "Prisma ORM", "JWT + bcrypt", "AES-256-GCM", "AWS SDK v3", "Socket.io", "node-cron", "Zod"] },
      { category: "Integrations", items: ["GitHub OAuth + REST API", "AWS CodeDeploy", "AWS SNS + EventBridge", "HMAC-SHA256 Verification"] },
      { category: "Infrastructure", items: ["Self-hosted deployment", "PostgreSQL (RDS/Supabase compatible)"] }
    ]
  },
  {
    title: "VaultLock",
    subtitle: "Offline Password Manager",
    description: "VaultLock is an offline password manager. Credentials stay on your machine, encrypted, with no cloud sync and no external servers. VaultLock keeps everything local: AES-256 encryption, fast retrieval, and a desktop UI that doesn't require an internet connection to function.",
    features: [
      "Zero Knowledge", "AES Encryption", "Argon2 Hashing"
    ],
    securityPills: ["CodeQL", "Dependabot", "Gitleaks"],
    links: { github: "https://github.com/Nirjar26/VaultLock-Password-Manager", live: "#" },
    icon: <Lock size={24} />,
    techStack: [
      { category: "Frontend", items: ["PyQt6", "QML", "Fluent UI", "GPU-Accelerated Rendering"] },
      { category: "Backend", items: ["Python 3.10+", "AES (Fernet) Pipeline", "Argon2id KDF", "Secure Clipboard Lifecycle", "Password Generator Engine", "Zero-Knowledge Model", "Offline-First Architecture"] },
      { category: "Database", items: ["Encrypted SQLite Local Vault", "Structured Credential Indexing", "Secure Asset Caching"] }
    ]
  },
  {
    title: "SmartFlow",
    subtitle: "Lifecycle Task Management",
    description: "FlowStone is a team operations platform covering tasks, approvals, resource planning, and reporting. Most teams use separate tools for task tracking, approvals, and resource allocation.Work gets done, but visibility doesn't. FlowStone puts all of it in one place.",
    features: [
      "Task Engine", "Approval Flow", "Resource Tracking"
    ],
    securityPills: [],
    links: { github: "https://github.com/Nirjar26/SmartFlow", live: "#" },
    icon: <Layers size={24} />,
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "React Hook Form", "TanStack Query"] },
      { category: "Backend", items: ["PHP 8.2", "Custom REST API", "JWT Auth", "Role-Based Access Control (RBAC)"] },
      { category: "Database", items: ["MySQL 8.0", "Relational Schema Design", "High-Performance Query Optimization"] }
    ],
    badge: "Academic Project"
  }
];

const Works = () => {
  const [activeStackProject, setActiveStackProject] = useState<Project | null>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (activeStackProject) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollPositionRef.current, left: 0, behavior: 'auto' });
      });
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [activeStackProject]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend': return <Globe size={18} />;
      case 'backend': return <Cpu size={18} />;
      case 'database': return <Database size={18} />;
      case 'integrations': return <Layers size={18} />;
      case 'infrastructure': return <Database size={18} />;
      default: return <Cog size={18} />;
    }
  };

  const allTags = (project: Project) => {
    return project.techStack.flatMap(stack => stack.items).slice(0, 8);
  };

  const containerVariants: Variants = {
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
    <>
      <section id="works" className={styles.worksSection} data-aos="fade-up">
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.headerLabel} data-aos="fade-up" data-aos-duration="600">Works</h2>
            <p className={styles.headerSubtitle} data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">Projects I worked on. Each of them containing its own case study.</p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={styles.projectCard}
                data-aos="fade-up"
                data-aos-delay={(index * 100) + 100}
                data-aos-duration="600"
              >
                <div className={styles.cardInfo}>
                  <div className={styles.titleGroup}>
                    <div className={styles.titleWithBadge}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      {project.badge && (
                        <span className={styles.institutionBadge}>
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                  </div>

                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.techTags}>
                    {allTags(project).map((tag) => (
                      <span key={tag} className={styles.techTag}>
                        {tag}
                      </span>
                    ))}
                    <button
                      onClick={() => setActiveStackProject(project)}
                      className={styles.moreTags}
                      suppressHydrationWarning
                    >
                      + View Full Stack
                    </button>
                  </div>

                  <div className={styles.cardActions}>
                    <a href={project.links.github} className={styles.previewButton} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Github</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeStackProject && (
          <motion.div
            className={styles.modalOverlay}
            onClick={() => setActiveStackProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className={styles.modalClose} onClick={() => setActiveStackProject(null)}>
                <X size={20} />
              </button>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>{activeStackProject.title}</h3>
                <p className={styles.modalSubtitle}>Full Technology Infrastructure</p>
              </div>
              <div className={styles.stackGrid}>
                {activeStackProject.features.length > 0 && (
                  <div className={styles.stackCategory}>
                    <div className={styles.categoryHeader}>
                      <Rocket size={18} />
                      <h4>Core Features</h4>
                    </div>
                    <div className={styles.stackItems}>
                      {activeStackProject.features.map((item) => (
                        <span key={item} className={styles.stackItem}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeStackProject.securityPills.length > 0 && (
                  <div className={styles.stackCategory}>
                    <div className={styles.categoryHeader}>
                      <Github size={18} />
                      <h4>GitHub Actions</h4>
                    </div>
                    <div className={styles.stackItems}>
                      {activeStackProject.securityPills.map((item) => (
                        <span key={item} className={`${styles.stackItem} ${styles.ghActionItem}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeStackProject.techStack.map((category) => (
                  <div key={category.category} className={styles.stackCategory}>
                    <div className={styles.categoryHeader}>
                      {getCategoryIcon(category.category)}
                      <h4>{category.category}</h4>
                    </div>
                    <div className={styles.stackItems}>
                      {category.items.map((item) => (
                        <span key={item} className={styles.stackItem}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Works;
