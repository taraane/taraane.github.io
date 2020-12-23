
let https="https:/" + "/";
let gstatic="encrypted-tbn0.gstatic.com/images?q=tbn:"
let usqp="&usqp=CAU";

let sou;
let audio = document.getElementById("audio");


let songs = [
'Likha Hai Teri Aankhon Mein#Lata Mangeshkar, Kishore Kumar#ANd9GcQ7GM0S3UuGWGGKFcVZJ78TnzwVNmbTsWP2GA',

'Achha ji main haari chalo#Mohammed Rafi, Asha Bhosle#ANd9GcQv7yrCvgePHK4JKE9878i74BQb1DbS7qic3Q',

'Hai apna dil toh awara#Hemant Kumar#ANd9GcSU8sPI4EatvS1qrlpEThuBnAZ9gTTMM7Y9cw',

'Khwaab Ho Tum Ya Koi Haqeeqat#Kishore Kumar#ANd9GcQ7GM0S3UuGWGGKFcVZJ78TnzwVNmbTsWP2GA',

'Aa chal ke tujhe#Kishore Kumar#ANd9GcRpRYQG-nhvvp8fqICViswMdTBziahLyLA4Sw',

'Aap Ki Nazro Ne Samjha#Lata Mangeshkar#ANd9GcSFdGX3sbBJ-Q0SItn9d6QifNTs2HaM8lf67w',

'Afsana Likh Rahi Hoon#Tun Tun#ANd9GcQ4cqdyzH9QZA4sCA-PRiR4OfmFZT3tXwceWw',

'Babu Samjho Ishare#Kishore Kumar, Manna Dey#ANd9GcR5CHT1BobYnXQZRae1c5k_6P6Qig7vV2mjoA',

'Bade Aarmanon Se Rakha Hai#Lata Mangeshkar, Mukesh#ANd9GcRtIawJdPGJAdIIzeaf4kw9seIY9CFXIiLBMA',

'Chodd Do Aanchal#Kishore Kumar, Asha Bhosle#ANd9GcQ0K1dprIAi1Zm746yahXUOxOaiKqOFYiKOXw',

'Dekh Tere Sansaar Ki Haalat#Vipin Sachdeva#ANd9GcRwRxSmnlJYE4o1TrL3ex5fKNct2B7bXd-qFw',

'Dil Ka Bhanwar Kare Pukar#Mohammed Rafi#ANd9GcS4QgkgoGRAAcPfBMMDGnJzYqrjhAgpOWmARA',

'Dil Ka Haal Sune Dilwala#Manna Dey#ANd9GcQPFbIHWmvRa_3aVQkG9ej8g2y4y4VRu24mKA',

'Ek Ladki Bheegi Bhagi Si#Kishore Kumar#ANd9GcRBynZ7X0bw5Gaz_LYkXMBlcd5gM_g2ZGcA6g',

'Ek Pardesi Mera Dil Le Gaya#Asha Bhosle,  Mohammed Rafi#ANd9GcQzScRCm5QCC-3Z1camnd3rQTVa8Y8RQdxnNw',

'Jane Na Nazar Pehchane Jigar#Lata Mangeshkar, Mukesh#ANd9GcTyOCNlPawBK9nU-7T4pOi2lQq1E1LBkVM1MQ',

'Lag Jaa Gale#Lata Mangeshkar#ANd9GcQa6Qn9Vygt6G1uY9lUxRC56NvOJWPRCnQnKQ',

'Main Sitaaron Kaa Taranaa#Asha Bhosle, Kishore Kumar#ANd9GcTj4cgCLHutUSwq22RV69bsPm5lJEd4dhCcwQ',

'Mera Joota Hai Japani#Mukesh#ANd9GcTUGkwLjBqv_bwxOheSppR-hgxUvSsYeIX5Xg',

'Pyar Hua Ikraar Hua#Lata Mangeshkar, Manna Dey#ANd9GcTUGkwLjBqv_bwxOheSppR-hgxUvSsYeIX5Xg',

'Ruk Jao Na Ji Aisi Kya Jaldi#Asha Bhosle#ANd9GcTj4cgCLHutUSwq22RV69bsPm5lJEd4dhCcwQ',

'Sar Jo Tera Chakraye#Mohammed Rafi#ANd9GcQOp5li8vjq7qigBqLr7j_flGv30REWFSe_1A',

'Yeh Raaten Yeh Mausam#Asha Bhosle, Kishore Kumar#ANd9GcRJYPm3osjY01lEC63_vHlnpWqINslATJs1cQ',

'Tu Hindu Banega Na Musalman Banega#Mohammed Rafi#ANd9GcSMafthBfQXB6mq6isVkEK8FqOfWYbc6Upm4w',

'Woh Chand Khila#Lata Mangeshkar, Mukesh#ANd9GcQbKSIe0gWwRoYHdbK0PzRWmV70j7xps7MZfA'
]


