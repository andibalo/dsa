/*
 * Complete the 'getCacheSize' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY data  -- int data[n][2]:  the insertion time and TTL score of each data inserted in the cache
 *  2. INTEGER_ARRAY queries
 * 
 * RETURNS
 *     int arr[q]: the answers to the queries
 */

/*
    Given a 2-d array of integers of size n x 2 data, data[i] represents that the 
    ith data point was inserted into the cache at time data[i][0]. It lives in the cache for data[i][1] time. 
    For an array of q queries, queries[q], find the number of data items in the cache at each time query[i].
*/


function getCacheSize(data, queries) {
    // Write your code here
    const events = [];
    
    for (let [start, ttl] of data) {
        events.push([start, 1]); 
        events.push([start + ttl + 1, -1]); 
    }
    
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    const indexedQueries = queries.map((q, idx) => [q, idx]);
    indexedQueries.sort((a, b) => a[0] - b[0]);
    
    const result = new Array(queries.length).fill(0);
    
    let activeIntervals = 0; 
    let eventIndex = 0;
    
    for (let [query, originalIndex] of indexedQueries) {
        while (eventIndex < events.length && events[eventIndex][0] <= query) {
            activeIntervals += events[eventIndex][1]; 
            eventIndex++;
        }
        
        result[originalIndex] = activeIntervals;
    }
    
    return result;
}

const data = [
    [105231, 183], // Data 1: start = 105231, ttl = 183, end = 105414
    [105334, 34],  // Data 2: start = 105334, ttl = 34, end = 105368
    [105198, 543]  // Data 3: start = 105198, ttl = 543, end = 105741
];

const queries = [105338, 105410]; // Queries at times 105338 and 105410

console.log(getCacheSize(data, queries)); // Exp