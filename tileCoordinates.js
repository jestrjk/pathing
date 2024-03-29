
class TileCoordinates {
  constructor( x, y ) {
    this.x = x
    this.y = y
  }

  equals( coord ) {
    if (coord.x == this.x && coord.y == this.y ) return true
    
    return false
  }
  
  left()  { return new TileCoordinates( this.x-1, this.y )}
  right() { return new TileCoordinates( this.x+1, this.y )}
  up()    { return new TileCoordinates( this.x, this.y-1 )}
  down()  { return new TileCoordinates( this.x, this.y+1 )}
}

module.exports = TileCoordinates