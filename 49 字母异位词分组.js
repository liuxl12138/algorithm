/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for(const str of strs){
        const charArray =  Array.from(str);
        charArray.sort();
        const key = charArray.toString();
        const list = map.get(key)?map.get(key):new Array();
        list.push(str)
        map.set(key,list);
    }
    return Array.from(map.values());
};