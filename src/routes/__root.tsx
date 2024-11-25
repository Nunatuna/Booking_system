import React from "react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export interface RouterContext extends Record<any, any>{
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

function RootRouteWithLayout() {
  return (
    <>
       <div style={{ display: "flex", gap: "20px"}}>
        <Link to="/">Home  </Link>
        <Link to="/about">About  </Link>
        <Link to="/sofie">sofie test  </Link>
        <Link to="/philip">Philip test  </Link>
        <Link to="/login">login </Link>
        <Link to="/calendar">calendr </Link>
        <Link to="/resevere">resevere </Link>
        <Link to="/sign-up">Sign Up </Link>
   
      </div> 
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
