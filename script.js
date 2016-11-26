console.log("it works");

// userInput array
var userInput = [];

//addItem
var addItem = function( name1, name2, idNum1, jobTitle1, annualSal1 ){
console.log( 'this is in addItem1:', name1, name2, idNum1, jobTitle1, annualSal1);
// create newitem object
  var newItem = {
  name1:      name1,
  name2:      name2,
  idNum1:     idNum1,
  jobTitle1:  jobTitle1,
  annualSal1: annualSal1
};
   // end newItem object
   // push newItem into the userInput array
  userInput.push(newItem);
   // end userInput push
};
//end var addItem

console.log("This is in userInput: ", userInput);
//check to see if push worked

// start clickFunction(acquire user input)
 var clickFunction = function() {
  var firstName = document.getElementById("firstNameIn").value;
                  //console.log(document.getElementById("firstNameIn").value);
  var lastName =  document.getElementById("lastNameIn").value;
                  //console.log(document.getElementById("lastNameIn").value);
  var idNum =     document.getElementById("idNumIn").value;
                  //console.log(document.getElementById("idNumIn").value);
  var jobTitle =  document.getElementById("jobTitleIn").value;
                  //console.log(document.getElementById("jobTitleIn").value);
  var annualSal = (document.getElementById("annualSalIn").value);
                  //console.log(document.getElementById("annualSalIn").value);
  var monthlySal = annualSal/12;  //calculate monthly salary
  addItem( firstName, lastName, idNum, jobTitle, annualSal); //send user input to  addItem
  console.log("This is the monthlySal:", monthlySal);
  // for (var i = 0; i < userInput.length; i++) {
  //   console.log(clickFunction(userInput[i])); {
  //     return clickFunction[i];
  //   }
  // }//aaargggghhhh infinite loop!!!!
};
// end clickFunction
