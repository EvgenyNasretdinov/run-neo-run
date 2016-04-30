var gameStart = function (game) {
                score = 0;
                var scoreText;
                var cursors;
            }

            gameStart.prototype = {
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
                    

                    this.backgroundlayer.resizeWorld();
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
                    if (cursors.up.isDown)
                    {
                        this.game.camera.y -= 50;
                    }
                    else if (cursors.down.isDown)
                    {
                        this.game.camera.y += 50;
                    }

                    if (cursors.left.isDown)
                    {
                        this.game.camera.x -= 50;
                    }
                    else if (cursors.right.isDown)
                    {
                        this.game.camera.x += 50;
                    }
                }
            }