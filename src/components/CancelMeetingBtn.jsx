import { getSupabaseClient } from "../supabase/getSupabaseClient";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Modal, Group, Text } from "@mantine/core";

const CancelMeetingBtn = ({ roomId, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCancel = async () => {
    setLoading(true);
    const supabase = getSupabaseClient();

    const { error } = await supabase
      .from("MeetingRooms")
      .delete()
      .eq("id", roomId);

    if (error) {
      console.error("Error deleting the booking:", error);
    } else {
      onCancel(roomId); // Call the parent function to remove the room from the state
    }

    setLoading(false);
    setModalOpen(false);
  };

  return (
    <>
      <Button style={{ marginLeft: "auto" }} onClick={() => setModalOpen(true)} disabled={loading} variant="filled" color="#364FC7" radius="xl">Cancel Booking</Button>

      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Cancel Booking" centered>
        <Text style={{ marginBottom: "20px" }}>Are you sure you want to cancel this booking?</Text>
        <Group justify="space-between" grow>
          <Button variant="default" onClick={() => setModalOpen(false)} disabled={loading}>No, Keep It</Button>
          <Button onClick={handleCancel} disabled={loading} color="#364FC7" variant="filled">Cancel Booking</Button>
        </Group>
      </Modal>
    </>
  );
};

CancelMeetingBtn.propTypes = {
  roomId: PropTypes.number.isRequired,
  onCancel: PropTypes.func.isRequired, // Ensure onCancel is a required function
};

export default CancelMeetingBtn;
