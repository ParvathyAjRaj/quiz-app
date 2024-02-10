import './App.css';
import React,{useState} from "react";

function App() {
  const questions = [
    {
      question: "What is the biggest land animal?",
      options: ["Parrot", "Cheetah", "Elephant", "Giraffe"],
      answer: "Elephant"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Venus", "Mars", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which element is represented by the chemical symbol 'H'?",
      options: ["Hydrogen", "Helium", "Iron", "Gold"],
      answer: "Hydrogen"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount Rushmore"],
      answer: "Mount Everest"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      answer: "Au"
    },
    {
      question: "Who is known as the 'Father of Computers'?",
      options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Charles Babbage"],
      answer: "Charles Babbage"
    },
    {
      question: "Which country is famous for the Great Barrier Reef?",
      options: ["Australia", "Brazil", "Canada", "India"],
      answer: "Australia"
    }
  ];
  
  const [score,setScore] = useState(0);
  const [userAnswer,setUserAnswer] = useState("");
  const [isQuizOver,setIsQuizOver] = useState(false);

  function handleSelect(eachOption,answer){
    if (eachOption === answer){
      let prevScore = score;
      setScore(prevScore + 1);
    }
  }

  function handleSubmit(){
    console.log(score);  
    setIsQuizOver(true);
  }

  return (
    <div>
      {isQuizOver ? <h1>Score : {score}/{questions.length}</h1> : ""}
      {questions.map((eachQn,qnIndex) => {  
          return(
            <div>
              <h1>{eachQn.question}</h1>
              {eachQn.options.map((eachOption,optionIndex) => {
              return(
              <div>
               <input type="radio" name={qnIndex} onClick={() => handleSelect(eachOption,eachQn.answer)} value={userAnswer} key={optionIndex}/>
                <label>{eachOption}</label>
              </div>
              )
              })}
            </div>
          )
      })}
       <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}

export default App;
