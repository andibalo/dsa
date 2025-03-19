function tspBruteForce(graph) {
    const n = graph.length;
    const permutations = getPermutations([...Array(n).keys()]);
    let minCost = Infinity;
    let bestPath = [];

    permutations.forEach(path => {
        let cost = 0;
        for (let i = 0; i < path.length - 1; i++) {
            cost += graph[path[i]][path[i + 1]];
        }
        cost += graph[path[path.length - 1]][path[0]]; // Return to the start

        if (cost < minCost) {
            minCost = cost;
            bestPath = path;
        }
    });

    console.log(`Best path: ${bestPath} with cost: ${minCost}`);
}

function getPermutations(arr) {
    if (arr.length === 1) return [arr];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        const restPerms = getPermutations(rest);
        restPerms.forEach(perm => result.push([arr[i], ...perm]));
    }
    return result;
}

const graph = [
    [0, 10, 15, 20, 25],
    [10, 0, 35, 25, 30],
    [15, 35, 0, 30, 5],
    [20, 25, 30, 0, 10],
    [25, 30, 5, 10, 0]
];
tspBruteForce(graph);