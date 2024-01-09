document.addEventListener('DOMContentLoaded', () => {
  const ceoImages = [
    {
      src: 'htmx_ceo.png',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/gitpush_gitpaid',
    },
    {
      src: 'bunjavascript_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/bunjavascript',
    },
    {
      src: 'supabase_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/supabase',
    },
    {
      src: 'warren_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/warreninthebuff',
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
      src: 'howard_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/howardl3',
    },
    {
      src: 'trashpanda_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/patleeman',
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
      src: 'rustafarian_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/rustafariandev',
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
    {
      src: 'joshmanders_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/joshmanders',
    },
    {
      src: 'bashcop_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/badcop_',
    },
    {
      src: 'zvqle_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/realzvqle',
    },
    {
      src: 'dana_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/danawoodman',
    },
    {
      src: 'emzra_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/emzraline',
    },
    {
      src: 'iron_shill.png',
      alt: 'Shill #1 of HTMX',
      url: 'https://twitter.com/ironcladdev',
    },
    {
      src: 'dunlap_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/jadbox',
    },
    {
      src: 'jakecastro_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/0x15f',
    },
    {
      src: 'korjbek_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/korjbek',
    },
    {
      src: 'braintax_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/_rosc0e',
    },
    {
      src: 'atalocke_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/atalocke',
    },
    {
      src: 'tokiomute_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/tokiomutex',
    },
    {
      src: 'keyladelslay_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/keyladelslay',
    },
    {
      src: 'ducky_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/0xDuckyDev',
    },
    {
      src: 'antony_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/AntonyMerleDev',
    },
    {
      src: 'bruce_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/dannybster',
    },
    {
      src: 'miles_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/MilesFlavel',
    },
    {
      src: 'tomas_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/toinbis',
    },
    {
      src: 'andras_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/csanyi_andras',
    },
    {
      src: 'majdav_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/majdav_',
    },
    {
      src: 'llcoolchris_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/LLCoolChris_',
    },
    {
      src: 'ilia_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/iliaaamiri',
    },
    {
      src: 'beaulne_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/beaulne',
    },
    {
      src: 'RudRecciah_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/RudRecciah',
    },
    {
      src: 'claudiogonzalo_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/claudiogonzalo',
    },
    {
      src: 'o__boga_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/o__boga',
    },
    {
      src: 'jacoblatonis_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/jacoblatonis',
    },
    {
      src: 'warptux_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/warptux',
    },
    {
      src: 'chern0CS_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/chern0CS',
    },
    {
      src: 'IamFridayLove_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/IamFridayLove',
    },
    {
      src: 'knewter_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/knewter',
    },
    {
      src: 'zachbellay_ceo.jpg',
      alt: 'co-ceo of HTMX',
      url: 'https://twitter.com/zachbellay',
    },
  ];

  // const shillImages = [
  // ];

  populateImages('ceo-container', ceoImages);
  // populateImages('shill-container', shillImages);
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
