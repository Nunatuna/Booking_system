import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Bookcard from '../components/bookcard'


export const Route = createLazyFileRoute('/bookcardtest')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Bookcard />
  )}
