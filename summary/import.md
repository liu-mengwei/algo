所有列为重点的问题 || 第一次没有做出来的问题


数组
- 

查找表
-

203 注意设置虚拟头节点，则删除元素的操作达成了统一
82 题目理解错，题目的意思是删除所有重复的元素
234 采用快慢指针法 可以用一次遍历即可找到链表的中间节点
102  通过采用新建立的数据结构记录遍历的层数
199 未通过
94 中序遍历 用栈模拟递归没做出来
341 题目理解一下扁平化数组
279 经典问题，将此问题转成图的问题，求最短路径(建模)。用队列实现广度优先遍历
101 两棵二叉树是否互为镜像再理解下
110 自底向上求二叉树高度的变化
112 注意递归中参数的传递，以及返回值的传递，而且注意这道题的递归终止条件不是root为null
而是递归到叶子节点
404 将问题分解，1.求所有叶子节点的和 2.如何判断是不是左叶子节点，通过上一级的参数传递
113 129 都是类似的问题 都是求到叶子节点的路径，然后做一些操作，这里我都是不管递归的返回值，
而是到了叶子节点时和满足条件时，把结果集放到了一个递归函数之外的一个变量，这样感觉比较减少思考负担
437 递归套递归，拆分成子问题
235 二分搜索树的性质
98 注意二分搜索树的性质，二分搜索树左子树中的所有值都是小于根节点，右子树则都是大于
// todo 230 二分搜索树
17 解决的思路可以看成一个递归下去的树，到达根结点即找到解
46 经典回溯法 递归回去时要重置数据状态
77 没做出来
90 todo 数组去重
79 200 130 同属于一类问题，二维平面的搜索，可以用一些小技巧可以简单的表示上下左右四个方向
用一个二维数组记录自己访问过哪里 todo 417
51 todo 对角线可以用比较巧妙的方法表示出来 而且遍历二维数组时，这里不用写两个for，层号是上一层传上来的
只需要遍历列
64 经典的动态规划基础题
343 没做出来
279 todo 动态规划
337 map 的key值可以存对象，但obj的key不行，会被转成字符串
122 不能用new Array().fill(new Array()) 这样写的话，没有断开引用
123 对状态加以细分 3维dp
322 经典问题 找零钱 注意，零钱金额也可以作为遍历的对象
139 todo 用动态规划解
494 todo 用动态规划负值怎么办
376 看能不能优化到o(n)解法 还是得研究问题本身的性质
22 没做出来 像这种要求具体解的，一般要用dfs，递归去做
144 经典问题 用栈模拟递归 将一个个命令存入栈中，取出时再生成新的命令，模拟了计算机的执行
42 按列求雨水 计算左边和右边的最大值的最小值，减去当前值，即是雨水
647 求所有字串很简单，就是取两个指针，i < j 两次循环即可 通过动态规划缓存结果，为true是ret++即可

大概历时一个半月，这个课程终于刷完了，leetcode上累计刷了110道题，
课程结束了，怎么还有一种像是电视剧刷完的那种空落落的感觉。。
本来可能想着是面试用的，但我发现我其实是喜欢做算法题的，大学的时候学
数据结构的时候我就觉得人类真的太聪明了，那些闻名的算法都是怎么想出来的。
不得不被这些人的聪明的大脑所折服，
我这次刷题的过程中令我感触最深的就是动态规划思想，把一个看似复杂的问题
竟然用短短十几行甚至几行，甚至一个for循环就能解决，这令我竟然感受到了
一种美学，代码竟然也可以写的这么漂亮，在我实践的过程中，如果能用动态规划
这种自底向上解的，性能要远超递归（虽然也用了记忆化），因为函数入栈进栈也是
要消耗性能的，动态规划非常扁平化而且利于调试。但是能解决的问题范围有限，
而且可读性上不如递归。
这个课程感觉学的非常顺畅，几乎也没怎么卡壳过，就是轻松愉快的学完了，
bobo老师的思路非常清晰，感觉是那种脑子很聪明的那种人（比如班上那些不用费很大劲成绩也很好的那种）
全程手写代码没有一次失误或者没通过的，这也太吊了吧，就算是大神也会有失误的时候或者不通过的时候，
难道失误被剪掉了哈哈？
