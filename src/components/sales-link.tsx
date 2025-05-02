"use client";

import Link from "next/link";
import posthog from "posthog-js";

type Props = {
  children: React.ReactNode;
};

export default function SalesLink({ children }: Props) {
  return (
    <Link
      href="mailto:sales@solcoa.tech"
      target="_blank"
      onClick={() => {
        posthog.capture("sales_link_clicked");
      }}
    >
      {children}
    </Link>
  );
}
