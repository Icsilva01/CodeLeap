import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DeleteModal } from "../Components/ModalDelete";
import { EditModal } from "../Components/ModalEdite";
import type { Post } from "../Components/types";
import { useName } from "../Context/UserContext";
import { createPost, deletePost, editPost, fetchPosts } from "../Services/api";

export const Main = () => {
  const { username } = useName();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  // estados para editar/deletar
  const [openDelete, setOpenDelete] = useState<null | number>(null);
  const [openEdit, setOpenEdit] = useState<null | Post>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const loadPosts = async () => {
    try {
      const res = await fetchPosts();
      setPosts(res.data.results || []);
    } catch (err) {
      console.error("Erro ao carregar posts:", err);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleCreate = async () => {
    if (!title.trim() || !content.trim()) return;

    try {
      await createPost({ username, title, content });
      setTitle("");
      setContent("");
      loadPosts();
    } catch (err) {
      console.error("Erro ao criar post:", err);
    }
  };

  const handleDelete = async () => {
    if (openDelete !== null) {
      try {
        await deletePost(openDelete);
        setOpenDelete(null);
        loadPosts();
      } catch (err) {
        console.error("Erro ao deletar post:", err);
      }
    }
  };

  const handleEdit = async () => {
    if (openEdit) {
      try {
        await editPost(openEdit.id, {
          title: editTitle,
          content: editContent,
        });
        setOpenEdit(null);
        loadPosts();
      } catch (err) {
        console.error("Erro ao editar post:", err);
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
      bgcolor="#DDDDDD"
    >
      <Stack
        width={{ xs: "100%", sm: 800 }}
        bgcolor="#FFFFFF"
        minHeight="100vh"
        boxShadow={0}
        spacing={3}
      >
        {/* Header */}
        <Box pl={4} bgcolor={"#7695EC"} py={"27px"}>
          <Typography fontWeight={700} fontSize={22} color="#FFFFFF">
            CodeLeap Network
          </Typography>
        </Box>

        {/* Formulário */}
        <Stack spacing={2} px={3}>
          <Box
            sx={{
              width: 752,
              height: 334,
              borderRadius: 2, // 16px
              border: "1px solid #999999",
              p: 3, // padding interno para ficar com espaçamento
              display: "flex",
              flexDirection: "column",
              gap: 2, // espaçamento vertical entre Title e Content
            }}
          >
            <Typography fontWeight={700} fontSize={22}>
              What’s on your mind?
            </Typography>
            {/* Title */}
            <Box>
              <Typography fontSize={16} fontWeight={400} mb={1}>
                Title
              </Typography>
              <TextField
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                sx={{
                  height: 32,
                  borderRadius: 2, // 8px
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
            </Box>

            {/* Content */}
            <Box>
              <Typography fontSize={16} fontWeight={400} mb={1}>
                Content
              </Typography>
              <TextField
                placeholder="Enter content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                multiline
                minRows={2} // controla altura mínima
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
            </Box>
          </Box>

          <Box display="flex" justifyContent="flex-end" pt={2} pb={3}>
            <Button
              onClick={handleCreate}
              disabled={!title.trim() || !content.trim()}
              sx={{
                width: 120,
                height: 32,
                borderRadius: 1,
                backgroundColor:
                  title.trim() && content.trim() ? "#7695EC" : "#C0C0C0",
                textTransform: "none",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "16px",
                "&:hover": {
                  backgroundColor:
                    title.trim() && content.trim() ? "#5a7bd6" : "#C0C0C0",
                },
              }}
            >
              <Typography fontSize={16} fontWeight={700}>
                Create
              </Typography>
            </Button>
          </Box>
        </Stack>

        {/* Lista de posts */}
        <Stack spacing={2} px={3} pb={4}>
          {posts.map((post) => (
            <Box
              key={post.id}
              border="1px solid #CCCCCC"
              borderRadius={2}
              bgcolor="#fff"
            >
              {/* Header do post com título e botões */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bgcolor="#7695EC"
                sx={{
                  borderTopLeftRadius: 8, // acompanha o borderRadius do post
                  borderTopRightRadius: 8, // acompanha o borderRadius do post
                  px: 2, // padding horizontal
                  py: 1, // padding vertical
                }}
              >
                <Typography fontWeight={700} color="#FFFFFF">
                  {post.title}
                </Typography>

                {/* Ícones só aparecem se o post for do usuário logado */}
                {post.username === username && (
                  <Box display="flex" gap={1}>
                    <IconButton
                      size="small"
                      onClick={() => {
                        setOpenEdit(post);
                        setEditTitle(post.title);
                        setEditContent(post.content);
                      }}
                    >
                      <Edit fontSize="small" sx={{ color: "#FFFFFF" }} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => setOpenDelete(post.id)}
                    >
                      <Delete fontSize="small" sx={{ color: "#FFFFFF" }} />
                    </IconButton>
                  </Box>
                )}
              </Box>
              <Typography fontSize={12} color="gray" px={2}>
                @{post.username}
              </Typography>

              <Typography fontSize={14} color="text.secondary" mt={1} px={2}>
                {post.content}
              </Typography>
            </Box>
          ))}
        </Stack>

        <DeleteModal
          open={openDelete !== null}
          onClose={() => setOpenDelete(null)}
          onDelete={handleDelete}
        />

        <EditModal
          open={!!openEdit}
          onClose={() => setOpenEdit(null)}
          title={editTitle}
          content={editContent}
          setTitle={setEditTitle}
          setContent={setEditContent}
          onSave={handleEdit}
        />
      </Stack>
    </Box>
  );
};
