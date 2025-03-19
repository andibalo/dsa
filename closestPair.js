function closestPair(points) {
    points.sort((a, b) => a[0] - b[0]);
    let minDist = Infinity;
    let pair = [];
    
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let dist = Math.sqrt(Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2));
            if (dist < minDist) {
                minDist = dist;
                pair = [points[i], points[j]];
            }
        }
    }

    console.log(`Closest pair: ${pair} with distance: ${minDist}`);
}

closestPair([[1, 1], [3, 4], [2, 3], [6, 1], [4, 5]]);