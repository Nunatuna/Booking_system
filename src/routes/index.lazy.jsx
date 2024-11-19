import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
// import MyBookings from "../components/MyBookings"; //Uncomment this line to see My Bookings Component

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  return (
    <>
      <h3>Welcome Home!</h3>
      {/* <MyBookings /> Uncomment this line to see My Bookings Component */}
    </>
  );
}
