module.exports = {
  title: "Phase Two",
  tagline: "Tools for SaaS builders",
  url: "https://p2-inc.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "p2-inc",
  projectName: "p2-inc.github.io",
  deploymentBranch: "master",
  themeConfig: {
    announcementBar: {
      id: "connect",
      content:
        'Introducing <a href="/docs/connect">Phase Two Connect</a> for on-prem SSO onboarding.',
      backgroundColor: "var(--ifm-color-primary)",
      textColor: "#fff",
      isCloseable: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "Phase Two",
        src: "img/logo_phase_slash.svg",
      },
      items: [
        {
          to: "/#features",
          label: "Features",
          position: "left",
        },
        {
          to: "/#opensource",
          label: "Open Source",
          position: "left",
        },
        {
          to: "/#pricing",
          label: "Pricing",
          position: "left",
        },
        {
          to: "docs/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "api/",
          label: "API",
          position: "left",
        },
        {
          href: "https://app.phasetwo.io/auth/admin/master/console",
          label: "Dashboard",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Phase Two",
          items: [
            {
              label: "Privacy policy",
              to: "docs/privacy",
            },
            {
              label: "Terms of use",
              to: "docs/terms",
            },
            {
              label: "support@phasetwo.io",
              href: "mailto:support@phasetwo.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Phase Two, Inc.`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",
      disableSwitch: true,
    },
  },
  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      {
        api: {
          path: "openapi.yaml",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/p2-inc/phasetwo-docs/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-160183620-1",
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
};
