import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";

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
    <Dialog open={open} onClose={onClose} fullWidth
    PaperProps={{
      sx: {
        width: 660,
        minHeight: 334,
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
          fontSize: 22,
        }}
      >
        Edit item
      </DialogTitle>
      <DialogContent>
        <Stack>
          <Typography fontSize={16} fontWeight={400} pb={1}>
            Title
          </Typography>
          <TextField
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              height: 32,
              borderRadius: 2,
              paddingBottom: 1,
              "& .MuiOutlinedInput-root": {
                height: 32,
                borderRadius: 1,
                "& fieldset": {
                  borderColor: "#777777",
                  borderWidth: 1,
                },
              },
            }}
          />
          <Typography fontSize={16} fontWeight={400} pt={3} pb={1}>
            Content
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "& fieldset": {
                  borderColor: "#777777",
                  borderWidth: 1,
                },
                "&:hover fieldset": {
                  borderColor: "#777777",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#777777",
                },
              },
            }}
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{paddingBottom: 2}}>
        <Button
          onClick={onClose}
          sx={{
            width: 120,
            height: 32,
            borderRadius: 1,
            border: "1px solid #000",
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
          onClick={onSave}
          variant="contained"
          disabled={!title.trim() || !content.trim()}
          sx={{
            width: 120,
            height: 32,
            bgcolor: "#47B960",
            color: "#000",
            fontWeight:700,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#47B960",
            },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
