import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/philip')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'ezekiels vers 23:20 /philip!'
}