let noOfSongs= songs.length - 1;
let songList =document.getElementById("songList");



songs.forEach(songAssign);

function songAssign(item){

let songIndexonClick ="select(" + songs.indexOf(item) +");";


let splitted = item.split("#");




				  let listDiv = document.createElement('div');
    listDiv.className = "list";
    listDiv.setAttribute('onclick',songIndexonClick);

let infoDiv = document.createElement('div');
    let P= document.createElement('p');
    let sPan= document.createElement('span');
P.innerHTML= splitted[0]+'<br>';
sPan.innerHTML= splitted[1];  
    


    
    let imgDiv = document.createElement('div');
    let iMg =document.createElement('img');
    iMg.src=https + gstatic + splitted[2] + usqp;
    iMg.setAttribute("loading","lazy");
    
    
    

 
 
let circlePlayDiv= document.createElement('div');
circlePlayDiv.classList='playCircle';
let circlePlayI= document.createElement('i');
circlePlayI.classList="fal fa-play-circle"
    
    
    
     imgDiv.appendChild(iMg);
    listDiv.appendChild(imgDiv);
    
    
    P.appendChild(sPan);
    infoDiv.appendChild(P);
    listDiv.appendChild(infoDiv);
    
    
    circlePlayDiv.appendChild(circlePlayI);
    listDiv.appendChild(circlePlayDiv);
    
    
    songList.appendChild(listDiv);
    /*console.log(item);*/
}






function select(source){
			sou = source;
			let	sName = songs[sou];
			let splitted = sName.split("#");
			let labelIMG =https + gstatic + splitted[2] + usqp;
    let tiTle = splitted[0];
				console.log(sName);				
		audio.src ="s/" + splitted[0] + ".mp3";
				 audio.play();
				 /*console.log(labelIMG);*/
				 				 document.getElementById("title").innerHTML=tiTle;
document.getElementById("labelIMG").src=labelIMG;
document.getElementById("author").innerHTML=splitted[1];
}









function next(){
				if(sou >= noOfSongs){
				sou = 0;
				select(sou);
			
				
} else{
				select(sou + 1);
				
}

}

function prev(){
				if(sou <= 0){
				sou = noOfSongs;
				select(sou);
} else{
				select(sou - 1);
}

}



function backward(){
audio.currentTime =	audio.currentTime - 10;
audio.play();
}

function forward(){ 
audio.currentTime =	audio.currentTime + 10;
audio.play();
}




audio.addEventListener("ended",
				function(){ 

if(sou >= noOfSongs){
				sou = 0;
				select(sou);
} else{
				select(sou + 1);
}
				 });
				 


function togglePlay() { 
if (audio.paused) {  
playPause.classList='fa fa-pause';
audio.play();
} else { 
 playPause.classList='fa fa-play';
 audio.pause();
 } 
 };



audio.onplaying = function() {
  isPlaying = true;
  playPause.classList='fa fa-pause';
};
audio.onpause = function() {
  isPlaying = false;
  playPause.classList='fa fa-play';
};



/*
function togglePlay() {
				 isPlaying ? audio.pause() : audio.play(); 
				 };
				 audio.onplaying = function() { 
				 				isPlaying = true;
				 				playPause.classList='fa fa-pause';
				 				}; 
				 				audio.onpause = function() { 
				 								isPlaying = false; 
				 								playPause.classList='fa fa-play';
				 								};

*/

/*audio.addEventListener('timeupdate', function(ev){
console.log("Current time", this.currentTime);});*/






audio.addEventListener('timeupdate', function() {

let dura = audio.currentTime;

var mins = Math.floor(dura / 60);
    if (mins < 10) {
      mins = '0' + String(mins);
    }
    var secs = Math.floor(dura % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }

document.getElementById("currentTime").innerHTML= mins + ":" + secs + " /" ;

});



audio.onloadedmetadata = function() {

let dura = audio.duration;

var mins = Math.floor(dura / 60);
    if (mins < 10) {
      mins = '0' + String(mins);
    }
    var secs = Math.floor(dura % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }

document.getElementById("duration").innerHTML= mins + ":" + secs;

};




function downloadAlert(){
				alert('● Click on THREE DOTS in the top right corner and tap OPEN IN CHROME [If in Instagram]\n ● In Chrome, tap on THREE DOTS at top right corner and select ADD TO HOME SCREEN \n ● Click ADD  ')
}




/*
let playCircle = document.querySelector(".playCircle"); 
let playIcon = document.getElementById("playIcon");
let elemHeight = playCircle.offsetHeight;
let pos=elemHeight/2; 
playIcon.style.top = pos;
console.log(elemHeight + ' '+pos)
*/
