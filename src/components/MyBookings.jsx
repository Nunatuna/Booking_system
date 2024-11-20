import { useEffect, useState } from "react";
import { getSupabaseClient } from "../supabase/getSupabaseClient";
import Spinner from './Spinner';
import CancelMeetingBtn from './CancelMeetingBtn';
import { Group } from "@mantine/core";


// CSS styles
const loadingStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "200px",
};

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    border: "1px solid #e3e3e3",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const roomsStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#DBE4FF",
    borderRadius: "20px",
    padding: "20px",
    gap: "15px",
};

const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    marginTop: "0px",
    color: "#364FC7",
};

const roomItemsStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: "1 1 calc(100% - 30px)",
    padding: "12px 20px",
    border: "1px solid #364FC7",
    borderRadius: "32px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "15px",
};

const roomNameLabelStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#364FC7",
    marginBottom: "5px",
    marginTop: "0px",
};

const roomLabelStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    margin: "0px",
};

const MyBookings = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMeetingRooms() {
        setLoading(true);
        const supabase = getSupabaseClient();

        // Fetch data from the "MeetingRooms" table in Supabase
        const { data, error } = await supabase
            .from("MeetingRooms") // MeetingRooms table
            .select("id, Room_name, Start_time, End_time"); // Select id, room name and start/end times coloumns

        if (error) { // Error message
            console.error("Error fetching meeting rooms:", error);
        } else {
            setRooms(data); // Set the fetched data to the rooms state
        }
        setLoading(false); // Set loading state to false
        }

        fetchMeetingRooms(); // Call the fetchMeetingRooms function
  }, []);

  if (loading) { // Loading spinner that appears when the data is loading
    return <div style={loadingStyle}><Spinner /></div>;
  }

    // Helper function to format date and time to DD/MM & HH:MM
    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return date.toLocaleString('en-US', { 
          day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
        });
      };


  return (
    <div style={containerStyle}>
        <h3 style={headerStyle}>My Bookings</h3>
        <div style={roomsStyle}>
            {rooms.length > 0 ? (
                <Group justify="space-between" gap="xs">
                    {rooms.map((room) => (
                        <p key={room.id} style={roomItemsStyle}>
                            <div>
                                <p style={roomNameLabelStyle}><span >{room.Room_name}</span></p>
                                <p style={roomLabelStyle}><span>{formatDateTime(room.Start_time)} - {formatDateTime(room.End_time)}</span></p>
                            </div>
                            <CancelMeetingBtn roomId={room.id} />
                        </p>
                        
                    ))}
                </Group>
            ) : (
                <p>You don’t have any bookings yet.</p>
            )}
        </div>
    </div>
  );
};

export default MyBookings;
