import React from "react";
import { Modal, Button, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { User } from "../intefaces/user";

interface CtaModalProps {
  open: boolean;
  onClose: () => void;
  handleConfirm: () => void;
  userData: User | null;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  maxWidth: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const buttonStyle = {
  width: "48%",
  margin: "0 1%",
};

const CtaModal: React.FC<CtaModalProps> = ({
  open,
  onClose,
  handleConfirm,
  userData,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <h2 style={{ marginBottom: "40px" }}>
          Are you sure you want to delete{" "}
          {userData?.firstName + " " + userData?.lastName}?
        </h2>{" "}
        {/* Added margin-bottom */}
        <div style={{ display: "flex", width: "100%", gap: "10px" }}>
          {" "}
          <Button
            variant="outlined"
            color="error"
            onClick={onClose}
            sx={{ ...buttonStyle, color: "red", borderColor: "red" }}
          >
            No
          </Button>
          <Button
            variant="contained"
            onClick={handleConfirm}
            sx={{
              ...buttonStyle,
              backgroundColor: "#0E86D4",
              "&:hover": { backgroundColor: "#055C9D" },
            }}
          >
            Yes
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CtaModal;
