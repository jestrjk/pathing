var TileCoordinates = require('./tileCoordinates')

class Maze {
  constructor() {
  
    this.tileSet = {
      wall: '█',
      path: '.',
      wrong: 'x',
      player: '@',
      open: ' ',
    }

    this.wallPercentage = .25
    this.width = randInt(24)+12
    this.height = randInt(8)+8

    this.generateMaze()
  }

  generateMaze() {
    // We are going to use a single array, you just break it up using the width of the maze
    // you can see the math and calcs in all the methods below...basically y*width + x gives you
    // the right tile.
    this.tiles = new Array(this.height*this.width)
    this.tiles.fill( this.tileSet.open )

    // Place the walls
    let numberOfWalls = this.wallPercentage * this.tiles.length

    for( let wallIter = 0; wallIter < numberOfWalls ; wallIter++ ) {
      this.setTile( new TileCoordinates( randInt( this.width ), randInt( this.height ) ), this.tileSet.wall )
    }

    // Set the player start point, for visual reference
    this.setTile( new TileCoordinates( 0,0 ) , this.tileSet.player )
    // Set the ending open, just in case our random wall splatting covered it up. 
    this.setTile( new TileCoordinates(this.width-1, this.height-1), this.tileSet.open )
  }
  
  tile(tc) {
    if ( tc.x < 0 || tc.x >= this.width ) return this.tileSet.wall
    if ( tc.y < 0 || tc.y >= this.height ) return this.tileSet.wall

    return this.tiles[this.tileIndex(tc)]
  }

  setTile(tc, tile) {
    this.tiles[this.tileIndex(tc)] = tile 
  }

  tileIndex( tc ){
    if ( tc === undefined ) return 0

    return tc.y*this.width + tc.x
  }
  
  display() {
    console.log( `${this.width}x${this.height} @ ${this.wallPercentage * 100}% walls` )
    for( let y = 0 ; y < this.height ; y++ ) {
      console.log( this.tiles.slice( y*this.width, y*this.width + this.width ).join('') )
    }
  }
}

function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = Maze