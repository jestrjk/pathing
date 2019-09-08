class Maze {
  constructor() {
  
    this.tileSet = {
      wall: '█',
      player: '@',
      open: ' ',
    }

    this.wallPercentage = .5
    this.width = randInt(32)+4
    this.height = randInt(16)+4

    // We are going to use a single array, you just break it up using the width of the maze
    // you can see the math and calcs in all the methods below...basically y*width + x gives you
    // the right tile.
    this.tiles = new Array(this.height*this.width)
    this.tiles.fill( this.tileSet.open )

    this.generateMaze()
  }

  generateMaze() {
    // Place the walls
    let numberOfWalls = this.wallPercentage * this.tiles.length

    for( let wallIter = 0; wallIter < numberOfWalls ; wallIter++ ) {
      this.setTile( randInt( this.width ), randInt( this.height ), this.tileSet.wall )
    }

    // Place the player, but don't hate them.
    this.setTile( 0,0, this.tileSet.player)
  }
  
  tile(x,y) {
    return this.tiles[y*this.width + x]
  }

  setTile(x,y, tile) {
    this.tiles[y*this.width + x] = tile 
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