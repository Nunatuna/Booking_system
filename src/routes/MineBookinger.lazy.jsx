import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'
import MyBookings from '../components/MyBookings' //Uncomment this line to see My Bookings Component
import NavBar from '../components/NavBar'

export const Route = createLazyFileRoute('/MineBookinger')({
  component: Index,
})

function Index() {
  const context = useRouteContext({ from: '/MineBookinger' })
  console.log(context)

  return (
    <>
      <NavBar />
      <MyBookings />
    </>
  )
}
