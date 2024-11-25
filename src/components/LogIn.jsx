import { createLazyFileRoute } from '@tanstack/react-router'
import { TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { Button, Title, Text } from '@mantine/core';
import { Container } from '@mantine/core';
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, supabaseKey } from '../supabase/supabaseClient';

const supabaseUrl = "https://iwysntwharfmhhzyetmm.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eXNudHdoYXJmbWhoenlldG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5Mjg0MDcsImV4cCI6MjA0NzUwNDQwN30.-SHihWD9zkroJz88BMw6BztAa9srCXiAiw8IMLg5nP4"
const supabase = createClient(supabaseUrl, supabaseKey)

function LoginForm(){
    //container kode/styling
   //ændre funktionnavn fra demoProps til containerProps
   const styles = {
    cumtainer:{
      border: '0.5px solid black',
      padding: '40px',
    }
  };

  //useState er startværdien. Den er tom, så man selv kan skrive email samt password.
 const [emailLogin, setEmailLogin] = useState('');
 const [passwordLogin, setPasswordLogin] = useState('');
   
  //async er nødvendig for at vi kan bruge await. 
  //async betyder at vi kan bruge await fordi vi bruger await hvilket betyder at vi kan vente på en anden funktion, fordi 
  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword(
    {email: emailLogin, password: passwordLogin,
    
    })
   console.log(data, error);
  }

//knap som submitter email og password.
const handleSignup = (event) => {
 
  //even preventer at siden reloader når du skriver email og password.
  event.preventDefault();
  console.log(emailLogin, passwordLogin);
  signInWithEmail();
}
// creeper exploding SÆSON 1!!!!!!!!!! o i i a o o i i  a aa

    return(
        <div style={styles.cumtainer}>
           <Title order={2}>Login</Title>
           <Text>Velkommen til Cphbusiness bookingsystem. Log ind for at se dine bookinger</Text>
            <TextInput
              label="Email"
              description="please type your email"
              placeholder="Email"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <PasswordInput
              label="Password"
              description="please type your password"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <Button variant="filled" color="#748FFC" size="lg" radius="xl" onClick={handleSignup}>Login</Button>
      </div>
    )
}

export default LoginForm;


