// Liste des chaînes
const channels = [
  { name: 'Al Aoula', src: 'https://cdn.live.easybroadcast.io/abr_corp/73_aloula_w1dqfwm/playlist_dvr.m3u8' },
  { name: '2M Monde', src: 'http://cdnamd-hls-globecast.akamaized.net/live/ramdisk/2m_monde/hls_video_ts/index.m3u8' },
  { name: 'Al Maghribia', src: 'https://cdn.live.easybroadcast.io/abr_corp/73_almaghribia_83tz85q/playlist_dvr.m3u8' },
  { name: 'Arryadia', src: 'https://cdn.live.easybroadcast.io/abr_corp/73_arryadia_k2tgcj0/playlist_dvr.m3u8' },
  { name: 'Atakafia', src: 'https://cdn.live.easybroadcast.io/abr_corp/73_arrabia_hthcj4p/playlist_dvr.m3u8' },
  { name: 'Assadissa', src: 'https://cdn.live.easybroadcast.io/abr_corp/73_assadissa_7b7u5n1/playlist_dvr.m3u8' },
  { name: 'Medi1 TV Arabia', src: 'https://streaming1.medi1tv.com/live/smil:medi1ar.smil/playlist.m3u8' },
  { name: 'Medi1 TV Afrique', src: 'https://streaming1.medi1tv.com/live/smil:medi1tv.smil/playlist.m3u8' },
  { name: 'MBC 5', src: 'https://shls-mbc5-prod-dub.shahid.net/out/v1/2720564b6a4641658fdfb6884b160da2/index.m3u8' },
  { name: 'M24', src: 'https://67aac8c668349.streamlock.net/live/ngrp:Live2.stream_all/chunklist_w1604162890_b1396000.m3u8' },
  { name: 'Chada TV', src: 'https://chadatv.vedge.infomaniak.com/livecast/ik:chadatv/manifest.m3u8' },
  { name: 'Al Jazeera Arabic', src: 'https://live-hls-web-aja.getaj.net/AJA/01.m3u8' },
  { name: 'Al Jazeera Mubasher', src: 'https://live-hls-web-ajm.getaj.net/AJM/01.m3u8' },
  { name: 'Al Arabiya', src: 'https://live.alarabiya.net/alarabiapublish/alarabiya.smil/playlist.m3u8' },
  { name: 'Al Hadath', src: 'https://shls-hadath-prod-dub.shahid.net/out/v1/0e1a306399c346faac4226aa0858f99b/index.m3u8' },
  { name: 'Sky News Arabia', src: 'https://stream.skynewsarabia.com/hls/sna_720.m3u8' },
  { name: 'BBC Arabic', src: 'https://vs-cmaf-pushb-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_arabic_tv/pc_hd_abr_v2.mpd' },
  { name: 'RT Arabic', src: 'https://rt-arb.rttv.com/dvr/rtarab/playlist_2500Kb.m3u8' },
  { name: 'DW Arabic', src: 'https://dwamdstream103.akamaized.net/hls/live/2015526/dwstream103/stream04/streamPlaylist.m3u8' },
  { name: 'TRT Arabic', src: 'https://tv-trtarabi.medya.trt.com.tr/master.m3u8' },
  { name: 'Al Jazeera DOC', src: 'https://live-hls-web-ajd.getaj.net/AJD/02.m3u8' },
  { name: 'Makkah', src: 'https://edge.taghtia.com/sa/7.m3u8' },
  { name: 'Medina', src: 'https://edge.taghtia.com/sa/6.m3u8' },
  { name: 'National Geographic', src: 'https://vo-live.cdb.cdn.orange.com/Content/Channel/NationalGeographicHDChannel/HLS/index.m3u8' },
  { name: 'Al Araby', src: 'https://alaraby.cdn.octivid.com/alaraby/smil:alaraby.stream.smil/chunklist_b4000000.m3u8' },
  { name: 'Al Hora', src: 'https://mbn-ingest-worldsafe.akamaized.net/hls/live/2038900/MBN_Alhurra_Worldsafe_HLS/master.m3u8' },
  { name: 'Al Alam', src: 'https://live2.alalam.ir/live/Alalam/index.m3u8' },
  { name: 'Asharq News', src: 'https://bcovlive-a.akamaihd.net/0b75ef0a49e24704a4ca023d3a82c2df/ap-south-1/6203311941001/profile_1/chunklist.m3u8' },
  { name: 'i24 News', src: 'https://bcovlive-a.akamaihd.net/95116e8d79524d87bf3ac20ba04241e3/eu-central-1/5377161796001/profile_0/chunklist.m3u8' },
  { name: 'Asharqiya', src: 'https://5d94523502c2d.streamlock.net/alsharqiyalive/mystream/chunklist_w2062095183.m3u8' },
  { name: 'France 24 Arabic', src: 'https://live.france24.com/hls/live/2037222/F24_AR_HI_HLS/master_5000.m3u8' },
  { name: 'Al Quran', src: 'https://ktvlive.online/stream/hls/ch1.m3u8' },
  { name: 'France 24 Français', src: 'http://static.france24.com:80/live/F24_FR_HI_HLS/live_tv.m3u8' },
  { name: 'France 24 English', src: 'http://static.france24.com/live/F24_EN_LO_HLS/live_web.m3u8' }
];

