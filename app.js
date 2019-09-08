var Maze = require( './maze.js' ) 
var Path = require( './pathing.js' ) 

function app() {
    
  let maze = new Maze()
  
  maze.display() 

  let path = new Path( maze )

  path.findPath(50)
  console.log( path.pathTaken )

  maze.display()

};



app() ;