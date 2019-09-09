var Maze = require( './maze.js' ) 
var Path = require( './pathing.js' ) 
var readline = require( 'readline' )

async function app() {
    
  let maze = new Maze()
  
  maze.display() 

  let path = new Path( maze )

  while( path.findPath(1) ) {
    await sleep( 100 )
  }

  maze.display()

  let length = path.pathTaken.length
  if ( length > 1 ) {
    console.log( `Length traveled: ${path.pathTaken.length} `)
  }
  else {
    console.log( `No path, so sad, length travled: ${path.pathTaken.length}`)
  }
  
};

function sleep(ms){
  return new Promise(resolve=>{
      setTimeout(resolve,ms)
  })
}

app() ;