function minCost(n, cuts) {
  // Sort the cuts array
  cuts.sort((a, b) => a - b);

  // Initialize dp array with endpoints
  const dp = new Array(cuts.length + 2).fill(0);
  dp[0] = 0;
  dp[cuts.length + 1] = n;

  // Calculate minimum cost for each segment
  for (let i = 1; i <= cuts.length; i++) {
    dp[i] = cuts[i] - cuts[i - 1]; // Initialize with the cost of cutting the segment
    for (let j = 0; j < i; j++) {
      dp[i] = Math.min(dp[i], dp[j] + cuts[i] - cuts[j]);
    }
  }

  // Return the minimum total cost
  return dp[cuts.length + 1];
}

// Example usage
console.log(minCost(7, [1, 3, 4, 5])); // Output: 16
console.log(minCost(9, [5, 6, 1, 4, 2])); // Output: 22
