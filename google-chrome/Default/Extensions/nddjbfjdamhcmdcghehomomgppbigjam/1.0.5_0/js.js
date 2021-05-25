//make hours, minutes, seconds
//design code
//dribbble 



//account for time offset
//make icon invisible on non newTab page
//change message if age over 77
//add donate button
//update version every update


$(document).ready(function () {
	
	//set img attr
	var $img = $("img").attr({
		"src": bgImage(),
	});

	//check if first load
	chrome.storage.sync.get("deathTime", function(result){
		console.log(result.deathTime);
    	if (typeof result.deathTime === 'undefined') {
    		console.log("pants");
    		onFirstLoad();
    	}
    });

	//make image invisible so it can fade in on load
	$img.css("opacity", "0");

	getAge();

	var x = setInterval(getAge, 1000);

	//fade image in on load
	$img.on("load", function(){
		$img.fadeTo("slow", 1.0);
	});

	//input age
	//close current tab
	//open new tab so it updates
	$("form").submit(function(e){
        saveChanges();
        chrome.tabs.create({ url: "index.html" });
    });

});


function saveChanges() {

        var dob = new Date($(".dob").val());
        var today = new Date();

        //milliseconds from 1970
        var age = today.getTime() - dob.getTime();
        console.log(age);

        //deathTime is current date + death age in milliseconds - current age
        var deathTime = today.getTime() + ((77*365*86400000) - age);

        // Check that there's some code there.
        if (!age) {
          message('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'deathTime': deathTime}, function() {
          // Notify that we saved.
          console.log("saved");
        });
    }   

function getAge(){
	var date;
	var d = new Date();
	var n = d.getTime();
	chrome.storage.sync.set({'date': n}, function() {
    });

	chrome.storage.sync.get('date', function(result){
		date = result.date;
	});

	chrome.storage.sync.get('deathTime', function(result){
		if (!result) {
			console.log("darn");
		} else {
			var $days = $("#days").text(parseInt((result.deathTime - date) / 86400000), 10);
			var $hours = $("#hours").text(23 - d.getHours());
			var $minutes = $("#minutes").text(60 - d.getMinutes());
			var $seconds = $("#seconds").text(60 - d.getSeconds());	
		}	
	});
}

function bgImage() {

	var images = [
		"/backgrounds/kien-do-20829.jpg",
		"/backgrounds/2_072912_Gaponyuk.jpg",
		"/backgrounds/6986733231_92a961c777_k.jpg",
		"/backgrounds/pyrenees-351266_1920.jpg",
		"/backgrounds/10361139534_5503c69a41_h.jpg",
		"/backgrounds/10497301253_7e41350482_k.jpg",
		"/backgrounds/10507985735_56addf9cb1_k.jpg",
		"/backgrounds/11114091294_5f468f74d1_k.jpg",
		"/backgrounds/33107776560_479b3217c6_k.jpg",
		"/backgrounds/3409068082_6a1a259908_b.jpg",
		"/backgrounds/7227178308_ddc8a0a8cb_b.jpg",
		"/backgrounds/8321880331_f43e355c01_k.jpg",
		"/backgrounds/8498614095_037085b7ee_k.jpg",
		"/backgrounds/Khau_Pha.jpg"
	];


	return images[getRandomInt(0, images.length)];
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function onFirstLoad() {
	$("#content").html("<h1> Click on the icon on the top right to input your date of birth! </h1>");
}

