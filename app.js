function grader() {

  let grade;

  if (grade <= 100) {
    alert("A");
  } else if (grade <= 90) {
    alert("B");
  } else if (grade <= 80) {
    alert("C");
  } else if (grade <= 70) {
    alert("D");
  } else if (grade <= 60) {
    alert("F");
  }
};

document.getElementById("grdButton").addEventListener("click", grader() {

});
