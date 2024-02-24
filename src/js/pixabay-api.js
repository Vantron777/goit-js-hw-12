import axios from 'axios';

export async function fetchGallery(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY_API = '?key=42408826-646f1c33dda85bc33c99aac2a';
  const PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + END_POINT + KEY_API + PARAMS;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
}
