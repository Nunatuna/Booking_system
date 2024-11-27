/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SofieLazyImport = createFileRoute('/sofie')()
const SignUpLazyImport = createFileRoute('/sign-up')()
const ResevereLazyImport = createFileRoute('/resevere')()
const PhilipLazyImport = createFileRoute('/philip')()
const LoginLazyImport = createFileRoute('/login')()
const CalendarLazyImport = createFileRoute('/calendar')()
const BookcardtestLazyImport = createFileRoute('/bookcardtest')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SofieLazyRoute = SofieLazyImport.update({
  id: '/sofie',
  path: '/sofie',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sofie.lazy').then((d) => d.Route))

const SignUpLazyRoute = SignUpLazyImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sign-up.lazy').then((d) => d.Route))

const ResevereLazyRoute = ResevereLazyImport.update({
  id: '/resevere',
  path: '/resevere',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/resevere.lazy').then((d) => d.Route))

const PhilipLazyRoute = PhilipLazyImport.update({
  id: '/philip',
  path: '/philip',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/philip.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const CalendarLazyRoute = CalendarLazyImport.update({
  id: '/calendar',
  path: '/calendar',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/calendar.lazy').then((d) => d.Route))

const BookcardtestLazyRoute = BookcardtestLazyImport.update({
  id: '/bookcardtest',
  path: '/bookcardtest',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/bookcardtest.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/bookcardtest': {
      id: '/bookcardtest'
      path: '/bookcardtest'
      fullPath: '/bookcardtest'
      preLoaderRoute: typeof BookcardtestLazyImport
      parentRoute: typeof rootRoute
    }
    '/calendar': {
      id: '/calendar'
      path: '/calendar'
      fullPath: '/calendar'
      preLoaderRoute: typeof CalendarLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/philip': {
      id: '/philip'
      path: '/philip'
      fullPath: '/philip'
      preLoaderRoute: typeof PhilipLazyImport
      parentRoute: typeof rootRoute
    }
    '/resevere': {
      id: '/resevere'
      path: '/resevere'
      fullPath: '/resevere'
      preLoaderRoute: typeof ResevereLazyImport
      parentRoute: typeof rootRoute
    }
    '/sign-up': {
      id: '/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof SignUpLazyImport
      parentRoute: typeof rootRoute
    }
    '/sofie': {
      id: '/sofie'
      path: '/sofie'
      fullPath: '/sofie'
      preLoaderRoute: typeof SofieLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/bookcardtest': typeof BookcardtestLazyRoute
  '/calendar': typeof CalendarLazyRoute
  '/login': typeof LoginLazyRoute
  '/philip': typeof PhilipLazyRoute
  '/resevere': typeof ResevereLazyRoute
  '/sign-up': typeof SignUpLazyRoute
  '/sofie': typeof SofieLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/bookcardtest': typeof BookcardtestLazyRoute
  '/calendar': typeof CalendarLazyRoute
  '/login': typeof LoginLazyRoute
  '/philip': typeof PhilipLazyRoute
  '/resevere': typeof ResevereLazyRoute
  '/sign-up': typeof SignUpLazyRoute
  '/sofie': typeof SofieLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/bookcardtest': typeof BookcardtestLazyRoute
  '/calendar': typeof CalendarLazyRoute
  '/login': typeof LoginLazyRoute
  '/philip': typeof PhilipLazyRoute
  '/resevere': typeof ResevereLazyRoute
  '/sign-up': typeof SignUpLazyRoute
  '/sofie': typeof SofieLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/bookcardtest'
    | '/calendar'
    | '/login'
    | '/philip'
    | '/resevere'
    | '/sign-up'
    | '/sofie'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/bookcardtest'
    | '/calendar'
    | '/login'
    | '/philip'
    | '/resevere'
    | '/sign-up'
    | '/sofie'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/bookcardtest'
    | '/calendar'
    | '/login'
    | '/philip'
    | '/resevere'
    | '/sign-up'
    | '/sofie'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  BookcardtestLazyRoute: typeof BookcardtestLazyRoute
  CalendarLazyRoute: typeof CalendarLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  PhilipLazyRoute: typeof PhilipLazyRoute
  ResevereLazyRoute: typeof ResevereLazyRoute
  SignUpLazyRoute: typeof SignUpLazyRoute
  SofieLazyRoute: typeof SofieLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  BookcardtestLazyRoute: BookcardtestLazyRoute,
  CalendarLazyRoute: CalendarLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  PhilipLazyRoute: PhilipLazyRoute,
  ResevereLazyRoute: ResevereLazyRoute,
  SignUpLazyRoute: SignUpLazyRoute,
  SofieLazyRoute: SofieLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/bookcardtest",
        "/calendar",
        "/login",
        "/philip",
        "/resevere",
        "/sign-up",
        "/sofie"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/about": {
      "filePath": "about.lazy.jsx"
    },
    "/bookcardtest": {
      "filePath": "bookcardtest.lazy.jsx"
    },
    "/calendar": {
      "filePath": "calendar.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/philip": {
      "filePath": "philip.lazy.jsx"
    },
    "/resevere": {
      "filePath": "resevere.lazy.jsx"
    },
    "/sign-up": {
      "filePath": "sign-up.lazy.jsx"
    },
    "/sofie": {
      "filePath": "sofie.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
