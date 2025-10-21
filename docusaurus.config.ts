import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ashley Wang',
  tagline: 'Senior Engineering Manager | Kubernetes & Cloud-Native',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },


  url: 'https://ashleywang1.github.io',
  baseUrl: '/resume/',

  // GitHub pages deployment config.
  organizationName: 'ashleywang1', // GitHub username
  projectName: 'resume',           // Repo name
  deploymentBranch: 'gh-pages',    // Where the built site goes

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ashley Wang',
      items: [
        {
          href: 'https://www.linkedin.com/in/ashley-wang-6854a4a4/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/ashleywang1',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/ashley-wang-6854a4a4/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ashleywang1',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'MIT Mahjong 2048',
              href: 'https://ashleywang1.github.io/2048/',
            },
            {
              label: 'Secure Mafia Game',
              href: 'https://github.com/ashleywang1/857MafiaGame',
            },
            {
              label: 'Climate Change Viz',
              href: 'https://github.com/ashleywang1/cms631-final-project',
            },
            {
              label: 'Tournament Manager',
              href: 'https://github.com/ashleywang1/ECTC_tournament_manager',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ashley Wang. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
