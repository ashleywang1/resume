/**
 * @fileoverview Features section showcasing open source contributions and MIT projects.
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

const OpenSourceProjects: ProjectItem[] = [
  {
    title: 'KGateway',
    icon: '🌐',
    link: 'https://github.com/kgateway-dev/kgateway/pulls?q=+is%3Apr+author%3Aashleywang1+',
    category: 'Open Source',
    tags: ['Go', 'Kubernetes', 'API Gateway', 'Envoy'],
    description: (
      <>
        Core contributor to KGateway (formerly Gloo Edge), a feature-rich, 
        Kubernetes-native ingress controller and API gateway built on Envoy Proxy. 
        Contributed 145+ merged PRs including rate limiting, RBAC, REST EDS, 
        and various API enhancements.
      </>
    ),
  },
  {
    title: 'KAgent',
    icon: '🤖',
    link: 'https://github.com/kagent-dev/kagent/pulls?q=is%3Apr+author%3Aashleywang1+is%3Aclosed',
    category: 'Open Source',
    tags: ['Go', 'Kubernetes', 'AI/ML', 'REST API'],
    description: (
      <>
        Contributor to KAgent, a Kubernetes-native AI agent framework.
      </>
    ),
  },
  {
    title: 'KAgent A2A Discord Bot',
    icon: '💬',
    link: 'https://github.com/lekkerelou/kagent-a2a-discord',
    category: 'Open Source',
    tags: ['Python', 'Discord', 'A2A', 'Kubernetes'],
    description: (
      <>
        Discord bot template for interacting with A2A agents on KAgent. 
        Enables seamless integration between Discord channels and Kubernetes-native AI agents.
      </>
    ),
  },
  {
    title: 'GitHub Cherry Pick Action',
    icon: '🔀',
    link: 'https://github.com/ashleywang1/github-cherry-pick-action',
    category: 'Open Source',
    tags: ['TypeScript', 'GitHub Actions', 'CI/CD'],
    description: (
      <>
        GitHub Action for cherry-picking commits from Pull Requests into release branches. 
        Automates backporting with automated PR creation and conflict handling.
      </>
    ),
  },
];

const MITProjects: ProjectItem[] = [
  {
    title: 'MIT Mahjong 2048',
    icon: '🀄',
    link: 'https://ashleywang1.github.io/2048/',
    category: 'MIT Project',
    tags: ['JavaScript', 'Game Development'],
    description: (
      <>
        A version of the 2048 game featuring Mahjong tiles, 
        made as an advertisement for the MIT Mahjong Club.
      </>
    ),
  },
  {
    title: '6.857 Secure Mafia Game',
    icon: '🔐',
    link: 'https://github.com/ashleywang1/857MafiaGame',
    category: 'MIT Project',
    tags: ['Python', 'Cryptography', 'Distributed Systems'],
    description: (
      <>
        A distributed multiplayer implementation of Mafia with secure 
        cryptographic communications using Diffie-Hellman key exchange.
      </>
    ),
  },
  {
    title: 'Climate Change Visualization',
    icon: '🌍',
    link: 'https://github.com/ashleywang1/cms631-final-project',
    category: 'MIT Project',
    tags: ['JavaScript', 'D3.js'],
    description: (
      <>
        An interactive web-based exploration of climate change data 
        with dynamic visualizations and data-driven storytelling.
      </>
    ),
  },
  {
    title: 'ECTC Tournament Manager',
    icon: '🥋',
    link: 'https://github.com/ashleywang1/ECTC_tournament_manager',
    category: 'MIT Project',
    tags: ['Docker', 'Full-Stack'],
    description: (
      <>
        A comprehensive tournament management system for the Eastern Collegiate 
        Taekwondo Conference competitions.
      </>
    ),
  },
];

/**
 * @description Individual project card component
 */
function Project({title, description, link, icon, tags, category}: ProjectItem) {
  return (
    <div className={clsx('col col--4')}>
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
 * @description Main features section displaying open source contributions and MIT projects
 */
export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Open Source Contributions
          </Heading>
          <p className={styles.sectionSubtitle}>
            Core contributions to cloud-native and Kubernetes projects
          </p>
          <div className="row">
            {OpenSourceProjects.map((props, idx) => (
              <Project key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.features}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            MIT Projects
          </Heading>
          <p className={styles.sectionSubtitle}>
            Projects from MIT coursework and extracurricular activities
          </p>
          <div className="row">
            {MITProjects.map((props, idx) => (
              <Project key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
