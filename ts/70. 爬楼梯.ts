function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;

  let i = 3;
  while (i <= n) {
    let temp = dp[1] + dp[2];

    dp[1] = dp[2];
    dp[2] = temp;
  }

  return dp[2];
}
