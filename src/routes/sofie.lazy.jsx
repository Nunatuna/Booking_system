import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from '../components/NavBar'
import Callendar from '../components/Callendar'
import ConfirmMeetingBtn from '../components/ConfirmMeetingBtn'
// import Bekraeftbooking from '../components/BekraeftBooking'

export const Route = createLazyFileRoute('/sofie')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <> 
        <Navbar />
        <Callendar />
        <ConfirmMeetingBtn />
        {/* <Bekraeftbooking /> */}
    </>
  )
}
