package leetcode

import (
	"testing"
)

func TestGetLeastNumbers(t *testing.T) {
	PrintArr(getLeastNumbers([]int{1, 2, 3, 1, 7, 4, 2, 0}, 4))
}