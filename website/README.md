# Website Setup

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

---

### 1. Local Environment

Docusaurus 2 requires Node.js version 16.14 or higher. My current Node.js relevant tool versions:

```
$ node --version
v17.4.0

$ npm --version
8.3.1

$nvm --version
0.35.0
```
---

### 2. Scaffolding

Set up the default `classic` themed site under the `website` folder for easy maintenance.

```
$ npx create-docusaurus@latest website classic

[INFO] Creating new Docusaurus project...
..
..
[SUCCESS] Created website.
```

Validate the site works with local preview:

```
$ cd website
$ npx docusaurus start 

[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at: http://localhost:3000/

```

Checking this in as "initial website import" before starting customizations

---

> 🚨 Created a new `website-test` branch for testing so we don't trigger any GitHub action workflows tied to `push` events on main.

---

### 3. Customize Your Configuration

> 🌟 Look for the "CONFIG-ME" comments in `docusaurus.config.js` for convenience

 * Configure `docusaurus.config.js` to customize theme, presets, plugins, navbar, footer, and default metadata.
 * Configure `sidebars.js` to customize how sidebars are rendered for _docs_ collections.

---

### 4. Deploy to GitHub Pages

Follow the instructions in the [Docusaurus Deployment docs](https://docusaurus.io/docs/deployment#deploying-to-github-pages) and modify the [docusaurus.config.js](docusaurus.config.js) file parameters show. _Currently reflect my fork, should be updated to origin before PR_.

```txt
url: 'https://nitya.github.io',
baseUrl: '/xr-development-for-beginners/',
organizationName: 'nitya', 
projectName: 'xr-development-for-beginners', 
deploymentBranch: 'gh-pages',
```

Then test that deploy works from local development enviroment using:

```
$ GIT_USER=nitya GIT_PASS=<personal-access-token> npm run deploy
```