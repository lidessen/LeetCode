package leetcode

import (
	"testing"
)

func TestSortArray(t *testing.T) {
	arr := []int{5,1,1,2,0,0}
	sortArray(arr)
	PrintArr(arr)
}