/**
 * In this file is global constants that is used in this project
 */

 //BALL
 const BALL_MAX_SPEED = 10;
 const BALL_SPEED_STEP = 0.1;

// COLORS
const COLORS = {
	BROWN: 0x845938,
	BLACK: 0x000000,
	WHITE: 0xffffff,
	GRAY: 0x808080,
	RED: 0xff0000,
	GREEN: 0x00ff00,
	SADDLE_BROWN: 0x8b4513,
	PERU_BROWN: 0xcd853f
};

const TEXTURES = {
  PAUSE: new THREE.TextureLoader().load('img/pause.png'),
  WOOD1: new THREE.TextureLoader().load('img/wood1.png'),
	WOOD1BMP: new THREE.TextureLoader().load('img/wood1bmp.png'),
  WOOD2: new THREE.TextureLoader().load('img/wood2.png'),
  WOOD2BMP: new THREE.TextureLoader().load('img/wood2bmp.png'),
	LENA: new THREE.TextureLoader().load('img/lena.png'),
	DICE1: new THREE.TextureLoader().load('img/dice1.png'),
	DICE2: new THREE.TextureLoader().load('img/dice2.png'),
	DICE3: new THREE.TextureLoader().load('img/dice3.png'),
	DICE4: new THREE.TextureLoader().load('img/dice4.png'),
	DICE5: new THREE.TextureLoader().load('img/dice5.png'),
	DICE6: new THREE.TextureLoader().load('img/dice6.png'),
	DICE1BMP: new THREE.TextureLoader().load('img/dice1bmp.png'),
	DICE2BMP: new THREE.TextureLoader().load('img/dice2bmp.png'),
	DICE3BMP: new THREE.TextureLoader().load('img/dice3bmp.png'),
	DICE4BMP: new THREE.TextureLoader().load('img/dice4bmp.png'),
	DICE5BMP: new THREE.TextureLoader().load('img/dice5bmp.png'),
	DICE6BMP: new THREE.TextureLoader().load('img/dice6bmp.png')
};

// MATERIALS
const _chessboardExteriorMaterials = {
	basic: [
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN })
	],
	phong: [
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN, bumpMap: TEXTURES.WOOD1BMP, bumpScale: 0.1 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN, bumpMap: TEXTURES.WOOD1BMP, bumpScale: 0.1 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN, bumpMap: TEXTURES.WOOD1BMP, bumpScale: 0.1 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN, bumpMap: TEXTURES.WOOD1BMP, bumpScale: 0.1 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN, bumpMap: TEXTURES.WOOD1BMP, bumpScale: 0.1 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD1, color: COLORS.BROWN, bumpMap: TEXTURES.WOOD1BMP, bumpScale: 0.1 })
	]
};

const _diceMaterials = {
	basic: [
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE5, color: COLORS.WHITE }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE2, color: COLORS.WHITE }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE3, color: COLORS.WHITE }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE4, color: COLORS.WHITE }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE1, color: COLORS.WHITE }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE6, color: COLORS.WHITE })
	],
	phong: [
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE5, color: COLORS.WHITE, bumpMap: TEXTURES.DICE5BMP, bumpScale: 0.05 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE2, color: COLORS.WHITE, bumpMap: TEXTURES.DICE2BMP, bumpScale: 0.05 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE3, color: COLORS.WHITE, bumpMap: TEXTURES.DICE3BMP, bumpScale: 0.05 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE4, color: COLORS.WHITE, bumpMap: TEXTURES.DICE4BMP, bumpScale: 0.05 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE1, color: COLORS.WHITE, bumpMap: TEXTURES.DICE1BMP, bumpScale: 0.05 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE6, color: COLORS.WHITE, bumpMap: TEXTURES.DICE6BMP, bumpScale: 0.05 })
	]
};
