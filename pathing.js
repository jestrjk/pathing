
var TileCoordinates = require('./tileCoordinates')

class Path {
  constructor( maze ) {
    this.pathTaken = [ new TileCoordinates(0,0) ]
    this.maze = maze
  }
  
  currentPosition() {
    return this.pathTaken[this.pathTaken.length-1]
  }

  findPath(numberOfSteps = 1) {

    for( let steps = 0 ; steps < numberOfSteps ; steps ++ )
    {
      this.maze.display()
      let step = this.getClosestOpenTile( this.currentPosition() )

      if ( this.isSamePosition( step ) ) {
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
    let cp = this.currentPosition()

    if ( cp.x == step.x && cp.y == step.y ) return true

    return false
  }
  getClosestOpenTile( coords ) {
    
    return closest
  }

  getOpenTiles( coords ) {
    
    let examineTiles = [ coords.left(), coords.right(), coords.up(), coords.down() ]
    let openTiles = examineTiles.map( coords => {
      if 
    })
    

    
    if ( this.tileIsOpen( coords.left() )) openTiles.push(coords.left())
    if ( this.tileIsOpen( coords.right() )) openTile.push(coords)
  }

  getCloserTile( newTile, closest ) {

    // console.log( `comparing ${x},${y}`)
    // console.log( this.maze.distanceToEnd( x, y ) )
    // console.log( this.maze.distanceToEnd( closest.x, closest.y ) )

    if ( this.tileIsOpen(newTile) ) {
      if (  this.maze.distanceToEnd( x, y ) < 
            this.maze.distanceToEnd( closest.x, closest.y )) {

        // console.log( "CLOSER !")
        return {x:x,y:y} 
      }
    }
    return closest
  }

  tileIsOpen( tileCoordinates ) {

    if ( this.maze.tile(tileCoordinates) == this.maze.tileSet.open ) return true

    return false 
  }

}

module.exports = Path