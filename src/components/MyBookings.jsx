import React, { useState, useEffect } from 'react';
import Spinner from "./Spinner";
import { getSupabaseClient } from "../supabase/getSupabaseClient";
import { Title, Text, Group } from '@mantine/core';
import CancelMeetingBtn from './CancelMeetingBtn';

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
    justifyContent: "center",
    backgroundColor: "#DBE4FF",
    borderRadius: "20px",
    padding: "20px",
    gap: "15px",
};

const roomItemsStyle = {
    flex: "100%",
    padding: "0.8rem 1.5rem",
    border: "1px solid #364FC7",
    borderRadius: "2rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const MyBookings = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMeetingRooms() {
            setLoading(true);
            const supabase = getSupabaseClient();

            const { data, error } = await supabase
                .from("MeetingRooms")
                .select("id, Room_name, Start_time, End_time");

            if (error) {
                console.error("Error fetching meeting rooms:", error);
            } else {
                setRooms(data);
            }
            setLoading(false);
        }

        fetchMeetingRooms();
    }, []);

    const removeRoom = (roomId) => {
        setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
    };

    if (loading) {
        return <div style={loadingStyle}><Spinner /> </div>;
    }

    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return date.toLocaleString('en-US', { 
            day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
        });
    };

    return (
        <div style={containerStyle}>
            <Title c="#364FC7" order={1} style={{ marginBottom: "2rem" }}>My Bookings</Title>
            <div style={roomsStyle}>
                {rooms.length > 0 ? (
                    <Group justify="space-between" gap="xs">
                        {rooms.map((room) => (
                            <Group key={room.id} style={roomItemsStyle}>
                                <div>
                                    <Text c="#364FC7" fw={500} size="md">{room.Room_name}</Text>
                                    <Text fw={400} size="md">{formatDateTime(room.Start_time)} - {formatDateTime(room.End_time)}</Text>
                                </div>
                                <CancelMeetingBtn roomId={room.id} onCancel={removeRoom} />
                            </Group>
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