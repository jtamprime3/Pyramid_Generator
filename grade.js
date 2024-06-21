function getGrade(score) {
  if (score == 100){
    return "A++";
  }
  else if (score >= 90 && score <= 99){
    return "A"
  }
  else if (score >= 80 && score <= 89){
    return "B"
  }
  else if (score >= 70 && score <= 79){
    return "C"
  }
  else if (score >= 60 && score <= 69){
    return "D"
  }
  else {
    return "F"
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function hasPassingGrade(score) {
  if (getGrade(score) !== "F") {
    return true;
  }
  return false;
  
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));


function studentMsg(totalScores, studentScore) {
  if ( studentScore > getAverage(totalScores)){
    return "Class average: " + getAverage(totalScores) + ". Your grade: "+ getGrade (studentScore) + ". You passed the course."
  }
  else {
    return "Class average: " + getAverage(totalScores) + ". Your grade: "+ getGrade(studentScore) + ". You failed the course."
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
