// Imports
import "./style.scss";
import kaboom from "kaboom";

// Vars and helper functions
const numScale = 5;

// Scale a number based on numScale, defined above
const s = (n = 1) => n * numScale;

// Initalize Kaboom
kaboom();

// Load sprites
loadSprite("purpleman", "./assets/purpleman.png");
loadSprite("greenman", "./assets/greenman.png");
loadSprite("grass", "./assets/grass.png");

// Add sprite to canvas
add([
	sprite("purpleman"),
	pos(s(20),s(20)),
	body(),
	area(),
	scale(s())
]);

// Load a custom level
addLevel([
	"     ",
	"  @  ",
	"     ",
	"xxxxx"
], {
	width: s(32),
	height: s(32),
	"x": () => [
		sprite("grass"),
		area(),
		solid(),
		scale(s())
	],
	"@": () => [
		sprite("greenman"),
		body(),
		area(),
		scale(s())
	]
});