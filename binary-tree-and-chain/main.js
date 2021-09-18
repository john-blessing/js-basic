/**
 * @program: algorithm
 * @description:
 * @author: Jinjf
 * @date: 2021-09-07 09:20
 **/
const arr = [1, 2, 3, 4, 5];

// 链表节点
function Node(val) {
    return {
        val,
        next: null
    }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 数组转链表
function create_chain(arr, start) {
    if (start === arr.length) {
        return null
    }
    let node = Node(arr[start])
    let result = create_chain(arr, start + 1)
    node.next = result
    return node
}

// 创建二叉树
function arrToTree(arr, start, end) {
    if (start > end) {
        return null
    }
    let mid = Math.floor((start + end) / 2)
    let node = new TreeNode(arr[mid])
    node.left = arrToTree(arr, start, mid - 1)
    node.right = arrToTree(arr, mid + 1, end)
    return node
}

// 后序遍历
function traverse(tree) {
    if (tree == null) {
        return null
    }
    traverse(tree.left)
    traverse(tree.right)
    console.log(tree.val)
}

const test_arr = [1,2,3,4,6,8,20]
const binaryTree = arrToTree(test_arr, 0, test_arr.length - 1)

//
const binaryGetSum = function () {
    let sum = 0
    const run = function (tree, arr) {
        if (tree === null) {
            return
        }
        if (arr[0] < tree.val && arr[1] > tree.val) {
            sum += tree.val
        }
        run(tree.left, arr)
        run(tree.right, arr)
    }
    run(binaryTree, [2, 6])
    return sum
}

console.log(binaryGetSum())