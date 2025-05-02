import posthog from "posthog-js";

export const links = [
  {
    label: "products",
    href: "#products",
    target: "_self",
    mobileOnly: false,
    emphasized: false,
  },
  {
    label: "careers",
    href: "#careers",
    target: "_self",
    mobileOnly: false,
    emphasized: false,
  },
  {
    label: "sales",
    href: "mailto:sales@solcoa.tech",
    target: "_blank",
    mobileOnly: false,
    emphasized: true,
    onClick: () => {
      posthog.capture("sales_link_clicked");
    },
  },
];
