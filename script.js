document.addEventListener('DOMContentLoaded', () => {
  const ceoImages = [
    'gitpush_gitpaid',
    'bunjavascript',
    'supabase',
    'WarrenInTheBuff',
    'techsavvytravvy',
    'mgdotdev',
    'LadyBluenotes',
    'swlkr',
    'zeu_dev',
    'nateemerson',
    'SledgeDev',
    'kiyov09',
    'DanielWalm60394',
    'spirodonfl',
    'trshpuppy',
    'HowardL3',
    'patleeman',
    '_Abrinsky',
    'samcook_',
    'olavostauros',
    'Shreyassanthu77',
    'pbertrand_dev',
    'rustafariandev',
    'JustinSuave_',
    'drewskadoosh',
    'loftwah',
    'antonioJASR',
    'MrJayLC',
    'magnum_d1ngus',
    'joshmanders',
    'badcop_',
    'realzvqle',
    'DanaWoodman',
    'emzraline',
    'IroncladDev',
    'jadbox',
    '0x15f',
    'korjbek',
    '_Rosc0e',
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
    'pradagey',
    'orbofweed',
    'bitcrshr',
    'stukennedymusic',
    'stackus',
    'Malix_off',
    'malware_yml',
    'CharlesWthe3rd',
    'RumNCodeDev',
    'slowjamsteve',
    'thewilltejeda',
    'Joao_Catre',
    'SamRose',
    'wtravishubbard',
    'JeffQuesado',
    'sterlingjss',
    'Jordy_vD_',
    'pfpistor',
    'AdjectiveAlli',
    'fire',
    'rickhanlonii',
    'ampyourgrowth',
    'alexcberk',
    'tt_kb_',
    'zenhorace',
    'Fer_S73',
    'TheDanVail',
    'franciscogm_98',
    '003cnr',
    'NanskiO',
    'BoredSoloDev',
    'EuryAdam',
    'JacobScearcy',
    'hofner_pls',
    'DODRringIdiot',
    'adder_ko',
    'icelainL',
    'RCarpenterDev1',
    're_natillas',
    'KansaiGaijinEng',
    'Fax3l',
    'Givo29',
    'gnaaruag',
    'danielp_johnson',
    'caveposter',
    'lovexbytes',
    'brattonross',
    'nauf95',
    'matejbc',
    '__mbaraa',
    'vin_yb',
    'Linkinlogger',
    'dhruvdabhi101',
    'JonathanHeindl',
    'Zqrc',
    'dhruv_says_hi',
    'crittdev',
    'eddydelva',
    'Thumbquat',
    'stefan_e_k',
    'behkod',
    'BasementPilot',
    '_RustyRooster',
    'sekunho_',
    'nathan___gage',
    'multineonteam',
    'nomadtechie',
    'mehulsharmamat',
    'jjcxdev',
    'SebCuadros',
    'aidantilgner',
    'marmotadesigual',
    'a_markski',
    'elemento_siesto',
    'wagslane',
    'devinbgoble',
    'noccris31',
    'NathanPire',
    'dan_abramov2',
    'yungifez',
    'awaveawave',
    'emjayess',
    'anilsenay',
    'mitchazj',
    'zormie',
    'Cena_Suckss',
    'unwrapped_monad',
    'tttrrraaayyy'
  ];

  shuffleArray(ceoImages);
  populateImages('ceo-container', ceoImages);

  document
    .getElementById('searchInput')
    .addEventListener('input', () => filterImages(ceoImages));

  const pathSegment = window.location.hash.substring(1);
  if (pathSegment) {
    scrollToElement(pathSegment);
  }
  document.getElementById('ceoCount').textContent = ceoImages.length;
});

function populateImages(containerId, images) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  images.forEach((image) => {
    const ceoName = encodeURIComponent(image);
    const twitterUrl = `https://twitter.com/${ceoName}`;
    const link = document.createElement('a');
    link.href = twitterUrl;
    link.target = '_blank';

    const imageBox = document.createElement('div');
    imageBox.className = 'image-box';
    imageBox.id = image;

    const img = document.createElement('img');
    img.src = `${image}.jpg`;
    img.alt = 'co-CEO of HTMX';

    const textBox = document.createElement('div');
    textBox.className = 'text-box';
    textBox.textContent = image;
    textBox.style.position = 'absolute';
    textBox.style.bottom = '0';
    textBox.style.right = '0';
    textBox.style.backgroundColor = 'black';
    textBox.style.color = 'white';
    textBox.style.padding = '5px';

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

function filterImages(ceoImages) {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filteredImages = ceoImages.filter((image) =>
    image.toLowerCase().includes(input)
  );
  populateImages('ceo-container', filteredImages);
}

function scrollToElement(id) {
  const normalizedId = id.toLowerCase();

  const imageBoxes = document.querySelectorAll('.image-box');
  for (const box of imageBoxes) {
    if (box.id.toLowerCase() === normalizedId) {
      box.scrollIntoView({ behavior: 'smooth' });
      break;
    }
  }
}
