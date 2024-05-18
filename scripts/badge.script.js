import { ceoList } from '../lists/ceos.list.js';

function ceoBadgeBtn() {
  const searchInput = document.getElementById('searchInput');
  const searchValue = searchInput.value.toLowerCase().trim();
  const foundCeo = ceoList.find((ceo) => ceo.toLowerCase() === searchValue);

  if (foundCeo) {
    drawBadge(
      foundCeo,
      'ceoCanvas1',
      'ceoImage1',
      'assets/sawaratsuki1004_ceo_border.png'
    );
    drawBadge(foundCeo, 'ceoCanvas2', 'ceoImage2', 'assets/htmx_border.png');
  } else {
    showNotFound('ceoCanvas1');
    showNotFound('ceoCanvas2');
  }
}

function drawBadge(ceo, canvasId, imageId, overlaySrc) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const canvasSize = 500;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvasSize, canvasSize);
    const overlayImage = new Image();
    overlayImage.onload = function () {
      ctx.drawImage(overlayImage, 0, 0, canvasSize, canvasSize);
      transferCanvasToImage(canvasId, imageId);
    };
    overlayImage.src = overlaySrc;
  };
  img.src = `ceos/${ceo}.jpg`;
}

function showNotFound(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const canvasSize = 500;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText('CEO not found', canvas.width / 2, canvas.height / 2);
}

function transferCanvasToImage(canvasId, imageId) {
  const canvas = document.getElementById(canvasId);
  const ceoImage = document.getElementById(imageId);
  ceoImage.src = canvas.toDataURL('image/jpeg');
  ceoImage.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('find-ceo-badge-btn');
  if (button) {
    button.addEventListener('click', ceoBadgeBtn);
  }
});
