var total = 0;

var sum = 0;

function gradeConv() {

  var grade = parseInt(document.getElementById(“gradeValue”).value);

  if (grade >=90 && grade <= 100) {
    document.("A");
  } else if (grade >= 80 && grade <= 90) {
    alert("B");
  } else if (grade >= 70 && grade <= 80) {
    alert("C");
  } else if (grade >= 60 && grade <= 70) {
    alert("D");
  } else if (grade < 60) {
    alert("F");
  }
};

document.getElementById("grdButton");
document.getElementById("gradeValue");
addEventListener("click", gradeConv());
