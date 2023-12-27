class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' });
  }
 
  preload() {
    this.load.image('playButton', 'assets/playButton.png');
    this.load.image('optionsButton', 'assets/optionsButton.png');
  }
 
  create() {
    // Create buttons
    let playButton = this.add.image(100, 100, 'playButton').setInteractive();
    let optionsButton = this.add.image(200, 200, 'optionsButton').setInteractive();
 
    // Handle button hovers
    playButton.on('pointerover', () => {
      playButton.setTint(0x00FF00); // Green tint
    });
 
    playButton.on('pointerout', () => {
      playButton.clearTint(); // Clear tint
    });
 
    optionsButton.on('pointerover', () => {
      optionsButton.setTint(0x00FF00); // Green tint
    });
 
    optionsButton.on('pointerout', () => {
      optionsButton.clearTint(); // Clear tint
    });
 
    // Handle button clicks
    playButton.on('pointerdown', () => {
      this.scene.start('Game');
    });
 
    optionsButton.on('pointerdown', () => {
      this.scene.start('Options');
    });
  }
 }
 
 // Export the MainMenu class
 export default MainMenu;
 