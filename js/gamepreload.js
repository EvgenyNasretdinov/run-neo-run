var gamePreload = function(game) {}

            gamePreload.prototype = {
                preload: function(){
                    this.game.load.image("gameoverImage", "images/gameover-button.png");
                    this.game.load.image("addscoreImage", "images/addscore-button.png");
                    this.game.load.tilemap("map", "tilemaps/test.json", null, Phaser.Tilemap.TILED_JSON);
                    this.game.load.image("tiles", "images/tiles.png");
                },
                create: function(){
                    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                    this.scale.pageAlignHorizontally = true;
                    this.scale.pageAlignVertically = true;
                    this.game.physics.startSystem(Phaser.Physics.ARCADE);
                    this.game.state.start("GameStart");
                }
            }