import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@mantine/core'
import SignIn from '../components/LogIn'

const containerStyle = {
  padding: '1rem 10rem',
}

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const styles = {
    navbar: {
      padding: '20px',
    },
  }

  return (
    <div style={containerStyle}>
      <SignIn />
    </div>
  )
}
