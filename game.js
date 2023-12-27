// Import Phaser
import * as Phaser from 'phaser';
import MainMenu from './MainMenu.js'; // Import the MainMenu class

// Define your game scenes
function preload() {
 // Preload assets here
}

function create() {
 // Create game objects here
 try {
  let sprite = this.physics.add.sprite(100, 450, 'mySprite');
 } catch (error) {
  console.error(`Error: Failed to create sprite`, error);
 }
}

// Configure game settings
const config = {
 type: Phaser.AUTO, // Use Phaser's automatic rendering mode
 width: 800, // Set the width of the game
 height: 600, // Set the height of the game
 backgroundColor: '#FFFFFF', // White background
 parent: 'gameCanvas', // The ID of the DOM element to append the game to
 physics: {
  default: 'arcade',
  arcade: {
      gravity: { y: 200 }
  }
 },
 scene: {
  preload: preload,
  create: create,
  MainMenu: MainMenu // Add the MainMenu scene
 }
};

// Initialize Phaser game
if (typeof window !== 'undefined') {
 try {
  const game = new Phaser.Game(config);
  game.scene.start('MainMenu');
 } catch (error) {
  console.error(`Error: Failed to initialize game`, error);
 }
} else {
 console.error('Error: Window object is not defined');
}