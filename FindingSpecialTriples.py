'''
    找出特定的三元组
    1, n、 n+1、 n+2，范围在100~999
    2. n、 n+1、 n+2, 每个数满足 a * a + b * b
'''

check_list = []

for i in range(0, 1000):
    check_list.append(None)

for a in range(0, 32):
    for b in range(0, 32):
        c = a * a + b * b
        if c < 1000:
            check_list[c] = [a, b]

for i in range(100, 999):

    if check_list[i] is not None and \
            check_list[i + 1] is not None and \
            check_list[i + 2] is not None:
        a = check_list[i][0]
        b = check_list[i][1]

        print('%s^2 + %s^2' % (a, b))

a = [1, 2]
b = [3, 4]

print(a + b)
