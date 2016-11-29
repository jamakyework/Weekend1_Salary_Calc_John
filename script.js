console.log("it works");

// userInput array
var userInput = [];

// start clickFunction(acquire user input)
 var clickFunction = function() {
    var firstName = document.getElementById("firstName").value;
                    console.log("First Name:", firstName);
    var lastName =  document.getElementById("lastName").value;
                    console.log("Last Name:", lastName);
    var idNum =     document.getElementById("idNum").value;
                    console.log("ID Number:", idNum);
    var jobTitle =  document.getElementById("jobTitle").value;
                    console.log("Job Title:", jobTitle);
    var annualSal = document.getElementById("annualSal").value;
                    console.log("Annual Salary:", annualSal);
    var monthlySal = annualSal/12;  //calculate monthly salary
                     console.log("Monthly Salary:", monthlySal);
    var newItem = [firstName, lastName, idNum, jobTitle, annualSal, monthlySal];
      userInput.push(newItem); //push  into the userInput array
      console.log("This is in userInput log2: ", userInput);//check to see if push worked
        // document.getElementById('outputTable').innerHTML+=(firstName);
        // document.getElementById('outputTable').innerHTML+=(lastName);
        // document.getElementById('outputTable').innerHTML+=(idNum);
        // document.getElementById('outputTable').innerHTML+=(jobTitle);
        // document.getElementById('outputTable').innerHTML+=(annualSal);
        // document.getElementById('outputTable').innerHTML+=(monthlySal);
        // document.getElementById('outputTable').innerHTML+=(monthlySalCalc());
        document.getElementById('outputTable').innerHTML+=("<tr><td>" + firstName +
        "</td><td>" + lastName + "</td><td>" + idNum + "</td><td>" + jobTitle +
        "</td><td>" + annualSal + "</td><td>" + monthlySal + "</td><td>" +
        monthlySalCalc() + "</td></tr>");
        alert ('The total monthly salary is: ' + monthlySalCalc());
      };
      // end clickFunctionfunction

//begin totalMonthlySalCalc2
function monthlySalCalc() {
    var totalSalCost = 0;
    for   (var i = 0; i < userInput.length; i++) {
    totalSalCost += userInput[i][5];
    console.log("This is the total monthly cost of salary: ", totalSalCost);
} return totalSalCost;
}
//end totalMonthlySalCalc2

function clearForm() {
document.getElementById("empInput").reset();
}
// //clear Form
// var clearForm = function() {
//   document.getElementById('firstname').innerHTML ="";
//   document.getElementById('lastName').innerHTML ="";
//   document.getElementById('idNum').innerHTML ="";
//   document.getElementById('jobTitle').innerHTML ="";
//   document.getElementById('annualSal').innerHTML ="";
// };
//
// function clearForm() {
//   document.getElementById('firstName').innerHTML ="";
//   document.getElementById('lastName').innerHTML ="";
//   document.getElementById('idNum').innerHTML ="";
//   document.getElementById('jobTitle').innerHTML ="";
//   document.getElementById('annualSal').innerHTML ="";
// }



// //begin totalMonthlySalCalc1
// var monthlySalCalc = function () {
//     var startSal = 0;
//     for   (var i = 0; i < userInput.length; i++) {
//     startSal += userInput[i][5];
//     console.log("This is the monthly salary: ", startSal);
//     }
//     return startSal;
//   };
// //end totalMonthlySalCalc1

//start create table function
// function createTable(){
// var row = table.insertRow(0);
// cell1.innerHTML = "fname";
// cell2.innerHTML = "lname";
// cell1.innerHTML = "idNum";
// cell2.innerHTML = "jobTitle";
// cell1.innerHTML = "annualSal";
// cell2.innerHTML = "monthlySal";
// cell1.innerHTML = "fname";
// cell2.innerHTML = "totalMonthlySal";
//}
//end create table function

// var table = document.getElementById("outputSalary");
// var row = table.insertRow(0);
// var row = table.insertRow(0);
// cell1.innerHTML = "NEW CELL1";
// cell2.innerHTML = "NEW CELL2";

// // start reset form
// function resetForm() {
//   document.getElementById("addEmployee").reset();
//   }
// //end reset form
