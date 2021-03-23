package leetcode

// Selection Sort
func sortArray(nums []int) []int {
	for i := 0; i < len(nums) - 1; i++ {
		minIndex := i;
		for j := i + 1; j < len(nums); j++ {
			if nums[minIndex] > nums[j] {
				minIndex = j
			}
		}
		if minIndex != i {
			Swap(&nums[i], &nums[minIndex])
		}
	}
	return nums
}
