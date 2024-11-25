import React, { useState } from 'react';
import { Button, TextInput, PasswordInput, Space, Title, Grid, Image, Flex, Container } from '@mantine/core';
import { getSupabaseClient } from '../supabase/getSupabaseClient';
import LoginGraphic from '../img/login-graphic.png';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const supabase = getSupabaseClient();

    async function signInWithEmail() {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            // sign in error messages
            if (error) {
                console.error("Error signing in:", error.message, error.details);
            } else {
                console.log("User data:", data);
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        }
    }

    const handleSignin = (event) => {
        event.preventDefault();
        console.log("Attempting sign in with:", email, password);
        signInWithEmail();
    };

    return (
        <Grid grow gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
            <Grid.Col span={8}>
            <Image radius="md" src={LoginGraphic} />
            </Grid.Col>
            <Grid.Col span={4}>
                <Flex justify="center" direction="column" style={{ height: "100%"}}>
                    <Title style={{ marginBottom: "1rem" }} order={1}>Sign in</Title>
                    <form>
                        <TextInput placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Space h="lg"/>
                        <PasswordInput placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Space h="lg"/>
                        <Button onClick={handleSignin} variant="filled" color="#364FC7" radius="xl">Login</Button>
                    </form>
                </Flex>
            </Grid.Col>
        </Grid>
    );
}

export default SignIn;
