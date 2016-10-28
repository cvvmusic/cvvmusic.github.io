var trapRunLoad = game.newImageObject ({
	x : 0, y : 0, 
	file : 'img/loaded/traprunload.png'
});

var rotateLoad = game.newImageObject ({
	x : 295, y : 212, 
	file : 'img/loaded/rotateload.png'
});

game.newLoop('gameLoad', function () {

	trapRunLoad.draw();
	rotateLoad.draw();
	rotateLoad.rotateForAngle(360, 3);
		
	trapRunLoadText = pjs.brush.drawTextS({
		font : "Courier New",
		size : 15,
		x : 400, y : 350,
		align : "center",
		text : 'Загружено 0% из 100%',
	}); 
	
});