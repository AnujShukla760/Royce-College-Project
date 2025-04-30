//1..... setting up the Royce.....
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
	transcript = transcript.toLowerCase();

	//console.log(event);
	//readOut(transcript);
	console.log(`my words : $ {transcript}`);

	// we are assigning the commnads to the ROYCE here ........

	//1......Greetings .....

	if (transcript.includes("hi royce")) {
		readOut("hello sir ");
		console.log("hello sir");
	}

	if (transcript.includes("open youtube")) {
		readOut("Wait a Moment opening youtube sir");
		window.open("https://www.youtube.com/");
	}

	if (transcript.includes("open google")) {
		readOut("Wait a Moment opening google sir");
		window.open("https://www.google.com/");
	}

	// 2.........google search
//
//	if (transcript.includes("search for")) {
//		readOut("here are the search results");
//		let input = transcript.split("");
//		input.splice(0, 11);
//		input.pop();
//		input = input.join("").split(" ").join("+");
//		console.log(input);
//		window.open(`https://www.google.com/search?q=${input}`)
//
//	}


if (transcript.includes("search for")) {
    readOut("here are the search results");
    let input = transcript.substring(transcript.indexOf("search for ") + "search for ".length);
    input = input.trim().split(" ").join("+");
    console.log(input);
    window.open(`https://www.google.com/search?q=${input}`, '_blank');
}

	//3......... playing songs in youtube


	if (transcript.includes("play song ")) {
		readOut("here are the search results");
		let input = transcript.substring(transcript.indexOf("play song ") + "play song ".length); // Extract song name
		input = input.trim().split(" ").join("+"); // Clean and format for URL
		console.log(input);
		window.open(`https://www.youtube.com/results?search_query=${input}`, '_blank'); // Correct URL and target
	}

	// 4........weather reports.............
	
	

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
	speech.voice = allVoices[32];
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



