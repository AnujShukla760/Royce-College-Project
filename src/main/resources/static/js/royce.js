const turn_on = document.querySelector("#turn_on");
const jarvis_intro = document.querySelector("#j_intro");
const time = document.querySelector("#time");
const battery=document.querySelector("#battery");
const internet=document.querySelector("#internet");
const machine = document.querySelector(".machine");
document.querySelector("#start_jarvis_btn").addEventListener("click",()=>{
	recognition.start()
})
fridayComs.push("whats the weather or temperature");
fridayComs.push("show the full weather report");
fridayComs.push("are you there - to check fridays presence");
fridayComs.push("shut down - stop voice recognition");
fridayComs.push("open google");
fridayComs.push('search for "your keywords" - to search on google ');
fridayComs.push("open whatsapp");
fridayComs.push("open youtube");
fridayComs.push('play "your keywords" - to search on youtube ');
fridayComs.push("close this youtube tab - to close opened youtube tab");
fridayComs.push("open firebase");
fridayComs.push("open netlify");
fridayComs.push("open twitter");
fridayComs.push("open my twitter profile");
fridayComs.push("open instagram");
fridayComs.push("open my instagram profile");
fridayComs.push("open github");
fridayComs.push("open my github profile");

// date and time
let date = new Date();
let hrs = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();

//autojarvis
function autojarvis(){
	setTimeout(()=>{
		recognition.start()
		},1000);
	}


//onload (window)
window.onload=()=>{
	//on startup
	 turn_on.play();
		turn_on.addEventListener("ended", () => {
			setTimeout(() => {
				 autoJarvis();
				readOut("Ready to go sir");
				if (localStorage.getItem("jarvis_setup") === null) {
					readOut(
						"Sir, kindly fill out the form on your screen so that you could access most of my features and if you want to see my commands see a warning in the console"
					);
				}
			}, 200);
		});
	/*//jarvis commands
	fridayComs.forEach((e) => {
		document.querySelector(".commands").innerHTML += `<p>#${e}</p><br/>`;
	});
*/

	//time-clock
	//time.textContent=`${hrs}:${mins}:${secs}`
	setInterval(()=>{
		let date = new Date();
		let hrs = date.getHours();
		let mins = date.getMinutes();
		let secs = date.getSeconds();
		time.textContent=`${hrs}:${mins}:${secs}`
		},1000);
	}

	// battery
	let batteryPromise = navigator.getBattery();
	batteryPromise.then(batteryCallback);

	function batteryCallback(batteryObject) {
			printBatteryStatus(batteryObject);
			setInterval(() => {
				printBatteryStatus(batteryObject);
			}, 5000);
		}
		function printBatteryStatus(batteryObject) {
			battery.textContent=`${batteryObject.level*100}%`
				if(batteryObject.charging=true){
				document.querySelector(".battery").style.width="200px"
			battery.textContent=`${batteryObject.level*100}%charging`
									}
									}
									
	// internet connectivity
		//intrenet
		navigator.online?(internet.textContent="online"):(internet.textcontent="offline")
		setInterval(()=>{
			//for internet
		navigator.online?(internet.textContent="online"):(internet.textcontent="offline")
				},60000);
				function formatAMPM(date) {
					var hours = date.getHours();
					var minutes = date.getMinutes();
					var ampm = hours >= 12 ? 'pm' : 'am';
					hours = hours % 12;
					hours = hours ? hours : 12; // the hour '0' should be '12'
					minutes = minutes < 10 ? '0' + minutes : minutes;
					var strTime = hours + ':' + minutes + ' ' + ampm;
					currentTime = strTime
					time.textContent = strTime
				}

				formatAMPM(date)
				setInterval(() => {
					formatAMPM(date)
				}, 60000);

				// auto friday

				function autoJarvis() {
					setTimeout(() => {
						recognition.start();
					}, 1000);
				}											
													
