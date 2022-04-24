import './style.css'
import { createFFmpeg } from '@ffmpeg/ffmpeg';

const $dropZone = document.querySelector('label');
const $file = document.querySelector('#upload');
const $alert = document.querySelector('.alert-container');
const $video = document.querySelector('video');
const $videoContainer = document.querySelector('.video-container');
const $closeVideo = document.querySelector('.close-video-btn');

const ffmpeg = createFFmpeg();
let videoUrl;

async function loadFfmpeg() {
	await ffmpeg.load();
}

function loadVideo(file) {
	videoUrl = URL.createObjectURL(file);
	$dropZone.style.display = 'none';
	$video.src = videoUrl;
	$videoContainer.style.display = 'block';
}

$dropZone.addEventListener('dragover', (event) => {
	event.preventDefault();
	event.dataTransfer.dropEffect = "copy";
});
$dropZone.addEventListener('drop', (event) => {
	event.preventDefault();

	const file = event.dataTransfer.files[0];

	if (file.type === 'video/mp4') {
		loadVideo(file);
	} else {
		$alert.style.visibility = 'visible';

		setTimeout(() => {
			$alert.style.visibility = 'hidden';
		}, 2000);
	}
});
$file.addEventListener('change', ({ target: { files } }) => {
	loadVideo(files[0]);
});
$closeVideo.addEventListener('click', () => {
	URL.revokeObjectURL(videoUrl);
	$dropZone.style.display = 'block';
	$video.src = '';
	$videoContainer.style.display = 'none';
});
