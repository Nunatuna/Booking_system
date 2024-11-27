import React, { useState } from 'react';
import { Button, TextInput, PasswordInput, Space, Title, Image, Flex, Text, Group } from '@mantine/core';
import { getSupabaseClient } from '../supabase/getSupabaseClient';
import LoginGraphic from '../img/login-graphic.png';
import { Link, useNavigate } from '@tanstack/react-router';

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
};

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const supabase = getSupabaseClient();
  const navigate = useNavigate();

  async function signInWithEmail() {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error("Error signing in:", error.message);
        setErrorMessage("Invalid email or password. Please try again.");
      } else {
        setErrorMessage('');
        navigate({ to: '/philip' }); // Navigate to the index page on successful login
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  }

  const handleSignin = (event) => {
    event.preventDefault();
    signInWithEmail();
  };

  return (
    <div style={positionStyle}>
      <div style={containerStyle}>
        <Image style={imageStyle} radius="md" src={LoginGraphic} />
        <Flex justify="center" direction="column" style={{ height: "100%" }}>
          <Title style={{ marginBottom: "1rem", color: "#364FC7" }} order={1}>Login</Title>
          <Text style={{ marginBottom: "1rem", color: "#364FC7" }}>
            Velkommen til Cphbusiness’ bookingsystem. Log ind for at se dine bookinger.
          </Text>
          <form>
            <TextInput
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Space h="lg" />
            <PasswordInput
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Space h="lg" />
            {errorMessage && (
              <Text color="red" size="14px" style={{ marginBottom: "1rem" }}>
                {errorMessage}
              </Text>
            )}
            <Group grow>
              <Button onClick={handleSignin} variant="filled" color="#364FC7" radius="xl">Login</Button>
              <Link style={linkStyle} variant="filled" to="/sign-up">Sign Up</Link>
            </Group>
          </form>
        </Flex>
      </div>
    </div>
  );
}

export default SignIn;
