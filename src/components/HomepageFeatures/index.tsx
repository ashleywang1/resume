/**
 * @fileoverview Features section showcasing MIT projects and technical achievements.
 * Displays project cards with descriptions and external links.
 */

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type ProjectItem = {
  title: string;
  description: ReactNode;
  link: string;
  icon: string;
  tags: string[];
  category: string;
};

const ProjectList: ProjectItem[] = [
  {
    title: 'MIT Mahjong 2048',
    icon: '🀄',
    link: 'https://ashleywang1.github.io/2048/',
    category: 'MIT Coursework',
    tags: ['JavaScript', 'Game Development', 'UI/UX'],
    description: (
      <>
        A version of the 2048 game featuring Mahjong tiles, 
        made as an advertisement for the MIT Mahjong Club. Built with vanilla JavaScript.
      </>
    ),
  },
  {
    title: '6.857 Secure Distributed Mafia Game',
    icon: '🔐',
    link: 'https://github.com/ashleywang1/857MafiaGame',
    category: 'MIT Coursework',
    tags: ['Python', 'Cryptography', 'Distributed Systems'],
    description: (
      <>
        A distributed multiplayer implementation of the social deduction game Mafia, 
        built as a final project for MIT's 6.857 Computer and Network Security course. 
        Features secure cryptographic communications using Diffie-Hellman key exchange 
        and encrypted message passing.
      </>
    ),
  },
  {
    title: 'Climate Change Interactive Visualization',
    icon: '🌍',
    link: 'https://github.com/ashleywang1/cms631-final-project',
    category: 'MIT Coursework',
    tags: ['JavaScript', 'Data Visualization', 'D3.js'],
    description: (
      <>
        An interactive web-based exploration of climate change data and impacts, 
        created for CMS.631. Features dynamic visualizations and data-driven storytelling 
        to communicate the urgency of environmental challenges.
      </>
    ),
  },
  {
    title: 'ECTC Tournament Manager',
    icon: '🥋',
    link: 'https://github.com/ashleywang1/ECTC_tournament_manager',
    category: 'MIT Sport Taekwondo',
    tags: ['Docker', 'Full-Stack', 'Tournament Management'],
    description: (
      <>
        A comprehensive tournament management system for the Eastern Collegiate Taekwondo 
        Conference competitions. Dockerized application built to streamline registration, 
        bracket management, and scoring for MIT Sport Taekwondo events.
      </>
    ),
  },
];

/**
 * @description Individual project card component
 */
function Project({title, description, link, icon, tags, category}: ProjectItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className={styles.projectCard}>
        <div className={styles.projectHeader}>
          <div className={styles.projectIcon}>{icon}</div>
          <span className={styles.projectCategory}>{category}</span>
        </div>
        <Heading as="h3" className={styles.projectTitle}>{title}</Heading>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.tagContainer}>
          {tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <Link
          className={`button button--primary button--outline ${styles.projectButton}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer">
          View Project →
        </Link>
      </div>
    </div>
  );
}

/**
 * @description Main features section displaying featured projects
 */
export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Featured Projects
        </Heading>
        <p className={styles.sectionSubtitle}>
          A selection of projects from MIT coursework and extracurricular activities
        </p>
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
