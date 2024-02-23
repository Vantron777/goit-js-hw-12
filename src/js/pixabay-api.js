export function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY_API = '?key=42408826-646f1c33dda85bc33c99aac2a';
  const PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + END_POINT + KEY_API + PARAMS;

  return fetch(url)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      throw new Error(err.status);
    });
}
