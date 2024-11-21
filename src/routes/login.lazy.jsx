import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /login!'
}