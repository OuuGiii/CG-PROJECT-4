/**
 * In this file is global constants that is used in this project
 */

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
	WOOD: new THREE.TextureLoader().load('img/wood.png'),
	WOODBMP: new THREE.TextureLoader().load('img/woodbmp.png'),
	DICE1: new THREE.TextureLoader().load('img/dice1.png'),
	DICE2: new THREE.TextureLoader().load('img/dice2.png'),
	DICE3: new THREE.TextureLoader().load('img/dice3.png'),
	DICE4: new THREE.TextureLoader().load('img/dice4.png'),
	DICE5: new THREE.TextureLoader().load('img/dice5.png'),
	DICE6: new THREE.TextureLoader().load('img/dice6.png')
};

// MATERIALS
const _chessboardExteriorMaterials = {
	basic: [
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN })
	],
	lambert: [
		new THREE.MeshLambertMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshLambertMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshLambertMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshLambertMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshLambertMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshLambertMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN })
	],
	phong: [
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN, bumpMap: TEXTURES.WOODBMP, bumpScale: 0.5 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN, bumpMap: TEXTURES.WOODBMP, bumpScale: 0.5 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN, bumpMap: TEXTURES.WOODBMP, bumpScale: 0.5 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN, bumpMap: TEXTURES.WOODBMP, bumpScale: 0.5 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN, bumpMap: TEXTURES.WOODBMP, bumpScale: 0.5 }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN, bumpMap: TEXTURES.WOODBMP, bumpScale: 0.5 })
	]
};

const _diceMaterials = {
	basic: [
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE1, color: COLORS.WHITE }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE2, color: COLORS.WHITE }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE3, color: COLORS.WHITE }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE4, color: COLORS.WHITE }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE5, color: COLORS.WHITE }),
		new THREE.MeshBasicMaterial({ map: TEXTURES.DICE6, color: COLORS.WHITE })
	],
	lambert: [
		new THREE.MeshLambertMaterial({ map: TEXTURES.DICE1, color: COLORS.WHITE }),
		new THREE.MeshLambertMaterial({ map: TEXTURES.DICE2, color: COLORS.WHITE }),
		new THREE.MeshLambertMaterial({ map: TEXTURES.DICE3, color: COLORS.WHITE }),
		new THREE.MeshLambertMaterial({ map: TEXTURES.DICE4, color: COLORS.WHITE }),
		new THREE.MeshLambertMaterial({ map: TEXTURES.DICE5, color: COLORS.WHITE }),
		new THREE.MeshLambertMaterial({ map: TEXTURES.DICE6, color: COLORS.WHITE  })
	],
	phong: [
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE2, color: COLORS.WHITE, bumpMap: TEXTURES.DICE2}),
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE3, color: COLORS.WHITE, bumpMap: TEXTURES.DICE3}),
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE1, color: COLORS.WHITE, bumpMap: TEXTURES.DICE1}),
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE4, color: COLORS.WHITE, bumpMap: TEXTURES.DICE4}),
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE5, color: COLORS.WHITE, bumpMap: TEXTURES.DICE5}),
		new THREE.MeshPhongMaterial({ map: TEXTURES.DICE6, color: COLORS.WHITE, bumpMap: TEXTURES.DICE6 })
	]
};

const MATERIALS = {
	CHESSBOARD: {
		EXTERIOR: {
			BASIC: new THREE.MeshFaceMaterial(_chessboardExteriorMaterials.basic),
			LAMBERT: new THREE.MeshFaceMaterial(_chessboardExteriorMaterials.lambert),
			PHONG: new THREE.MeshFaceMaterial(_chessboardExteriorMaterials.phong)
		}
		/*
		INTERIOR: {
			SQUARES: {
				BASIC: new THREE.MeshBasicMaterial({ color: COLORS.BLACK }),
				LAMBERT: new THREE.MeshPhongMaterial({ color: COLORS.BLACK }),
				PHONG: new THREE.MeshLambertMaterial({ color: COLORS.BLACK })
			}
		}*/
	}
};
