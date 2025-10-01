import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteModal = ({ open, onClose, onDelete }: DeleteModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 660,
          height: 146,
          borderRadius: 2,
          border: "1px solid #CCCCCC",
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle
        sx={{
          p: "24px",
          m: 0,
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        Are you sure you want to delete this post?
      </DialogTitle>

      <DialogActions
        sx={{
          px: 3, 
          pb: 3, 
          pt: 2,
        }}
      >
        <Button
          onClick={onClose}
          sx={{
            width: 120,
            height: 32,
            borderRadius: 1,
            border: "1px solid #999999",
            bgcolor: "#FFFFFF",
            color: "#000",
            fontWeight:700,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#e0e0e0",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onDelete}
          sx={{
            width: 120,
            height: 32,
            borderRadius: 1,
            bgcolor: "#FF5151",
            fontWeight: 700,
            color: "#FFFFFF",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#e04343",
            },
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
