import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import MyBookings from "../components/MyBookings"; //Uncomment this line to see My Bookings Component
import NavBar from '../components/NavBar';
// import WelcomeUser from "../components/WelcomeUser";
import Signup from "../components/SignUp";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  return (
    <>
      {/* <WelcomeUser /> */}
      <NavBar />
      <MyBookings />
    </>
  );
}
