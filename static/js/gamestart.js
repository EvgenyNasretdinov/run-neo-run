var gameStart = function (game) {
                score = 0;
                var scoreText;
                var cursors;
                var player;
                var positionXTest = 0;
                var pXTold = positionXTest;
                var socket;
                var currentRoom;
            }

            gameStart.prototype = {
                init: function(socket, currentRoom){
                    this.socket = socket;
                    this.currentRoom = currentRoom;
                },
                create: function(){
                    score = 0;
                    // var addscoreButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY-200, "addscoreImage", this.addScore, this);
                    // addscoreButton.anchor.setTo(0.5,0.5);
                    // var gameoverButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY+200, "gameoverImage", this.endGame, this);
                    // gameoverButton.anchor.setTo(0.5,0.5);
                    // scoreText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Score: "+score, { font: "50px Arial", fill: "#F0FFFF", align: "center" });
                    // scoreText.anchor.set(0.5);

                    this.map = this.game.add.tilemap("map");
                    this.map.addTilesetImage("simples_pimples", "tiles");
                    this.backgroundlayer = this.map.createLayer("bgLayer");
                    this.blockedLayer = this.map.createLayer("collideLayer");


                    this.map.setCollisionBetween(1, 2000, true, "collideLayer");
                    this.backgroundlayer.resizeWorld();


                    this.game.physics.startSystem(Phaser.Physics.ARCADE);

                    
                    this.player = this.game.add.sprite(80, 80, "arrow");
                    this.player.anchor.set(0.5);

                    this.game.physics.arcade.enable(this.player);

                    // player.body.setSize(32, 32, 0, 0);
                    // player.body.maxAngular = 500;
                    // player.body.angularDrag = 50;

                    this.game.camera.follow(this.player);

                    cursors = this.game.input.keyboard.createCursorKeys();
                },
                addScore: function(){
                    score++;
                    scoreText.setText("Score: " + score);
                },
                endGame: function(){
                    this.game.state.start("GameOver", true, false, score);
                },
                update: function(){

                    this.socket.emit('send_position',{position: this.player.body.x, room: currentRoom});

                    this.player.body.velocity.x = 0;
                    this.player.body.velocity.y = 0;
                    // player.body.angularVelocity = 0;

                   if (this.pXTold != this.positionXTest){
                        console.log(this.positionXTest);
                        this.pXTold = this.positionXTest;
                   } 

                    if (cursors.up.isDown)
                    {
                        this.player.body.velocity.y -= 350;
                        // this.game.camera.y -= 50;
                    }
                    else if (cursors.down.isDown)
                    {
                        this.player.body.velocity.y += 350;
                        // this.game.camera.y += 50;
                    }

                    if (cursors.left.isDown)
                    {
                        this.player.body.velocity.x -= 350;
                        // this.game.camera.x -= 50;
                    }
                    else if (cursors.right.isDown)
                    {
                        this.player.body.velocity.x += 350;
                        // this.game.camera.x += 50;
                    }

                    this.game.physics.arcade.collide(this.player, this.blockedLayer);
                },
                render: function(){
                        this.game.debug.body(this.player);
                }

            }