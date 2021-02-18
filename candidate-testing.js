const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = [
  "Who was the first American woman in space? \n",
  "True or false: 5000 meters = 5 kilometers \n",
  "(5 + 3)/2 * 10 = ? \n",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? \n",
  "What is the minimum crew size for the ISS? \n"
]
let correctAnswers = [
  "sally ride",
  "true",
  "40",
  "trajectory",
  "3"
];
let candidateAnswers= [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?\n ");

}

function askQuestion() {
  for(let i = 0; i < questions.length; i++){
    question = questions[i];
    candidateAnswer = input.question(question);
    candidateAnswer = candidateAnswer.toLowerCase();
    candidateAnswers.push(candidateAnswer);
  }



}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.clear();
  console.log("Candidate Name: " + candidateName + "\n");

  let grade=0;
  let rightAnswers=0;

  for(let i = 0; i < candidateAnswers.length; i++){
    console.log(questions[i]);
    console.log("Your Answer: " + candidateAnswers[i]);
    console.log("Correct Answer: " + correctAnswers[i] + "\n");


    if(candidateAnswers[i] === correctAnswers[i]){
     
      rightAnswers++;
    }

  }

    grade = rightAnswers/correctAnswers.length * 100;

    console.log(">>> Overall Grade: " + grade + "% " + "(" + rightAnswers + " of " +
    correctAnswers.length + " responses correct) <<<<");

    if(grade >= 80){
      console.log(">>> Status: PASSED <<<");
    } else {
      console.log(">>> Status: FAILED <<<");
    }



  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};