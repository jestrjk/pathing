# Pathing example

Clone it, then

`node app.js`

There's no dependencies, it's a from scratch path finder. Its a greedy, in that it
favors its current path rather than back tracking to find better ones at certain costs.

The cost is computed as a straight up distance between the ~~start~~ current node choices and end.

You can configure start and end in the code, its not too hard. but right now its locked at
top left to bottom right of the maze, with random amounts of walls in between. You can control the
wall percentage in the maze class.

