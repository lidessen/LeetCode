function intersection(nums1: number[], nums2: number[]): number[] {
  sort(nums1);
  sort(nums2);

  const set = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length) {
    while (i > 0 && nums1[i] === nums1[i - 1] && i < nums1.length) {
      i++;
    }

    while (nums2[j] < nums1[i] && j < nums2.length) {
      j++;
    }

    if (nums1[i] === nums2[j] && i < nums1.length) {
      set.push(nums1[i]);
    }
    i++;
  }

  return set;
}

function sort(nums: number[]) {
  nums.sort((a, b) => a - b);
}
