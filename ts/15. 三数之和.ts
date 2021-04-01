function threeSum(nums: number[]): number[][] {
  nums.sort();
  return nSum(nums, 3, 0);
}

interface PosRange {
  start: number;
  end: number;
}

function nSum(
  nums: number[],
  n: number,
  sum: number,
  { start, end }: PosRange = { start: 0, end: nums.length - 1 }
): number[][] {
  if (n > 2) {
    let result: number[][] = [];
    for (let i = start; i < end - n + 2; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      result = result.concat(
        nSum(nums, n - 1, sum - nums[i], { start: i + 1, end }).map((x) => [
          nums[i],
          ...x,
        ])
      );
    }
    return result;
  } else if (n === 2) {
    return twoSum(nums, sum, { start, end });
  }
  const result: number[][] = [];
  for (let i = start; i <= end; i++) {
    if (
      nums[i] !== sum ||
      (result.length > 0 && result[result.length - 1][0] === nums[i])
    ) {
      continue;
    }
    result.push([nums[i]]);
  }
  return result;
}

function twoSum(
  nums: number[],
  target: number,
  { start, end }: PosRange = { start: 0, end: nums.length - 1 }
): number[][] {
  const record = new Map();
  const result: number[][] = [];
  for (let i = start; i <= end; i++) {
    if (record.has(nums[i])) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      result.push([nums[record.get(nums[i])], nums[i]]);
    }
    record.set(target - nums[i], i);
  }
  return result;
}
