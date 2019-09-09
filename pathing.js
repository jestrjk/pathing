
var TileCoordinates = require('./tileCoordinates')

class Path {
  constructor( maze ) {
    this.start = new TileCoordinates( 0, 0 ) 
    this.end = new TileCoordinates( maze.width-1, maze.height-1 )

    this.pathTaken = [ this.start ]
    this.maze = maze
    
  }
  
  currentCoords() {
    return this.pathTaken[this.pathTaken.length-1]
  }

  findPath(numberOfSteps = 1) {

    for( let steps = 0 ; steps < numberOfSteps ; steps ++ )
    {
      let step = this.getClosestOpenTile( this.currentCoords() )

      if ( step === undefined ) {
        this.maze.display()
        if ( this.pathTaken.length == 1 ) return false
        this.backTrack()
      }
      else {
        this.maze.display()        
        this.takeStep( step )
        if ( step.equals( this.end ) ) {
          this.maze.setTile( step, this.maze.tileSet.player )
          return false
        }
      }
    }
    return true
  }

  takeStep( step ) {
    this.maze.setTile(step, this.maze.tileSet.path)
    this.pathTaken.push( step )  
  }

  backTrack() {
    let wrongPath = this.pathTaken.pop()
    this.maze.setTile( wrongPath , this.maze.tileSet.wrong )
  }

  isSamePosition( step ) {
    let cp = this.currentCoords()

    if ( cp.x == step.x && cp.y == step.y ) return true

    return false
  }

  getClosestOpenTile(coords) {
    let openTiles = this.getOpenTiles( coords ) 
    if ( openTiles.length > 0 ) {

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
    
    if ( coords === undefined ) return []

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
    let distance = Math.sqrt( Math.pow(this.end.x - coords.x,2) + Math.pow(this.end.y - coords.y,2) )
    return distance
  }
}

module.exports = Path