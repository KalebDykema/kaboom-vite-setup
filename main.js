// Imports
import "./style.scss";
import kaboom from "kaboom";

// Initalize Kaboom
kaboom();

// Load sprites
loadSprite("purpleman", "./assets/purpleman.png");

// Add to canvas
add([
	sprite("purpleman"),
	scale(2),
	pos(20,20)
]);