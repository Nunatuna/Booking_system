import React, { useState } from "react";
import { getSupabaseClient } from "../supabase/getSupabaseClient";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
  
    const supabase = getSupabaseClient(); // Use the singleton instance
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      setError(null);
      setSuccess(null);
  
      try {
        // Step 1: Sign up the user
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
  
        if (error) throw error;
  
        // Step 2: Update the user's display name
        const user = data.user;
        if (user) {
          const { error: updateError } = await supabase.auth.updateUser({
            data: { display_name: displayName },
          });
  
          if (updateError) throw updateError;
        }
  
        setSuccess("Sign up successful!");
        setEmail("");
        setPassword("");
        setDisplayName("");
      } catch (err) {
        setError(err.message);
      }
    };
  
    return (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    );
  };
  
  export default SignUpForm;