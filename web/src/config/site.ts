import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "SaaS Boilerplate",
  description:
    "An open source application built using the new router, server components and everything new in Next.js 13.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "https://saas.mukeshyadav.com/og.jpg",
  links: {
    twitter: "https://twitter.com/indie_hustler",
    github: "https://github.com/muke5hy/saas-boilerplate",
  },
}
