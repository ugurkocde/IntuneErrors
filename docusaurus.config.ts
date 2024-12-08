import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Intune Errors",
  tagline: "A collection of Intune errors and their solutions",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://intuneerrors.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ugurkocde/IntuneErrors",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Intune Errors",
      logo: {
        alt: "Intune Errors",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Browse all Error Codes",
        },
        {
          href: "https://github.com/ugurkocde/IntuneErrors",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Categories",
          items: [
            {
              label: "Applications",
              to: "/docs/Applications/overview",
            },
            {
              label: "Enrollment",
              to: "/docs/Enrollment/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Contribute",
              href: "https://github.com/ugurkocde/IntuneErrors",
            },
            {
              label: "Feedback",
              href: "https://github.com/ugurkocde/IntuneErrors/issues",
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "X",
              href: "https://x.com/ugurkocde",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/ugurkocde/",
            },
          ],
        },
      ],
      copyright: `Made by Ugur with ♥️`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
