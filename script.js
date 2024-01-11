document.addEventListener('DOMContentLoaded', () => {
  const ceoImages = [
    'gitpush_gitpaid',
    'bunjavascript',
    'supabase',
    'warreninthebuff',
    'techsavvytravvy',
    'mgdotdev',
    'ladybluenotes',
    'swlkr',
    'zeu_dev',
    'nateemerson',
    'sledgedev',
    'kiyov09',
    'danielwalm60394',
    'spirodonfl',
    'trshpuppy',
    'howardl3',
    'patleeman',
    '_abrinsky',
    'samcook_',
    'olavostauros',
    'shreyassanthu77',
    'pbertrand_dev',
    'rustafariandev',
    'justinsuave_',
    'drewskadoosh',
    'loftwah',
    'antoniojasr',
    'mrjaylc',
    'magnum_d1ngus',
    'joshmanders',
    'badcop_',
    'realzvqle',
    'danawoodman',
    'emzraline',
    'ironcladdev',
    'jadbox',
    '0x15f',
    'korjbek',
    '_rosc0e',
    'atalocke',
    'tokiomutex',
    'keyladelslay',
    '0xDuckyDev',
    'AntonyMerleDev',
    'dannybster',
    'MilesFlavel',
    'toinbis',
    'csanyi_andras',
    'majdav_',
    'LLCoolChris_',
    'iliaaamiri',
    'beaulne',
    'RudRecciah',
    'claudiogonzalo',
    'o__boga',
    'jacoblatonis',
    'warptux',
    'chern0CS',
    'IamFridayLove',
    'knewter',
    'zachbellay',
    'Galaxxius',
    'BeAdrien',
    'francisco_melov',
    'CooperTheFox7',
    'TyrelDenison',
    'goulartio',
    'SebTh3Red',
    'jordienr',
    'LiathHelvetica',
    'rogerscissp',
    'dudenamedsteve',
    'rurikid0',
    'bensilverman_',
    'jessesbeets',
    'laame',
    'masnapizda',
    'ChisuwoChimango',
    'lithiumglider',
    'ping_uinos',
    'fahrudotme',
    'braunschweiler',
    'Gettersethya',
    'iamajoe_',
    'developerkwame',
    'AndrewGossage33',
    'jessehattabaugh',
    'paytondev',
    'JettIsOnTheNet',
    'puffercatt',
    'nimeshk_',
    'Dreat_',
    'tercmd',
    'kimjisena',
    'kegor',
    'gcollazo',
    'ttecho2021',
    'NikPoltoratsky',
    'hieemeli',
    'shotmas',
    'ValentinSilves',
    'DairAidarkhanov',
    'jvillavic',
    'DevSiriTweets',
    'CreeCoder',
    'Sagarpatel010',
    'nfldyprdn',
    'UnsignedTom',
    'aShubhamz',
  ];

  // const shillImages = [
  // ];

  populateImages('ceo-container', ceoImages);
  // populateImages('shill-container', shillImages);
});

function populateImages(containerId, images) {
  const container = document.getElementById(containerId);

  images.forEach((image) => {
    const ceoName = encodeURIComponent(image);
    const twitterUrl = `https://twitter.com/${ceoName}`;
    const link = document.createElement('a');
    link.href = twitterUrl;
    link.target = '_blank';

    const imageBox = document.createElement('div');
    imageBox.className = 'image-box';

    const img = document.createElement('img');
    img.src = `${image}.jpg`;
    img.alt = 'co-CEO of HTMX';

    imageBox.appendChild(img);
    link.appendChild(imageBox);
    container.appendChild(link);
  });
}
