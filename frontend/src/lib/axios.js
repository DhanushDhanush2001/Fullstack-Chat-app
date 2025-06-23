export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8000/api"
      : "https://fullstack-chat-app-n871.onrender.com/api",
  withCredentials: true,
});
