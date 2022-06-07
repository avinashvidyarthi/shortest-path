const findShortestPath = require('./shortestPath');
var readlineSync = require('readline-sync');

const inputN = readlineSync.questionInt(
	'Enter the number of bases in the path: \n'
);

let inputArray = [];
for (let i = 0; i < inputN; i++) {
	const tempInput = readlineSync.question(
		`Enter the space separated values for row ${i + 1}: \n`
	);
	inputArray.push(tempInput.split(' ').map((e) => Number(e)));
}

let graph = {};

inputArray.forEach((e, i) => {
	e.forEach((f, j) => {
		if (f !== 0) {
			if (!graph[i]) {
				graph[i] = {};
			}
			graph[i][j] = f;
		}
	});
});

if(inputN === 1) {
    console.log(`The shortest distance is: ${inputArray[0][0]}`);
} else {
    const shortestPath = findShortestPath(graph, '0', `${inputN - 1}`);
    console.log(`The shortest distance is: ${shortestPath.distance}`);
}
