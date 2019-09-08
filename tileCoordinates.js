
class TileCoordinates {
  constructor( x, y ) {
    this.x = x
    this.y = y
  }

  left()  { return new TileCoordinate( this.x-1, this.y )}
  right() { return new TileCoordinate( this.x+1, this.y )}
  up()    { return new TileCoordinate( this.x, this.y-1 )}
  down()  { return new TileCoordinate( this.x, this.y+1 )}
}

module.exports = TileCoordinates