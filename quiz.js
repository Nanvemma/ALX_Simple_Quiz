
function checkAnswer() {

  const correctAnswer = "4";


  const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;


  const feedback = document.getElementById("feedback");


  if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green"; 
  } else if (userAnswer) {
      feedback.textContent = "That's incorrect. Try again!";
      feedback.style.color = "red"; 
  } else {
      feedback.textContent = "Please select an answer before submitting.";
      feedback.style.color = "orange"; 
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
