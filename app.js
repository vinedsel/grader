var total = 0;
var sum = 0;

function gradeConv() {

  var grade1 = parseInt(document.getElementById("grade1").value);
  document.getElementById('letter1').innerHTML = returnGrade(grade1);

  var grade2 = parseInt(document.getElementById("grade2").value);
  document.getElementById('letter2').innerHTML = returnGrade(grade2);

  var grade3 = parseInt(document.getElementById("grade3").value);
  document.getElementById('letter3').innerHTML = returnGrade(grade3);

};

function returnGrade(input) {
  if (typeof input == "number") {
    if (input >=90 && input <= 100) {
      sum += input;
      total++;
      return "A";
    } else if (input >= 80 && input <= 90) {
      sum += input;
      total++;
      return "B";
    } else if (input >= 70 && input <= 80) {
      sum += input;
      total++;
      return "C";
    } else if (input >= 60 && input <= 70) {
      sum += input;
      total++;
      return "D";
    } else if (input < 60) {
      sum += input;
      total++;
      return "F";
    }
  }

};

function mean() {
  gradeConv();
  let averageGrade = sum / total;
  document.getElementById('mean').innerHTML = "The average grade is " + averageGrade;

};
