
# Shortest Path

### Summary

This challenge consists of a path, this path is made up of different bases,
within each of these bases there may be one or more paths to proceed along and,
furthermore, one path may be longer to travel than another.

To survive you will have to find the fastest way from the exit to the last base and
beat the other players.
The following input information is provided for each test case:

- N denotes the number of bases in the path, where 1 < N <1000
- An NxN matrix with the adjacencies between the bases and the time required to traverse each of them. 0 Indicates that there is no adjacency and the traversal times may not be negative.

### How to run

This repository makes use of NodeJS as a runtime and uses of [readline-sync](https://www.npmjs.com/package/readline-sync) to get inputs from the command line.
- Clone this repository and move into the folder
- Run ```npm install --save``` to install the required package
- Run ```npm start``` to run the script