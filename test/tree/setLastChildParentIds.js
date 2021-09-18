/*
 * @Author: your name
 * @Date: 2021-09-07 20:51:29
 * @LastEditTime: 2021-09-08 09:22:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gss-datahub-web/src/pages/EduVideo/create_tree.js
 */
const treeData = require('./tree');
const fs = require('fs');

function set_parent_ids(treeData) {
  let arr = [];
  function run(_treeData) {
    for (var i = 0; i < _treeData.length; i++) {
      if (_treeData[i].children) {
        arr.push(_treeData[i].key)
        run(_treeData[i].children)
        arr.pop()
      } else {
        _treeData[i].parent = JSON.parse(JSON.stringify(arr))
      }
    }
  }
  run(treeData)
  return treeData
}

console.log(set_parent_ids(treeData));

fs.writeFileSync('result.js', 'module.exports =' + JSON.stringify(treeData), (err) => {
  if (err) throw err;
  console.log('完成');
});
