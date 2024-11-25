import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from '../components/NavBar'
import NewBooking from '../components/NewBooking'
import MyBookings from '../components/MyBookings'
import Bookcard from '../components/bookcard'
import Callendar from '../components/Callendar'

export const Route = createLazyFileRoute('/sofie')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <> 
        <Navbar />
        <Callendar />
    </>
  )
}
