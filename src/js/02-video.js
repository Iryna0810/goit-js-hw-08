import Player from "@vimeo/player";
import { throttle } from "lodash";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const throttledFunction = throttle(videoPlayerCurrentTime, 1000)

player.on('timeupdate', throttledFunction);

function videoPlayerCurrentTime ({ duration, percent, seconds }) {
    // console.log('played the video!');
    localStorage.setItem("videoplayer-current-time", seconds);
};

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));





