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
        <Link to="/">Home</Link>
        <Link to="/OpretBooking">OpretBooking</Link>
        <Link to="/resevere">resevere</Link>
        <Link to="/">login</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/MineBookinger">MineBookinger</Link>
      </div> 
      <Outlet />
    </>
  );
}
