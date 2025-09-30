import axios from "axios"

const api = axios.create({
  baseURL: "https://dev.codeleap.co.uk/careers/",
});

export const fetchPosts = () => api.get("/");
export const createPost = (data:{username: string; title: string; content:string}) => api.post("/", data);
export const deletePost = (id:number) => api.delete(`/${id}`);
export const editPost = (id: number, data:{title:string; content:string}) => api.patch(`/${id}`, data)
