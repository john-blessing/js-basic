'''
Author: your name
Date: 2021-09-12 14:30:58
LastEditTime: 2021-09-12 23:34:34
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: /algorithm/test/quickSrot.py
'''

def quickSrot(arr):
  if len(arr) < 2:
    return arr
  else:
    q = arr[0]
    left = [v for v in arr[1:] if v <= q]
    right = [v for v in arr[1:] if v > q]
    
    return quickSrot(left) + [q] + quickSrot(right)


# print(quickSrot([5,3,2,4,1,20,11,6,20,14]))

arr = [3,2,4,1]

# print([v for v in arr if v > 1])

