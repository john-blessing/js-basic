/*
 * @Author: your name
 * @Date: 2021-08-18 23:36:32
 * @LastEditTime: 2021-09-17 08:13:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/utils.js
 */
function Node(value, next) {
  return {
    value,
    next,
  };
}
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
function array2list(ary, start = 0) {
  if (start === ary.length) {
    return null;
  }
  var node = Node(ary[start], null);
  var rest = array2list(ary, start + 1);
  node.next = rest;
  return node;
}
function binaryTree(arr, left, right) {
  if (left > right) {
    return null
  }
  var mid = Math.floor((left + right) / 2)
  var node = new TreeNode(arr[mid])
  node.left = binaryTree(arr, left, mid - 1)
  node.right = binaryTree(arr, mid + 1, right)
  return node;
}
var arr = [1,2,3,4,5]
console.log(binaryTree(arr, 0, arr.length - 1))