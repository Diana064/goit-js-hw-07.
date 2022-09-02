import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = galleryItems;
const galleryMarkup = document.querySelector('.gallery');

// console.log(gallery);
// console.log(gallery);

const markup = gallery
	.map(({ preview, original, description }) => {
		return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
	})
	.join('');

galleryMarkup.insertAdjacentHTML('beforeend', markup);

galleryMarkup.addEventListener('click', urlImage);

function urlImage(event) {
	event.preventDefault();
	const url = event.target.dataset.source;
	console.log(url);
	if (!url) return;
	// console.log(url);
	const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);
	instance.show(() => console.log('lighboxvisible'));
}
