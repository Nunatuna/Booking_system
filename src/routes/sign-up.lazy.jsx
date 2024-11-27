import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import SignUpForm from '../components/SignUp';

export const Route = createLazyFileRoute('/sign-up')({
  component: RouteComponent,
})

const positionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };
  
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
  };
  
  const imageStyle = {
    width: "90%",
  };
  
  const linkStyle = {
    textDecoration: "none",
    backgroundColor: "#4C6EF5",
    padding: "6px 18px",
    borderRadius: "24px",
    textAlign: "center",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
  }

function RouteComponent() {
    return (
        <div style={positionStyle}>
            <SignUpForm />
        </div>
      );
}
