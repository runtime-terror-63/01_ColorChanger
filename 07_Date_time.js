//Date
/*

 let myDate = new Date();
 console.log(myDate.toString());
 console.log(myDate.toLocaleString());
 console.log(myDate.toDateString());
 console.log(myDate.toTimeString());
 console.log(myDate.toJSON());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toLocaleTimeString());
 console.log(typeof myDate);

let myCreateDate = new Date(2023, 0, 23, 6, 8);
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());

let mylocalDate = new Date("01-14-2023");
console.log(mylocalDate.toLocaleString())
*/
let myTimeStamp = Date.now();
console.log(myTimeStamp); 
console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getTime())