// Take Input from html button 


const form = document.querySelector("#t");
const student = document.querySelector("#name");
const email = document.querySelector("#mail");

function myGrade(){
  const grade = document.querySelector('input[name="level"]:checked').value;
  console.log(grade)
  return grade;
}
 


let info = [
]
let ctr = 0;

form.addEventListener("submit", function(e){
   const grade = myGrade();

   e.preventDefault();
   console.log("whoah");
  //  console.log(student.value);
  // console.log(grade)
  //  console.log(student.value); 

  var cur = {Name:student.value, Email:email.value, Level:grade};
   info.push(cur);
  //  Level:grade.value
  //  for (var i = 0; i < info.length; i++) {
  //   console.log(info[i]);
  // }
  let table = document.querySelector("table");
  let data = Object.keys(info[0]);
  if (ctr == 0){
    generateTableHead(table, data); 

  } 
    generateTable(table, info[ctr]);
    ctr ++; 

}); 
 
// Append the Input to an Array and from HTML table 

// Edit the input for the original Array 
  
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
      let row = table.insertRow();
      console.log(data)
      for (let key in data) {
        let cell = row.insertCell();
        let text = document.createTextNode(data[key]);
        cell.appendChild(text);
      }

  }

// // Initialize an agent at application startup.
//  fpPromise = FingerprintJS.load({
//   apiKey: "jUCWL5Hm1952761T1Cgn"
// })

// // Get the visitor identifier when you need it.
// fpPromise
//   .then(fp => fp.get())
//   .then(result => console.log(result.visitorId))
  
// const fp = await fpPromise
// const result = await fp.get()
// console.log(result.requestId)
  
 

