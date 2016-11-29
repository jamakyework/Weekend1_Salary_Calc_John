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
      console.log("This is in userInput: ", userInput);//check to see if push worked
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

//begin clearForm function
function clearForm() {
document.getElementById("empInput").reset();
}
//end clearForm function
