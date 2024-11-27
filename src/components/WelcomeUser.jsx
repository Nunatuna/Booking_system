import React, { useState, useEffect } from "react";
import { getSupabaseClient } from "../supabase/getSupabaseClient";
import CurrentDate from "./CurrentDate";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
};

const WelcomeUser = () => {
  const [displayName, setDisplayName] = useState(null);
  const [error, setError] = useState(null);

  const supabase = getSupabaseClient(); // Use the singleton instance

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        setError("Error fetching user.");
        return;
      }

      if (data.user) {
        const userDisplayName = data.user.user_metadata.display_name;
        setDisplayName(userDisplayName || "Guest");
      }
    };

    fetchUser();
  }, [supabase]);

  if (error) return <p>{error}</p>;

  return (
    <div style={containerStyle}>
      {displayName ? <h2 style={{ margin: "0px" }}>Velkommen tilbage, {displayName}!</h2> : <p>Loading...</p>}
      <CurrentDate />
    </div>
  );
};

export default WelcomeUser;