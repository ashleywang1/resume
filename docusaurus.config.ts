import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ashley Wang',
  tagline: 'Software engineer, tech lead & open-source maintainer',
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
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Ashley Wang',
      items: [
        {
          href: 'https://www.linkedin.com/in/ashley-wang-6854a4a4/',
          label: 'LinkedIn',
          position: 'right',
          className: 'navbar-linkedin-link',
        },
        {
          href: 'https://github.com/ashleywang1',
          label: 'GitHub',
          position: 'right',
          className: 'navbar-github-link',
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
          title: 'Built with',
          items: [
            {
              label: '🦖 Docusaurus',
              href: 'https://docusaurus.io/',
            },
            {
              label: '📄 GitHub Pages',
              href: 'https://pages.github.com/',
            },
            {
              label: '🤖 Claude',
              href: 'https://claude.ai/',
            },
            {
              label: '✨ Cursor',
              href: 'https://cursor.com/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ashley Wang.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
