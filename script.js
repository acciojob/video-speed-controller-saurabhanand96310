/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


toggle.addEventListener("click",()=>{
	if(video.paused){
		video.play();
		toggle.innerText="❚ ❚";
	}else{
		video.pause();
		toggle.innerText="►"
	}
})

video.addEventListener("change",()=>{
	let weidthOfProgress= (video.currentTime*100)/video.duration;
	progressBar.style.weidth=`${weidthOfProgress}%`
})

function seekTime(direction){
	direction===skipButtons[0].innerText :(video.currentTime-=10)?( video.currentTime+=25)
}
// console.log(skipButtons)
skipButtons[0].addEventListener("click", seekTime(skipButtons[0].innerText))
skipButtons[1].addEventListener("click", seekTime(skipButtons[1].innerText))

ranges[0].addEventListener("change",()=>{
	// console.log("volume change")
	let volumeChange=ranges[0].value;
	video.volume=volumeChange;
})

ranges[1].addEventListener("change",()=>{
	// console.log("speed change")
	let speedChange=ranges[1].value;
	let mapRanges={
		0.5:0.5,
		1.0:1,
		1.5:1.5,
		2:2
	}
	video.playbackRate=mapRanges[speedChange];
})












