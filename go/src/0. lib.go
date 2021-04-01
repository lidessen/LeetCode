package leetcode

func Swap(a *int, b *int) {
	temp := *a
	*a = *b
	*b = temp
}

func Max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func Min(a int, b int) int {
	if a < b {
		return a
	}
	return b
}

func PrintArr(arr []int) {
	for _, v := range arr {
		println(v)
	}
}