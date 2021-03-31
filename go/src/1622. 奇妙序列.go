package leetcode

type Fancy struct {
	list      []int
	operation [][]int
}

const ADD = 0
const MULT = 1

func Constructor() Fancy {
	return Fancy{
		list:      []int{},
		operation: [][]int{},
	}
}

func (fancy *Fancy) Append(val int) {
	fancy.list = append(fancy.list, val)
}

func (fancy *Fancy) AddAll(inc int) {
	if len(fancy.list) > 0 {
		fancy.operation = append(fancy.operation, []int{len(fancy.list) - 1, ADD, inc})
	}
}

func (fancy *Fancy) MultAll(m int) {
	if len(fancy.list) > 0 {
		fancy.operation = append(fancy.operation, []int{len(fancy.list) - 1, MULT, m})
	}
}

func (fancy *Fancy) GetIndex(idx int) int {
	if len(fancy.list) <= idx {
		return -1
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
		num = num % (10^9 + 7)
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