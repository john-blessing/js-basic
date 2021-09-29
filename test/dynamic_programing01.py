'''
    迭代法求出机器人到达目标位置有多少种走法

    x - x轴方向
    y - y轴方向

    公式:
    F[i][j] = F[i-1][j] + F[i][j-1]


'''


def robot_step(x, y):
    arr = [[1] * x] * y

    arr[0][0] = 1

    for i in range(1, y):
        for j in range(1, x):
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1]

    return arr[y - 1][x - 1]


print(robot_step(3, 3))
