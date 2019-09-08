
class TileCoordinates {
  constructor( x, y ) {
    this.x = x
    this.y = y
  }

  left()  { return new TileCoordinates( this.x-1, this.y )}
  right() { return new TileCoordinates( this.x+1, this.y )}
  up()    { return new TileCoordinates( this.x, this.y-1 )}
  down()  { return new TileCoordinates( this.x, this.y+1 )}
}

module.exports = TileCoordinates