var gamePreload = function(game) {}

            gamePreload.prototype = {
                preload: function(){
                    this.game.load.image("gameoverImage","images/gameover-button.png");
                    this.game.load.image("addscoreImage","images/addscore-button.png");
                },
                create: function(){

                    this.game.state.start("GameStart");
                }
            }