import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Stack } from "@mui/material";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  setTitle: (val: string) => void;
  setContent: (val: string) => void;
  onSave: () => void;
}

export const EditModal = ({
  open,
  onClose,
  title,
  content,
  setTitle,
  setContent,
  onSave,
}: EditModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Edit post</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Content"
            fullWidth
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            bgcolor: "#FFFFFF",
            border: "1px solid #CCCCCC",
            color: "#000",
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onSave}
          variant="contained"
          disabled={!title.trim() || !content.trim()}
          sx={{
            bgcolor: "#7695EC",
            color: "#fff",
            "&:hover": { bgcolor: "#5a7bd6" },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
