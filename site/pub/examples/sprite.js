kaboom.global();

init({
	fullscreen: true,
	scale: 2,
});

// gotta load the image first
loadSprite("mark", "/pub/img/mark.png");

scene("main", () => {
	add([
		sprite("mark"),
		// BIGMARK
		scale(10),
	]);
});

start("main");
