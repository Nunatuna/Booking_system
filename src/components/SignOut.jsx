import React from 'react';
import { Button } from '@mantine/core';
import { getSupabaseClient } from '../supabase/getSupabaseClient';
import { useNavigate } from '@tanstack/react-router'; // Import useNavigate

function SignOutButton({ onSignOut }) {
    const supabase = getSupabaseClient();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error('Error signing out:', error.message);
                alert('Failed to sign out. Please try again.');
            } else {
                console.log('User signed out successfully.');
                if (onSignOut) {
                    onSignOut(); // Callback for additional actions, like closing a modal
                }
                navigate({ to: '/login' }); // Redirect to the login page
            }
        } catch (err) {
            console.error('Unexpected error during sign-out:', err);
            alert('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <Button variant="outline" color="red" radius="xl" onClick={handleSignOut}>
            Sign Out
        </Button>
    );
}

export default SignOutButton;
