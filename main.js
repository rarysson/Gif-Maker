import './style.css'
import { createFFmpeg } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg();

async function loadFfmpeg() {
	console.time('carregou');
	await ffmpeg.load();
	console.timeEnd('carregou');
}

loadFfmpeg();
