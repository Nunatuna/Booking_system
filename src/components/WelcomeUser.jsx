import React, { useState, useEffect } from "react";
import { getSupabaseClient } from "../supabase/getSupabaseClient";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
};

const WelcomeUser = () => {
  const [displayName, setDisplayName] = useState(null);

  const supabase = getSupabaseClient(); // Use the singleton instance

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        const userDisplayName = data.user.user_metadata.display_name;
        setDisplayName(userDisplayName || "Guest");
      }
    };

    fetchUser();
  }, [supabase]);

  return (
    <div style={containerStyle}>
      {displayName ? <h2 style={{ margin: "0px" }}>Velkommen tilbage, {displayName}!</h2> : <p>Ikke logget ind</p>}
    </div>
  );
};

export default WelcomeUser;