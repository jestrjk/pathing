
var TileCoordinates = require('./tileCoordinates')

class Path {
  constructor( maze ) {
    this.pathTaken = [ new TileCoordinates(0,0) ]
    this.maze = maze
    this.end = new TileCoordinates( maze.width, maze.height )
  }
  
  currentCoords() {
    return this.pathTaken[this.pathTaken.length-1]
  }

  findPath(numberOfSteps = 1) {

    for( let steps = 0 ; steps < numberOfSteps ; steps ++ )
    {
      this.maze.display()
      let step = this.getClosestOpenTile( this.currentCoords() )

      if ( step ===  undefined ) {
        this.backTrack()
      }
      else {
        this.takeStep( step )
      }
    }
  }

  takeStep( step ) {
    this.maze.setTile(step.x, step.y, this.maze.tileSet.path)
    this.pathTaken.push( step )  
  }

  backTrack() {
    let wrongPath = this.pathTaken.pop()
    this.maze.setTile( wrongPath.x, wrongPath.y, this.maze.tileSet.wrong )
  }

  isSamePosition( step ) {
    let cp = this.currentCoords()

    if ( cp.x == step.x && cp.y == step.y ) return true

    return false
  }

  getClosestOpenTile(coords) {
    let openTiles = this.getOpenTiles( coords ) 
    if ( openTiles ) {
      return openTiles.reduce( (prev, cur) => {
        if ( this.distanceToEnd( prev ) > this.distanceToEnd( cur ) ) {
          return cur
        } else {
          return prev
        }
      })
    }
    else {
      return undefined
    }
  }

  getOpenTiles( coords ) {
    
    let openTiles = []
    let examineTileCoords = [ coords.left(), coords.right(), coords.up(), coords.down() ]
    
    examineTileCoords.forEach( tileCoords => {
      if ( this.tileIsOpen( tileCoords ) ) openTiles.push( tileCoords ) 
    })

    return openTiles
  }

  tileIsOpen( tileCoordinates ) {

    if ( this.maze.tile(tileCoordinates) == this.maze.tileSet.open ) return true

    return false 
  }

  distanceToEnd( coords ) {
    let distance = Math.sqrt( Math.pow(this.width - coords.x,2) + Math.pow(this.height-coords.y,2) )
    return distance
  }
}

module.exports = Path