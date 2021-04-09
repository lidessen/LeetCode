function nextPermutation(nums: number[]): void {
  if (nums.length < 2) {
    return;
  }
  const i = getDescendingPos(nums);
  if (i > 0) {
    const target = findLeastFromDescending(
      nums,
      i,
      nums.length - 1,
      nums[i - 1]
    );
    swap(nums, target, i - 1);
  }
  reverseDescending(nums, i, nums.length - 1);
}

function getDescendingPos(nums: number[]) {
  if (nums.length > 1) {
    for (let i = nums.length - 1; i > 0; i--) {
      if (nums[i] > nums[i - 1]) {
        return i;
      }
    }
  }
  return 0;
}

function swap(nums: number[], i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverseDescending(nums: number[], start: number, end: number) {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

function findLeastFromDescending(
  nums: number[],
  start: number,
  end: number,
  compare: number
) {
  for (let i = end; i >= start; i--) {
    if (nums[i] > compare) {
      return i;
    }
  }
  return start;
}
