import { useState } from "react";
import { Button } from '@mantine/core';

// Style Constants
const buttonStyle = {
  marginLeft: "auto",
  zIndex: "1",
};

const overlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1000",
};

const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  width: "90%",
  maxWidth: "400px",
};

const headerStyle = {
  color: "#364FC7",
};

const actionsStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
};

const CancelMeetingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleConfirm = () => {
    // ---------------------------------
    // cancellation logic goes here (coming soon TM)
    // ---------------------------------
    closeModal();
  };

  return (
    <>
      {/* Cancel Button */}
      <Button variant="filled" onClick={openModal} color="#364FC7" radius="xl" style={buttonStyle}>Cancel Booking</Button>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2 style={headerStyle}>Confirm Cancellation</h2>
            <p>Are you sure you want to cancel this booking?</p>
            <div style={actionsStyle}>
              <Button onClick={closeModal} variant="filled" color="#748FFC" radius="xl">No, Go Back</Button>
              <Button onClick={handleConfirm} variant="filled" color="#364FC7" radius="xl">Yes, Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CancelMeetingButton;
