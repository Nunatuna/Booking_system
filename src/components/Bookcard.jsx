import React from 'react'
import { Group } from '@mantine/core';
import  ConfirmMeetingBtn   from './ConfirmMeetingBtn';


function Bookcard() {
    
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


  return (
    <div>
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
                            <ConfirmMeetingBtn roomId={room.id} />
                        </p>
                        
                    ))}
                </Group>
            ) : (
                <p>You dont have any Bookings yet.</p>
            )}
        </div>
    </div>

    </div>
    
  )
  
}
export default Bookcard;