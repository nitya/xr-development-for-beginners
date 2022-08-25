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
  trailingSlash: false,
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
        // ------------------
        // Set: docs-only mode
        // See: https://docusaurus.io/docs/docs-introduction/
        // Don't forget to add slug '/' to docs root page
        // Remove pages at index
        // ------------------
        docs: {
          routeBasePath: '/', // Serve docs at site root
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
        title: 'XR Dev',
        logo: {
          alt: 'XR Development For Beginners Logo',
          src: 'img/logo.svg',
        },
        items: [
          /*
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Curriculum',
          },
          */
          {
            href: 'https://github.com/microsoft/xr-development-for-beginners',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            label: 'Mixed Reality',
            to: 'https://docs.microsoft.com/en-us/windows/mixed-reality/',
          },
          {
            label: 'WebXR',
            to: 'https://docs.microsoft.com/en-us/windows/mixed-reality/develop/javascript/webxr-overview',
          },
          {
            label: 'Babylon.js',
            to: 'https://www.babylonjs.com/'
          },
          {
            label: '#30Days Hub',
            to: 'https://aka.ms/30DaysOf',
          },
          {
            label: 'Privacy Statement ',
            to: 'https://privacy.microsoft.com/en-us/privacystatement',
          },
          { 
           label: `Copyright © ${new Date().getFullYear()} Microsoft`,
           to: 'https://microsoft.com'
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
