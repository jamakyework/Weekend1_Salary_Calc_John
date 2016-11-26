console.log("it works");

// userInput array
var userInput = [];
//addItem
var addItem = function( name1, name2, idNum1, jobTitle1, annualSal1 ){
//end addItem
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
console.log("This is in userInput: ", userInput);


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
  var annualSal = (document.getElementById("annualSalIn").value)/12;
                  //console.log(document.getElementById("annualSalIn").value);
  //send user input to  addItem
  addItem( firstName, lastName, idNum, jobTitle, annualSal);
  console.log("This is the annual salary1:", annualSal);
};
// end clickFunction
