import './style.css'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const $dropZone = document.querySelector('.drop-zone-container');
const $file = document.querySelector('#upload');
const $alert = document.querySelector('.alert-container');
const $video = document.querySelector('video');
const $videoContainer = document.querySelector('.video-container');
const $closeVideo = document.querySelector('.close-video-btn');
const $convertBtn = document.querySelector('.convert-btn');
const $gifContainer = document.querySelector('.gif-container');
const $gif = document.querySelector('.gif');
const $downloadImg = document.querySelector('.download-img');
const $inputContainer = document.querySelector('.input-container');
const $progressContainer = document.querySelector('.progress-container');

const ffmpeg = createFFmpeg();
let videoUrl;
let videoFile;
let gifUrl;

async function loadFfmpeg() {
	await ffmpeg.load();
	$convertBtn.disabled = false;
}

function loadVideo(file) {
	videoFile = file;
	videoUrl = URL.createObjectURL(file);
	$dropZone.style.display = 'none';
	$video.src = videoUrl;
	$videoContainer.style.display = 'block';
	$convertBtn.style.display = 'block';
	$inputContainer.style.display = 'block';
}

function loadGif() {
	$gif.src = gifUrl;
	$downloadImg.href = gifUrl;
	$gifContainer.style.display = 'block';
}

function showAlert(msg) {
	$alert.style.visibility = 'visible';
	$alert.textContent = msg;

	setTimeout(() => {
		$alert.style.visibility = 'hidden';
	}, 2000);
}

async function convertToGif() {
	if (gifUrl) {
		URL.revokeObjectURL(gifUrl);
	}

	const startTime = parseFloat($inputContainer.querySelector('input').value);
	const maxDuration = 2;

	if (startTime < 0) {
		showAlert('Start time cannot be less than zero');
	} else if (startTime > ($video.duration - maxDuration)) {
		showAlert('Start time cannot be more than the duration of the video');
	} else {
		$progressContainer.style.display = 'block';
		$convertBtn.disabled = true;

		ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(videoFile));

		try {
			await ffmpeg.run(
				'-i', 'video.mp4',
				'-r', '10',
				'-ss', String(startTime),
				'-t', String(maxDuration),
				'-vf', 'scale=320:-1',
				'out.gif'
			);

			const gif = ffmpeg.FS('readFile', 'out.gif');
			gifUrl = URL.createObjectURL(new Blob([gif.buffer]), { type: 'image/gif' });
		} catch (erro) {
			console.error(erro.message);
			showAlert('Something went wrong during the conversion');
			return;
		} finally {
			$convertBtn.disabled = false;
			$progressContainer.style.display = 'none';
		}

		loadGif();
		$progressContainer.style.display = 'none';
	}
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
		showAlert('Format not supported');
	}
});
$file.addEventListener('change', ({ target: { files } }) => {
	loadVideo(files[0]);
});
$closeVideo.addEventListener('click', () => {
	URL.revokeObjectURL(videoUrl);
	URL.revokeObjectURL(gifUrl);
	$dropZone.style.display = 'block';
	$video.src = '';
	$videoContainer.style.display = 'none';
	$convertBtn.style.display = 'none';
	$gifContainer.style.display = 'none';
	$inputContainer.style.display = 'none';
});
$convertBtn.addEventListener('click', convertToGif);

loadFfmpeg();
