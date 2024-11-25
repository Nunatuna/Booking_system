import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import MyBookings from "../components/MyBookings"; //Uncomment this line to see My Bookings Component
import NavBar from '../components/NavBar';
import SignIn from "../components/login2";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  return (
    <>
      <NavBar />
      <h3>Welcome Home!</h3>
      <MyBookings />
      <SignIn />
    </>
  );
}
