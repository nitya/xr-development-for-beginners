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
