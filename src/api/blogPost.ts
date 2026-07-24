import axios from 'axios';

export async function fetchPosts() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/blogposts`,
  );
  return response.data;
}
