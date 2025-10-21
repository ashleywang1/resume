/**
 * @fileoverview Homepage component for Ashley Wang's personal portfolio website.
 * Features a hero section with social links, work experience, and project showcase.
 */

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/**
 * @description Hero section component with introduction and social links
 */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
        Software engineer, tech lead & open-source maintainer
        </Heading>
        <p className="hero__subtitle"></p>
        <p className={styles.heroDescription}>
          Hello! I'm Ashley Wang, a Senior Engineering Manager with 10+ years of experience building 
          cloud-native, scalable microservices and distributed systems. I'm passionate about Kubernetes, 
          service mesh architecture, and contributing to open-source projects that advance 
          cloud-native infrastructure. Lets talk if you're building something interesting!
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://www.linkedin.com/in/ashley-wang-6854a4a4/"
            target="_blank"
            rel="noopener noreferrer">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/ashleywang1"
            target="_blank"
            rel="noopener noreferrer">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 * @description Work experience section component with timeline layout
 */
function WorkExperience(): ReactNode {
  return (
    <section className={styles.workSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Professional Experience
        </Heading>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <div>
                  <Heading as="h3" className={styles.companyName}>Solo.io</Heading>
                  <p className={styles.jobTitle}>Senior Manager, Gloo Platform</p>
                  <p className={styles.location}>Cambridge, MA</p>
                </div>
                <span className={styles.duration}>Sept 2019 - Present</span>
              </div>
              <ul className={styles.achievements}>
                <li>
                  Led development of a service mesh orchestration platform for multi-cluster 
                  Kubernetes, focusing on policy enforcement, observability, and secure 
                  service-to-service communication (mTLS/SPIFFE)
                </li>
                <li>
                  Delivered <strong>Gloo Mesh Core</strong> in August 2023, which became the 
                  highest-selling product in its launch quarter
                </li>
                <li>
                  Designed and implemented monitoring tools, including service graphs leveraging 
                  Istio metrics and Cilium Hubble flows, enhancing observability for enterprise customers
                </li>
                <li>
                  Managed a team of highly technical engineers, set goals during quarterly reviews, 
                  and fostered career growth
                </li>
                <li>
                  Partnered with product management to align execution with customer needs and 
                  coordinated across R&D, design, and support to deliver features and releases
                </li>
                <li>
                  Core contributor to Gloo Mesh, enabling centralized management of Istio 
                  service meshes across distributed Kubernetes clusters
                </li>
                <li>
                  Worked with external design contractors to improve user experience and accelerate development
                </li>
                <li>
                  Adopted AI-assisted tools (Cursor, Claude) in 2025 to streamline workflows and boost team productivity
                </li>
              </ul>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>Go</span>
                <span className={styles.techBadge}>Kubernetes</span>
                <span className={styles.techBadge}>Istio</span>
                <span className={styles.techBadge}>Cilium</span>
                <span className={styles.techBadge}>Docker</span>
                <span className={styles.techBadge}>Helm</span>
                <span className={styles.techBadge}>Prometheus</span>
                <span className={styles.techBadge}>Grafana</span>
                <span className={styles.techBadge}>Envoy</span>
                <span className={styles.techBadge}>gRPC</span>
              </div>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <div>
                  <Heading as="h3" className={styles.companyName}>Akamai Technologies</Heading>
                  <p className={styles.jobTitle}>Software Engineer II, Platform Infrastructure</p>
                  <p className={styles.location}>Cambridge, MA</p>
                </div>
                <span className={styles.duration}>2017 - 2019</span>
              </div>
              <ul className={styles.achievements}>
                <li>
                  Developed and maintained Akamai's Query2 system in C++, used for real-time 
                  network performance monitoring and alerting at a scale of 200,000 edge machines
                </li>
                <li>
                  Pioneered Docker adoption for legacy workloads, enabling hybrid cloud portability
                </li>
                <li>
                  Modernized Akamai's Query2 system (C++/Go), decoupling monolithic layers 
                  into microservices with gRPC
                </li>
              </ul>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>C++</span>
                <span className={styles.techBadge}>Go</span>
                <span className={styles.techBadge}>Docker</span>
                <span className={styles.techBadge}>gRPC</span>
                <span className={styles.techBadge}>Microservices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Ashley Wang | Software Engineer & Tech Lead`}
      description="Senior Engineering Manager and open-source maintainer specializing in Kubernetes, cloud-native architectures, and service mesh">
      <HomepageHeader />
      <main>
        <WorkExperience />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
