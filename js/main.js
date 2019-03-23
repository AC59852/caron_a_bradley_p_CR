var chateauInfo = ["Old European Boutique Chateaus and each with a Private Screened in Gazebo, Walkout Balcony and Outdoor Hot Tub to soothe life's pains away while enjoying views of spectacular scenery overlooking sparkling Galeairy Lake onto the romantic forests of Algonquin Park. Towering 16 foot vaulted ceiling and a massive 2 sided stone fireplace between the bedroom and living room. Furnished by Canada's finest furniture store The Art Shoppe of Toronto."],
	para = document.querySelector("#para"),
	infoHolder = document.querySelector("#roomCon"),
	img = document.querySelector('#roomImage');


let chateauBtn = document.querySelector(".chateauBtn");
	function chateau() {
		infoHolder.style.backgroundImage = "url('images/chateauBck.png')";
		img.src = "images/chateau.jpg";
		para.innerHTML = '';
		para.innerHTML += chateauInfo;
		infoHolder.style.WebkitAnimation = "reveal 0.3s";
		infoHolder.addEventListener("webkitAnimationStart", testStart);
		infoHolder.addEventListener("webkitAnimationEnd", testEnd);
	}

	function testStart() {
	console.log("Image Animation Started");
}

function testEnd() {
	console.log("Image Animation Ended");
	infoHolder.style.removeProperty("animation");
}

	chateauBtn.addEventListener("click", chateau);

	let villaBtn = document.querySelector(".villaBtn"),
		villaInfo = ["Old European Boutique Spa Villas and each with Private Screened in Gazebo with private Outdoor Hot Tub, nestled Lakeside. Time to be Spoiled in a Gorgeous Romantic Private Cottage for two, a Boutique Spa Villa, with so many Water Indulgences (Outdoor Hot Tub / In-Room Jacuzzi / Sauna / Steam Room / 4 Shower Heads) to Spoil you. From your gazebo and sun deck listen to the water's waves on the shores edge, watch the trees sway with the breeze and breath again. Unique in every Villa an Old European Boutique Style, Furnished by Toronto's The Art Shoppe, Canada's finest furniture store."];

	function villa() {
		infoHolder.style.backgroundImage = "url('images/villaBck.png')";
		img.src = "images/villa.jpg";
		para.innerHTML = '';
		para.innerHTML += villaInfo;
		infoHolder.style.WebkitAnimation = "reveal 0.3s";
		infoHolder.addEventListener("webkitAnimationStart", testStart);
		infoHolder.addEventListener("webkitAnimationEnd", testEnd);
	}

	villaBtn.addEventListener("click", villa);

	let masterBtn = document.querySelector(".masterBtn"),
		masterInfo = ["Come and breathe the freshest air, and let Algonquin Park titillate your senses as only she can. Watch the World go by from the privacy of your own Outdoor HotTub.  This is a thrilling way to enjoy Algonquin Park in Muskoka. Be prepared to be Spoiled in a Romantic Master's Jr Suite that has so many features to Spoil you with so many Water Indulgences (Jacuzzi / Steam Room / 4 Shower Heads). Clean and Fresh Decor in a Boutique Old European Style with Furnishings from the finest Furniture Store in Canada, The Art Shoppe of Toronto."];

		function master() {
		infoHolder.style.backgroundImage = "url('images/masterBck.png')";
		img.src = "images/master.jpg";
		para.innerHTML = '';
		para.innerHTML += masterInfo;
		infoHolder.style.WebkitAnimation = "reveal 0.3s";
		infoHolder.addEventListener("webkitAnimationStart", testStart);
		infoHolder.addEventListener("webkitAnimationEnd", testEnd);
	}

	masterBtn.addEventListener("click", master);

	let chaletBtn = document.querySelector(".chaletBtn"),
		chaletInfo = ["Algonquin Rustic Luxury Utopian Chalets.  These two Chalets are lakefront and completely finished in dark cedar and are with private hot tubs. Enjoy original Canadiana Cabins while indulging in the atmosphere of pure wood and natural stone.  One will be completely Spoiled by the soothing Luxury of both the indoor Jacuzzi and the Outdoor Hot Tub. In the Spring, Summer, Fall head out through the French patio doors onto your large sun deck with two padded chaise lounges and enjoy the outdoors. On your deck, look out to see the shimmering lake before you, look across the lake to the shores of the majestic Algonquin Park. In the winter, before snuggling down to a warm night by the fire, put on the ice skates and go for a whirl around the rink."];

	function chalet() {
		infoHolder.style.backgroundImage = "url('images/chaletBck.png')";
		img.src = "images/chalet.jpg";
		para.innerHTML = '';
		para.innerHTML += chaletInfo;
		infoHolder.style.WebkitAnimation = "reveal 0.3s";
		infoHolder.addEventListener("webkitAnimationStart", testStart);
		infoHolder.addEventListener("webkitAnimationEnd", testEnd);
	}

	chaletBtn.addEventListener("click", chalet);

	let exoticBtn = document.querySelector(".exoticBtn"),
		exoticInfo = ["This is for the adventurous; if one Dreams of having a Romantic Escape you will be Spoiled with all the Wet Indulgences in these Jr Suites and the Exotic in you will be Satisfied. Very spacious Exotic Jr Suites have darker colours to embrace a Tribal night as they have hints of Africa strewn through them with masks and carved animals and faux prints.  Nestled amongst the trees overlooking the shores of Galeairy Lake."];

		function exotic() {
		infoHolder.style.backgroundImage = "url('images/exoticBck.png')";
		img.src = "images/exotic.jpg";
		para.innerHTML = '';
		para.innerHTML += exoticInfo;
		infoHolder.style.WebkitAnimation = "reveal 0.3s";
		infoHolder.addEventListener("webkitAnimationStart", testStart);
		infoHolder.addEventListener("webkitAnimationEnd", testEnd);
	}

	exoticBtn.addEventListener("click", exotic);

	let juniorBtn = document.querySelector(".juniorBtn"),
		juniorInfo = ["Boutique Algonquin designed and styled with natural elements of real cedar wood, marble and granite to bring you in touch with Algonquin Park. Open the patio doors and smell and taste clean pure fresh air as you walk out onto your private deck.  Here you have your own Private Hot Tub, splash in, as you have the waterfront right in front of you for viewing and enjoying. Indulge yourself in the large double in-room Jacuzzi while having a romantic evening by your own crackling wood burning fire.  You will sleep well with a luxury king bed by designer Marshall Mattress.  Stream Netflix on the 50inch Tv in your room."];

			function junior() {
		infoHolder.style.backgroundImage = "url('images/juniorBck.png')";
		img.src = "images/junior.jpg";
		para.innerHTML = '';
		para.innerHTML += juniorInfo;
		infoHolder.style.WebkitAnimation = "reveal 0.3s";
		infoHolder.addEventListener("webkitAnimationStart", testStart);
		infoHolder.addEventListener("webkitAnimationEnd", testEnd);
	}

	juniorBtn.addEventListener("click", junior);