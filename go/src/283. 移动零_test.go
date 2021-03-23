package leetcode

import (
	"testing"
)

func TestMoveZeroes(t *testing.T) {
	arr := []int{0, 1, 0, 3, 12}
	moveZeroes(arr)
	PrintArr(arr)
}