import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from '../components/NavBar'

export const Route = createLazyFileRoute('/sofie')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Navbar />
  )
}
