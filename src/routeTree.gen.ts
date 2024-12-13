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

const SignUpLazyImport = createFileRoute('/sign-up')()
const ResevereLazyImport = createFileRoute('/resevere')()
const CalendarLazyImport = createFileRoute('/calendar')()
const BookcardtestLazyImport = createFileRoute('/bookcardtest')()
<<<<<<< HEAD
const AboutLazyImport = createFileRoute('/about')()
=======
const OpretBookingLazyImport = createFileRoute('/OpretBooking')()
const MineBookingerLazyImport = createFileRoute('/MineBookinger')()
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

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

<<<<<<< HEAD
const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))
=======
const OpretBookingLazyRoute = OpretBookingLazyImport.update({
  id: '/OpretBooking',
  path: '/OpretBooking',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/OpretBooking.lazy').then((d) => d.Route))

const MineBookingerLazyRoute = MineBookingerLazyImport.update({
  id: '/MineBookinger',
  path: '/MineBookinger',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/MineBookinger.lazy').then((d) => d.Route))
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27

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
<<<<<<< HEAD
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
=======
    '/MineBookinger': {
      id: '/MineBookinger'
      path: '/MineBookinger'
      fullPath: '/MineBookinger'
      preLoaderRoute: typeof MineBookingerLazyImport
      parentRoute: typeof rootRoute
    }
    '/OpretBooking': {
      id: '/OpretBooking'
      path: '/OpretBooking'
      fullPath: '/OpretBooking'
      preLoaderRoute: typeof OpretBookingLazyImport
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
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
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
<<<<<<< HEAD
  '/about': typeof AboutLazyRoute
=======
  '/MineBookinger': typeof MineBookingerLazyRoute
  '/OpretBooking': typeof OpretBookingLazyRoute
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
  '/bookcardtest': typeof BookcardtestLazyRoute
  '/calendar': typeof CalendarLazyRoute
  '/resevere': typeof ResevereLazyRoute
  '/sign-up': typeof SignUpLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
<<<<<<< HEAD
  '/about': typeof AboutLazyRoute
=======
  '/MineBookinger': typeof MineBookingerLazyRoute
  '/OpretBooking': typeof OpretBookingLazyRoute
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
  '/bookcardtest': typeof BookcardtestLazyRoute
  '/calendar': typeof CalendarLazyRoute
  '/resevere': typeof ResevereLazyRoute
  '/sign-up': typeof SignUpLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
<<<<<<< HEAD
  '/about': typeof AboutLazyRoute
=======
  '/MineBookinger': typeof MineBookingerLazyRoute
  '/OpretBooking': typeof OpretBookingLazyRoute
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
  '/bookcardtest': typeof BookcardtestLazyRoute
  '/calendar': typeof CalendarLazyRoute
  '/resevere': typeof ResevereLazyRoute
  '/sign-up': typeof SignUpLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
<<<<<<< HEAD
    | '/about'
=======
    | '/MineBookinger'
    | '/OpretBooking'
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
    | '/bookcardtest'
    | '/calendar'
    | '/resevere'
    | '/sign-up'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
<<<<<<< HEAD
    | '/about'
=======
    | '/MineBookinger'
    | '/OpretBooking'
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
    | '/bookcardtest'
    | '/calendar'
    | '/resevere'
    | '/sign-up'
  id:
    | '__root__'
    | '/'
<<<<<<< HEAD
    | '/about'
=======
    | '/MineBookinger'
    | '/OpretBooking'
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
    | '/bookcardtest'
    | '/calendar'
    | '/resevere'
    | '/sign-up'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
<<<<<<< HEAD
  AboutLazyRoute: typeof AboutLazyRoute
=======
  MineBookingerLazyRoute: typeof MineBookingerLazyRoute
  OpretBookingLazyRoute: typeof OpretBookingLazyRoute
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
  BookcardtestLazyRoute: typeof BookcardtestLazyRoute
  CalendarLazyRoute: typeof CalendarLazyRoute
  ResevereLazyRoute: typeof ResevereLazyRoute
  SignUpLazyRoute: typeof SignUpLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
<<<<<<< HEAD
  AboutLazyRoute: AboutLazyRoute,
=======
  MineBookingerLazyRoute: MineBookingerLazyRoute,
  OpretBookingLazyRoute: OpretBookingLazyRoute,
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
  BookcardtestLazyRoute: BookcardtestLazyRoute,
  CalendarLazyRoute: CalendarLazyRoute,
  ResevereLazyRoute: ResevereLazyRoute,
  SignUpLazyRoute: SignUpLazyRoute,
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
<<<<<<< HEAD
        "/about",
=======
        "/MineBookinger",
        "/OpretBooking",
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
        "/bookcardtest",
        "/calendar",
        "/resevere",
        "/sign-up"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
<<<<<<< HEAD
    "/about": {
      "filePath": "about.lazy.jsx"
=======
    "/MineBookinger": {
      "filePath": "MineBookinger.lazy.jsx"
    },
    "/OpretBooking": {
      "filePath": "OpretBooking.lazy.jsx"
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
    },
    "/bookcardtest": {
      "filePath": "bookcardtest.lazy.jsx"
    },
    "/calendar": {
      "filePath": "calendar.lazy.jsx"
    },
    "/resevere": {
      "filePath": "resevere.lazy.jsx"
    },
    "/sign-up": {
      "filePath": "sign-up.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
