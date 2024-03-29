算法有一个基本的行为，遍历，遍历普遍存在于各种算法中，序列、树、图都需要遍历

我们算法的目的，是将无序的数据组织成有序的数据

数据结构和算法密不可分，编程行为中的算法活动，大多是处理数据

数据、控制、计算是自动化程序的基本构成

数据有序无需之分，按照某种规则决定数据出现的先后顺序，同样根据规则，可以计算数据的存储位置

二分查找便是基于排序数组，对于无序的数组而言，二分查找是不可能的

迭代是访问数据的最基本行为，排序是为了给迭代提供剪枝策略，hash表是一种极致的排序行为，即通过hash计算，直接确定数据的存放位置，而不是通过大小比较，确定大概位置

在此前提下，由排序开始，试图寻找算法的基本行为范式，作为分析算法问题的依据

1. 排序

排序需要将数据处理成有序状态，需要遍历至少一遍

时间复杂度 >= O(n)

例如，桶排序和hash就只需要遍历一遍（hash可以视为排序的一种）

为什么hash可以看成是排序？

排序的目的，无非是为了减少查找次数，因此，凡是能减少查找次数的序列，都可以看成是有序序列

比如，我们要从一组数据中，找到属性A为n的数据，除非数据是按A升序/降序排列的，否则可以视为无序数据，因为至少需要遍历一次，没有策略可以减少查找次数

那么对于hash表中的数据，比如我们是以id为键，那么查找的时候必然也是根据id查找，通过hash计算可以直接定位数据，这里的策略便是hash算法，即不需要遍历，就可以确定数据位置，因此hash表确实是有序的

因此，排序算法按照时间复杂度，大致可以分为

O(n): 桶排序、hash
桶排序用于数值排列，将值作为索引，局限性较大，内存使用上不稳定，取决于数据的离散程度
hash是优化的桶排序，通过hash计算来降低数据存储时的离散程度，典型的空间换时间

O(nlogn): 并排、快排
利用了分治思想
O(n^2): 冒泡、选择
常规的排序算法

这里需要分析O(n^2)到O(nlogn)究竟做了什么
首先，遍历一遍是必须的，因为要确定排序的位置，第一个n毫无疑问，关键区别在于n和logn的区别，即在迭代的过程中，一个需要再次做O(n)的迭代，另一个只需要进行一次二分查找(logn级别的迭代，基本是等价于logn的)

继续分析冒泡和选择的行为，本质上是每次在剩下未排序的数据中，找到最大/最小的数据添加到有序数据的队尾
既然这样，我们每次都需要遍历剩下的元素，这里面越是靠后的元素，被重复遍历的次数也就越多

换一个思路，如果每次从无序序列取出首元素的时候，通过二分查找插入有序序列，那么在遍历上，是由n到logn的，因为第二次遍历，从顺序遍历，变成了二分查找，但是插入操作的成本却增加了，因为往中间插入元素，最坏情况下，需要挨个移动数据

归并排序是利用分治思想，将序列不断二分，直到不能再分，然后逐级合并，这个过程的损耗主要是在合并序列上，通过双指针，合并序列只需要遍历一次，但是插入(似乎还是？)

另，分治法是一种遍历策略吗？

(关于数组和链表，查找和插入成本)

在选择排序算法的时候，时间复杂度固然是考虑的因素，选择合适的键作为排序依据也很重要

排序的作用，如果使序列有序，能显著减少后续计算量，在可接受的空间预算下，排序就是有必要的