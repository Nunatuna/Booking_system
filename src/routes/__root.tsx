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
        {/* <Link to="/">Home</Link>
<<<<<<< HEAD
        <Link to="/sofie">sofie test</Link>
        <Link to="/philip">Philip test</Link>
        <Link to="/calendar">calendr</Link>
        <Link to="/resevere">resevere</Link>
        <Link to="/login">login</Link>
        <Link to="/sign-up">Sign Up</Link> */}
=======
        <Link to="/OpretBooking">OpretBooking</Link>
        <Link to="/resevere">resevere</Link>
        <Link to="/">login</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/MineBookinger">MineBookinger</Link> */}
>>>>>>> f34763bfb12a40290ee1893e86555d3916a06d27
      </div> 
      <Outlet />
    </>
  );
}
