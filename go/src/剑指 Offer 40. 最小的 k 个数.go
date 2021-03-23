package leetcode

// Bubble Sort
func sortK(arr []int, k int) []int {
	arrLen := len(arr)
	lastSwapped := arrLen
	k = int(Min(arrLen, k))
	for i := 0; i < k; i++ {
		if i == lastSwapped {
			break
		}
		for j := i; j < arrLen; j++ {
			if arr[i] > arr[j] {
				Swap(&arr[i], &arr[j])
				lastSwapped = j
			}
		}
	}
	return arr
}

func getLeastNumbers(arr []int, k int) []int {
	sortK(arr, k)
	return arr[0:k]
}
