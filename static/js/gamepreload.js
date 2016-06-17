var gamePreload = function(game) {
    var socket;
    var currentRoom;
}

            gamePreload.prototype = {
                init: function(socket, currentRoom){
                    this.socket = socket;
                    this.currentRoom = currentRoom;
                },
                preload: function(){
                    this.game.load.image("gameoverImage", "images/gameover-button.png");
                    this.game.load.image("addscoreImage", "images/addscore-button.png");
                    this.game.load.tilemap("map", "tilemaps/test.json", null, Phaser.Tilemap.TILED_JSON);
                    this.game.load.image("tiles", "images/tiles.png");
                    this.game.load.image("arrow", "images/arrow.png");
                },
                create: function(){
                    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                    this.scale.pageAlignHorizontally = true;
                    this.scale.pageAlignVertically = true;
                    this.game.physics.startSystem(Phaser.Physics.ARCADE);
                    this.game.state.start("GameStart", true, false, this.socket, this.currentRoom);
                }
            }