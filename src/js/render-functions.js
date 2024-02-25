import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const galleryEl = document.querySelector('.gallery');

if (!galleryEl) {
  console.error('Gallery element not found on the page');
}

export async function fetchAndDisplayImages(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    imageTemplate(data);
    smoothScroll();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export function imageTemplate(data) {
  // galleryEl.innerHTML = '';
  const markup = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
    <div class="image-description">
      <p><b>Likes: </b>${likes}</p>
      <p><b>Views: </b>${views}</p>
      <p><b>Comments: </b>${comments}</p>
      <p><b>Downloads: </b>${downloads}</p>
    </div>
  </a>
</li>`;
      }
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
  });
  lightbox.refresh();
}

function smoothScroll() {
  const cardHeight = galleryEl.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
