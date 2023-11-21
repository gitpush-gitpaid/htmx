document.addEventListener('DOMContentLoaded', () => {
  const ceoImages = [
    {
      src: 'htmx_ceo.png',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/gitpush_gitpaid',
    },
    {
      src: 'travvy_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/techsavvytravvy',
    },
    {
      src: 'mg_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/mgdotdev',
    },
    {
      src: 'sara_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/ladybluenotes',
    },
    {
      src: 'swlkr_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/swlkr',
    },
    {
      src: 'zeu_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/zeu_dev',
    },
    {
      src: 'barrett_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/sledgedev',
    },
    {
      src: 'enrique_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/kiyov09',
    },
    {
      src: 'daniel_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/danielwalm60394',
    },
    {
      src: 'spiro_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/spirodonfl',
    },
    {
      src: 'trash_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/trshpuppy',
    },
    {
      src: 'abrinsky_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/_abrinsky',
    },
    {
      src: 'samcook_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/samcook_',
    },
  ];

  const shillImages = [
    {
      src: 'iron_shill.png',
      alt: 'Shill #1 of HTMX',
      url: 'https://twitter.com/ironcladdev',
    },
  ];

  populateImages('ceo-container', ceoImages);
  populateImages('shill-container', shillImages);
});

function populateImages(containerId, images) {
  const container = document.getElementById(containerId);

  images.forEach((image) => {
    const link = document.createElement('a');
    link.href = image.url;
    link.target = '_blank';

    const imageBox = document.createElement('div');
    imageBox.className = 'image-box';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;

    imageBox.appendChild(img);
    link.appendChild(imageBox);
    container.appendChild(link);
  });
}
