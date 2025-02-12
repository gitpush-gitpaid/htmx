import { ceoList } from '../lists/ceos.list.js';
import { bodList } from '../lists/bod.list.js';
import { jrCeoList } from '../lists/jr.ceo.list.js';

document.addEventListener('DOMContentLoaded', () => {
  shuffleArray(ceoList);
  populateCeos('bod-container', 'bod', bodList);
  populateCeos('ceo-container', 'ceos', ceoList);
  populateCeos('jrceo-container', 'jrceos', jrCeoList);

  const findCeoInput = document.getElementById('findCeo');
  findCeoInput.addEventListener('input', filterImages);
  document.getElementById('ceoCount').textContent = `${ceoList.length}`;

  const hash = window.location.hash.substring(1);
  if (hash) {
    findCeoInput.value = decodeURIComponent(hash).replace(/-/g, ' ');
    filterImages();
  }
});

function populateCeos(containerId, folder, images) {
  const container = document.getElementById(containerId);
  container.className = 'flex flex-wrap justify-center px-4 md:px-6';

  images.forEach((image) => {
    const ceoName = encodeURIComponent(image);
    const twitterUrl = `https://twitter.com/${ceoName}`;
    const link = document.createElement('a');
    link.href = twitterUrl;
    link.target = '_blank';
    link.className = 'block m-2';

    const imageBox = document.createElement('div');
    imageBox.id = image.toLowerCase().replace(/\s+/g, '-');
    imageBox.className = 'image-box relative overflow-hidden rounded-lg';

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.width = 400;
    img.height = 400;
    img.src = `${folder}/${image}.jpg`;
    img.alt = image;
    img.className =
      'block xs:w-[200px] md:max-w-[300px] h-auto transition-transform duration-300 hover:scale-110 rounded-lg';

    const textBox = document.createElement('div');
    textBox.className =
      'rounded-tl-lg text-xs rounded-br-sm absolute bottom-0 right-0 bg-black text-white p-1';
    textBox.textContent = image;
    textBox.style.zIndex = 10;

    imageBox.appendChild(img);
    imageBox.appendChild(textBox);
    link.appendChild(imageBox);
    container.appendChild(link);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function filterImages() {
  const searchValue = document
    .getElementById('findCeo')
    .value.toLowerCase()
    .trim();
  const ceoContainer = document.getElementById('ceo-container');
  const jrCeoContainer = document.getElementById('jrceo-container');
  const images = ceoContainer.querySelectorAll('a');
  images.forEach((image) => {
    const ceoName = image.querySelector('img').alt.toLowerCase().trim();
    image.style.display = ceoName.includes(searchValue) ? 'block' : 'none';
  });
}
