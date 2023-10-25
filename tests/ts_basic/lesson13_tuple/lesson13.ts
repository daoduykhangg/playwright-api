//Tuple: dataType/size/order
//optional : add? and latest item
// readonly: can't push to array

let pro: readonly [string, number] = ['Khang', 100];
// pro.push("dao");

console.log(pro);

let pro3: [boolean, string,number?];

pro3 = [true,'abc'];