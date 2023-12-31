// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '${CODDEE}',
  tagline: 'Why not have some CODDEE',
  url: 'https://allen804347.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/coddee-100.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'allen804347', // Usually your GitHub org/user name.
  projectName: 'allen804347.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'always'
        },
        // gtag: {
        //   trackingID: 'G-6GGVD984B6'
        // }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /** You can configure a default image that will be used for your meta tag, */
      image: 'img/coddee-100.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        title: '',
        logo: {
          alt: '${CODDEE} Logo',
          src: 'img/coddee-100.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Series of articles',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: '/about',
            label: 'About',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
            // title: 'Articles',
            // items: [
            //   {
            //     label: 'CSS',
            //     to: '/docs/category/css',
            //   },
              // {
              //   label: 'Optimization',
              //   to: '/docs/category/optimization',
              // }
          //   ],
          // },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/allen-hsieh-29862b212',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Allen804347',
              },
              {
                label: 'Leetcode',
                href: 'https://leetcode.com/Allen804347/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Contact',
                href: 'mailto:allen804347@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Allen, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
