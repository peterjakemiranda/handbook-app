export const Role = {
  Admin: "admin",
  User: "student",
};

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Home.vue"),
      },
      {
        path: "account",
        component: () => import("src/pages/Account.vue"),
      },
      {
        path: "search",
        component: () => import("src/pages/Article/Search.vue"),
      },
      {
        path: "article/:id",
        component: () => import("src/pages/Article/View.vue"),
      },
      {
        path: "admin/chapters",
        component: () => import("src/pages/Admin/Chapter/Index.vue"),
        meta: {
          auth: true,
          authorize: [Role.Admin],
        },
      },
      {
        path: "admin/chapters/create",
        component: () => import("src/pages/Admin/Chapter/Form.vue"),
        meta: {
          auth: true,
          authorize: [Role.Admin],
        },
      },
      {
        path: "admin/chapters/:id/edit",
        component: () => import("src/pages/Admin/Chapter/Form.vue"),
      },
      {
        path: "admin/chapters/:chapter_id/sections",
        component: () => import("src/pages/Admin/Section/Index.vue"),
      },
      {
        path: "admin/chapters/:chapter_id/sections/create",
        component: () => import("src/pages/Admin/Section/Form.vue"),
      },
      {
        path: "admin/chapters/:chapter_id/sections/:id/edit",
        component: () => import("src/pages/Admin/Section/Form.vue"),
      },

      {
        path: "admin/chapters/:chapter_id/questions",
        component: () => import("src/pages/Admin/Question/Index.vue"),
      },
      {
        path: "admin/chapters/:chapter_id/questions/create",
        component: () => import("src/pages/Admin/Question/Form.vue"),
      },
      {
        path: "admin/chapters/:chapter_id/questions/:id/edit",
        component: () => import("src/pages/Admin/Question/Form.vue"),
      },
      {
        path: "admin/users",
        component: () => import("src/pages/Admin/User/Index.vue"),
        meta: {
          auth: true,
          authorize: [Role.Admin],
        },
      },
      {
        path: "admin/users/create",
        component: () => import("src/pages/Admin/User/Form.vue"),
        meta: {
          auth: true,
          authorize: [Role.Admin],
        },
      },
      {
        path: "admin/users/:id/edit",
        component: () => import("src/pages/Admin/User/Form.vue"),
        meta: {
          auth: true,
          authorize: [Role.Admin],
        },
      },
    ],
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/admin-login",
    component: () => import("pages/AdminLogin.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    component: () => import("pages/Register.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/forgot-password",
    component: () => import("pages/ForgotPassword.vue"),
    meta: {
      guest: true,
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