// Sélection des éléments DOM
const listEl         = document.getElementById('channelList');
const video          = document.getElementById('tvPlayer');
const loader         = document.getElementById('loader');
let hls;


// Génération de la liste des chaînes
channels.forEach((ch, idx) => {// Boucle sur les chaînes
  const btn = document.createElement('button');// Création d'un bouton
  btn.textContent     = ch.name;// Nom de la chaîne
  btn.dataset.src     = ch.src;// URL du flux
  btn.dataset.initial = (idx + 1).toString();// Numéro de la chaîne
  btn.setAttribute('role', 'menuitem');// Rôle ARIA pour l'accessibilité
  btn.tabIndex        = idx === 0 ? 0 : -1;// Focus sur le premier bouton
  btn.addEventListener('click', () => selectChannel(btn));// Selection de chaîne
  listEl.appendChild(btn);// Ajout du bouton à la liste
});

// Chargement initial
window.addEventListener('load', () => {
  document.querySelector('.container').classList.add('loaded');
  const last    = localStorage.getItem('lastChannel');
  const buttons = Array.from(listEl.children);
  const toLoad  = buttons.find(btn => btn.dataset.src === last) || buttons[0];
  selectChannel(toLoad);
});

// Sélection de chaîne au clic
function selectChannel(btn) {
  // Mise à jour UI
  Array.from(listEl.children).forEach(b => {
    b.classList.toggle('active', b === btn);
    b.tabIndex = b === btn ? 0 : -1;
  });
  loadStream(btn.dataset.src);
  localStorage.setItem('lastChannel', btn.dataset.src);
  btn.focus();
}

// Chargement du flux HLS
function loadStream(src) {
  if (hls) { hls.destroy(); hls = null; }
  loader.classList.remove('hidden');
  if (window.Hls && Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
      loader.classList.add('hidden');
    });
    hls.on(Hls.Events.ERROR, (evt, data) => {
      alert('Erreur de lecture du flux: ' + data.type);
      loader.classList.add('hidden');
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = src;
    video.addEventListener('loadedmetadata', function onMeta() {
      video.removeEventListener('loadedmetadata', onMeta);
      video.play();
      loader.classList.add('hidden');
    });
  } else {
    alert('Flux non supporté par votre navigateur.');
    loader.classList.add('hidden');
  }
}

// Navigation clavier / remote WebOS 
document.addEventListener('keydown', e => {// Écoute des événements de touches
  switch (e.keyCode) {// Switch sur la touche appuyée
    case 38: // Flèche haut 
      focusSibling(-1);// Fonction pour le focus sur l'élément précédent
      e.preventDefault();// Empêche le comportement par défaut
      break;
    case 40: // Flèche bas
      focusSibling(1);
      e.preventDefault();
      break;
    case 13: // Enter / OK
      if (document.activeElement.tagName === 'BUTTON') {// Vérifie si l'élément actif est un bouton
        document.activeElement.click();// Simule un clic sur le bouton actif
      }
      break;
    case 39: // Flèche droite passe eun mode plein écran
      video.classList.toggle('fullscreen');
      break;
    case 37: // Flèche gauche sort du mode plein écran
      if (video.classList.contains('fullscreen')) {
        video.classList.remove('fullscreen');
      } else {
        video.classList.add('fullscreen');
      }
      break;
      
  }
});

// Fonction d'aide pour le focus
function focusSibling(offset) {
  const items = Array.from(listEl.children);
  let idx = items.indexOf(document.activeElement);
  if (idx === -1) { items[0].focus(); return; }
  idx = (idx + offset + items.length) % items.length;
  items[idx].focus();
}