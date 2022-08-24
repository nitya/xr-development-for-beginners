// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  // CONFIG-ME: Update for Landing Page Hero section
  title: 'XR Development For Beginners',
  tagline: '8-week Curriculum on eXtended Reality (XR)',

  // CONFIG-ME: Update for GitHub Pages
  url: 'https://nitya.github.io',
  baseUrl: '/xr-development-for-beginners/',
  organizationName: 'nitya', 
  projectName: 'xr-development-for-beginners', 
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',

  // CONFIG-ME: Get early-detecton of broken links
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  // CONFIG-ME: Configure for more locales (e.g., jp)
  //       See: https://docusaurus.io/docs/api/docusaurus-config#i18n
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

// -------- START PRESETS CONFIG ------------
// See: https://docusaurus.io/docs/using-plugins#docusauruspreset-classic
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({


        // CONFIG-ME: Will be passed to @docusaurus/plugin-content-docs
        //       Set: false to disable blog feature
        //       See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
        // Use Categories to create hierarchy of sidebar items (in sidebars.js)
        //       See: https://docusaurus.io/docs/sidebar/items#sidebar-item-category 
        docs: {
          path: 'docs',
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },

        // CONFIG-ME: Will be passed to @docusaurus/plugin-content-docs
        //       Set: false to disable docs feature
        //       See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
        // If disabling blog, remember to:
        //  delete blog/ folder to save space
        //  remove blog route from navigation config settings below
        blog: false,
        
        // CONFIG-ME: Will be passed to @docusaurus/plugin-content-pages
        //       Set: false to disable pages feature
        //       See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages
        pages: {},

        // CONFIG-ME:  Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        // CONFIG-ME: Will be passed to @docusaurus/plugin-content-sitemap
        //    Add it: `npm install --save @docusaurus/plugin-sitemap`
        //       Set: false to disable it 
        //     Route: /sitemap.xml
        //       See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },

      }),
    ],
  ],
// -------- END PRESETS CONFIG --------------

  // CONFIG-ME: Configure UI elements like navbar, footer, sidebar 
  //       See: https://docusaurus.io/docs/api/docusaurus-config#themeConfig

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },

      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
