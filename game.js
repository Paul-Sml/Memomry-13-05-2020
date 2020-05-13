var config = {

        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics : {
            default: 'arcade',
            arcade: {
                //gravity: {y: 300},
                debug: false
            }
        },
        scene: {
            init: init,
            preload: preload,
            create: create,
            update: update
        }

}

var game = new Phaser.Game(config);

function init(){
    var platforms;
    var player;
    var cursors;
}

function preload(){
    this.load.image('background','assets/fond.png');
    this.load.image('dos','assets/dos.png');
}
function create(){
    this.add.image(400,300,'background');

    platforms.create(470,300,'dos').setScale(1).refreshBody();
}
