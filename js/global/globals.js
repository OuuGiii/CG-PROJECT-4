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
	WOOD: new THREE.TextureLoader().load('img/wood.png')
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
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN }),
		new THREE.MeshPhongMaterial({ map: TEXTURES.WOOD, color: COLORS.BROWN })
	]
};

const MATERIALS = {
	CHESSBOARD: {
		EXTERIOR: {
			BASIC: new THREE.MeshFaceMaterial(_chessboardExteriorMaterials.basic),
			LAMBERT: new THREE.MeshFaceMaterial(_chessboardExteriorMaterials.lambert),
			PHONG: new THREE.MeshFaceMaterial(_chessboardExteriorMaterials.phong)
		},
		INTERIOR: {
			SQUARES: {
				BASIC: new THREE.MeshBasicMaterial({ color: COLORS.BLACK }),
				LAMBERT: new THREE.MeshPhongMaterial({ color: COLORS.BLACK }),
				PHONG: new THREE.MeshLambertMaterial({ color: COLORS.BLACK })
			}
		}
	}
};
