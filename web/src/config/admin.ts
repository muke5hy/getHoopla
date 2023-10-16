import { DashboardConfig } from "@/types"

export const adminConfig: DashboardConfig = {
  mainNav: [],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/admin",
      icon: "dashboard",
    },
    {
      title: "Blogs",
      href: "/admin/blogs",
      icon: "blogs",
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: "users",
    }
  ],
}
