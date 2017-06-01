var buttonPlay;
var platform, player, tsato, tsatos, ai, ai2;
var score, bestScore, life, line, pointer, move, retrieveBest, scoreTsato;
var a = 0, b = 3;
var goButton;
var bgmusic, loopAudio, boomusic, yaymusic;
var game = new Phaser.Game(800,600, Phaser.CANVAS, '');

	game.state.add('boot',bootGame);
	game.state.add('preload',preloadGame);
	game.state.add('menu',menuGame);
	game.state.add('play', playGame);
	game.state.add('win', winGame);
	game.state.add('lose',loseGame);
	game.state.add('game', game);

	//	Now start the Boot state.
	game.state.start('boot');
