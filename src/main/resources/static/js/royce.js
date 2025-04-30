
// elements

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const speakBtn = document.querySelector('#speak');



// speech recognition is started here 

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function() {
	console.log("vr active");
};

// Speech is made continuous here 
recognition.continuous = true;
recognition.interimResults = true;


//speech recognition result that is voice input...

recognition.onresult = function(event) {
	let current = event.resultIndex;
	let transcript = event.results[current][0].transcript;

	//console.log(event);
	readOut(transcript);

};

// speech recognition is ended here 
recognition.onend = function() {

	console.log("vr deactive");
};




startBtn.addEventListener("click", () => {
	recognition.start();
});

stopBtn.addEventListener("click", () => {
	recognition.stop();
});

// Now Royce gets its voice from here (Royce speech)

function readOut(message) {
	const speech = new SpeechSynthesisUtterance();

	// different voices

	const allVoices = speechSynthesis.getVoices();
	speech.text = message;
	speech.voice = allVoices[36];
	speech.volume = 1;
	window.speechSynthesis.speak(speech);
	console.log("speaking out");
}

// example code for a speech

speakBtn.addEventListener("click", () => {
	readOut("hi there i am ready to be used");
});

window.onload = function() {
	readOut("    ");
};
