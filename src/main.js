import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { galleryEl } from './js/render-functions';
import { imageTemplate } from './js/render-functions';

const formEl = document.querySelector('.img-search-form');
const loaderEl = document.querySelector('.loader');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  galleryEl.innerHTML = '';
  loaderEl.classList.remove('hidden');
  const query = e.target.elements.query.value.trim();
  fetchImages(query).then(data => {
    if (data.totalHits === 0 || query === '') {
      loaderEl.classList.add('hidden');
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
      });
    } else {
      loaderEl.classList.add('hidden');
      imageTemplate(data);
    }
  });
  e.target.reset();
}
