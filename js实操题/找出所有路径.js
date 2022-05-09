// const list = [
//   { id: 6 },
//   { id: 2, children: [5] },
//   { id: 13 },
//   { id: 5, children: [10, 11] },
//   { id: 1, children: [2, 3, 4] },
//   { id: 10 },
//   { id: 8, children: [13] },
//   { id: 4, children: [8, 9] },
//   { id: 9 },
//   { id: 3, children: [6, 7] },
//   { id: 11, children: [14] },
//   { id: 14 },
//   { id: 7, children: [12] },
//   { id: 12 },
// ];

// //找到根节点
// function getRoot(list) {
//   let childrenArr = [];
//   let rootList = [];
//   for (let item of list) {
//     map.set(item.id, item);
//     if (item.children) {
//       for (let ele of item.children) {
//         childrenArr.push(ele);
//       }
//     }
//   }
//   for (let i = 0, len = list.length; i < len; i++) {
//     if (childrenArr.indexOf(list[i].id) == -1) {
//       rootList.push(list[i]);
//     }
//   }
//   return rootList;
// }

// function findPath(root, path) {
//   path.push(root.id);
//   if (root.children) {
//     for (let i = 0; i < root.children.length; i++) {
//       findPath(map.get(root.children[i]), path);
//     }
//   } else {
//     res.push(path);
//   }
// }
// let map = new Map();
// let res = [];
// let rootList = getRoot(list);
// console.log(rootList)
// // for(let item of rootList){
// findPath(rootList[0], []);
// // }
// // console.log(res);
