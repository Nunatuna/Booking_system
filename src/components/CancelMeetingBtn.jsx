import { getSupabaseClient } from "../supabase/getSupabaseClient";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Modal, Group, Text } from "@mantine/core";

const CancelMeetingBtn = ({ roomId }) => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCancel = async () => {
    setLoading(true);
    const supabase = getSupabaseClient();

    // Delete the meeting room reservation from the Supabase table
    const { error } = await supabase
      .from("MeetingRooms") // Table name
      .delete()
      .eq("id", roomId); // Match the room ID

    if (error) {
      console.error("Error deleting the booking:", error);
    } else {
      // Optionally refresh the page or trigger a state update in the parent component
      window.location.reload(); // Replace with a state update for better user experience
    }

    setLoading(false);
    setModalOpen(false); // Close the modal after completion
  };

  return (
    <>
      {/* Opens modal */}
      <Button style={{ marginLeft: "auto" }} onClick={() => setModalOpen(true)} disabled={loading} variant="filled" color="#364FC7" radius="xl">Cancel Booking</Button>

      {/* Confirmation Modal */}
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Cancel Booking" centered>

        <Text style={{ marginBottom: "20px" }}>Are you sure you want to cancel this booking?</Text>

        <Group justify="space-between" grow>

          {/* Closes modal */}
          <Button variant="default" onClick={() => setModalOpen(false)} disabled={loading}>No, Keep It</Button>
          
          {/* Deletes Booking */}
          <Button onClick={handleCancel} disabled={loading} color="#364FC7" variant="filled">Cancel Booking</Button>
        </Group>

      </Modal>
    </>
  );
};

// Prop type validation
CancelMeetingBtn.propTypes = {
  roomId: PropTypes.number.isRequired, // Ensures roomId is a required number
};

export default CancelMeetingBtn;
