function handleGroup(dataList, type) {
  let list = [];
  let map = new Map();
  if (dataList.length > 0) {
    for (let item of dataList) {
      if (map.has(item[type])) {
        map.get(item[type]).push(item);
      } else {
        map.set(item[type], [item]);
      }
    }
    for (const [key, value] of map) {
      let obj = {};
      obj[type] = key;
      obj["list"] = value;
      list.push(obj);
    }
  }
  console.log(list);
  return list;
}

handleGroup(
  [
    { createTime: "2021-01-01", url: "https://www.baidu1.com", name: "1" },
    { createTime: "2021-01-01", url: "https://www.baidu2.com", name: "2" },
    { createTime: "2021-01-02", url: "https://www.baidu3.com", name: "3" },
  ],
  "name"
);
