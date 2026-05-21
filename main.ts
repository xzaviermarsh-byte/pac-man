sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
info.onScore(132, function () {
    game.gameOver(true)
})
let food_pills: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let Pac_man = sprites.create(assets.image`Pac Man`, SpriteKind.Player)
controller.moveSprite(Pac_man)
scene.cameraFollowSprite(Pac_man)
tiles.placeOnRandomTile(Pac_man, sprites.dungeon.collectibleInsignia)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    food_pills = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f f f 5 5 5 f . . . 
        . . f 5 5 5 f f 5 5 5 5 f . . . 
        . . f 5 5 5 f f f 5 5 5 f . . . 
        . . f 5 5 5 5 f f 5 5 5 f . . . 
        . . f 5 5 5 f f f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.setTileAt(value, assets.tile`myTile`)
    tiles.placeOnTile(food_pills, value)
}
