console.log("it works");

// userInput array
var userInput = [];
var totalSalCost = 0;
// console.log("This is in userInput: ", userInput);
console.log("User userInput log1: ", userInput);

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
     var annualSal = (document.getElementById("annualSal").value);
                     console.log("Annual Salary:", annualSal);
     var monthlySal = annualSal/12;  //calculate monthly salary
                      console.log("Monthly Salary:", monthlySal);
     var newItem = [firstName, lastName, idNum, jobTitle, annualSal, monthlySal];
      userInput.push(newItem); // push  into the userInput array
      console.log("This is in userInput log2: ", userInput);//check to see if push worked
        document.getElementById('fname').innerHTML+=(firstName);
        document.getElementById('lname').innerHTML+=(lastName);
        document.getElementById('idNum1').innerHTML+=(idNum);
        document.getElementById('jobTitle1').innerHTML+=(jobTitle);
        document.getElementById('annualSal1').innerHTML+=(annualSal);
        document.getElementById('monthlySal').innerHTML+=(monthlySal);
        document.getElementById('totalMonthlySal').innerHTML+=(monthlySalCalc());
};
// end clickFunctionfunction

//clear Form
var clearForm = function() {
  document.getElementById('fname').innerHTML+="";
  document.getElementById('lname').innerHTML+="";
  document.getElementById('idNum').innerHTML+="";
  document.getElementById('jobTitle').innerHTML+="";
  document.getElementById('annualSal').innerHTML+="";
  // return clearForm;
};

function clearForm() {
  document.getElementById('fname').innerHTML+="";
  document.getElementById('lname').innerHTML+="";
  document.getElementById('idNum').innerHTML+="";
  document.getElementById('jobTitle').innerHTML+="";
  document.getElementById('annualSal').innerHTML+="";
  // return clearForm();
}

//begin totalMonthlySalCalc2
function monthlySalCalc() {
    var startSal = 0;
    for   (var i = 0; i < userInput.length; i++) {
    startSal += userInput[i][5];
    console.log("This is the total monthly cost of salary: ", startSal);
    }
    return startSal;
  }
  //end totalMonthlySalCalc2

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
