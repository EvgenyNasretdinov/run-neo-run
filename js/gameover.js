var gameOver = function(game){}

            gameOver.prototype = {
                init: function(score){
                    var scoreText = this.game.add.text(this.game.world.centerX, this.game.world.centerY+50, "Your score: "+ score, { font: "50px Arial", fill: "#909090", align: "center" });
                    scoreText.anchor.set(0.5);
                },

                create: function(){
                    var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Game is Over", { font: "65px Arial", fill: "#FFFFFF", align: "center" });
                    text.anchor.set(0.5);
                }
            }