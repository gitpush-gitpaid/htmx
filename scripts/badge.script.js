import { ceoList } from '../lists/ceos.list.js';

function ceoBadgeBtn() {
  const searchInput = document.getElementById('searchInput');
  const canvas = document.getElementById('ceoCanvas');
  const ctx = canvas.getContext('2d');
  const searchValue = searchInput.value.toLowerCase().trim();
  const canvasSize = 500;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  const foundCeo = ceoList.find((ceo) => ceo.toLowerCase() === searchValue);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (foundCeo) {
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvasSize, canvasSize);
      const overlayImage = new Image();
      overlayImage.onload = function () {
        ctx.drawImage(overlayImage, 0, 0, canvasSize, canvasSize);
        transferCanvasToImage();
      };
      overlayImage.src = 'assets/htmx_border.png';
    };
    img.src = `ceos/${foundCeo}.jpg`;
  } else {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('CEO not found', canvas.width / 2, canvas.height / 2);
  }
}

function transferCanvasToImage() {
  const canvas = document.getElementById('ceoCanvas');
  const ceoImage = document.getElementById('ceoImage');
  ceoImage.src = canvas.toDataURL('image/jpeg');
  ceoImage.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('find-ceo-badge-btn'); // Replace with your button's ID
  if (button) {
    button.addEventListener('click', ceoBadgeBtn);
  }
});
