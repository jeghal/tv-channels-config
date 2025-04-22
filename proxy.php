<?php
header('Content-Type: application/vnd.apple.mpegurl');
header('Access-Control-Allow-Origin: *');

// On transmet simplement la requête avec les bons headers
$opts = [
  "http" => [
    "header" => 
      "Referer: https://2m.ma\r\n" .
      "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0\r\n"
  ]
];
$context = stream_context_create($opts);
echo file_get_contents(
  'https://cdn-globecast.akamaized.net/live/eds/2m_monde/hls_video_ts_tuhawxpiemz257adfc/2m_monde.m3u8',
  false,
  $context
);
