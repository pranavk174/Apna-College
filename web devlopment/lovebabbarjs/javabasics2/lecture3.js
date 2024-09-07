let fname = "pranav kumar";

console.log(typeof fname);

let lastName = new String("kumar");
console.log(typeof lastName);

// template literals
let message = `hello every one 
my name is ${fname}
i am from bihar`;

console.log(message);

// Date object
let date = new Date();
console.log(date);

let date2 = new Date("sat jun 22 1998");
console.log(date2);

// array Objects

let arr = [3, 1, 6, "a", 5, 0];
arr.push(10);
console.log(arr);
console.log("the length of the array is " + arr.length);
arr.splice(2, 0, "pranav", "shubham"); // insert in middle of array       2 indicates the index number to be inserted and  0 indicates that no element will be deleted
console.log(arr);
console.log("the length of the array is " + arr.length);

arr.pop(); // remove last element of aray
console.log("after popping last element-> " + arr);
console.log("the length of the array is " + arr.length);

console.log("the found index is -> " + arr.indexOf("a")); // tells the first occurance of any element
console.log("the found last index is -> " + arr.lastIndexOf("a")); // tells the last occurance of any element

// ab reference type k objects k liye operations krenge
let courses = [
  { id: 3, name: "pranav" },
  { id: 1, name: "shubham" },
  { id: 2, name: "aman" },
  { id: 0, name: "naman" },
];

let stt = courses.sort((a, b) => a.id - b.id); // sorting objects by id
for (let i in stt) {
  console.log("xxx " + stt[i].id);
}

let course = courses.find(function (element) {
  //object ko find krne k liye find function use krenge jo paramenter me ek callback function lega
  return element.id == 3;
});
console.log(course);

let data = courses.find((data) => data.id == 2); // arrow function
console.log("the arrow functions define data is " + data);

arr.splice(2, 1);
console.log(arr);
console.log("the length of the array is " + arr.length);

let arr1 = [3, 1, 6, "a", 5, 0];

arr1.forEach((items) => console.log(items));

// to make an array empty
arr1.length = 0;
console.log(arr1);

let arr2 = [3, 1, 6, "a", 5, 0];

let i = arr2.length;
while (i != 0) {
  // loop se v empty kr skte hai
  arr2.pop();
  i--;
}
console.log("the final length after removing elements is-> " + arr2.length);

arr2.splice(0, i);
console.log(
  "after using splice method the size of the array is " + arr2.length
);

let a = [3, "a", 5, 0];
let b = [5, 1, 9, 0];

let c = a.concat(b); //concatination using concat function
console.log(c);

let d = [...a, ...b]; //by using object cloning we can also concat arrays
console.log(d);

let arr4 = [3, 1, 6, "a", 5, 0];
const joined = arr4.join("_");          // iss method se kisi array ko string format me change kr skte hai
console.log(joined);

//slicing of array elements
let s = arr4.slice(1, 4);
console.log("the sliced element is " + s);

let msg = "this is my new javascript course please help to learn ";
const sp = msg.split(" ");            // iss method se kisi string value ko array me convert kr skte hai
console.log(sp);

let nmbr = [3, 6, 1, 4, 0, 8];

function sorting(data) {
  let n = data.length - 1;
  for (j = 0; j < n - 1; j++) {
    for (let i = 0; i < n - 1 - i; i++) {
      if (data[i] < data[i + 1]) {
        let temp = data[i];
        data[i] = data[i + 1];
        data[i + 1] = temp;
      }
    }
  }
  return data;
}
console.log("after sorting the array using for in loop " + sorting(nmbr));
let srt = nmbr.sort(); // sorting in ascending order
console.log(srt);

let rev = srt.reverse(); // sorting in descending order
console.log(rev);

let fltr = nmbr.filter((nmber) => nmber > 3); // filter method
console.log(fltr);

// mapping array elements
let array = [1, 2, 3, 4, 5];
let k = array.map((i) => "student_no " + i);
console.log(k);

//bject mapping
let filtered = arr.filter((i) => i > 3);
let mapped = filtered.map((num) => {
  i: num;
});

console.log(mapped);
