export const routes = [
  {
    path: "/",
    name: "Home",
    view: "Home",
  },
  {
    path: "/home-old",
    name: "Home Old",
    view: "HomeOld",
  },
  {
    path: "/form/:id?/:action?",
    name: "View Form",
    view: "ViewForm",
  },
  {
    path: "/admin",
    name: "Admin",
    view: "Admin",
  },
  {
    path: "/admin/form/:id?/:action?",
    name: "Admin",
    view: "Admin",
  },
  {
    path: "/admin/:id?",
    name: "Admin",
    view: "Admin",
  },
  {
    path: "/admin/form",
    name: "Admin Form",
    view: "Admin.Form",
  },
];