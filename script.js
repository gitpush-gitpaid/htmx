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
      src: 'nate_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/nateemerson',
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
    {
      src: 'stauros_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/olavostauros',
    },
    {
      src: 'shreyas_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/shreyassanthu77',
    },
    {
      src: 'bertrand_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/pbertrand_dev',
    },
    {
      src: 'justin_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/justinsuave_',
    },
    {
      src: 'drew_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/drewskadoosh',
    },
    {
      src: 'loftwah_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/loftwah',
    },
    {
      src: 'antonio_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/antoniojasr',
    },
    {
      src: 'mrjay_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/mrjaylc',
    },
    {
      src: 'dogue_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/magnum_d1ngus',
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
