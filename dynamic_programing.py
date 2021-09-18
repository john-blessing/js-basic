'''

    寻找最长子序列，并返回最大长度
    例: [1, 5, 2, 4, 3]
'''


# import numpy as np

# 暴力法
# memo = {}
# l1 = []
#
#
# def dyn(arr, i):
#     if i in memo:
#         return memo[i]
#
#     if i == len(arr) - 1:
#         return 1
#
#     # max_len = 1
#     cr = []
#     for j in range(i + 1, len(arr)):
#
#         if arr[j] > arr[i]:
#             cr.append(arr[j])
#             dyn(arr, j)
#             # max_len = max(max_len, dyn(arr, j) + 1)
#
#         l1.append(cr)
#
#     # memo[i] = max_len
#     return l1
#
#
# def length_of_lis(mums):
#     return max(dyn(mums, i) for i in range(len(mums)))
#
#
# l = np.random.randint(100, size=5)
#
# print(l)
# print(length_of_lis(l))
# print(l1)

# def fib(arr):
#     res = []
#
#     def child(i, temp):
#         res.append(temp)
#         for idx in range(i, len(arr)):
#             child(idx + 1, temp + [arr[idx]])
#
#     child(0, [])
#
#     return res;
#
#
# d = fib([1, 5, 2, 4, 3])
#
# print(d)

'''
    题目：有四个数字：1、2、3、4，能组成多少个互不相同且无重复数字的三位数？各是多少？
'''
arr = [1, 2, 3, 4]
res = []


def find_three_figures(i, tmp):

    if len(tmp) == 3:
        res.append(tmp)

    for idx in range(i, len(arr)):
        find_three_figures(idx + 1, tmp + [arr[idx]])


# find_three_figures(0, [])

print(0.1 + 0.2 == 0.3)
