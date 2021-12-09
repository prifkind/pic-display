import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KtgU2kgmfXQgoI1tfB8Yjv-VLMMrQJTfP8WRvnJXakI",
  },
});
