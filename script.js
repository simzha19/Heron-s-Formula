var side1, side2, side3;
var allSides = [side1, side2, side3];
var semiPerimeter;

function heron() {

	
  updateValues();
  
  var answer = calculateSemiPerimeter();
	
  //If the answer is NaN, this is due to the fact that the triangle is not possible.
 
 var secondanswer = heronsFormula(answer);
 
 
 var output = checkIfRealTriangle(secondanswer);
 document.getElementById("answer").innerHTML = output;
}

function calculateSemiPerimeter() {
	var sumOfAllSides = 0;
    for(var x = 0; x < allSides.length; x++){
      sumOfAllSides += allSides[x];
    }
  semiPerimeter = sumOfAllSides / 2;
  //Semiperimeter of triangle is the sum of all three sides divided by two. This is used in Heron's formula.
  parseInt(semiPerimeter);
  return semiPerimeter;
}
function checkIfRealTriangle(answer){

	var output;
  if (isNaN(answer)) {
    output = "Your sides do not make a real triangle. Check your numbers and try again";

  } 
  else {
    output = "The Area of your triangle is " + answer;
  }

  return output;
}

function updateValues(){
	side1 = document.getElementById("side1").value;
  side2 = document.getElementById("side2").value;
  side3 = document.getElementById("side3").value;
  
  side1 = parseInt(side1);
  side2 = parseInt(side2);
  side3 = parseInt(side3);
  allSides = [side1, side2, side3];
}




function heronsFormula(semiPerimeter){
	var a = semiPerimeter - allSides[0];
  var b = semiPerimeter - allSides[1];
  var c = semiPerimeter - allSides[2];
	var result = squareRoot(semiPerimeter * a * b * c);
  return result;
  
}

//Square root function. Used in many equations, so I added a parameter to it so that I can reuse it
function squareRoot(input) {
  var result = Math.sqrt(input);
  return result;
}
