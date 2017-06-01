preloadGame = {
	preload : function (){
		game.load.image('bg','img/sky.png');
		game.load.image('play','img/play.jpg');
		game.load.image('parallax','img/play.png');
		game.load.image('fire','img/fire.png');
		game.load.image('platform','img/platform.png');
		game.load.spritesheet('player','img/player.png',100,100);
    	game.load.spritesheet('tsato', 'img/tsato.png',100,100);
    	game.load.spritesheet('ai', 'img/ai.png',100,100);
    	game.load.spritesheet('ai2', 'img/ai.png',100,100);
    game.load.image('gameover', 'img/overgame.jpg');

    // ito yung mga music mag download kna lng ng music at palitan mu yung anjan
    game.load.audio('bgMusic', 'audio/bgHappy.mp3');
    game.load.audio('yay', 'audio/score coin.mp3');
    game.load.audio('boo', 'audio/Ouch.mp3');

	},
	create: function(){
		game.state.start('menu');
	}
}