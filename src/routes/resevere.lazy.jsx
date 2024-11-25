import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import NavBar from '../components/NavBar';


export const Route = createLazyFileRoute('/resevere')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
  <div>
    <NavBar />
    <div>Joemama</div>
    </div>
  )
  

  };

