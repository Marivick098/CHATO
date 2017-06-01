playGame={
	create:function(){
 game.add.image(0,0,'bg');
        platform = game.add.sprite(0,0,'platform');
        platform.scale.x=2;


    game.physics.arcade.enable(platform);
    platform.body.immovable=true;

        ai = game.add.sprite(350,50,'ai');
        ai2 = game.add.sprite(350,200,'ai2');
        player = game.add.sprite(350,500,'player');
        player.scale.x=2;
    btnfire = game.add.button(680,400,'fire',this.pushRight);

        player.animations.add('player',[3,2,1,0,4,3],24,false);
        ai.animations.add('ai',[2,0,1],9,true);
        ai2.animations.add('ai2',[2,0,1],9,true);

    game.physics.arcade.enable(ai);
    ai.body.collideWorldBounds = true;
    ai.body.velocity.x=-432;
    ai.body.bounce.x=1;
    game.physics.arcade.enable(ai2);
    ai2.body.collideWorldBounds = true;
    ai2.body.velocity.x=283;
    ai2.body.bounce.x=1;

    life = game.add.text(50,10,'Life: 3',{fill:"black"});
    score = game.add.text(650,10,'Score: 0',{fill:"black"});
    bestScore = game.add.text(600,40,'High Score: '+this.retrieveBest(),{fill:"black"});
    buttonPlay = game.add.button(0,0,'play',this.play);


            this.createTsatos(3000);
            tsato = game.add.group();
            tsato.enableBody = true;

            // dito na magplaplay yung bg music pero yung iba sa player.kill() nakalagay
            yaymusic = game.add.audio('yay');
            boomusic = game.add.audio('boo');
            bgmusic = game.add.audio('bgMusic');
            bgmusic.play();
            this.loopAudio(14000);
	},
	update:function(){
    game.physics.arcade.overlap(platform,tsato,this.scoreTsato);
    game.physics.arcade.overlap(ai,tsato,this.killTsato);
    game.physics.arcade.overlap(ai2,tsato,this.killTsato2);

            if(keyboard.right.isDown){
            player1.body.velocity.x=270
        }
        else{
            ai.animations.play('ai')
            ai2.animations.play('ai2')
        }
	},createTsatos:function(time){
            setInterval(function(){
            },300)
        },
        play:function(){
            buttonPlay.destroy();
        },
        // dito yung function para mag loop yung bgmusic
        loopAudio:function(time){
            setInterval (function (){
                bgmusic.play();
            },time);
        },


         pushRight:function(){

                 tsatos = tsato.create(player.position.x+100,player.position.y-100,"tsato");
                 tsatos.animations.add('play',[0,1,2,3,4],50, true);
                tsatos.body.velocity.y=-750;
                tsatos.animations.play('play');
            player.animations.play('player');

            // dito magsstop yung music.
            // boomusic.stop();
            // yaymusic.stop();
        },
         scoreTsato:function(platform,tsatos){
                tsatos.kill();
                a = a + 1;
                score.text='Score :'+a;

                // dito magplaplay yung effect pag naka score
                yaymusic.play();
                if(a==5){

    ai.body.velocity.x=500;
    ai2.body.velocity.x=550;
                }
                else if(a==10){

    ai.body.velocity.x=800;
    ai2.body.velocity.x=650;
                }
                else if(a==15){

    ai.body.velocity.x=900;
    ai2.body.velocity.x=1050;
                }
        },
         killTsato:function(ai,tsatos){
                tsatos.kill();
                b = b - 1;
                life.text='Life :'+b;
                
                // dito mag plaplay pag minus life
                boomusic.play();
                if(b==0){
                    player.kill();
                    btnfire.destroy();

        ai.animations.stop();
    ai.body.velocity.x=0;
    ai.body.bounce.x=0;
        ai2.animations.stop();
    ai2.body.velocity.x=0;
    ai2.body.bounce.x=0;

                    goButton = game.add.button(100,197,'gameover',this.overgame);
                    if(this.retrieveBest() <= a){
                   localStorage.setItem("gameStorage",a);
               }
                }
            },
             killTsato2:function(ai2,tsatos){
                tsatos.kill();
                b = b - 1;
                life.text='Life :'+b;
                // dito mag plaplay pag minus life
                boomusic.play();
                if(b==0){
                    player.kill();
                    btnfire.destroy();
                    ai.animations.stop('ai');
    ai.body.velocity.x=0;
    ai.body.bounce.x=0;
        ai2.animations.stop('ai2');
    ai2.body.velocity.x=0;
    ai2.body.bounce.x=0;

                    goButton = game.add.button(100,197,'gameover',playGame.overgame);
                    if(playGame.retrieveBest() <= a){
                   localStorage.setItem("gameStorage",a);
               }
                }
        },
         retrieveBest:function(){
            return ((localStorage.getItem("gameStorage") != null) || (localStorage.getItem("gameStorage") != ""))?localStorage.getItem("gameStorage"):0;
        },

         overgame:function(){
            window.location.href=window.location.href;
        }
    }