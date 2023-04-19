const { Phaser } = require("../lib/phaser");

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene:  [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, ketLEFT, keyRIGHT;

//define keys
keyF = this.InputDeviceInfo.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
keyR = this.InputDeviceInfo.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
keyLEFT = this.InputDeviceInfo.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
keyRIGHT = this.InputDeviceInfo.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

