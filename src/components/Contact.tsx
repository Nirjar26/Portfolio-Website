"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Send,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Ghost,
  Github
} from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpqjwgek", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Thanks for your message! I'll get back to you soon.");
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form.");
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <motion.div 
          className={styles.contactContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <div className={styles.indicator}>
            <motion.span className={styles.indicatorText} variants={itemVariants}>
              / CONTACT
            </motion.span>
            <motion.div 
              className={styles.indicatorLine} 
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                visible: { scaleX: 1, opacity: 0.3, transition: { duration: 1 } }
              }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <motion.h2 className={styles.title} variants={itemVariants}>
            Just say hello!
          </motion.h2>

          <motion.p className={styles.description} variants={itemVariants}>
            Want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible.
          </motion.p>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Your name*</label>
                <input type="text" name="name" className={styles.input} placeholder="Jane Doe" required />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Company name</label>
                <input type="text" name="company" className={styles.input} placeholder="Your company (optional)" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Email*</label>
                <input type="email" name="email" className={styles.input} placeholder="you@gmail.com" required />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Phone</label>
                <input type="tel" name="phone" className={styles.input} placeholder="Mobile Number" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Message*</label>
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="How can I help you?"
                required
              />
            </div>

            <div className={styles.submitContainer}>
              <button type="submit" className={styles.submitBtn}>
                Send Message
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>

      <div className={styles.socialSection}>
        <div className="container">
          <motion.div 
            className={styles.socialGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/nirjar_goswami/" },
              { icon: Twitter, name: "X", href: "https://x.com/nirjxrgoswami" },
              { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/nirjarbharthi-goswami-b593633a7" },
              { icon: Ghost, name: "Snapchat", href: "https://www.snapchat.com/@nirjxr26" },
              { icon: Github, name: "GitHub", href: "https://github.com/Nirjar26/" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={styles.socialItem}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
              >
                <item.icon className={styles.socialIconImg} size={32} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className={styles.contactInfoSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div className={styles.logoColumn} variants={itemVariants}>
              <div className={styles.logo}>
                <div className={styles.logoDot} />
                NG
              </div>
            </motion.div>

            <motion.div className={styles.infoColumn} variants={itemVariants}>
              <span className={styles.infoLabel}>[ Location ]</span>
              <div className={styles.infoValues}>
                <span className={styles.infoValue}>Ahmedabad, Gujarat</span>
                <span className={styles.infoValue}>India</span>
              </div>
            </motion.div>

            <motion.div className={styles.infoColumn} variants={itemVariants}>
              <span className={styles.infoLabel}>[ Phone ]</span>
              <div className={styles.infoValues}>
                <a href="tel:+918799142626" className={styles.infoValue}>+91 8799142626</a>
              </div>
            </motion.div>

            <motion.div className={styles.infoColumn} variants={itemVariants}>
              <span className={styles.infoLabel}>[ Email ]</span>
              <div className={styles.infoValues}>
                <a href="mailto:nirjargoswami2626@gmail.com" className={styles.infoValue}>nirjargoswami2626@gmail.com</a>
                <a href="mailto:nirjar@gmail.com" className={styles.infoValue}>nirjar@gmail.com</a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.copyright}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.85 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Nirjar Goswami. All rights reserved.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


