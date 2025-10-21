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
          Ashley Wang
        </Heading>
        <p className="hero__subtitle">Senior Engineering Manager | MIT '17</p>
        <p className={styles.heroTagline}>
          Kubernetes & Cloud-Native • Service Mesh • API & Protocols (gRPC, REST, MCP)
        </p>
        <p className={styles.heroDescription}>
          NY-based Senior Engineering Leader with 10+ years of experience designing, building, 
          and deploying cloud-native, scalable microservices and distributed systems. 
          Passionate about driving DevOps excellence, zero-trust security, and observability.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://www.linkedin.com/in/ashley-wang-6854a4a4/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/ashleywang1"
            target="_blank"
            rel="noopener noreferrer">
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
      title={`Ashley Wang | Senior Engineering Manager`}
      description="Senior Engineering Manager specializing in Kubernetes, cloud-native architectures, service mesh, and API protocols (gRPC, REST, MCP)">
      <HomepageHeader />
      <main>
        <WorkExperience />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
