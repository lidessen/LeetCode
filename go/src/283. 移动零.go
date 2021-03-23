package leetcode

func moveZeroes(nums []int) {
	arrLen := len(nums)

	for i := 0; i < arrLen-1; i++ {
		for j := i; j < arrLen; j++ {
			if nums[i] == 0 && nums[j] != 0 {
				Swap(&nums[i], &nums[j])
				break
			}
		}
	}
}
