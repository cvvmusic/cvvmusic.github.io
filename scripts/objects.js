var loadedBg = game.newImageObject({
	x : 0, y : 0, 
	file : 'img/loaded/traprunload.png',
});

var rotateLoaded = game.newImageObject({
	x : 296, y : 213, 
	file : 'img/loaded/rotateload.png',
});

var bgd1 = game.newImageObject({
	x : 0, y : 0, 
	file : 'img/bgd.png',
	onload : function () {
		bgd2.x = bgd1.x + bgd1.w;
	}
});

var bgd2 = game.newImageObject({
	x : 0, y : 0, 
	file : 'img/bgd.png'
});

//Функция Houses
var houses1 = game.newImageObject({
	x : 0, y : 104, 
	file : 'img/houses.png',
	onload : function () {
		houses2.x = houses1.x + houses1.w;
	}
});

var houses2 = game.newImageObject({
	x : 0, y : 104, 
	file : 'img/houses.png'
});

var houses3 = game.newImageObject({
	x : 0, y : 584, 
	file : 'img/houses2.png',
	onload : function () {
		houses4.x = houses3.x + houses3.w;
	}
});

var houses4 = game.newImageObject({
	x : 0, y : 584, 
	file : 'img/houses2.png'
});

var body = game.newImageObject({
	x : -380, y : 160, 
	file : 'img/player/body.png'
});

var hand = game.newImageObject({
	x : -380, y : 300, 
	file : 'img/player/hand.png'
});

var fireObject = game.newBaseObject({
	x : 850, y : 0,
	h : 480, w : 800,
});

var displayObject = game.newImageObject({
	x : 0, y : 0,
	h : 480, w : 800,
});

var startButton = game.newImageObject({
	x : 279.5, y : 150,
	file : 'img/button/start1.png',
});

var startButton2 = game.newImageObject({
	x : 279.5, y : -182,
	file : 'img/button/start2.png',
});

var bangFire = game.newImageObject({
	x : 31, y : 300,
	file : 'img/player/bangfire.png',
});

var cursorMouse = game.newImageObject({
	x : 33, y : 590,
	file : 'img/cursor.png',
});

var friendlyCar = game.newImageObject({
	x : -805, y : 307,
	file : 'img/player/friendlycar.png',
});

var friendlyCarPoint = game.newBaseObject({
	x : -850, y : 307,
	w : 222, h : 222,
});

var PlayerHealth = 1;

var PlayerScore = 0;
var PlayerScoreSaver = 0;

//Враги
var enemyHealth = 1;

var enemyBody = game.newImageObject({
	x : 1528, y : 160,     
	file : 'img/enemy/body.png'
});

var enemyHand = game.newImageObject({
	angle : 90,
	x : 1583, y : 300, 
	file : 'img/enemy/hand.png'
});

var rounds = 1;

var textHelp = game.newTextObject({

	font : "Courier New",
	align : "center",
	text : "РАУНД " + rounds,
	size : 20,
	x : -400, y : 240,
	color : "#cccccc",
		
});

var textHelpPoint = game.newBaseObject({
	w : 800, h : 480,
	x : -800, y : 0,
});

var plusFriends = game.newImageObject({
	x : 760, y : 10,
	file : 'img/plusfriends.png'
});

var pools = 1;

var poolsImage = game.newImageObject({
	x : 740, y : 10,
	file : 'img/pools.png'
});

var gameOver = game.newTextObject({

	font : "Courier New",
	align : "center",
	text : "GAME OVER",
	size : 50,
	x : -400, y : 240,
	color : "#aa0800",
	
});

var gameOverPoint = game.newBaseObject({
	w : 800, h : 480,
	x : -800, y : 0,
});