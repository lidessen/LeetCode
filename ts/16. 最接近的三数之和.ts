function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  return topOfSet(nSumClosest(nums, 3, target));
}

interface PosRange {
  start: number;
  end: number;
}

function nSumClosest(
  nums: number[],
  n: number,
  target: number,
  { start, end }: PosRange = { start: 0, end: nums.length - 1 }
): Set<number> {
  const result = new Set<number>();
  result.add(Infinity);
  if (n > 2) {
    for (let i = start; i < end - n + 2; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      const sub = nSumClosest(nums, n - 1, target - nums[i], {
        start: i + 1,
        end,
      });

      let val = Array.from(result)[0];

      for (const item of sub) {
        if (Math.abs(val - target) > Math.abs(item + nums[i] - target)) {
          result.clear();
          result.add(item + nums[i]);
          val = item + nums[i];
        } else if (
          Math.abs(val - target) === Math.abs(item + nums[i] - target)
        ) {
          result.add(item + nums[i]);
        }
      }
    }
    return result;
  } else if (n === 2) {
    return twoSumClosest(nums, target, { start, end });
  }

  let num = Infinity;
  for (let i = start; i <= end; i++) {
    if (Math.abs(nums[i] - target) < Math.abs(num - target)) {
      num = nums[i];
    }
  }

  result.add(num);
  return result;
}

function twoSumClosest(
  nums: number[],
  target: number,
  { start, end }: PosRange = { start: 0, end: nums.length - 1 }
): Set<number> {
  const result = new Set<number>();

  result.add(nums[start] + nums[end]);

  let i = start;

  while (i < end) {
    if (i > start && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }
    let j = end;

    let val = topOfSet(result);

    while (
      Math.abs(nums[i] + nums[j] - target) > Math.abs(val - target) &&
      j > i + 1
    ) {
      j--;
    }

    while (j > i) {
      if (Math.abs(nums[i] + nums[j] - target) < Math.abs(val - target)) {
        result.clear();
        result.add(nums[i] + nums[j]);
        val = nums[i] + nums[j];
      } else if (
        Math.abs(nums[i] + nums[j] - target) === Math.abs(val - target)
      ) {
        if (!result.has(nums[i] + nums[j])) {
          result.add(nums[i] + nums[j]);
        }
      }
      if (Math.abs(nums[i] + nums[j] - target) > Math.abs(val - target)) {
        break;
      }
      j--;
    }

    i++;
  }

  return result;
}

function topOfSet<T>(set: Set<T>) {
  return Array.from(set)[0];
}

const nums = [0, 2, 1, -3];

nums.sort((a, b) => a - b);
console.log(nums);
console.log(twoSumClosest(nums, 3));
