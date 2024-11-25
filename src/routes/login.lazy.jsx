import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Flex, Grid } from '@mantine/core'
import CPHLogo from '../components/CPHLogo';
import SignIn from '../components/LogIn';


export const Route = createLazyFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const styles = {
    navbar: {
      padding: '20px',
    },
  }
  
  return (
    <>
    <Grid grow>
      <Grid.Col>
        <Flex>
          <CPHLogo />
        </Flex>
      </Grid.Col>
      <Grid.Col>
        <Flex mih={50} justify="center" align="center" direction="column" wrap="wrap">
          <SignIn />
        </Flex>
      </Grid.Col>
    </Grid>
    </>
  )
}
