package leetcode

import "math"

type Fancy struct {
	list      []int
	resultList map[int] int
	operation [][]int
	modVal int
}

const ADD = 0
const MULT = 1

func Constructor() Fancy {
	return Fancy{
		list:      []int{},
		resultList: make(map[int]int),
		operation: [][]int{},
		modVal: int(math.Pow(float64(10), float64(9))) + 7,
	}
}

func (fancy *Fancy) Append(val int) {
	fancy.list = append(fancy.list, val)
}

func (fancy *Fancy) AddAll(inc int) {
	if len(fancy.list) > 0 {
		if (len(fancy.operation) > 0) {
			last := fancy.operation[len(fancy.operation)-1]
			if (len(fancy.list) - 1) == last[0] && last[1] == ADD {
				last[2] += inc
				return
			}
		}
		fancy.operation = append(fancy.operation, []int{len(fancy.list) - 1, ADD, inc})
	}
}

func (fancy *Fancy) MultAll(m int) {
	if len(fancy.list) > 0 {
		if (len(fancy.operation) > 0) {
			last := fancy.operation[len(fancy.operation)-1]
			if (len(fancy.list) - 1) == last[0] && last[1] == MULT {
				last[2] *= m
				return
			}
		}
		fancy.operation = append(fancy.operation, []int{len(fancy.list) - 1, MULT, m})
	}
}

func (fancy *Fancy) GetIndex(idx int) int {
	if len(fancy.list) <= idx {
		return -1
	}
	res, exists := fancy.resultList[idx]
	if(exists) {
		return res
	}
	num := fancy.list[idx]
	for _, o := range fancy.operation {
		if o[0] < idx {
			continue
		}
		if o[1] == ADD {
			num += o[2]
		} else if o[1] == MULT {
			num *= o[2]
		}
		num = num % fancy.modVal
	}
	return num
}

/**
 * Your Fancy object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Append(val);
 * obj.AddAll(inc);
 * obj.MultAll(m);
 * param_4 := obj.GetIndex(idx);
 */