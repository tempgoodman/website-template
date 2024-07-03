export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Easy Lend System",
  description: "Debt management system",
  navItems: [
    {
      type: "button",
      label: "loan",
      href: "",
      sub: [
        {
          type: "link",
          label: "search",
          href: "/loan/search",
        },
      ],
    },
    {
      type: "button",
      label: "report1",
      href: "",
      sub: [
        {
          type: "link",
          label: "report1",
          href: "/report1",
        },
        {
          type: "link",
          label: "report2",
          href: "/report2",
        },
        {
          type: "link",
          label: "report3",
          href: "/report3",
        },
      ],
    },
    {
      type: "link",
      label: "logout",
      href: "/logout",
    },
  ],
  navMenuItems: [
    {
      type: "button",
      label: "loan",
      href: "/loan",
    },
    {
      type: "button",
      label: "report",
      href: "/report",
    },
    {
      type: "link",
      label: "logout",
      href: "/logout",
    },
  ],
};
